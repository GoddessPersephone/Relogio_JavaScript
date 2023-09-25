const horasAtuais = document.querySelector('.hora')
const minutosAtuais = document.querySelector('.minuto')
const segundosAtuais = document.querySelector('.segundo')


const obterHora = () => {
    const date = new Date();
    return  {
    hora: date.getHours(),
    minuto: date.getMinutes(),
    segundo: date.getSeconds(),
     };
}
setInterval(() => {
    const { hora , minuto, segundo} = obterHora();
    horasAtuais.style.transform = `translate(0,-50%) rotate(${hora * 30}deg)`;
    minutosAtuais.style.transform = `translate(0,-50%) rotate(${minuto * 6}deg)`;
    segundosAtuais.style.transform = `translate(0,-50%) rotate(${segundo * 6}deg)`;


},1000)