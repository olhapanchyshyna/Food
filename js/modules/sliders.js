function sliders({container,slide,prevArray,nextArray,totalCount,currentCount,wrapper,filled}) {


    // -----------slider 1 option---------

    // const slides = document.querySelectorAll('.offer__slide'),
    //     nex = document.querySelector('.offer__slider-next'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');
    // let slideIndex = 1;

    // showSlides(slideIndex);

    // if(slides.length < 10){
    //     total.textContent = `0${slides.length}`;
    // }else{
    //     total.textContent = slides.length; 
    // }

    // function showSlides(n){
    //     if(n < 1){
    //         slideIndex = slides.length; 
    //     }
    //     if(n > slides.length){
    //         slideIndex = 1;
    //     }

    //     slides.forEach(item => {
    //         item.style.display = 'none';
    //     });
    //     slides[slideIndex - 1].style.display = 'block';


    //     if(slides.length < 10){
    //         current.textContent = `0${slideIndex}`;
    //     }else{
    //         current.textContent = slideIndex;
    //     }
            
    // }

    // function plusSlide(n){
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlide(-1);
    // });
    // nex.addEventListener('click', () => {
    //     plusSlide(1);
    // });


     // -----------slider 2 option---------

     const  slider = document.querySelector(container),
            slides = document.querySelectorAll(slide),
            next = document.querySelector(nextArray),
            prev = document.querySelector(prevArray),
            total = document.querySelector(totalCount),
            current = document.querySelector(currentCount),
            sliderWrapper = document.querySelector(wrapper),
            slidesFiled = document.querySelector(filled),
            width = window.getComputedStyle(sliderWrapper).width;

    let     slideIndex = 1,
            offset = 0;


    if(slides.length < 10){
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    }else{
        total.textContent = slides.length; 
        current.textContent = slideIndex; 
    }


    slidesFiled.style.display = 'flex';
    slidesFiled.style.width = 100 * slides.length + '%';
    slidesFiled.style.transition = '0.5 all';
    sliderWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';

    slides.forEach(item => {
        item.style.width = width;
    });



    const indicators = document.createElement('ol'),
    dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;
    if(i == 0){
        dot.style.opacity = '1';
    }
    indicators.append(dot);
    dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == (widthCutPx(width)) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += widthCutPx(width); 
    }
    
    slidesFiledTranslate(slidesFiled);

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    currentInPage(current);
    dotOpacity(dots);
    });

    prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = (widthCutPx(width)) * (slides.length - 1);
    } else {
        offset -= widthCutPx(width);
    }

    slidesFiledTranslate(slidesFiled);

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    currentInPage(current);
    dotOpacity(dots);
    });

    dots.forEach(dot => {
    dot.addEventListener('click', (event) =>{
        const active = event.target.getAttribute('data-slide-to');

        slideIndex = active;
        offset = (widthCutPx(width)) * (active - 1);

        slidesFiledTranslate(slidesFiled);

        currentInPage(current);
        dotOpacity(dots);
    });
    });


    function dotOpacity (n){
        n.forEach(dot => dot.style.opacity = ".5");
        n[slideIndex-1].style.opacity = 1;
    }
    function slidesFiledTranslate (n){
        n.style.transform = `translateX(-${offset}px)`;
    }
    function widthCutPx(n){
        return +n.replace(/\D/ig, '');
    }
    function currentInPage(n){
        if (slides.length < 10) {
            n.textContent =  `0${slideIndex}`;
        } else {
            n.textContent =  slideIndex;
        }
    }

}

export default sliders;