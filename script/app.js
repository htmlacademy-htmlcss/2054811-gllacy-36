document.querySelector('.navigation-link-select').addEventListener('click', function (e) {
  e.preventDefault();//no reloading page
  document.querySelector('.navigation-item-select').classList.toggle('navigation-item-select--open');

});
document.querySelector('.navigation-user-link-search').addEventListener('click', function (e) {
  // e.preventDefault();//no reloading page
  document.querySelector('.navigation-user-item-search').classList.toggle('navigation-user-item-search--open');

});
document.querySelector('.navigation-item-cart').addEventListener('click', function (e) {
  // e.preventDefault();//no reloading page
  document.querySelector('.navigation-item-cart').classList.toggle('navigation-item-cart--open');

});
document.querySelector('.navigation-item-login').addEventListener('click', function (e) {
  // e.preventDefault();//no reloading page
  document.querySelector('.navigation-item-login').classList.toggle('navigation-item-login--open');

});
// navigation - user - item navigation - user - item - search navigation - user - item - search--open
// navigation - user - item navigation - user - item - search navigation - user - item - search--open
