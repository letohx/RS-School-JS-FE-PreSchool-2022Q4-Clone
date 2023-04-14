
// burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');       
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active'); 
    })
    if (window.innerWidth <= 700) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active'); 
            });
        }
    }
}());


// Scroll to anchors

(function () {

    const smoothScroll = function (targetEl, duration) {
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();

}());


// Services

(function () {

  const buttonGardens = document.getElementById('js-buttonGardens');
  const buttonLawn = document.getElementById('js-buttonLawn');
  const buttonPlanting = document.getElementById('js-buttonPlanting');

  const servicesGarden = document.querySelectorAll('.js-servicesGarden');
  const servicesLawn = document.querySelectorAll('.js-servicesLawn');
  const servicesPlanting = document.querySelectorAll('.js-servicesPlanting');

  buttonGardens.addEventListener('click', (event) => {
    if (buttonLawn.classList.contains('button-services-focus') && buttonPlanting.classList.contains('button-services-focus')) {
      return;
    }
    if (buttonLawn.classList.contains('button-services-focus') || buttonPlanting.classList.contains('button-services-focus')) {
      servicesGarden.forEach(x => x.classList.toggle('serviceBlur'));
    } else {
      servicesLawn.forEach(x => x.classList.toggle('serviceBlur'));
      servicesPlanting.forEach(x => x.classList.toggle('serviceBlur'));
    }
    buttonGardens.classList.toggle('button-services-focus');
  })

  buttonLawn.addEventListener('click', (event) => {
    if (buttonGardens.classList.contains('button-services-focus') && buttonPlanting.classList.contains('button-services-focus')) {
      return;
    }
    if (buttonGardens.classList.contains('button-services-focus') || buttonPlanting.classList.contains('button-services-focus')) {
      servicesLawn.forEach(x => x.classList.toggle('serviceBlur'));
    } else {
      servicesGarden.forEach(x => x.classList.toggle('serviceBlur'));
      servicesPlanting.forEach(x => x.classList.toggle('serviceBlur'));
    }
    buttonLawn.classList.toggle('button-services-focus');
  })

  buttonPlanting.addEventListener('click', (event) => {
    if (buttonGardens.classList.contains('button-services-focus') && buttonLawn.classList.contains('button-services-focus')) {
      return;
    }
    if (buttonGardens.classList.contains('button-services-focus') || buttonLawn.classList.contains('button-services-focus')) {
      servicesPlanting.forEach(x => x.classList.toggle('serviceBlur'));
    } else {
      servicesGarden.forEach(x => x.classList.toggle('serviceBlur'));
      servicesLawn.forEach(x => x.classList.toggle('serviceBlur'));
    }
    buttonPlanting.classList.toggle('button-services-focus');
  })

}());

