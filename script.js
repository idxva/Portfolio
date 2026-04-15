/* ─── Year ─── */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* ─── Navbar scroll effect ─── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('bg-dark-900/90', window.scrollY > 40);
      navbar.classList.toggle('backdrop-blur-md', window.scrollY > 40);
      navbar.classList.toggle('border-b', window.scrollY > 40);
      navbar.classList.toggle('border-neon/10', window.scrollY > 40);
    });

    /* ─── Hamburger ─── */
    const ham = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    ham.addEventListener('click', () => {
      ham.classList.toggle('ham-open');
      mobileMenu.classList.toggle('menu-open');
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        ham.classList.remove('ham-open');
        mobileMenu.classList.remove('menu-open');
      });
    });

    /* ─── Typewriter / roles ─── */
    const roles = [
      'Student Developer 🖥️',
      'Web Developer 🌐',
      'Open Source Contributor 🚀',
      'Creative Coder 💡',
      'Problem Solver 🧩',
    ];
    let roleIdx = 0, charIdx = 0, deleting = false;
    const el = document.getElementById('typewriter-text');

    function typeRole() {
      const role = roles[roleIdx];
      if (!deleting) {
        el.textContent = role.slice(0, ++charIdx);
        if (charIdx === role.length) { deleting = true; setTimeout(typeRole, 1800); return; }
      } else {
        el.textContent = role.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
      }
      setTimeout(typeRole, deleting ? 50 : 90);
    }
    typeRole();

    /* ─── Scroll reveal ─── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ─── Skill bars (animate on reveal) ─── */
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-item').forEach(item => {
            const fill = item.querySelector('.skill-bar-fill');
            fill.style.width = item.dataset.level + '%';
          });
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.card-neon').forEach(card => skillObserver.observe(card));

    /* ─── Active nav link on scroll ─── */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(s => navObserver.observe(s));

    /* ─── Project filter ─── */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('active-filter', 'bg-neon/10', 'border-neon', 'text-neon');
          b.classList.add('text-gray-400', 'border-neon/30');
        });
        btn.classList.add('active-filter', 'bg-neon/10', 'border-neon', 'text-neon');
        btn.classList.remove('text-gray-400', 'border-neon/30');

        const filter = btn.dataset.filter;
        projectCards.forEach(card => {
          const match = filter === 'all' || card.dataset.cat === filter;
          card.style.display = match ? 'flex' : 'none';
        });
      });
    });

    /* ─── Contact form ─── */
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = document.getElementById('send-btn');
      const success = document.getElementById('form-success');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      // Simulate send (wire up EmailJS or Formspree here)
      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        this.reset();
        success.classList.remove('hidden');
        setTimeout(() => success.classList.add('hidden'), 4000);
      }, 1500);
    });

    /* ─── Smooth back-to-top on logo click ─── */
    document.getElementById('nav-logo').addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
