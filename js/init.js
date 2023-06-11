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
            pins: 0,
            status: "Ativo",
            type: "Aluno",
            challenges: [],
          },
          {
            username: "joaozinho",
            email: "joaozinho@imr.com",
            password: "pass2",
            image: "../assets/avatares/Stitch.png",
            time: "00:00",
            pins: 0,
            status: "Ativo",
            type: "Professor",
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
