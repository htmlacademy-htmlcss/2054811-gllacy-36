const slider = document.querySelector('.slider-list');
const sliderItems = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.slider-preview');
const next = document.querySelector('.slider-next');
const bullits = document.querySelectorAll('.slider-pagination-item');


document.querySelector('.navigation-link-select').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-item-select').classList.toggle('navigation-item-select--open');

});
document.querySelector('.navigation-user-link-search').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-user-item-search').classList.toggle('navigation-user-item-search--open');

});
document.querySelector('.navigation-link-cart').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.navigation-item-cart').classList.toggle('navigation-item-cart--open');

});
document.querySelector('.navigation-link-login').addEventListener('click', function (e) {
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

if (slider) {
  const createSkeleton = (tagsList) => {
    return [...Array(tagsList.length)].map((item, index) => index === 0 ? true : false);
  };

  const model = createSkeleton(sliderItems);

  const renderActiveScreen = (index) => {
    document.querySelector('.slider-item-active').classList.remove('slider-item-active');
    Array.from(sliderItems)[index].classList.add('slider-item-active');
    Array.from(sliderItems).slice(index).forEach((item, i) => {
      item.style.order = i;
    });
    Array.from(sliderItems).slice(0, index).forEach((item, i) => {
      item.style.order = sliderItems.length - index + i;
    });

    document.body.classList.remove(...document.body.classList);
    document.body.classList.add(`slider-${index + 1}`);

    document.querySelector('.bullet-active').classList.remove('bullet-active');
    Array.from(bullits)[index].querySelector('button').classList.add('bullet-active');
  }

  const getNextScreen = () => {
    let current = model.findIndex(item => item === true);
    model[current] = false;
    current = current < model.length - 1 ? current + 1 : 0;
    model[current] = true;
    return current;
  };

  const getPrevScreen = () => {
    let current = model.findIndex(item => item === true);
    model[current] = false;
    current = current > 0 ? current - 1 : model.length - 1;
    model[current] = true;
    return current;

  };

  const getActiveScreen = (numberBullit) => {
    let current = model.findIndex(item => item === true);
    model[current] = false;
    current = numberBullit;
    model[current] = true;
    return current;
  }

  const addListeners = () => {
    prev.addEventListener('click', (e) => {
      e.preventDefault();
      renderActiveScreen(getPrevScreen());
    });

    next.addEventListener('click', (e) => {
      e.preventDefault();
      renderActiveScreen(getNextScreen());
    });

    bullits.forEach((bullit, index) => {
      bullit.addEventListener('click', (e) => {
        e.preventDefault();
        renderActiveScreen(getActiveScreen(index));

      });
    });
  }
  addListeners();
}
