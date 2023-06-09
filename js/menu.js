import {isLogged, getUserLogged, getUsers} from "./model/user_model.js"
import {displayToast} from "./view/user_view.js"

if (isLogged()) {
  document.querySelector('#txtLogin').innerHTML = 'PERFIL';
} else {
  document.querySelector('#txtLogin').innerHTML = 'LOGIN';
}

document.querySelector("#btnLogin").addEventListener("click", () => {
  if (isLogged()) {
    const btnPerfil = document.getElementById('txtLogin');
    const userInfo = getUserLogged();
    location.href = 'perfil.html';
  } else {
    location.href = "inicio_sessao.html";
  }
  })
  
document.querySelector("#btnTutorial").addEventListener("click", () => {
  location.href = "como_jogar.html";
})
  
document.querySelector("#btnLeaderboard").addEventListener("click", () => {
  location.href = "leaderboard.html";
})
  
document.querySelector("#btnPlay").addEventListener("click", () => {
  if (isLogged()) {
    let userInfo = getUserLogged();
    if (userInfo.status == 'Ativo') {
      let users = getUsers()
      if (userInfo.challenges.length < 4 || userInfo.challenges.length === 8) {
        userInfo.pins = 0;
        userInfo.challenges = []
        
        let userIndex = users.findIndex(user => user.username === userInfo.username)
        users[userIndex] = userInfo
        localStorage.setItem('users', JSON.stringify(users))
  
        location.href = "jogar_1.html";
      } else {
        userInfo = users.find(user => user.username === userInfo.username)
        location.href = "jogar_2.html";
      }
      sessionStorage.setItem('loggedUser', JSON.stringify(userInfo))
    } else {
      displayToast('Estás bloqueado. Contacta o teu professor para conseguires jogar.')
    }
  } else {
    displayToast('Precisas de estar autenticado para poder jogar!');
  }
})
  