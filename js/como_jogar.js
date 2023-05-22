const btnArrow = document.getElementById('btnScroll');
const imgBtn = document.querySelector('.arrow');
const info = document.querySelector('#card-info');
let isArrow1 = true;

btnArrow.addEventListener('click', function() {
    if (isArrow1) {
        info.innerHTML = 'Simultaneamente, tenta ajudar o escuteiro preferido da Pixar, o Russel, a encontrar os seus pins. Para além disso, procura resolver os desafios o mais rapidamente possível para poderes aparecer na leaderboard!'
        imgBtn.src = '../assets/arrow2.png';
        isArrow1 = false; 
    } else {
        info.innerHTML = 'Tenta escapar do universo cinematográfico da Disney e da Pixar através da resolução de desafios. Explora as salas de modo a encontrares os desafios nelas contidas e a aprenderes mais sobre estas produtoras e os seus projetos.'
        imgBtn.src = '../assets/arrow1.png';
        isArrow1 = true; 
    }
});
