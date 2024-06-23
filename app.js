const celsi=document.querySelector('#celsius > input');
const fahren=document.querySelector('#fahrenheit > input');
const kel=document.querySelector('#kelvin > input');

function celsiusconvert(){
    const ctemp=parseFloat(celsi.value);
    const ftemp=(ctemp * (9/5)) +32;
    const ktemp=ctemp+273.15;
    fahren.value=ftemp;
    kel.value=ktemp;
}

function fahrenheitconvert(){
    const ftemp=parseFloat(fahren.value);
    const ctemp=(ftemp-32)*(5/9);
    const ktemp=ctemp+273.15;
    celsi.value=ctemp;
    kel.value=ktemp;
}

function kelvinconvert(){
    const ktemp=parseFloat(kel.value);
    const ctemp=ktemp-273.15;
    const ftemp=(ctemp*(9/5))+32;
    fahren.value=ftemp;
    celsi.value=ctemp;
}

celsi.addEventListener('input',celsiusconvert);
fahren.addEventListener('input',fahrenheitconvert);
kel.addEventListener('input',kelvinconvert);