const btnArrow = document.getElementById('btnScroll');
const imgBtn = document.querySelector('.arrow');
const firstTxt = document.querySelector('.visible');
const secondTxt = document.querySelector('.invisible');
let isArrow1 = true;

btnArrow.addEventListener('click', function() {
    if (isArrow1) {
        firstTxt.className = 'invisible';
        secondTxt.className = 'visible';
        imgBtn.src = '../assets/arrow2.png';
        isArrow1 = false; 
    } else {
        firstTxt.className = 'visible';
        secondTxt.className = 'invisible';
        imgBtn.src = '../assets/arrow1.png';
        isArrow1 = true; 
    }
});

const btnActions = document.querySelectorAll('.btnAction');
let isUnblocked = true;

btnActions.forEach(btnAction => {
    btnAction.addEventListener('click', function() {
        if (isUnblocked) {
            btnAction.innerHTML = 'ATIVAR';
            isUnblocked = false; 
        } else {
            btnAction.innerHTML = 'DESATIVAR';
            isUnblocked = true; 
        }
    });
});
