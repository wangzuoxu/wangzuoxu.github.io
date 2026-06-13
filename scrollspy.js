(() => {
  const navLinks = Array.from(document.querySelectorAll('.site-header .nav-links a[href^="#"]'));
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => document.getElementById(link.getAttribute('href').slice(1)))
    .filter(Boolean);

  if (!sections.length) return;

  const header = document.querySelector('.site-header');
  const getOffset = () => {
    const height = header ? header.getBoundingClientRect().height : 0;
    return height + 24;
  };

  const setActive = (id) => {
    for (const link of navLinks) {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    }
  };

  const update = () => {
    const marker = window.scrollY + getOffset();
    let current = sections[0].id;

    for (const section of sections) {
      const top = section.offsetTop;
      if (marker >= top - 8) {
        current = section.id;
      } else {
        break;
      }
    }

    setActive(current);
  };

  let ticking = false;
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('hashchange', requestUpdate);

  requestUpdate();
})();
