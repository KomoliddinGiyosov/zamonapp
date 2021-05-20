document.querySelector('.navbar__call').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('active')
    document.body.classList.add('noscroll')
    document.querySelector('.modal__box').style.display = 'block'
    document.querySelector('.modal__success').style.display = 'none'
    
})
document.querySelector('.navbar__search').addEventListener('click', () => {
    document.querySelector('.search__box').classList.add('active')
})
document.querySelector('.search__close').addEventListener('click', () => {
    document.querySelector('.search__box').classList.remove('active')
    
})
document.querySelector('.modal__success .close').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active')
    document.querySelector('.modal__box').style.display = 'block'
    document.querySelector('.modal__success').style.display = 'none'
    document.body.classList.remove('noscroll')
})
document.querySelector('.modal__close').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('active')
    document.querySelector('.modal__box').style.display = 'block'
    document.querySelector('.modal__success').style.display = 'none'
    document.body.classList.remove('noscroll')
})
document.querySelector('.navbar button.mn').addEventListener('click', (e) => {
    document.querySelector('.navbar ul.navbar__menu').classList.toggle('active')
    document.querySelector('.navbar button.mn').classList.toggle('active')
    document.body.classList.toggle('noscroll')
    if (window.innerWidth<700){
        console.log('kuu');
    }
})
if (window.innerWidth<780){
    var links = document.querySelectorAll('.navbar__menu .dropdown > a.links')
    links.forEach(item => {
        item.addEventListener('click',(e)=>{
            console.log(item);
            e.preventDefault()
            item.nextSibling.classList.toggle('active')
        })
    })
    
}
document.querySelector('.modal__success').style.display = 'none'
document.querySelector('.modal__box input[type=submit]').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.modal__box').style.display = 'none'
    document.querySelector('.modal__success').style.display = 'block'
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
window.addEventListener("scroll", function () {
    var target = document.querySelector('button.toptop');
    if (window.pageYOffset > 500) {
        target.style.display = "block";
    } else if (window.pageYOffset < 500) {
        target.style.display = "none";
    }

}, false);




if (document.querySelector('.slider')) {

    new Splide('.slider', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pauseOnHover:false,
        interval: 4000,
        classes: {
            arrows: 'sliders__nav--btns splide__arrows',
            prev: 'splide__arrow--prev left',
            next: 'splide__arrow--next right',
        },
    }).mount();
}
if (document.querySelector('.news__slide')) {
    var splide = new Splide('.news__slide', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        interval: 4000,
        classes: {
            arrows: 'news__btns',
        },
        breakpoints: {
            1024: {
                perPage: 2,
            },
            600: {
                perPage: 1,
            }
        }
    })
    splide.on( 'autoplay:playing', function ( rate ) {
} );
    splide.mount();
}
if (document.querySelector('.history__slide')) {
    new Splide('.history__slide', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        arrows: false,
        interval: 4000,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            768: {
                perPage: 1,
            }
        }
    }).mount();
}
if (document.querySelector('.partners__slide')) {
    new Splide('.partners__slide', {
        type: 'loop',
        perPage: 5,
        autoplay: true,
        arrows: false,
        interval: 4000,
        breakpoints: {
            1024: {
                perPage: 4,
            },
            768: {
                perPage: 3,
            },
            600: {
                perPage: 2
            }

        }
    }).mount();
}
if (document.querySelector('.team__slide')) {
    new Splide('.team__slide', {
        type: 'loop',
        perPage: 4,
        autoplay: true,
        arrows: false,
        interval: 4000,
        breakpoints: {
            768: {
                perPage: 2,
            },
            600: {
                perPage: 1,
            }
        }
    }).mount();
}
if (document.querySelector('.view__slide')) {
    new Splide('.view__slide', {
        type: 'loop',
        perPage: 4,
        autoplay: true,
        arrows: false,
        interval: 4000,
        breakpoints: {
            1024: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            600: {
                perPage: 1
            }
        }
    }).mount();
}

if (document.querySelector('.service .service__item')) {
    let btns = document.querySelectorAll('.service button.nav')

    let defAct = 'build'
    let servs = document.querySelectorAll('.service .serbox')
    servs.forEach(ser => {
        if (!ser.classList.contains(defAct)) {
            ser.style.display = 'none'
        }
    })
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.service__nav.filter__nav button.active').classList.remove('active')
            btn.classList.add('active')
            defAct = btn.getAttribute('data-id')
            console.log(defAct);
            servs.forEach(ser => {
                if (!ser.classList.contains(defAct)) {
                    ser.style.display = 'none'
                } else {
                    ser.style.display = 'block'
                }
            })
        })
    })

    servs.forEach(ser => {
        if (!ser.classList.contains(defAct)) {
            ser.style.display = 'none'
        }
    })
}


if (document.querySelector('.gallery .galbox')) {
    let btns = document.querySelectorAll('.gallery button.nav')

    let defAct = 'all'
    let gals = document.querySelectorAll('.gallery .galbox')
    gals.forEach(ser => {
        if (!ser.classList.contains(defAct)) {
            ser.style.display = 'block'
        }
    })
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.gallery .filter__nav button.active').classList.remove('active')
            btn.classList.add('active')
            defAct = btn.getAttribute('data-id')

            console.log(defAct);
            gals.forEach(ser => {
                if (defAct == 'all') {
                    ser.style.display = 'block'
                } else if (!ser.classList.contains(defAct)) {
                    ser.style.display = 'none'
                } else {
                    ser.style.display = 'block'
                }
            })
        })
    })

}