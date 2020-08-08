let name = sessionStorage.getItem('name');
let score = sessionStorage.getItem('score');
console.log(score);

document.getElementById('greetings').innerText += name;
document.querySelector('.userScore').innerText += score + ' out of 50';