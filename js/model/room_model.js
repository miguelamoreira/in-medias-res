let rooms;

export function init() {
    rooms = localStorage.rooms ? JSON.parse(localStorage.rooms) : [];
  }

class room {
    id = '';
    name = '';
    image = '';
    challenges = [];
    // pins = [];

    constructor(id, name, image, challenges) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.challenges = challenges;
        //this.pins = pins
    }
}