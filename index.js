const hourBar = document.querySelector('.hours');
const minuteBar = document.querySelector('.minutes');
const secondBar = document.querySelector('.seconds');

function getTime(){
    const nowDate = new Date();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    const hourTransDeg = (hours * 30) + 90;
    const minTransDeg = (minutes * 6) + 90;
    const secTransDeg = (seconds * 6) + 90;
    hourBar.style.transform = `rotate(${hourTransDeg}deg)`;
    minuteBar.style.transform = `rotate(${minTransDeg}deg)`;
    secondBar.style.transform = `rotate(${secTransDeg}deg)`;
}

function init(){
    setInterval(getTime, 1000);
}

init();