let rooms;

export function init() {
    rooms = localStorage.rooms ? JSON.parse(localStorage.rooms) : [];
}

export class Room {
    id = '';
    name = '';
    image = '';
    challenges = [];

    constructor(id, name, image, challenges) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.challenges = challenges;
    }
}

export function roomCodeExists() {
    return sessionStorage.getItem('roomCode') ? true : false;
}

export function getRoomCode() {
    return JSON.parse(sessionStorage.getItem("roomCode"));
}

export function getUserCode() {
    return JSON.parse(sessionStorage.getItem("userCode"));
}

export function deleteRoomCodes() {
    sessionStorage.removeItem('roomCode');
    sessionStorage.removeItem('userCode');
}