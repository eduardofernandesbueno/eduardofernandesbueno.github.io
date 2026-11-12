(() => {
  const html = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('.project[data-categories]');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  let storedTheme = null;
  try { storedTheme = localStorage.getItem('efb-portfolio-theme'); } catch (_) {}
  html.dataset.theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : (prefersLight ? 'light' : 'dark');
  const updateThemeLabel = () => {
    const isDark = html.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    themeButton.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
  };
  updateThemeLabel();
  themeButton.addEventListener('click', () => {
    html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('efb-portfolio-theme', html.dataset.theme); } catch (_) {}
    updateThemeLabel();
  });
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
  filters.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach(project => {
      project.hidden = selected !== 'all' && !project.dataset.categories.split(' ').includes(selected);
    });
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
