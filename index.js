
function getTime(){
    const hourBar = document.querySelector('.hours');
    const minuteBar = document.querySelector('.minutes');
    const secondBar = document.querySelector('.seconds');
    const nowDate = new Date();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    console.log(minutes);
    const minTransDeg = (minutes * 6) + 90;
    const secTransDeg = (seconds * 6) + 90;
    minuteBar.style.transform = `rotate(${minTransDeg}deg)`;
    secondBar.style.transform = `rotate(${secTransDeg}deg)`;
}

function init(){
    setInterval(getTime, 1000);
}

init();