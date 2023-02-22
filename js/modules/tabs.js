function tabs(tabsItem, tabsContent,tabsPerent,tabsActive) {

    // ----------------tabs----------------

    let tabs = document.querySelectorAll(tabsItem),
    tabContent = document.querySelectorAll(tabsContent),
    tabPerents = document.querySelector(tabsPerent);

    function hideTabsContent(){

        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show','fade');
        });

        tabs.forEach(item =>{
            item.classList.remove(tabsActive);
        });
        
    }


    function showTabsContent(i = 0){
    tabContent[i].classList.add('show');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add(tabsActive);
    }


    hideTabsContent();
    showTabsContent();


    tabPerents.addEventListener('click', (event) => {
        if(event.target && event.target.classList.contains(tabsItem.slice(1))){
            tabs.forEach((item,i) => {
                if(event.target == item){
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });


}

export default tabs;