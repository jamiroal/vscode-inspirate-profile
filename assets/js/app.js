//Button for go to the top of the page when user scroll down

let upButton = document.getElementById('go-up');

const getTopPosition = () => {
  document.body.getBoundingClientRect().top < 0
    ? (upButton.style.display = 'block')
    : (upButton.style.display = 'none');
};

window.onscroll = (e) => {
  getTopPosition();
};

upButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
