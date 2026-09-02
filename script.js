function openGift() {

  const gift = document.getElementById("gift");

  const letter = document.getElementById("letter");


  gift.classList.toggle("open");

  letter.classList.toggle("show");


  if (gift.classList.contains("open")) {

    createHearts();

  }

}


function createHearts() {

  for (let i = 0; i < 30; i++) {

    const heart =
      document.createElement("div");


    heart.className = "heart";


    heart.innerHTML =
      ["❤️", "💕", "💖", "💗", "✨"]
      [Math.floor(Math.random() * 5)];


    heart.style.left =
      Math.random() * 100 + "vw";


    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";


    heart.style.animationDuration =
      (3 + Math.random() * 4) + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

      heart.remove();

    }, 7000);

  }

}