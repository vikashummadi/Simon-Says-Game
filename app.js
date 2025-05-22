let gameSeq = [];
let userSeq = [];


let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let currlevel = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  let currlevel = level;
  h3.innerText = `Level ${level}`;
  let random = Math.floor(Math.random() * 3);
  let randclr = btns[random];
  let btn = document.querySelector(`.${randclr}`);
  gameSeq.push(randclr);
  console.log(gameSeq);
  btnFlash(btn);
}
let head = document.querySelector(".head");
let h2 = document.createElement("h2");
head.insertBefore(h2, h3);

function check(index) {
  if (userSeq[index] === gameSeq[index]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  }
  else {
    h3.innerHTML = `GAME OVER! Your Score was <b>${level}</b><br>Press any key to start the game`;
    let highest = level;
    if (highest < level) {
      h2.innerHTML = `Highest Score ${level}`;
    }
    else {
      h2.innerHTML = `Highest Score ${highest}`;
    }

    document.querySelector("body").style.backgroundColor = "#F7374F";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "bisque";
    }, 150);
    reset();
  }
}


function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function btnPress() {
  let btn = this;
  btnFlash(btn);

  userClr = btn.getAttribute("id");
  userSeq.push(userClr);
  console.log(userSeq);
  check(userSeq.length - 1);

}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}