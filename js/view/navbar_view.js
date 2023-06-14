import * as User from "../model/user_model.js";

function navbarView() {
    const navbar = document.querySelector('nav');
    let result = '';
    if (User.isLogged()) {
        result = `<button id="btnLogOut"><img src="../assets/botoes/logout_antes.png" class="img mb-1"></button>`
    }
    navbar.innerHTML = result;

    const btnLogOut = document.getElementById('btnLogOut');
    btnLogOut.addEventListener('click', function() {
        User.logout();
        if (location.href.includes('perfil.html') || location.href.includes('alterar_passe.html')) {
            location.href = 'menu.html';
        } else {
            location.reload();
        }
    })
};

navbarView();



