function timer(id,deadline){

    // -------------timer -------------
    
    function getTime(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days =  Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor((t / 1000) % 60);


            if( t <= 0){
                return{
                    'total': 0,
                    'days' : 0,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0
                };
            }else{
                return{
                    'total': t,
                    'days' : days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            }
    }
    function getZero(num){
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            time = setInterval(unlockTime, 1000);
   
        unlockTime();
        function  unlockTime(){
            const t = getTime(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0){
                clearInterval(time);
            }
        }
    }
    setClock(id, deadline);

}

export default timer;