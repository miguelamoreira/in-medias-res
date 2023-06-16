import * as User from "../model/user_model.js";

function userView() {
    User.init();

    function displayToast(message, isSuccess = false) {
        const toast = document.getElementById('errorToast');
        let result = `
          <div class="modal-header">
            <h4 class="modal-title">${isSuccess ? 'Success' : 'Error'}</h4>
          </div>
          <div class="modal-body">
            <p>${message}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btnClose border-0" data-bs-dismiss="modal">Close</button>
          </div>
        `;
        toast.innerHTML = result;
        $('#errorToast').toast('show');
      
        if (document.querySelector('.btnClose')) {
          document.querySelector('.btnClose').addEventListener('click', function() {
            $('#errorToast').toast('hide');
          });
        }
    }
      
    function login(email, password) {
        try {
        User.login(email, password);
        window.location.href = "menu.html";
        } catch (error) {
        displayToast(error.message);
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
            displayToast(error.message);
            console.error(error);
        }
        });
    });

    function register(username, email, password, password2) {
        try {
        User.add(username, email, password, password2);

        window.location.href = "inicio_sessao.html";
        } catch (error) {
        displayToast(error.message);
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
            displayToast(error.message);
            console.error(error);
        }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const formPass = document.getElementById('formPass');
        formPass.addEventListener('submit', function(e) {
            e.preventDefault();
            const userInfo = User.getUserLogged();
            let users = User.getUsers();
            let userIndex = users.findIndex(user => user.username === userInfo.username);
            const oldPass = document.getElementById('oldPass').value;
            const newPass = document.getElementById('newPass').value;
            const confirmPass = document.getElementById('confirmPass').value;
    
            try {
                User.changePassword(userInfo.username, oldPass, newPass, confirmPass);
                users[userIndex] = { ...users[userIndex], password: newPass }; 
                displayToast('Palavra-passe alterada com sucesso!');
                setTimeout(() => {location.href = 'perfil.html'}, 4000);
            } catch (error) {
                displayToast(error.message);
            }
    
            document.getElementById('oldPass').value = '';
            document.getElementById('newPass').value = '';
            document.getElementById('confirmPass').value = '';
        });
    });

    if (document.getElementById('btnPass')) {
        document.getElementById('btnPass').addEventListener('click', () => {
            location.href = 'alterar_passe.html';
        })
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

    function renderLeaderboard() {
        const table = document.querySelector('tbody')

        let students = User.getUsers().filter(user => user.type === 'Aluno' && user.time != 'N/A' && user.status === 'Ativo');
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

    if (User.isLogged() && location.href.includes('perfil.html')) {
        const userInfo = User.getUserLogged();
        const content = document.getElementById('content');
        let result = '';

        if (userInfo.type === 'Aluno') {
            result = `
            <table class="table borderless mx-auto position-relative top-50" style="width: 80%;">
                <thead>
                    <th>Tempo:</th>
                    <th>Pins:</th>
                </thead>
                <tbody>
                    <tr>
                        <td id="perfilTempo">00:00</td>
                        <td id="perfilPins">00</td>
                    </tr>
                </tbody>
            </table>
            `;
            content.innerHTML = result;
            document.querySelector('#perfilUser').innerHTML = userInfo.username;
            document.querySelector('#perfilTempo').innerHTML = userInfo.time;
            document.querySelector('#perfilPins').innerHTML = userInfo.pins;
        } else if (userInfo.type === 'Professor') {
            result = `
            <div class="d-flex flex-column">
                <div class="mt-3">
                    <button id="btnAti">GESTÃO DE<br>ATIVIDADES</button>
                </div>
                <div class="mt-3">
                    <button id="btnUsers">GESTÃO DE<br>UTILIZADORES</button>
                </div>
            </div>
            `;
            content.innerHTML = result;
            document.querySelector('#perfilUser').innerHTML = userInfo.username;
        };
    }

    if (document.getElementById('btnUsers')) {
        document.getElementById('btnUsers').addEventListener('click', () => {
            location.href = 'gestao_utilizadores.html';
        })
    }

    function manageUsers() {
        const list = document.querySelector('.list-users')

        let students = User.getUsers().filter(user => user.type === 'Aluno');
        let result = ''
        for (let student of students) {
            result += `
            <div class="d-flex flex-row align-items-center justify-content-between card-text mx-5 mb-3 action-fields user-action">
                <p class="username flex-fill">${student.username}</p>
            `
            if (student.status === 'Ativo') {
                result += '<button class="btnAction">DESATIVAR</button>'
            } else {
                result += '<button class="btnAction">ATIVAR</button>'
            }
            result += '</div>'
        }
        list.innerHTML = result

        document.querySelectorAll('.user-action').forEach(userAction => {
            let student = students.find(student => userAction.querySelector('p').innerHTML == student.username)
            console.log(userAction);
            userAction.querySelector('.btnAction').addEventListener('click', function() {
                console.log(student);
                if (student.status === 'Ativo') {
                    student.status = 'Inativo'
                    userAction.querySelector('.btnAction').innerHTML = 'ATIVAR'
                } else {
                    student.status = 'Ativo'
                    userAction.querySelector('.btnAction').innerHTML = 'DESATIVAR'
                }
            })
        });

        document.querySelector('#btnSave').addEventListener('click', () => {
            let users = User.getUsers()
            students.forEach(student => {
                let studentIndex = users.findIndex(user => user.username === student.username)
                users[studentIndex] = student
            })
            localStorage.setItem('users', JSON.stringify(users))
            displayToast('Dados guardados com sucesso!');
            setTimeout(() => {location.href = 'perfil.html'}, 4000);
        })
    }

    if (location.href.includes('gestao_utilizadores.html')) {
        manageUsers()
    }
}

userView();