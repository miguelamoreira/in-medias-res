// código baseado no exemplo BandsApp feito em aula

let users;

export function init() {
    users = localStorage.users ? JSON.parse(localStorage.users) : [];
}

export function add(username, email, password, password2) {
    if (users.some((user) => user.username === username)) {
        throw Error (`O username ${username} já se encontra a ser utilizado!`);
    } else if (users.some((user) => user.email === email)) {
        throw Error (`O email ${email} já se encontra a ser utilizado!`);
    } else if (users.some((user) => user.email === email)) {
        throw Error ('Palavra-passe incorreta!');
    } else if (password != password2) {
        throw Error ('As palavras-passe não correspondem!')
    } else {
        users.push(new User(username, password));
        localStorage.setItem("users", JSON.stringify(users));
    }
}

export function login(username, password) {
    const user = users.find(
      (user) => user.username === username && user.password === password);
    if (user) {
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
      return true;
    } else {
      throw Error("Invalid login!");
    }
  }

export function logout() {
    sessionStorage.removeItem("loggedUser");
}
  
export function isLogged() {
    return sessionStorage.getItem("loggedUser") ? true : false;
}
  
export function getUserLogged() {
    return JSON.parse(sessionStorage.getItem("loggedUser"));
}

class user {
    username = '';
    email = '';
    password = '';
    image = '';
    time = '';
    pins = '';
    status = '';
    type = '';

    constructor(username, email, password, image, time, pin, status, type) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
        this.time = time;
        this.pin = pin;
        this.status = status;
        this.type = type;
    }
}