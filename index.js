const pHora = document.querySelector("#ponteiroHora")
const pMinuto = document.querySelector("#ponteiroMinuto")
const pSegundo = document.querySelector("#ponteiroSegundo")

function atualizaPonteiro(){
    const now = new Date();

    const horas = now.getHours();
    const minutos = now.getMinutes();
    const segundos = now.getSeconds();

    const grausHoras = (horas / 12) * 360
    const grausMinutos = (minutos / 60) * 360
    const grausSegundos = (segundos / 60) * 360

    pHora.style.transform = `rotate(${grausHoras}deg)`;
    pMinuto.style.transform = `rotate(${grausMinutos}deg)`;
    pSegundo.style.transform = `rotate(${grausSegundos}deg)`;

}

setInterval(atualizaPonteiro, 1000)