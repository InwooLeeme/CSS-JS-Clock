
function getTime(){
    const nowDate = new Date();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();
    console.log(hours, minutes, seconds);
}

function init(){
    setInterval(getTime, 1000);
}

init();