
const $ = (id) => document.getElementById(id);
const zeroPadding = (num) => String(num).
padStart(2, '0');

function clock() {
    const today = new Date();  
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    const ampm = h < 11 ? 'AM' : 'PM';
 

    $('hours').innerHTML = zeroPadding(h);
    $('min').innerHTML = zeroPadding(m);
    $('sec').innerHTML = zeroPadding(s);
    $('ampm').innerHTML = zeroPadding(ampm);
  
}

setInterval(clock, 400);