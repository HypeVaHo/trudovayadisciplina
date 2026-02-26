const glossaryItems = document.querySelectorAll('.glossary-item');
const glossaryPanel = document.getElementById('glossary-panel');

if (glossaryPanel) {
  glossaryItems.forEach((item) => {
    item.addEventListener('click', () => {
      glossaryPanel.querySelector('.glossary-panel__title').textContent = item.textContent.trim();
      glossaryPanel.querySelector('.glossary-panel__definition').textContent = item.dataset.definition;
    });
  });
}

const scrollButtons = document.querySelectorAll('[data-scroll]');

scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

