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
        users.push(new user(username, email, password));
        localStorage.setItem("users", JSON.stringify(users));
    }
}

export function login(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password);
    if (user) {
      sessionStorage.setItem("loggedUser", JSON.stringify(user));
      return true;
    } else {
      throw Error("Dados incorretos!");
    }
}

export function changePassword(username, oldPass, newPass, confirmPass) {
    const user = users.find((user) => user.username === username);

    if (!user) {
        throw new Error(`O username ${username} não existe!`);
    } else if (user.password !== oldPass) {
        throw new Error('Palavra-passe incorreta!');
    } else if (newPass !== confirmPass) {
        throw new Error('As novas palavras-passe não correspondem!');
    }

    user.password = newPass;
    localStorage.setItem('users', JSON.stringify(users));
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

export function getUsers() {
    return JSON.parse(localStorage.users)
}

export const avatares = [
    'Stitch',
    'Mickey',
    'Moana',
    'Boo',
    'Pooh',
    'Remy'
]

class user {
    username = '';
    email = '';
    password = '';
    image = '';
    time = '';
    pins = '';
    status = '';
    type = '';
    challenges = [];

    constructor(username, email, password, image = '../assets/avatares/Stitch.png', time = 'N/A', pins = 0, status = 'Ativo', type = 'Aluno', challenges = []) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
        this.time = time;
        this.pins = pins;
        this.status = status; 
        this.type = type;
        this.challenges = challenges;
    }
}
