require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import  tabs  from './modules/tabs';
import  form  from './modules/form';
import  cards from  './modules/cards';
import  modal from  './modules/modal';
import  sliders from  './modules/sliders';
import  timer from  './modules/timer';
import  calc from  './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () =>{

    const timeOut = setTimeout( () => openModal('.modal',timeOut), 30000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    form('form',timeOut);
    cards();
    modal('[data-modal]','.modal',timeOut);
    sliders({
        container : '.offer__slider',
        slide : '.offer__slide',
        prevArray: '.offer__slider-prev',
        nextArray: '.offer__slider-next',
        totalCount: '#total',
        currentCount: '#current',
        wrapper: '.offer__slider-wrapper',
        filled: '.offer_slider_inner',
    });
    timer('.timer', '2022-12-31');
    calc();
});

