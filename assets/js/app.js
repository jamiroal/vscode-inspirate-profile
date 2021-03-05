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

//Mobile menu functionalities

const mobileMenuClick = document.querySelector('.mobile-menu'),
  mobileMenuIconClick = mobileMenuClick.firstElementChild,
  mobileMenu = document.querySelector('#mobile-menu-container');

mobileMenuClick.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

document.addEventListener('click', function (evt) {
  let targetElement = evt.target;

  if (
    targetElement !== mobileMenuClick &&
    targetElement !== mobileMenuIconClick &&
    targetElement !== mobileMenu
  ) {
    mobileMenu.classList.remove('active');
  }

  // Go up the DOM
  targetElement = targetElement.parentNode;
});
