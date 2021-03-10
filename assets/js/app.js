//Button for go to the top of the page when user scroll down

let upButton = document.getElementById('go-up');

const getTopPosition = () => {
  document.body.getBoundingClientRect().top === 0
    ? (upButton.style.display = 'none')
    : (upButton.style.display = 'block');
};

window.onscroll = (e) => {
  getTopPosition();
};

upButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Initializing menu

import { menuItems } from '../translate/menu-items.js';

const menuTabs = menuItems.options;
const menuTabsContent = menuItems.content;

let menuContainer = document.querySelector('#mobile-menu-container');

const fillMenuTabs = (tab) => {
  return `<a href="javascript:void(0);">
            <i class="icon-tab-menu ${tab.folderIcon}"></i>
          </a>`;
};

const fillMenuTabsContentFirstLevel = (content) => {
  return `<li>
            <h1>${content.name}</h1>
            <ul>
            ${content.data.map(fillMenuTabsContentSecondLevel).join('')}
            </ul>
          </li>`;
};

const fillMenuTabsContentSecondLevel = (content) => {
  return `<li>
            <h2>${content.name}</h2>
            <ul>
              ${content.article.map(fillMenuTabsContentThirdLevel).join('')}
            </ul>
          </li>`;
};

const fillMenuTabsContentThirdLevel = (content) => {
  return `<li>${content.name}</li>`;
};

const loadMenuMobile = () => {
  menuContainer.insertAdjacentHTML(
    'afterbegin',
    `<div class="mobile-menu-tabs">${menuTabs.map(fillMenuTabs).join('')}</div>
    <div class="mobile-menu-tabs-content">
      <p>KNOWLEDGE</p>
      <ul>${menuTabsContent.map(fillMenuTabsContentFirstLevel).join('')}</ul>
    </div>`
  );
};

loadMenuMobile();
