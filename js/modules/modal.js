
    function closeModal(modalSelector){
        // способ 1
       //  modal.style.display = 'none';
        // способ 2
        const modal = document.querySelector(modalSelector);
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
   }
    function openModal(modalSelector,timeOut){
        // способ 1
        // modal.style.display = 'block';
        // способ 2
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        if(timeOut){
            clearInterval(timeOut);
        }
        
    }
    

function modal(triggerSelector, modalSelector,timeOut) {

    // ------------- modal--------------


    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector,timeOut));
    });


    modal.addEventListener('click', (event) => {
        if(event.target === modal || event.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });
    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    });


    function showModalByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
            openModal(modalSelector,timeOut);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export{closeModal};
export{openModal};