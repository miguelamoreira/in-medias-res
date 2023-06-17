import * as User from "../model/user_model.js";

function navbarView() {
    const navbar = document.querySelector('nav');
    let result = '';
    if (User.isLogged()) {
        result = `
        <button id="btnMenu"><img src="../assets/botoes/menu_antes.png" class="img menu mb-1"></button>
        <button id="btnLogOut"><img src="../assets/botoes/logout_antes.png" class="img logout mb-1"></button>
        `
    }
    navbar.innerHTML = result;

    const btnMenu = document.getElementById('btnMenu');
    btnMenu.addEventListener('click', function() {
        location.href = 'menu.html';
    })

    const btnLogOut = document.getElementById('btnLogOut');
    btnLogOut.addEventListener('click', function() {
        User.logout();
        location.href = 'menu.html';
    })
};

navbarView();



