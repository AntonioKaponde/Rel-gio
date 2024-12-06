const horas = document.querySelector('.horas');
const minuto = document.querySelector('.minutos');
const segundo = document.querySelector('.segundos');

const relogio = setInterval(()=>{
    let dateToday = new Date();
    let hr =dateToday.getHours();
    let min =dateToday.getMinutes();
    let seg =dateToday.getSeconds();
    if(hr<10) hr = '0'+hr;
    if(min<10) min = '0'+min;
    if(seg<10) seg = '0'+seg;
    horas.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;
});