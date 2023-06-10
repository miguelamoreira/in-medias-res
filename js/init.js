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
            challenges: 0,
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
            challenges: 0,
          },
        ];
        console.log("inject");
        localStorage.setItem("users", JSON.stringify(users));
      }
}

document.querySelector("#btnStart").addEventListener("click", () => {
  location.href = "./html/menu.html";
})
