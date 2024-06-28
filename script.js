let result = document.querySelector(".result");
let choice = document.querySelector(".choice");
const rock_btn = document.querySelector(".rock");
const paper_btn = document.querySelector(".paper");
const scissor_btn = document.querySelector(".scissors");
let computer_choice;
const rock = 0,paper = 1,scissor = 2;
const btns = document.querySelectorAll("button");
let player_img = document.querySelector(".player_img");
let computer_img = document.querySelector(".computer_img");
let player_name = document.querySelector(".player_name")
let computer_text = document.querySelector(".computer_text")
let p_score = 0, c_score = 0;
const winning_sound = new Audio("player_won.mp3");
const loosing_sound = new Audio("player_lose.mp3");

let p_name = window.prompt("Enter your name: ");
if (!p_name) {
  p_name="Player"
  player_name.innerText = p_name

}
else {
    player_name.innerText=p_name
}


const resetAudio = () => {
  winning_sound.pause();
  winning_sound.currentTime = 0;
  loosing_sound.pause();
  loosing_sound.currentTime = 0;
};

const update_p_score = () => {
  p_score++;
};

const update_c_score = () => {
  c_score++;
};

const update_score = () => {
  player_name.innerHTML = `<p>${p_name}: ${p_score}</p>`;
  computer_text.innerHTML = `<p>Computer: ${c_score}</p>`;
};

const update_img = (user_choice, computer_choice) => {
  let imgs = ["rock_image.png", "paper_image.png", "scissor_image.png"];
  player_img.src = imgs[user_choice];
  computer_img.src = imgs[computer_choice];
};

const playgame = (user_choice) => {
  resetAudio();
    result.innerText = "";
    computer_img.src = "rock_image.png";
    player_img.src = "rock_image.png";
  computer_choice = Math.floor(Math.random() * 3);
  if (user_choice === computer_choice) {
    setTimeout(() => {
      loosing_sound.play();
      result.innerText = `It's a Tie`;
      update_img(user_choice, computer_choice);
      update_score();
    }, 1000);
  }
  else if (
    (user_choice === rock && computer_choice === paper) ||
    (user_choice === paper && computer_choice === scissor) ||
    (user_choice === scissor && computer_choice === rock)
  )
  {
    update_c_score();
    setTimeout(() => {
      loosing_sound.play();
      result.innerText = `${p_name} lose`;
      update_img(user_choice, computer_choice);
      update_score();}, 1000);
  }
  else {
    update_p_score();
    setTimeout(() => {
      winning_sound.play();
      result.innerText = `${p_name} won`;
      update_img(user_choice, computer_choice);
      update_score();
  }, 1000);
  }
};

rock_btn.addEventListener("click", () => {
  playgame(rock);
});
paper_btn.addEventListener("click", () => {
  playgame(paper);
});
scissor_btn.addEventListener("click", () => {
  playgame(scissor);
});

btns.forEach((btn) => {
  btn.onclick = () => {
    choice.innerText = `${p_name} choose ${btn.className}`;
    player_img.classList.add("player_img_bounce");
    computer_img.classList.add("computer_img_bounce");
    setTimeout(() => {
      player_img.classList.remove("player_img_bounce");
      computer_img.classList.remove("computer_img_bounce");
    }, 1000);
  };
});
