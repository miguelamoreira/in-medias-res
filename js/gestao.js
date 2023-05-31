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
