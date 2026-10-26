/* ==========================================================
   app.js - reads DATA (data.js) and builds every page.
   <body data-page="..."> in each HTML file chooses the renderer.
   ========================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;

function init(d) {
  renderHeader(d); renderFooter(d);
  document.documentElement.classList.add('js');
  const pages = { home, about, courses, course, events, placements, contact };
  if (pages[page]) pages[page](d);
  reveal();
}

/* ---------- Helpers ---------- */
const head = (t, sub = '') => `<div class="section-head"><h2>${t}</h2>${sub ? `<p>${sub}</p>` : ''}</div>`;
const pageTitle = t => `<section class="page-title"><div class="container"><h1>${t}</h1></div></section>`;
const tile = c => `<a class="ctile" href="course.html?c=${c.id}"><img src="${c.image}" alt="${c.title}" loading="lazy"><h3>${c.title}</h3></a>`;
const byType = (d, t, homeOnly) => d.courses.filter(c => c.type === t && (!homeOnly || c.home));
const kids = (arr, id) => arr.filter(x => x.parent === id);
const photos = list => `<div class="photos">${list.map(p => `<img src="${p.image || p}" alt="${p.caption || 'Photo'}" loading="lazy">`).join('')}</div>`;
const section = (cls, inner) => `<section class="section ${cls}"><div class="container">${inner}</div></section>`;

/* Demo forms: validates, shows a message. Nothing is sent (no backend). */
function demoForm(form, rules, okText) {
  const msg = $('.msg', form);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const err = rules.map(([n, test, text]) => test(form[n].value.trim()) ? '' : text).find(Boolean) || '';
    msg.style.color = err ? '#dc2626' : '#166534';
    msg.textContent = err || okText;
    if (!err) form.reset();
  });
}
const R = {
  name: ['name', v => v.length >= 2, 'Enter your name.'],
  phone: ['phone', v => /^[6-9]\d{9}$/.test(v), 'Enter a valid 10-digit mobile number.'],
  course: ['course', v => !!v, 'Select a course.']
};

/* ---------- Header: contact strip, logo + animated name, navbar with dropdowns ---------- */
function renderHeader(d) {
  const s = d.site, cur = location.pathname.split('/').pop() || 'index.html';
  const cl = c => `<a href="course.html?c=${c.id}">${c.title}</a>`;
  const sl = c => `<a href="service.html?s=${c.id}">${c.title}</a>`;
  const longs = d.courses.filter(c => c.type === 'long');
  const menus = {
    long: `<div class="sub narrow"><div>${longs.filter(c => !c.parent).map(c =>
      cl(c) + (kids(longs, c.id).length ? `<div class="nested">${kids(longs, c.id).map(cl).join('')}</div>` : '')).join('')}</div></div>`,
    short: `<div class="sub wide">${[...new Set(byType(d, 'short').map(c => c.group))].map(g =>
      `<div><h5>${g}</h5>${byType(d, 'short').filter(c => c.group === g).map(cl).join('')}</div>`).join('')}</div>`
  };
  const links = d.nav.map(n => {
    const act = n.href === cur || (page === 'course' && n.menu === 'long') ? 'active' : '';
    return n.menu
      ? `<li class="has-sub ${n.menu === 'short' ? 'wide' : ''}"><a href="${n.href}" class="${act}"><span class="ico">${n.icon}</span>${n.label}</a><button class="sub-toggle" aria-label="Show ${n.label}">&#9662;</button>${menus[n.menu]}</li>`
      : `<li><a href="${n.href}" class="${act}"><span class="ico">${n.icon}</span>${n.label}</a></li>`;
  }).join('');
  $('#site-header').innerHTML = `
    <nav class="navbar"><div class="container nav"><button class="toggle" aria-label="Open menu">&#9776; Menu</button><ul class="menu">${links}</ul></div></nav>
    <a class="callnow" href="tel:${s.phone.replace(/\s/g, '')}">Call Now</a>`;
  $('.toggle').addEventListener('click', () => $('.menu').classList.toggle('open'));
  $$('.sub-toggle').forEach(b => b.addEventListener('click', () => b.parentElement.classList.toggle('open')));
}

/* ---------- Footer: branches, useful links, contact ---------- */
function renderFooter(d) {
  const s = d.site;
  $('#site-footer').innerHTML = `<div class="container"><div class="foot">
    <div><h4>${s.name}</h4><p>${s.tagline}</p><div class="social">${s.social.map(x => `<a href="${x.url}" target="_blank" rel="noopener">${x.name}</a>`).join('')}</div></div>
    <div><h4>Useful links</h4><ul>${d.nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul></div>
    <div><h4>Our branches</h4>${s.branches.map(b => `<p class="branch"><b>${b.name}</b><br>${b.address}</p>`).join('')}<p>${s.phone}<br>${s.email}</p></div></div>
    <p class="copy">Copyright reserved &copy; ${s.name} Pvt. Ltd.</p></div>`;
}

/* ---------- Pages ---------- */
function home(d) {
  const h = d.hero, opts = d.courses.map(c => `<option>${c.title}</option>`).join('');
  $('#app').innerHTML = `
    <section class="hero"><div class="container">
      <div><span class="badge">${h.badge}</span><p class="rate">${h.rating}</p><h1>${h.title}</h1>
        <p>${h.text}</p><ul>${h.bullets.map(b => `<li>${b}</li>`).join('')}</ul></div>
      <form class="demo" id="demo" novalidate><h3>Free Demo Lecture</h3><small>(Registration for online and classroom demos)</small>
        <input name="name" placeholder="Name *" aria-label="Name"><input name="phone" type="tel" placeholder="Phone *" aria-label="Phone">
        <select name="course" aria-label="Course"><option value="">Course *</option>${opts}</select>
        <button class="btn" type="submit">Book my demo</button><span class="msg" role="status"></span></form></div></section>
    
    ${section('alt', `<div class="iso"><img src="${d.iso.image}" alt="ISO certificate"><div><h2>${d.iso.title}</h2><ul class="ticks">${d.iso.bullets.map(b => `<li>${b}</li>`).join('')}</ul><a class="btn" href="contact.html">Enroll now</a></div></div>`)}
    ${section('', head('Long term Courses') + `<div class="grid">${byType(d, 'long', true).map(tile).join('')}</div>`)}
    ${section('alt', head('Short term Courses') + `<div class="grid">${byType(d, 'short', true).map(tile).join('')}</div>`)}
    ${section('', head('Why Are We Best in Training Industry?') + `<div class="grid">${d.whyus.map(w => `<article class="why"><img src="${w.image}" alt="${w.title}" loading="lazy"><div class="info"><h3>${w.title}</h3><p>${w.desc}</p></div></article>`).join('')}</div>`)}
    ${section('alt', head('Course Eligibility', 'Pick who you are to see how we can help.') + `<div class="etabs"><div class="elist">${d.eligibility.map((e, i) => `<button class="eitem ${i ? '' : 'on'}" data-i="${i}">${e.title}</button>`).join('')}</div><div class="epanel" id="epanel"></div></div>`)}
    ${section('', head("FAQ's") + d.faq.map(f => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join(''))}`;
  demoForm($('#demo'), [R.name, R.phone, R.course], 'Thanks! We will call you to confirm your demo.');
  const showE = i => { const e = d.eligibility[i]; $('#epanel').innerHTML = `<img src="${e.image}" alt="${e.title}"><div><h3>${e.title}</h3><p>${e.desc}</p></div>`; };
  showE(0);
  $$('.eitem').forEach(b => b.addEventListener('click', () => { $$('.eitem').forEach(x => x.classList.remove('on')); b.classList.add('on'); showE(b.dataset.i); }));
}

const achievements = d => `<div class="ach">${photos(d.achievements.images)}<ul class="ticks">${d.achievements.list.map(a => `<li>${a}</li>`).join('')}</ul></div>`;

function about(d) {
  const a = d.about;
  $('#app').innerHTML = `
    <section class="about-hero" style="background-image:url('${a.bg}')"><div class="container">
      <h1 class="drop">${a.title}</h1><p class="drop d2">${a.intro}</p></div></section>
    ${section('', `<div class="why-split"><img data-anim="left" src="${a.whyImage}" alt="Why choose us">
      <div><h2 data-anim="top">Why Choose Us?</h2><div data-anim="right">${a.why.map(p => `<p>${p}</p>`).join('')}</div></div></div>`)}
    ${section('alt', `<div class="pillars"><img data-anim="left" src="${a.pillarImage}" alt="Training, consulting and placements">
      <div class="plist">${a.pillars.map(p => `<article data-anim="right"><h3>${p.title} :</h3><p>${p.desc}</p></article>`).join('')}</div></div>`)}`;
}

function courses(d) {
  const groups = (t, title) => `<div class="group" data-g id="${t}"><h3 class="group-title">${title}</h3><div class="grid">${byType(d, t).map(tile).join('')}</div></div><br>`;
  $('#app').innerHTML = pageTitle('Courses') + section('', `<input class="search" type="search" placeholder="Search a course, e.g. SEO" aria-label="Search courses">
    ${groups('long', 'Long term courses')}${groups('short', 'Short term courses')}<p id="none" class="hidden">No course found.</p>`);
  $('.search').addEventListener('input', e => {                       // live search
    const q = e.target.value.toLowerCase().trim();
    $$('.ctile').forEach(t => t.classList.toggle('hidden', !t.textContent.toLowerCase().includes(q)));
    $$('[data-g]').forEach(g => g.classList.toggle('hidden', !$$('.ctile:not(.hidden)', g).length));
    $('#none').classList.toggle('hidden', !!$$('.ctile:not(.hidden)').length);
  });
}

/* Course + service detail share one layout. URL: course.html?c=mern  /  service.html?s=seo-service */
function detail(item, label, d) {
  if (!item) { $('#app').innerHTML = '<div class="container section"><h2>Not found</h2><p><a href="index.html">Back to home</a></p></div>'; return; }
  document.title = item.title + ' | ' + d.site.name;
  $('#app').innerHTML = pageTitle(item.title) + section('', `<div class="detail"><img src="${item.image}" alt="${item.title}">
    <div><h2>About this ${label}</h2><p>${item.desc}</p><div class="facts"><span>${item.type ? (item.type === 'long' ? 'Long term' : 'Short term') : 'Service'}</span><span>Placement support</span></div>
    <h3>${label === 'course' ? 'What you will learn' : 'What we do'}</h3><ul class="ticks">${(item.topics || item.points).map(t => `<li>${t}</li>`).join('')}</ul>
    <a class="btn" href="contact.html">${label === 'course' ? 'Enquire now' : 'Get a quote'}</a></div></div>`);
}
const course = d => detail(d.courses.find(c => c.id === new URLSearchParams(location.search).get('c')), 'course', d);

function placements(d) {
  // 3-column cards; columns slide in from left / bottom / right
  $('#app').innerHTML = `<section class="page-title center-title"><div class="container"><h1>Our Students Placements</h1></div></section>` +
    section('', `<div class="pgrid">${d.placed.map((p, i) => `<article class="pcard" data-anim="${['left', 'bottom', 'right'][i % 3]}">
     <div><h3>${p.name}</h3><p>${p.name} (${p.college}) got Placed As a ${p.role} At ${p.company}.</p></div></article>`).join('')}</div>`);
}

function events(d) {
  $('#app').innerHTML = `<section class="page-title center-title"><div class="container"><h1>GLIMPSE OF SOME OF OUR EVENTS</h1></div></section>` +
    section('', d.events.map(ev => `<div class="event"><h2 data-anim="top">${ev.title}</h2><div class="gallery">${ev.photos.map(p => `<div class="shot" data-anim="bottom"><img src="${p}" alt="${ev.title}" loading="lazy"></div>`).join('')}</div></div>`).join('')) +
    '<div class="lb"><img alt=""></div>';
  $('#app').addEventListener('click', e => { const img = e.target.closest('.shot img'); if (!img) return; $('.lb img').src = img.src; $('.lb').classList.add('on'); });
  $('.lb').addEventListener('click', () => $('.lb').classList.remove('on'));
}

function contact(d) {
  const s = d.site;
  $('#app').innerHTML = pageTitle('Contact us') + section('', `<div class="split">
    <div><h2>Visit or call us</h2><br>${s.branches.map(b => `<p class="branch"><b>${b.name}</b><br>${b.address}</p>`).join('')}<p>${s.phone}</p><p>${s.email}</p><p>${s.hours}</p></div>
    <form class="form" id="enquiry" novalidate>
      <div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name"><span class="err"></span></div>
      <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email"><span class="err"></span></div>
      <div class="field"><label for="phone">Phone (10 digits)</label><input id="phone" name="phone" type="tel" autocomplete="tel"><span class="err"></span></div>
      <div class="field"><label for="message">Message</label><textarea id="message" name="message" rows="4"></textarea><span class="err"></span></div>
      <button class="btn" type="submit">Send enquiry</button><div class="ok" id="ok">Thanks! We have received your enquiry and will call you soon.</div></form></div>`);
  const rules = {
    name: v => v.trim().length >= 2 ? '' : 'Enter your name (at least 2 letters).',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address.',
    phone: v => /^[6-9]\d{9}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit mobile number.',
    message: v => v.trim().length >= 10 ? '' : 'Write at least 10 characters.'
  };
  const form = $('#enquiry');
  const check = f => { const m = rules[f.name](f.value); f.parentElement.classList.toggle('bad', !!m); f.nextElementSibling.textContent = m; return !m; };
  $$('input,textarea', form).forEach(f => f.addEventListener('blur', () => check(f)));
  form.addEventListener('submit', e => { e.preventDefault(); if ($$('input,textarea', form).map(check).every(Boolean)) { form.reset(); $('#ok').style.display = 'block'; } });
}

/* Scroll animations: elements with data-anim="left|right|top|bottom" slide in when they enter the screen */
function reveal() {
  const els = $$('[data-anim]');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
  els.forEach(e => io.observe(e));
}

/* Start: data.js is loaded before this file, so no server is needed. Must stay at the very end. */
init(DATA);
