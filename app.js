const fullDate = new Date();


function clock(){
    const fullDate = new Date();


document.querySelector('#hour').innerHTML = fullDate.getHours() + ':';
document.querySelector('#minute').innerHTML = fullDate.getMinutes() + ":";
document.querySelector('#second').innerHTML = fullDate.getSeconds();

}

setInterval( clock,1000);

