function setTime() {
    let date= new Date();
    let hours = date.getHours();
    let minutes= date.getMinutes();
    let seconde = date.getSeconds();
    let text= 'AM';

    if (hours===0) {
        hours=12;

    }

    if (hours>12) {
        hours=hours-12;
        text='PM';

    };

    hours=hours<10? '0'+hours: hours;
    minutes=minutes<10? '0'+minutes: minutes;
    seconde=seconde<10? '0'+seconde: seconde;


    let times= `${hours}:${minutes}:${seconde}`
    document.getElementById('time').innerText=times;
    document.getElementById('text').innerText=text;
    
}
setInterval(setTime,1000);
setTime();