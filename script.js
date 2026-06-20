//There's no easter egg here...
/* ─────────────────────────────────────────────────────────────
   PORTFOLIO CONFIGURATION & INTERACTION LOGIC
   ───────────────────────────────────────────────────────────── */

const CONFIG = {

  /* ── Identity ── */
  name      : 'Deva',
  fullName  : 'Deva',
  logo      : '&lt;Dev(a)&gt;',
  footerLogo: '^',
  greeting  : '🐦‍🔥 Valar morghullis',
  bio       : 'A passionate student developer crafting creative digital experiences. I love turning ideas into elegant code and beautiful interfaces.',
  cvLink    : 'Deva.pdf.pdf',
  status    : 'open to internships & freelance',

  /* ── Typewriter roles ── */
  roles: [
    'Student 🎓',
    'Web Developer 🌐',
    'Creative designer 💡',
  ],

  /* ── About section ── */
  aboutPara1: `Hey there! I'm a <strong style="color:#fff">AI / DS student</strong> with a passion for
    creating beautiful, functional web experiences. I've been coding for
    <strong style="color:#39FF14">2 years</strong> and love working on projects that solve real problems.`,
  aboutPara2: `When I'm not studying, you'll find me,
    building side projects, or exploring the latest in tech. I'm always looking for
    new opportunities to learn and grow.`,

  /* ── Quick stats ── */
  stats: [
    { value: '3+', label: 'Projects'       },
    { value: '2+', label: 'Years of Coding' },
    { value: '∞',  label: 'Curiosity'       },
  ],

  /* ── Education ── */
  education: {
    degree : 'B.Sc Artificial Intelligence',
    school : 'HCAS • 2024 – 2027',
    grade  : 'University of Madras | ',
  },

  /* ── About-terminal JSON card ── */
  terminalData: {
    name       : 'Devarajan',
    role       : 'Student',
    year       : '2nd Year',
    university : 'Hindustan College of Arts and Science',
    location   : 'Padur, Chennai',
    interests  : ['Web Development', 'Artificial Intelligence', 'Tech','Figma'],
    status     : true,
  },

  /* ── Social Links ── */
  socials: [
    {
      label: 'GitHub',
      url  : 'https://github.com/idxva',
      svg  : `<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>`,
    },
    {
      label: 'LinkedIn',
      url  : 'https://www.linkedin.com/in/devarajan-v-064132328/?skipRedirect=true',
      svg  : `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
    },
    {
      label: 'Instagram',
      url  : 'https://www.instagram.com/deva._8725?igsh=YmthdnZtbTQ2czcw',
      svg  : `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>`,
    },
  ],

  /* ── Contact Info ── */
  contactInfo: [
    {
      label: 'Email',
      value: 'devarajandeva57@gmail.com',
      href : 'mailto:devarajandeva57@gmail.com',
      svg  : `<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>`,
    },
    {
      label: 'GitHub',
      value: 'github.com/idxva',
      href : 'https://github.com/idxva',
      svg  : `<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>`,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/devarajan-v',
      href : 'https://www.linkedin.com/in/devarajan-v-064132328?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      svg  : `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
    },
  ],

  /* ── Skills ── */
  skillCategories: [
    {
      title   : 'Frontend',
      iconPath: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
      skills  : [
        { name: 'HTML / CSS',   level: 83 },
        { name: 'JavaScript',   level: 74 },
        { name: 'React',        level: 42 },
        { name: 'Tailwind CSS', level: 37 },
      ],
    },
    {
      title   : 'Backend',
      iconPath: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z',
      skills  : [
        { name: 'Python',       level: 87 },
        { name: 'Node.js',      level: 61 },
        { name: 'SQL / MySQL',  level: 29 },
        { name: 'Flask/Django', level: 35 },
      ],
    },
    {
      title   : 'Tools & Others',
      iconPath: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      tags    : ['Git / GitHub','VS Code','Figma','Linux','Firebase','MongoDB','C / C++','Java','Cursor','Antigravity','Supabase'],
    },
  ],

  /* ── Projects ── */
  projectFilters: [
    { key: 'all',  label: 'All'     },
    { key: 'web',  label: 'Web'     },
    { key: 'ml',   label: 'AI/ML',   },
    { key: 'tool', label: 'Tools'   },
  ],

  projects: [
    {
      title      : 'AuraScript',
      description: 'AuraScript is a web-based application designed to modernize the way healthcare providers manage prescriptions. By replacing traditional paper-based methods with a secure digital interface, the platform ensures higher accuracy, and faster communication between doctors and pharmacies.',
      cat        : 'web',
      tags       : ['HTML', 'CSS','JavaScript', 'Firebase'],
      github     : 'https://idxva.github.io/AuraScript/',
      demo       : null,
      iconPath   : 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z',
    },
    {
      title      : 'PharmaLink',
      description: 'PharmaLink is a full-stack application designed to streamline the pharmacists workflow. It serves as the bridge between the clinic and the pharmacy, allowing pharmacists to debug and verify digital prescriptions in real-time',
      cat        : 'web',
      tags       : ['HTML', 'CSS','JavaScript', 'Firebase'],
      github     : 'https://idxva.github.io/PharmaLink/',
      demo       : null,
      iconPath   : 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z',
    },
    {
      title      : 'Portfolio',
      description: 'Current site you are on! A personal portfolio website built with HTML, CSS, and JavaScript. It features a responsive design, interactive elements, and showcases projects and skills in a clean, modern layout.',
      cat        : 'web',
      tags       : ['Tailwind CSS', 'JavaScript', 'HTML',],
      github     : null,
      demo       : null,
      iconPath   : 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
    },
    {
      title      : 'Expenza',
      description: 'Master your money with Expenza, the high-performance suite for the modern investor.Expenza features local encrypted backups, ensuring your sensitive data remains entirely under your control.',
      cat       : 'tool',
      tags       : ['React JS', 'HTML', 'CSS'],
      github     : null,
      demo       : null,
      iconPath   : 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z',
    },
  ],

  /* ── Experience ── */
  experiences: [
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Apr 2026 – Present',
      description: 'Built responsive websites for small businesses, focusing on user experience and performance optimization.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      role: 'AI & ML Intern',
      company: 'DVEIN Foundation Pvt Ltd.',
      period: 'Jun 2026 – Present',
      description: 'Assisted in research on supervised machine learning algorithms, data preprocessing, and model evaluation techniques.',
      tags: ['Python', 'Machine Learning', 'Data Analysis', 'Artificial Intelligence']
    }
  ],

  /* ── Certificates ── */
  certificates: [
    {
      title: 'Supervised Machine Learning',
      issuer: 'DeepLearning.AI / Coursera',
      date: 'May 2026',
      link: '#'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Dec 2025',
      link: '#'
    },
    {
      title: 'Foundations of Artificial Intelligence',
      issuer: 'Google',
      date: 'Aug 2025',
      link: '#'
    }
  ]

}; /* ─── END OF CONFIG ─── */


/* ─────────────────────────────────────────────────────────────
   INITIALIZATION & RENDERING
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  /* ── Year ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Hero & Footer Identity ── */
  const navLogoEl = document.getElementById('nav-logo');
  if (navLogoEl) navLogoEl.innerHTML = CONFIG.logo;

  const footerLogoEl = document.getElementById('footer-logo');
  if (footerLogoEl) footerLogoEl.innerHTML = CONFIG.footerLogo;

  const footerNameEl = document.getElementById('footer-name');
  if (footerNameEl) footerNameEl.textContent = CONFIG.fullName;

  const heroNameEl = document.getElementById('hero-name');
  if (heroNameEl) heroNameEl.textContent = CONFIG.name;

  const heroGreetingEl = document.getElementById('hero-greeting');
  if (heroGreetingEl) heroGreetingEl.innerHTML = CONFIG.greeting;

  const heroBioEl = document.getElementById('hero-bio');
  if (heroBioEl) heroBioEl.textContent = CONFIG.bio;

  const heroStatusEl = document.getElementById('hero-status');
  if (heroStatusEl) heroStatusEl.textContent = CONFIG.status;

  const cvLinkEl = document.getElementById('cv-link');
  if (cvLinkEl) cvLinkEl.href = CONFIG.cvLink;

  const availabilityTextEl = document.getElementById('availability-text');
  if (availabilityTextEl) availabilityTextEl.textContent = CONFIG.status;

  /* ── Social Icons ── */
  const socialLinksEl = document.getElementById('social-links');
  if (socialLinksEl) {
    const svgWrap = (svg, label, url) =>
      `<a href="${url}" target="_blank" aria-label="${label}" class="social-icon">
         <svg viewBox="0 0 24 24">${svg}</svg>
       </a>`;
    socialLinksEl.innerHTML = CONFIG.socials
      .filter(s => s.url)
      .map(s => svgWrap(s.svg, s.label, s.url))
      .join('');
  }

  /* ── About Terminal JSON Card ── */
  const aboutTerminalEl = document.getElementById('about-terminal');
  if (aboutTerminalEl) {
    const td = CONFIG.terminalData;
    const jsonLines = Object.entries(td).map(([k, v]) => {
      const key = `  <span style="color:#93c5fd">"${k}"</span>`;
      let val;
      if (Array.isArray(v)) {
        val  = `[\n${v.map(i => `    <span style="color:#fde68a">"${i}"</span>`).join(',\n')}\n  ]`;
      } else if (typeof v === 'boolean') {
        val = `<span style="color:#39FF14">${v}</span>`;
      } else {
        val = `<span style="color:#fde68a">"${v}"</span>`;
      }
      return `${key}: ${val}`;
    });
    aboutTerminalEl.innerHTML =
      `<code><span style="color:#39FF14">{</span>\n${jsonLines.join(',\n')}\n<span style="color:#39FF14">}</span></code>`;
  }

  const aboutPara1El = document.getElementById('about-para1');
  if (aboutPara1El) aboutPara1El.innerHTML = CONFIG.aboutPara1;

  const aboutPara2El = document.getElementById('about-para2');
  if (aboutPara2El) aboutPara2El.innerHTML = CONFIG.aboutPara2;

  /* Stats */
  const aboutStatsEl = document.getElementById('about-stats');
  if (aboutStatsEl) {
    aboutStatsEl.innerHTML = CONFIG.stats.map(s =>
      `<div class="stat-card">
         <div class="stat-value gradient-text">${s.value}</div>
         <div class="stat-label">${s.label}</div>
       </div>`
    ).join('');
  }

  /* Education */
  const eduDegreeEl = document.getElementById('edu-degree');
  if (eduDegreeEl) eduDegreeEl.textContent = CONFIG.education.degree;

  const eduSchoolEl = document.getElementById('edu-school');
  if (eduSchoolEl) eduSchoolEl.textContent = CONFIG.education.school;

  const eduGradeEl = document.getElementById('edu-grade');
  if (eduGradeEl) eduGradeEl.textContent = CONFIG.education.grade;

  /* ── Skills Grid ── */
  const skillsGridEl = document.getElementById('skills-grid');
  if (skillsGridEl) {
    skillsGridEl.innerHTML = CONFIG.skillCategories.map(cat => {
      let inner = '';
      if (cat.tags) {
        inner = `<div class="tag-cloud">
          ${cat.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>`;
      } else {
        inner = `<div class="skill-bars">
          ${cat.skills.map(sk => `
            <div class="skill-item" data-level="${sk.level}">
              <div class="skill-item-label">
                <span>${sk.name}</span>
                <span>${sk.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" style="width:0%"></div>
              </div>
            </div>`).join('')}
        </div>`;
      }

      return `<div class="reveal card-neon skill-card">
        <div class="skill-card-header">
          <div class="skill-icon">
            <svg viewBox="0 0 24 24"><path d="${cat.iconPath}"/></svg>
          </div>
          <h3>${cat.title}</h3>
        </div>
        ${inner}
      </div>`;
    }).join('');
  }

  /* ── Experience Timeline ── */
  const experienceTimelineEl = document.getElementById('experience-timeline');
  if (experienceTimelineEl) {
    experienceTimelineEl.innerHTML = CONFIG.experiences.map(exp => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-role">${exp.role} <span class="timeline-company">@ ${exp.company}</span></h3>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <p class="timeline-desc">${exp.description}</p>
          <div class="timeline-tags">
            ${exp.tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ── Project Filters ── */
  const filterContainer = document.getElementById('filter-btns');
  if (filterContainer) {
    filterContainer.innerHTML = CONFIG.projectFilters.map((f, i) =>
      `<button type="button" data-filter="${f.key}"
         class="filter-btn${i === 0 ? ' active-filter' : ''}">
         ${f.label}
       </button>`
    ).join('');
  }

  /* ── Project Cards ── */
  const projectsGridEl = document.getElementById('projects-grid');
  if (projectsGridEl) {
    const githubSVG = `<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>`;
    const demoSVG  = `<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>`;

    projectsGridEl.innerHTML = CONFIG.projects.map(p => {
      const ghBtn = p.github
        ? `<a href="${p.github}" target="_blank" class="project-link-btn" aria-label="GitHub repo">
             <svg class="fill-accent" viewBox="0 0 24 24">${githubSVG}</svg></a>` : '';
      const demoBtn = p.demo
        ? `<a href="${p.demo}" target="_blank" class="project-link-btn" aria-label="Live demo">
             <svg class="stroke-accent" stroke-width="2" viewBox="0 0 24 24">${demoSVG}</svg></a>` : '';

      return `<div class="project-card reveal card-neon" data-cat="${p.cat}">
        <div class="project-card-top">
          <div class="project-icon">
            <svg viewBox="0 0 24 24"><path d="${p.iconPath}"/></svg>
          </div>
          <div class="project-links">${ghBtn}${demoBtn}</div>
        </div>
        <div class="project-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>`;
    }).join('');
  }

  /* ── Certificates ── */
  const certificatesGridEl = document.getElementById('certificates-grid');
  if (certificatesGridEl) {
    const verifySVG = '<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>';
    const ribbonSVG = '<path d="M12 2c-3.31 0-6 2.69-6 6 0 2.32 1.3 4.33 3.2 5.39L8 22l4-2 4 2-1.2-8.61c1.9-1.06 3.2-3.07 3.2-5.39 0-3.31-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>';

    certificatesGridEl.innerHTML = CONFIG.certificates.map(cert => `
      <div class="cert-card reveal card-neon">
        <div class="cert-header">
          <div class="cert-icon">
            <svg viewBox="0 0 24 24">${ribbonSVG}</svg>
          </div>
          ${cert.link && cert.link !== '#' ? `<a href="${cert.link}" target="_blank" class="cert-verify-link" aria-label="Verify Certificate">
            <svg viewBox="0 0 24 24" stroke-width="2">${verifySVG}</svg>
          </a>` : ''}
        </div>
        <div class="cert-body">
          <h3>${cert.title}</h3>
          <p class="cert-issuer">${cert.issuer}</p>
          <p class="cert-date">${cert.date}</p>
        </div>
      </div>
    `).join('');
  }

  /* ── Contact Info Cards ── */
  const infoContainer = document.getElementById('contact-info');
  if (infoContainer) {
    CONFIG.contactInfo.forEach(c => {
      const div = document.createElement('div');
      div.className = 'contact-info-card card-neon';
      div.innerHTML = `
        <div class="contact-info-icon">
          <svg viewBox="0 0 24 24">${c.svg}</svg>
        </div>
        <div class="contact-info-text">
          <p class="contact-info-label">${c.label}</p>
          <a href="${c.href}" target="_blank" class="contact-link">${c.value}</a>
        </div>`;
      infoContainer.prepend(div);
    });
  }


  /* ─────────────────────────────────────────────────────────────
     INTERACTION & EVENT LISTENERS
     ───────────────────────────────────────────────────────────── */

  /* Navbar Scroll Effect */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* Hamburger Menu Toggle */
  const ham = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('ham-open');
      mobileMenu.classList.toggle('menu-open');
    });
  }

  // Close mobile menu on clicking links
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      if (ham) ham.classList.remove('ham-open');
      if (mobileMenu) mobileMenu.classList.remove('menu-open');
    });
  });

  /* Smooth Scroll Sync Flag */
  let isScrollingToSection = false;

  // Add click handler to all nav-like links for smooth scroll and active observer override
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          isScrollingToSection = true;
          
          // Instantly highlight target link on desktop menu
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-link[href="${targetId}"]`);
          if (activeLink) activeLink.classList.add('active');
          
          targetSection.scrollIntoView({ behavior: 'smooth' });
          
          // Unblock IntersectionObserver after smooth scroll finishes
          setTimeout(() => {
            isScrollingToSection = false;
          }, 800);
        }
      }
    });
  });

  /* Typewriter Effect (Emoji surrogate-pair safe) */
  let roleIdx = 0, charIdx = 0, deleting = false;
  const twEl = document.getElementById('typewriter-text');
  function typeRole() {
    if (!twEl) return;
    const role = CONFIG.roles[roleIdx];
    const chars = [...role]; // Safe extraction of emoji surrogate pairs
    
    twEl.textContent = deleting 
      ? chars.slice(0, --charIdx).join('') 
      : chars.slice(0, ++charIdx).join('');
      
    if (!deleting && charIdx === chars.length) { 
      deleting = true; 
      setTimeout(typeRole, 1800); 
      return; 
    }
    if (deleting && charIdx === 0) { 
      deleting = false; 
      roleIdx = (roleIdx + 1) % CONFIG.roles.length; 
    }
    setTimeout(typeRole, deleting ? 50 : 90);
  }
  if (twEl) typeRole();

  /* Scroll Reveal Observer */
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* Skill Bars Observer (Only observes skill-card to reduce overhead) */
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-item').forEach(item => {
          const fill = item.querySelector('.skill-bar-fill');
          if (fill) fill.style.width = item.dataset.level + '%';
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

  /* Active Nav on Scroll (Synchronized with smooth scrolling) */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver(entries => {
    if (isScrollingToSection) return; // Prevent flickering when scrolling to section programmatically
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => navObserver.observe(s));

  /* Project Filtering */
  const filterBtnsContainer = document.getElementById('filter-btns');
  if (filterBtnsContainer) {
    filterBtnsContainer.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.cat === filter) ? 'flex' : 'none';
      });
    });
  }

  /* Contact Form Validation & Submission (Robust EmailJS dispatch) */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn     = document.getElementById('send-btn');
      const success = document.getElementById('form-success');
      if (!btn || !success) return;

      const nameInput = document.getElementById('f-name');
      const emailInput = document.getElementById('f-email');
      const subjectInput = document.getElementById('f-subject');
      const messageInput = document.getElementById('f-message');
      if (!nameInput || !emailInput || !messageInput) return;

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput.value.trim();

      // 1. Validation checks
      if (!nameVal || !emailVal || !messageVal) {
        success.style.color = '#ff4d4d';
        success.textContent = '✗ Please fill out all required fields.';
        success.classList.add('visible');
        setTimeout(() => success.classList.remove('visible'), 5000);
        return;
      }

      // 2. Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        success.style.color = '#ff4d4d';
        success.textContent = '✗ Please enter a valid email address.';
        success.classList.add('visible');
        setTimeout(() => success.classList.remove('visible'), 5000);
        return;
      }

      // 3. Graceful handling for EmailJS load failure
      if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded');
        success.style.color = '#ff4d4d';
        success.textContent = '✗ Error: EmailJS library failed to load. Please try again later.';
        success.classList.add('visible');
        setTimeout(() => success.classList.remove('visible'), 8000);
        return;
      }

      const templateParams = {
        from_name : nameVal,
        reply_to  : emailVal,
        subject   : subjectVal || '(no subject)',
        message   : messageVal,
        to_email  : 'devarajandeva57@gmail.com',
      };

      btn.textContent = 'Sending…';
      btn.disabled    = true;

      emailjs.send('service_fmtvmi2', 'template_yxri93a', templateParams)
        .then(() => {
          btn.textContent = 'Send Message →';
          btn.disabled    = false;
          contactForm.reset();
          success.style.color = 'var(--accent)';
          success.textContent = '✓ Message sent! I\'ll get back to you soon.';
          success.classList.add('visible');
          setTimeout(() => success.classList.remove('visible'), 5000);
        })
        .catch((err) => {
          const reason = (err && (err.text || err.message || JSON.stringify(err))) || 'Unknown error';
          console.error('EmailJS error:', err);
          btn.textContent = 'Send Message →';
          btn.disabled    = false;
          success.style.color = '#ff4d4d';
          success.textContent = '✗ Error: ' + reason;
          success.classList.add('visible');
          setTimeout(() => success.classList.remove('visible'), 8000);
        });
    });
  }

  /* Back to Top Smooth Scroll for Logos */
  const navLogo = document.getElementById('nav-logo');
  if (navLogo) {
    navLogo.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const footerLogo = document.getElementById('footer-logo');
  if (footerLogo) {
    footerLogo.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
