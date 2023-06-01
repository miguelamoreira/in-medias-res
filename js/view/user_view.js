import * as User from "../model/user_model.js";

function userView() {
    User.init();

    function login(email, password) {
        try {
        User.login(email, password);
        window.location.href = "menu.html";
        } catch (error) {
        alert(error.message);
        console.error(error); 
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const formLogin = document.getElementById('formLogin');
        formLogin.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPass').value;

        try {
            login(email, password);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
        });
    });

    function register(username, email, password, password2) {
        try {
        User.add(username, email, password, password2);
        window.location.href = "inicio_sessao.html";
        } catch (error) {
        alert(error.message);
        console.error(error); 
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const formRegister = document.getElementById('formRegister');
        formRegister.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('registerUser').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPass').value;
        const password2 = document.getElementById('registerPass2').value;

        try {
            register(username, email, password, password2);
        } catch (error) {
            alert(error.message);
            console.error(error);
        }
        });
    });
}

userView();
