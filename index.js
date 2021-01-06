
function getTime(){
    const hourBar = document.querySelector('.hours');
    const minuteBar = document.querySelector('.minutes');
    const secondBar = document.querySelector('.seconds');
    const nowDate = new Date();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    
    const secTransDeg = seconds * 6;
    secondBar.style.transform = `rotate(${secTransDeg}deg)`;
    console.log(secondBar.style.transform);
}

function init(){
    setInterval(getTime, 1000);
}

init();