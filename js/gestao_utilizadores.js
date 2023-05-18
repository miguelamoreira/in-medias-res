const btnActions = document.querySelectorAll('.btnAction');
let isUnblocked = true;

btnActions.forEach(btnAction => {
    btnAction.addEventListener('click', function() {
        if (isUnblocked) {
            btnAction.innerHTML = 'DESBLOQUEAR';
            isUnblocked = false; 
        } else {
            btnAction.innerHTML = 'BLOQUEAR';
            isUnblocked = true; 
        }
    });
});
