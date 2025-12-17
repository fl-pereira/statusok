function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function renderTexts(config) {
  document.querySelectorAll('[data-text]').forEach(el => {
    const path = el.dataset.text;
    const value = getValueByPath(config, path);

    // 🔥 SEM CONDIÇÃO — escreve sempre
    el.textContent = value ?? '';
  });
}

function renderLinks(config) {
  document.querySelectorAll('[data-link]').forEach(el => {
    const value = getValueByPath(config, el.dataset.link);
    if (value) el.href = value;
  });
}

function renderImages(config) {
  document.querySelectorAll('[data-image]').forEach(el => {
    const value = getValueByPath(config, el.dataset.image);
    if (!value) return;

    el.src = value;
    el.hidden = false;

    // ✅ HERO: ativa imagem
    const hero = el.closest('.hero-image');
    if (hero) hero.classList.add('has-image');

    // ✅ LOGO: imagem substitui texto
    if (el.classList.contains('brand-logo')) {
      const textLogo = el.parentElement.querySelector('.logo');
      if (textLogo) textLogo.hidden = true;
    }

  });
}

function renderRepeats(config) {
  document.querySelectorAll('[data-repeat]').forEach(container => {
    const items = getValueByPath(config, container.dataset.repeat);
    if (!Array.isArray(items)) return;

    const template = container.firstElementChild.cloneNode(true);
    container.innerHTML = '';

    items.forEach(item => {
    const node = template.cloneNode(true);

    if (item.featured) {
        node.classList.add("featured");
    }

    node.querySelectorAll('[data-item-text]').forEach(el => {
        el.innerText = item[el.dataset.itemText] || '';
    });

    node.querySelectorAll('[data-item-image]').forEach(el => {
        if (item[el.dataset.itemImage]) {
        el.src = item[el.dataset.itemImage];
        }
    });

    node.querySelectorAll('[data-item-html]').forEach(el => {
        el.innerHTML = item[el.dataset.itemHtml] || "";
    });

    container.appendChild(node);
    });
  });
}

function renderHTML(config) {
  document.querySelectorAll('[data-html]').forEach(el => {
    const value = getValueByPath(config, el.dataset.html);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });
}


function renderTemplate(config) {
  renderTexts(config);
  renderLinks(config);
  renderImages(config);
  renderRepeats(config);
  renderHTML(config);
}
