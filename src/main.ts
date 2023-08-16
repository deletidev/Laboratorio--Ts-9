import './scss/styles.scss';

import { charactersPaint, filter } from './buscar-personajes/buscar-personajes';

document.addEventListener('DOMContentLoaded', async () => {
  await charactersPaint();

  const filterBtn = document.getElementById('search-bar');
  if (filterBtn && filterBtn instanceof HTMLElement) {
    filterBtn.addEventListener('submit', async e => {
      e.preventDefault();
      await filter();
    });
  }
});
