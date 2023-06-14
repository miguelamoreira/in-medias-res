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

    if (User.isLogged()) {
        const userInfo = User.getUserLogged();
        document.querySelector('#perfilUser').innerHTML = userInfo.username;
        document.querySelector('#perfilTempo').innerHTML = userInfo.time;
        document.querySelector('#perfilPins').innerHTML = userInfo.pins;
    }
    
    if (document.getElementById('btnScroll')) {
        const firstTxt = document.querySelector('.visible');
        const secondTxt = document.querySelector('.invisible');
        let isArrow1 = true;
        document.getElementById('btnScroll').addEventListener('click', function() {
            if (isArrow1) {
                firstTxt.className = 'invisible';
                secondTxt.className = 'visible';
                document.querySelector('.arrow').src = '../assets/botoes/arrow2.png';
                isArrow1 = false; 
            } else {
                firstTxt.className = 'visible';
                secondTxt.className = 'invisible';
                document.querySelector('.arrow').src = '../assets/botoes/arrow1.png';
                isArrow1 = true; 
            }
        });
    }

    if (document.querySelectorAll('.btnAction')) {
        let isUnblocked = true;
        document.querySelectorAll('.btnAction').forEach(btnAction => {
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
    }

    function renderLeaderboard() {
        const table = document.querySelector('tbody')

        let students = User.getUsers().filter(user => user.type === 'Aluno' && user.time != 'N/A');
        students.sort((a, b) => {
            if (a.time < b.time) {
                return -1
            } else if (a.time > b.time) {
                return 1
            } else {
                return 0
            }
        })
        students.length = 5

        let result = ''
        for (let i = 0; i < 5; i++) {
            if (students[i] == null) {
                result += `
                <tr>
                    <td>${i+1}º</td>
                    <td></td>
                    <td></td>
                </tr>
                `
            } else {
                result += `
                <tr>
                    <td>${i+1}º</td>
                    <td>${students[i].username}</td>
                    <td>${students[i].time}</td>
                </tr>
                `
            }
        }
        table.innerHTML = result
    }

    if (location.href.includes('leaderboard.html')) {
        renderLeaderboard()
    }

    if (User.isLogged()) {
        const userInfo = User.getUserLogged();
        document.querySelector('#perfilUser').innerHTML = userInfo.username;
        document.querySelector('#perfilTempo').innerHTML = userInfo.time;
        document.querySelector('#perfilPins').innerHTML = userInfo.pins;
    }
}

userView();