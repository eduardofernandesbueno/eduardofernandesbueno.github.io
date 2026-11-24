(() => {
  const html = document.documentElement;
  const interfaceLabels = {
    en: { light: 'Switch to light theme', dark: 'Switch to dark theme', open: 'Open navigation', close: 'Close navigation' },
    'pt-BR': { light: 'Mudar para tema claro', dark: 'Mudar para tema escuro', open: 'Abrir navegação', close: 'Fechar navegação' },
    es: { light: 'Cambiar a tema claro', dark: 'Cambiar a tema oscuro', open: 'Abrir navegación', close: 'Cerrar navegación' }
  };
  const labels = interfaceLabels[html.lang] || interfaceLabels.en;
  const languageLinks = document.querySelectorAll('[data-language-link]');
  const updateLanguageLinks = () => {
    languageLinks.forEach(link => {
      const url = new URL(link.href);
      url.hash = window.location.hash;
      link.href = url.href;
    });
  };
  updateLanguageLinks();
  window.addEventListener('hashchange', updateLanguageLinks);
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
    themeButton.setAttribute('aria-label', isDark ? labels.light : labels.dark);
    themeButton.title = isDark ? labels.light : labels.dark;
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
    menuButton.setAttribute('aria-label', open ? labels.close : labels.open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', labels.open);
  }));
  const applyProjectFilter = selected => {
    filters.forEach(item => {
      const active = item.dataset.filter === selected;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach(project => {
      project.hidden = selected === 'featured'
        ? project.hasAttribute('data-secondary')
        : selected !== 'all' && !project.dataset.categories.split(' ').includes(selected);
    });
  };
  filters.forEach(button => button.addEventListener('click', () => {
    applyProjectFilter(button.dataset.filter);
  }));
  applyProjectFilter('featured');
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
