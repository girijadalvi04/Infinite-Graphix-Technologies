/* ==========================================================
   data.js - ALL text and image paths for the website.
   Edit values here; app.js reads DATA and builds the pages.
   Keep the quotes and commas exactly as they are.
   ========================================================== */
const DATA = {
  "site": {
    "name": "Infinite Graphix Technologies",
    "tagline": "Training Institute in Pune",
    "phone": "+91 88559 55159",
    "email": "infinitegraphixads@gmail.com",
    "address": "JM Road Branch, Shivajinagar, Pune 411005",
    "hours": "Mon-Sat, 9:00 AM - 7:00 PM",
    "social": [
      {
        "name": "Facebook",
        "url": "https://www.facebook.com/infinitegraphixads"
      },
      {
        "name": "Instagram",
        "url": "https://www.instagram.com/infinitegraphixtechnologies/"
      },
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/company/infinite-graphix-technologies-pvt-ltd/"
      },
      {
        "name": "YouTube",
        "url": "https://youtube.com/@infinitegraphixtechnologie462"
      }
    ],
    "logo": "logo.svg",
    "branches": [
      {
        "name": "JM Road Branch",
        "address": "Office Number 102, 1st Floor, Varun Capital Bharat Petroleum Lane, Near Sudama Garden Restaurant, Shivajinagar, Pune, 411005."
      },
      {
        "name": "PCMC Branch",
        "address": "Mayur Trade Center Phase 1, Second Floor, P 202, Old Mumbai Pune Highway, Chinchwad, Pune, Maharashtra 411019."
      }
    ]
  },
  "nav": [
    {
      "label": "Home",
      "href": "index.html",
      "icon": "🏠"
    },
    {
      "label": "About Us",
      "href": "about.html",
      "icon": "👥"
    },
    {
      "label": "Long Term Courses",
      "href": "courses.html#long",
      "menu": "long",
      "icon": "🎓"
    },
    {
      "label": "Short Term Courses",
      "href": "courses.html#short",
      "menu": "short",
      "icon": "📚"
    },
    {
      "label": "Events",
      "href": "events.html",
      "icon": "🎉"
    },
    {
      "label": "Our Placements",
      "href": "placements.html",
      "icon": "💼"
    },
    {
      "label": "Contact Us",
      "href": "contact.html",
      "icon": "📞"
    }
  ],
  "hero": {
    "badge": "#1 Ranked Training Institute",
    "rating": "Rating 4.8/5 based on 2000+ reviews by all portals",
    "title": "Infinite Graphix Technologies",
    "text": "Transform dreams into skills: join us at the training institute where excellence begins.",
    "bullets": [
      "Most Trusted & Recommended Institute In Training",
      "A Unique Facility – Life Time Student Membership",
      "Industrial Experienced Faculties",
      "Weekly New Batches For New Joiner",
      "Industrial Training With Live Projects",
      "Placements & Campus Drives",
      "Both Theoretical & Practical Training"
    ]
  },
  "stats": [
    {
      "value": "13",
      "label": "Courses"
    },
    {
      "value": "ISO & MSME",
      "label": "Certified institute"
    },
    {
      "value": "100%",
      "label": "Employment aid"
    },
    {
      "value": "82+",
      "label": "Countries certificate is valid in"
    }
  ],
  "about": {
    "title": "Infinite Graphix Technologies",
    "intro": "A training institute in Pune helping students gain practical skills and choose the right career path.",
    "bg": "images/about/office-background.svg",
    "why": [
      "Infinite Graphix Technologies is a leading Training Institute in Pune that helps students gain practical knowledge of all courses. We provide best guidance for all the students to choose the right path for their career and help them grow as per market needs. We are ISO & MSME Certified Training Institute in Pune. Our Certification Valid For Private And Government Jobs Also In More Than 82 Countries.",
      "We offer Courses with 100% employment aid and complete Placement Support to all of our Students. The company’s ongoing projects will directly benefit the student thus students learn more useful information. Our goal is to keep the Course prices as inexpensive as possible. For numerous businesses, we also organize internal campus drives. We Work with educators who are committed to successful teaching and learning and possess the necessary qualifications and competence."
    ],
    "pillars": [
      {
        "title": "Training",
        "desc": "We are established with the vision of educating people with the Right Technical and Practical Skills so that they can reduce the Gap between the Skills provided by the Education System and the Skills required by the Job Industry."
      },
      {
        "title": "Consulting",
        "desc": "Many confuse two things. Either hire an In-house team or Outsource it to a Consultancy. We are the solution to it. We are consultants and will work with your in-house team to Deliver Results."
      },
      {
        "title": "Placements",
        "desc": "Some Placement agents still work on the same Job Portals to recruit potential candidates. We go beyond the Portals. We have a database of candidates, from Freshers to Executives."
      }
    ],
    "whyImage": "images/about/why-choose-us.svg",
    "pillarImage": "images/about/training-consulting-placements.svg"
  },
  "courses": [
    {
      "id": "digital-marketing",
      "title": "Advance Digital Marketing Course",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/digital-marketing.svg",
      "desc": "Advance Digital Marketing Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "SEO and content",
        "Social media marketing",
        "Google Ads",
        "Analytics and live campaign"
      ]
    },
    {
      "id": "graphics",
      "title": "Advance Graphics Designing Course",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/graphics.svg",
      "desc": "Advance Graphics Designing Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Branding and portfolio"
      ]
    },
    {
      "id": "motion",
      "title": "Advance Motion Graphic Design Program",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/motion.svg",
      "desc": "Advance Motion Graphic Design Program: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "After Effects",
        "Animation principles",
        "Titles and logo animation",
        "Showreel project"
      ]
    },
    {
      "id": "video-adv",
      "title": "Advance Video Editing Course",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/video-adv.svg",
      "desc": "Advance Video Editing Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Premiere Pro",
        "After Effects basics",
        "Colour and sound",
        "Final project"
      ]
    },
    {
      "id": "uiux",
      "title": "Advance UI/UX Designing Course In Pune",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/uiux.svg",
      "desc": "Advance UI/UX Designing Course In Pune: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "User research",
        "Wireframes",
        "Figma prototypes",
        "Portfolio case studies"
      ]
    },
    {
      "id": "web-program",
      "title": "Website Designing Program",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/web-program.svg",
      "desc": "Website Designing Program: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "HTML and CSS",
        "JavaScript basics",
        "Responsive design",
        "Live projects"
      ]
    },
    {
      "id": "fullstack",
      "title": "Full Stack Developer Course",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/fullstack.svg",
      "desc": "Full Stack Developer Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Front end",
        "Back end",
        "Databases",
        "Capstone project"
      ]
    },
    {
      "id": "java-fs",
      "title": "Java Full Stack Developer Course",
      "type": "long",
      "group": "",
      "parent": "fullstack",
      "home": false,
      "image": "images/courses/long/java-fs.svg",
      "desc": "Java Full Stack Developer Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Core Java",
        "Spring Boot",
        "React or Angular",
        "MySQL"
      ]
    },
    {
      "id": "mean",
      "title": "Mean Stack Developer Course",
      "type": "long",
      "group": "",
      "parent": "fullstack",
      "home": true,
      "image": "images/courses/long/mean.svg",
      "desc": "Mean Stack Developer Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "MongoDB",
        "Express",
        "Angular",
        "Node.js"
      ]
    },
    {
      "id": "mern",
      "title": "Mern Stack Developer Course",
      "type": "long",
      "group": "",
      "parent": "fullstack",
      "home": true,
      "image": "images/courses/long/mern.svg",
      "desc": "Mern Stack Developer Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js"
      ]
    },
    {
      "id": "python-fs",
      "title": "Python Full Stack Developer Course",
      "type": "long",
      "group": "",
      "parent": "fullstack",
      "home": true,
      "image": "images/courses/long/python-fs.svg",
      "desc": "Python Full Stack Developer Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Python and OOP",
        "Django",
        "MySQL and APIs",
        "Front end and Git"
      ]
    },
    {
      "id": "data-science",
      "title": "Data Science – Machine Learning & AI",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/data-science.svg",
      "desc": "Data Science – Machine Learning & AI: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Python and statistics",
        "Machine learning",
        "Deep learning basics",
        "Projects"
      ]
    },
    {
      "id": "data-analytics",
      "title": "Data Analytics Course",
      "type": "long",
      "group": "",
      "parent": "",
      "home": true,
      "image": "images/courses/long/data-analytics.svg",
      "desc": "Data Analytics Course: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Excel",
        "SQL",
        "Python",
        "Dashboards"
      ]
    },
    {
      "id": "photoshop",
      "title": "Certificate Course In Adobe Photoshop",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/photoshop.svg",
      "desc": "Certificate Course In Adobe Photoshop: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Tools and layers",
        "Photo retouching",
        "Social media creatives"
      ]
    },
    {
      "id": "illustrator",
      "title": "Certificate Course In Adobe Illustrator",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/illustrator.svg",
      "desc": "Certificate Course In Adobe Illustrator: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Vector basics",
        "Logo design",
        "Print-ready files"
      ]
    },
    {
      "id": "indesign",
      "title": "Certificate Course In Adobe Indesign",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/indesign.svg",
      "desc": "Certificate Course In Adobe Indesign: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Page layout",
        "Brochures",
        "Magazines and export"
      ]
    },
    {
      "id": "coreldraw",
      "title": "Certificate Course In CorelDraw",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/coreldraw.svg",
      "desc": "Certificate Course In CorelDraw: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Vector tools",
        "Logo and layout",
        "Print output"
      ]
    },
    {
      "id": "uiux-cert",
      "title": "Certificate Course In UI/UX Designing",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/uiux-cert.svg",
      "desc": "Certificate Course In UI/UX Designing: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "UX basics",
        "Figma",
        "Prototype project"
      ]
    },
    {
      "id": "lightroom",
      "title": "Certificate Course In Lightroom",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/lightroom.svg",
      "desc": "Certificate Course In Lightroom: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Photo editing",
        "Presets",
        "Exporting"
      ]
    },
    {
      "id": "canva",
      "title": "Canva",
      "type": "short",
      "group": "Graphic Design Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/canva.svg",
      "desc": "Canva: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Templates",
        "Social media designs",
        "Branding kits"
      ]
    },
    {
      "id": "filmora",
      "title": "Certificate Course In Filmora",
      "type": "short",
      "group": "Video Editing Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/filmora.svg",
      "desc": "Certificate Course In Filmora: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Timeline editing",
        "Effects",
        "Export"
      ]
    },
    {
      "id": "premiere",
      "title": "Certificate Course In Premiere Pro",
      "type": "short",
      "group": "Video Editing Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/premiere.svg",
      "desc": "Certificate Course In Premiere Pro: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Editing workflow",
        "Colour and audio",
        "Export"
      ]
    },
    {
      "id": "aftereffects",
      "title": "Certificate Course In Adobe After Effect",
      "type": "short",
      "group": "Video Editing Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/aftereffects.svg",
      "desc": "Certificate Course In Adobe After Effect: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Keyframes",
        "Motion graphics",
        "Visual effects"
      ]
    },
    {
      "id": "wordpress",
      "title": "Website Designing Using WordPress",
      "type": "short",
      "group": "Digital Marketing Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/wordpress.svg",
      "desc": "Website Designing Using WordPress: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Setup and hosting",
        "Themes and plugins",
        "SEO basics"
      ]
    },
    {
      "id": "seo",
      "title": "Search Engine Optimization Course Online",
      "type": "short",
      "group": "Digital Marketing Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/seo.svg",
      "desc": "Search Engine Optimization Course Online: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Keyword research",
        "On-page SEO",
        "Link building"
      ]
    },
    {
      "id": "smm",
      "title": "Social Media Marketing Course Online",
      "type": "short",
      "group": "Digital Marketing Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/smm.svg",
      "desc": "Social Media Marketing Course Online: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Strategy",
        "Content calendar",
        "Paid ads"
      ]
    },
    {
      "id": "adwords",
      "title": "Google Adwords",
      "type": "short",
      "group": "Digital Marketing Courses",
      "parent": "",
      "home": true,
      "image": "images/courses/short/adwords.svg",
      "desc": "Google Adwords: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Search ads",
        "Bidding",
        "Conversion tracking"
      ]
    },
    {
      "id": "c",
      "title": "C Programming",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/c.svg",
      "desc": "C Programming: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Syntax and loops",
        "Functions and arrays",
        "Pointers"
      ]
    },
    {
      "id": "cpp",
      "title": "C++ Programming",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/cpp.svg",
      "desc": "C++ Programming: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "OOP concepts",
        "STL",
        "Mini project"
      ]
    },
    {
      "id": "python",
      "title": "Python Programming",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/python.svg",
      "desc": "Python Programming: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "Basics",
        "Data structures",
        "Projects"
      ]
    },
    {
      "id": "aspnet",
      "title": "ASP.NET Full Stack Development",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/aspnet.svg",
      "desc": "ASP.NET Full Stack Development: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "C#",
        "ASP.NET",
        "SQL Server"
      ]
    },
    {
      "id": "php",
      "title": "PHP Syllabus",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/php.svg",
      "desc": "PHP Syllabus: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "PHP basics",
        "MySQL",
        "Mini project"
      ]
    },
    {
      "id": "core-java",
      "title": "CORE JAVA",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/core-java.svg",
      "desc": "CORE JAVA: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "OOP",
        "Collections",
        "Exceptions"
      ]
    },
    {
      "id": "adv-java",
      "title": "ADVANCE JAVA",
      "type": "short",
      "group": "IT Courses",
      "parent": "",
      "home": false,
      "image": "images/courses/short/adv-java.svg",
      "desc": "ADVANCE JAVA: practical, job-oriented training with live projects and placement support.",
      "topics": [
        "JDBC",
        "Servlets and JSP",
        "Projects"
      ]
    }
  ],
  "achievements": {
    "images": [
      "https://picsum.photos/seed/ach0/500/500",
      "https://picsum.photos/seed/ach1/500/500",
      "https://picsum.photos/seed/ach2/500/500",
      "https://picsum.photos/seed/ach3/500/500",
      "https://picsum.photos/seed/ach4/500/500",
      "https://picsum.photos/seed/ach5/500/500",
      "https://picsum.photos/seed/ach6/500/500"
    ],
    "list": [
      "Awarded India’s Best Performing Training Centre by BECIL Training Division",
      "Pune’s leading ISO & MSME-recognised Institute",
      "Endorsed by Google, 4.8 rating out of 5",
      "Official Google Partner",
      "Most preferred and highly rated consulting, training institute and services provider",
      "A Guinness World Record participant",
      "Awarded Leading Icons of Maharashtra by SAAM TV and Ministry of Maharashtra",
      "An ISO 9001:2015 certified company"
    ]
  },
  "whyus": [
    {
      "title": "100% Job Assistance",
      "desc": "We serve 100% job assistance courses with end-to-end placement assistance for everyone.",
      "image": "images/why-us/why-1.svg"
    },
    {
      "title": "Lifetime Job Assistance",
      "desc": "Once a student is placed our job is not over; we assist with future placements too.",
      "image": "images/why-us/why-2.svg"
    },
    {
      "title": "Industrial Oriented Training",
      "desc": "Sessions are based on industry requirements and market trends.",
      "image": "images/why-us/why-3.svg"
    },
    {
      "title": "Industrial Experienced Faculties",
      "desc": "Faculties from industry and teaching backgrounds.",
      "image": "images/why-us/why-4.svg"
    },
    {
      "title": "Weekly New Batches For New Joiner",
      "desc": "New batches every week, with digital classroom training.",
      "image": "images/why-us/why-5.svg"
    },
    {
      "title": "Industrial Training With Live Projects",
      "desc": "Students benefit directly from the company's ongoing projects.",
      "image": "images/why-us/why-6.svg"
    },
    {
      "title": "Placements & Campus Drives",
      "desc": "Tie-ups with companies from startups to MNCs, plus in-house campus drives.",
      "image": "images/why-us/why-7.svg"
    },
    {
      "title": "Most Trusted & Recommended Institute",
      "desc": "A highly rated and preferred training institute.",
      "image": "images/why-us/why-8.svg"
    },
    {
      "title": "Lowest Course Fees",
      "desc": "Economical fee structure for students.",
      "image": "images/why-us/why-9.svg"
    }
  ],
  "iso": {
    "title": "ISO-Certified and MSME-Registered Certificate",
    "image": "images/iso/iso-certificate.svg",
    "bullets": [
      "We are Pune’s leading ISO & MSME-recognised Institute",
      "Kickstart your career with 100% practical training, live projects, and expert mentorship",
      "Our job-oriented program is designed to make you industry-ready",
      "Limited seats – enroll now and build your future"
    ]
  },
  "eligibility": [
    {
      "title": "Job seekers (students)",
      "desc": "Recruiters expect specific skills. Our courses prepare you for exactly what the industry requires, so you come out ready for work.",
      "image": "images/eligibility/job-seekers.svg"
    },
    {
      "title": "Working professionals",
      "desc": "Expand your skills beyond your current career path and stay current with industry trends.",
      "image": "images/eligibility/working-professionals.svg"
    },
    {
      "title": "Business owners",
      "desc": "Courses from basic to advanced with business applications, to help you grow your own business.",
      "image": "images/eligibility/business-owners.svg"
    },
    {
      "title": "Freelancers",
      "desc": "Learn every concept in real time and discuss freelancing at the end of the sessions, to earn on the side.",
      "image": "images/eligibility/freelancers.svg"
    }
  ],
  "placements": [
    {
      "caption": "Placed student 1",
      "image": "images/placements-home/placed-1.jpg"
    },
    {
      "caption": "Placed student 2",
      "image": "images/placements-home/placed-2.jpg"
    },
    {
      "caption": "Placed student 3",
      "image": "images/placements-home/placed-3.jpg"
    },
    {
      "caption": "Placed student 4",
      "image": "images/placements-home/placed-4.jpg"
    },
    {
      "caption": "Placed student 5",
      "image": "images/placements-home/placed-5.jpg"
    },
    {
      "caption": "Placed student 6",
      "image": "images/placements-home/placed-6.jpg"
    },
    {
      "caption": "Placed student 7",
      "image": "images/placements-home/placed-7.jpg"
    },
    {
      "caption": "Placed student 8",
      "image": "images/placements-home/placed-8.jpg"
    },
    {
      "caption": "Placed student 9",
      "image": "images/placements-home/placed-9.jpg"
    },
    {
      "caption": "Placed student 10",
      "image": "images/placements-home/placed-10.jpg"
    },
    {
      "caption": "Placed student 11",
      "image": "images/placements-home/placed-11.jpg"
    },
    {
      "caption": "Placed student 12",
      "image": "images/placements-home/placed-12.jpg"
    }
  ],
  "faq": [
    {
      "q": "Do you arrange a Demo Class?",
      "a": "Yes, we organize demo classes. The session gives you an understanding of the whole course."
    },
    {
      "q": "Do you provide Placement Assistance?",
      "a": "Yes, we provide placement assistance after course completion, depending on the student's capacity."
    },
    {
      "q": "Can I get Certification after Course?",
      "a": "We provide certificates after completion of the course."
    },
    {
      "q": "What if I miss some lectures?",
      "a": "Missed lectures and topics can be covered by attending other batches."
    },
    {
      "q": "Do you provide Internships?",
      "a": "Yes, we have a dedicated course for students who need internships after completing the course."
    },
    {
      "q": "Is Installment available?",
      "a": "Yes, 3 installments are available for long term courses."
    }
  ],
  "events": [
    {
      "title": "Anniversary Celebration",
      "photos": [
        "images/events/event-1/photo-1.svg",
        "images/events/event-1/photo-2.svg",
        "images/events/event-1/photo-3.svg",
        "images/events/event-1/photo-4.svg",
        "images/events/event-1/photo-5.svg",
        "images/events/event-1/photo-6.svg"
      ]
    },
    {
      "title": "Campus Drive",
      "photos": [
        "images/events/event-2/photo-1.svg",
        "images/events/event-2/photo-2.svg",
        "images/events/event-2/photo-3.svg",
        "images/events/event-2/photo-4.svg",
        "images/events/event-2/photo-5.svg",
        "images/events/event-2/photo-6.svg"
      ]
    },
    {
      "title": "Games and Sports",
      "photos": [
        "images/events/event-3/photo-1.svg",
        "images/events/event-3/photo-2.svg",
        "images/events/event-3/photo-3.svg",
        "images/events/event-3/photo-4.svg",
        "images/events/event-3/photo-5.svg",
        "images/events/event-3/photo-6.svg"
      ]
    },
    {
      "title": "Social Event",
      "photos": [
        "images/events/event-4/photo-1.svg",
        "images/events/event-4/photo-2.svg",
        "images/events/event-4/photo-3.svg",
        "images/events/event-4/photo-4.svg",
        "images/events/event-4/photo-5.svg",
        "images/events/event-4/photo-6.svg"
      ]
    }
  ],
  "placed": [
    {
      "name": "Ms. Pooja Shete",
      "college": "Anantrao Thopte College, Bhor",
      "role": "Graphic Designer",
      "company": "Spherical Insights Research Consulting, Pune",
      // "image": "images/placement-cards/student-1.jpg"
    },
    {
      "name": "Mr. Pranabh Pardeshi",
      "college": "Ajeenkya D. Y. Patil, Lohegaon, Pune",
      "role": "Graphic Designer",
      "company": "Spherical Insights Research Consulting, Pune",
      // "image": "images/placement-cards/student-2.jpg"
    },
    {
      "name": "Ms. Nisha Vishwakarma",
      "college": "Guru Gobind Singh College Of Engineering And Research Centre, Nashik",
      "role": "Graphic Designer",
      "company": "Spherical Insights Research Consulting, Pune",
      // "image": "images/placement-cards/student-3.jpg"
    },
    {
      "name": "Mr. Rohan Jamdade",
      "college": "Shri Krushna Mahavidyalaya, Solapur",
      "role": "Graphic Designer",
      "company": "Catch Rupee India",
      // "image": "images/placement-cards/student-4.jpg"
    },
    {
      "name": "Ms. Rutuja Agare",
      "college": "MKSSS's K.B.Joshi Institute Of Information Technology, Pune",
      "role": "Graphic Designer",
      "company": "Mage Marketer, Pune",
      // "image": "images/placement-cards/student-5.jpg"
    },
    {
      "name": "Mr. Sahil Dhande",
      "college": "Fergusson College, Pune",
      "role": "Graphic Designer",
      "company": "Abhiyanta India Solutions Pvt. Ltd, Pune",
      // "image": "images/placement-cards/student-6.jpg"
    },
    {
      "name": "Ms. Sachi Pardeshi",
      "college": "MES Abasaheb Garware College, Pune",
      "role": "Digital Marketing Executive",
      "company": "Cybaem Tech Pvt. Ltd, Pune",
      // "image": "images/placement-cards/student-7.jpg"
    },
    {
      "name": "Ms. Shravani More",
      "college": "COCSIT College, Latur",
      "role": "Graphic Designer",
      "company": "Pune Bar And Bench, Pune",
      // "image": "images/placement-cards/student-8.jpg"
    },
    {
      "name": "Mr. Krushna Mundhe",
      "college": "BPHE Society's Ahmednagar College, Ahilyanagar",
      "role": "Graphic Designer",
      "company": "Chitale Bandu, Pune",
      // "image": "images/placement-cards/student-9.jpg"
    }
  ]
};
