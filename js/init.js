initdata();

function initdata() {
    if (!localStorage.users) {
        const users = [
          {
            username: "joca",
            email: "joca@imr.com",
            password: "pass1",
            image: "../assets/avatares/Stitch.png",
            time: "05:00",
            pins: 7,
            status: "Ativo",
            type: "Aluno",
            challenges: [],
          },
          {
            username: "professor",
            email: "professor@imr.com",
            password: "pass2",
            image: "../assets/avatares/Boo.png",
            time: "N/A",
            pins: 0,
            status: "Ativo",
            type: "Professor",
            challenges: [],
          },
          {
            username: "miguel",
            email: "miguel@imr.com",
            password: "pass3",
            image: "../assets/avatares/Mickey.png",
            time: "03:15",
            pins: 6,
            status: "Ativo",
            type: "Aluno",
            challenges: [],
          },
          {
            username: "miguela",
            email: "miguela@imr.com",
            password: "pass4",
            image: "../assets/avatares/Pooh.png",
            time: "07:30",
            pins: 8,
            status: "Ativo",
            type: "Aluno",
            challenges: [],
          },
          {
            username: "sofia",
            email: "sofia@imr.com",
            password: "pass5",
            image: "../assets/avatares/Remy.png",
            time: "08:01",
            pins: 7,
            status: "Ativo",
            type: "Aluno",
            challenges: [],
          },
          {
            username: "joaozinho",
            email: "joaozinho@imr.com",
            password: "pass6",
            image: "../assets/avatares/Moana.png",
            time: "11:49",
            pins: 6,
            status: "Ativo",
            type: "Aluno",
            challenges: [],
          },
        ];
        console.log("inject");
        localStorage.setItem("users", JSON.stringify(users));
      }
}

document.querySelector("#btnStart").addEventListener("click", () => {
  location.href = "./html/menu.html";
})
