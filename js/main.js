
document.addEventListener('load', time);

function time(){
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const deg = 360 / 60;
    let currentDate = new Date();
    let hr = currentDate.getHours() * 30;
    let mn = currentDate.getMinutes() * deg;
    let sc = currentDate.getSeconds() * deg;

    hours.style.transform = `rotateZ(${(hr)+(mn/12)}deg)`;
    minutes.style.transform = `rotateZ(${mn}deg)`;
    seconds.style.transform = `rotateZ(${sc}deg)`;
}

setInterval(time, 1000);