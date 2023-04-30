
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


//Prices active

(function () {
  const dropDowns = document.querySelectorAll('.button-prices-items');

  const buttonPricesBasics = document.getElementById('button-prices-items-basics');   
  const buttonPricesBasicsOpen = document.getElementById('prices-dropdown-content-basics');  
  const buttonPricesBasicsOpenPicBasics = document.getElementById('buttonPricesBasicsOpenPicBasics');  
  const buttonPricesBasicsOpenPicStandard = document.getElementById('buttonPricesBasicsOpenPicStandard');  
  const buttonPricesBasicsOpenPicPro_care = document.getElementById('buttonPricesBasicsOpenPicPro_care');  

  const buttonPricesStandard = document.getElementById('button-prices-items-standard');   
  const buttonPricesStandardOpen = document.getElementById('prices-dropdown-content-standard');  
  const buttonPricesStandardOpenPic = document.getElementById('buttonPricesStandardOpenPic');  
  
  const buttonPricesPro_care = document.getElementById('button-prices-items-pro_care');   
  const buttonPricesPro_careOpen = document.getElementById('prices-dropdown-content-pro_care');  
  const buttonPricesPro_careOpenPic = document.getElementById('button-prices-basics-open-pic-pro_care');  

  const priceLinks = document.querySelectorAll('.prices-link');

  priceLinks.forEach((link) => {
    link.addEventListener('click', (event) => event.stopPropagation());
  });

  buttonPricesBasics.addEventListener('click', (event) => {
    if (buttonPricesStandardOpen.classList.contains('prices-dropdown-content-open') || buttonPricesPro_careOpen.classList.contains('prices-dropdown-content-open')) {
      buttonPricesBasicsOpen.classList.toggle('prices-dropdown-content-open');
      buttonPricesBasics.classList.toggle('button-prices-items-open');
      buttonPricesBasics.classList.toggle('prices_items-open');
      buttonPricesBasicsOpenPicBasics.classList.toggle('accordinon_button-pic-open');

      buttonPricesStandardOpen.classList.remove('prices-dropdown-content-open');
      buttonPricesStandard.classList.remove('button-prices-items-open');
      buttonPricesStandard.classList.remove('prices_items-open');
      buttonPricesBasicsOpenPicStandard.classList.remove('accordinon_button-pic-open');

      buttonPricesPro_careOpen.classList.remove('prices-dropdown-content-open');
      buttonPricesPro_care.classList.remove('button-prices-items-open');
      buttonPricesPro_care.classList.remove('prices_items-open');
      buttonPricesPro_careOpenPic.classList.remove('accordinon_button-pic-open');
    } else {
      buttonPricesBasicsOpen.classList.toggle('prices-dropdown-content-open');
      buttonPricesBasics.classList.toggle('button-prices-items-open');
      buttonPricesBasics.classList.toggle('prices_items-open');
      buttonPricesBasicsOpenPicBasics.classList.toggle('accordinon_button-pic-open');
    }
  })

  buttonPricesStandard.addEventListener('click', (event) => {
    if (buttonPricesBasicsOpen.classList.contains('prices-dropdown-content-open') || buttonPricesPro_careOpen.classList.contains('prices-dropdown-content-open')) {
      buttonPricesStandardOpen.classList.toggle('prices-dropdown-content-open');
      buttonPricesStandard.classList.toggle('button-prices-items-open');
      buttonPricesStandard.classList.toggle('prices_items-open');
      buttonPricesBasicsOpenPicStandard.classList.toggle('accordinon_button-pic-open');

      buttonPricesBasicsOpen.classList.remove('prices-dropdown-content-open');
      buttonPricesBasics.classList.remove('button-prices-items-open');
      buttonPricesBasics.classList.remove('prices_items-open');
      buttonPricesBasicsOpenPicBasics.classList.remove('accordinon_button-pic-open');
    
      buttonPricesPro_careOpen.classList.remove('prices-dropdown-content-open');
      buttonPricesPro_care.classList.remove('button-prices-items-open');
      buttonPricesPro_care.classList.remove('prices_items-open');
      buttonPricesPro_careOpenPic.classList.remove('accordinon_button-pic-open');
    } else {
      buttonPricesStandardOpen.classList.toggle('prices-dropdown-content-open');
      buttonPricesStandard.classList.toggle('button-prices-items-open');
      buttonPricesStandard.classList.toggle('prices_items-open');
      buttonPricesBasicsOpenPicStandard.classList.toggle('accordinon_button-pic-open');
    }
  })

  buttonPricesPro_care.addEventListener('click', (event) => {
    if (buttonPricesStandardOpen.classList.contains('prices-dropdown-content-open') || buttonPricesBasicsOpen.classList.contains('prices-dropdown-content-open')) {
      buttonPricesPro_careOpen.classList.toggle('prices-dropdown-content-open');
      buttonPricesPro_care.classList.toggle('button-prices-items-open');
      buttonPricesPro_care.classList.toggle('prices_items-open');
      buttonPricesPro_careOpenPic.classList.toggle('accordinon_button-pic-open');

      buttonPricesBasicsOpen.classList.remove('prices-dropdown-content-open');
      buttonPricesBasics.classList.remove('button-prices-items-open');
      buttonPricesBasics.classList.remove('prices_items-open');
      buttonPricesBasicsOpenPicBasics.classList.remove('accordinon_button-pic-open');
    
      buttonPricesStandardOpen.classList.remove('prices-dropdown-content-open');
      buttonPricesStandard.classList.remove('button-prices-items-open');
      buttonPricesStandard.classList.remove('prices_items-open');
      buttonPricesBasicsOpenPicStandard.classList.remove('accordinon_button-pic-open');
    } else {
      buttonPricesPro_careOpen.classList.toggle('prices-dropdown-content-open');
      buttonPricesPro_care.classList.toggle('button-prices-items-open');
      buttonPricesPro_care.classList.toggle('prices_items-open');
      buttonPricesPro_careOpenPic.classList.toggle('accordinon_button-pic-open');
    }
  })

}());


console.log(
  '100 баллов\n1. При нажатии на кнопки:Gardens, Lawn, Planting происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50'
);
