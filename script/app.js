document.querySelector('.navigation-link-select').addEventListener('click', function (e) {
  e.preventDefault();//no reloading page
  document.querySelector('.navigation-item-select').classList.toggle('navigation-item-select--open');

})
