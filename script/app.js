document.querySelector('.navigation-link-select').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-item-select').classList.toggle('navigation-item-select--open');

});
document.querySelector('.navigation-user-link-search').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-user-item-search').classList.toggle('navigation-user-item-search--open');

});
document.querySelector('.navigation-item-cart').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-item-cart').classList.toggle('navigation-item-cart--open');

});
document.querySelector('.navigation-item-login').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-item-login').classList.toggle('navigation-item-login--open');

});

if (document.querySelector('.contact-button')) {
  document.querySelector('.contact-button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal-container').classList.add('modal-container-open');
  });

  document.querySelector('.modal-close-button').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.modal-container').classList.remove('modal-container-open');
  });
}
