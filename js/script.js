const dino = document.getElementById('dino');
const cactus1 = document.getElementById('cactus-1');
const cactus2 = document.getElementById('cactus-2');
const road = document.getElementById('road');
const road2 = document.getElementById('road-2');
const home = document.getElementById('home');
const homeAway = document.getElementById('home-away');
const cave = document.getElementById('cave');
const modal = document.querySelector('.modal');
const modalgg = document.querySelector('.modal-gg');
const modalwp = document.querySelector('.modal-wp');

const btn = document.querySelector('.jump-btn');

function jump() {
   if (dino.classList != 'jump') {
      dino.classList.add('jump');
   }
   setTimeout(function () {
      dino.classList.remove('jump');
   }, 400)
};

btn.addEventListener('click', function (event) {
   jump();
});

let isAlife = setInterval(function () {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
   let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue('left'));

   if (cactus2Left < 95 && cactus2Left > 0 && dinoTop >= 215) {
      cactus2.style.animationPlayState = "paused";
      cactus1.style.animationPlayState = "paused";
      home.style.animationPlayState = "paused";
      homeAway.style.animationPlayState = "paused";
      cave.style.animationPlayState = "paused";
      road.style.animationPlayState = "paused";
      road2.style.animationPlayState = "paused";
      modal.style.opacity = '1', modal.style.transition = '1.4s';
      dino.style.animationPlayState = 'paused', dino.style.transform = 'rotate(-75deg)', dino.style.transition = '0.2s';
   };

   let caveElemenStyle = parseInt(window.getComputedStyle(cave).getPropertyValue('left'));

   if (caveElemenStyle == 800) {
      cactus2.style.animationPlayState = "paused";
      cactus1.style.animationPlayState = "paused";
      home.style.animationPlayState = "paused";
      homeAway.style.animationPlayState = "paused";
      road.style.animationPlayState = "paused";
      road2.style.animationPlayState = "paused";
      dino.classList.remove('jump');
      dino.classList.add('dino-go-home');
      modalgg.style.opacity = '1', modalgg.style.transition = '1.2s ease-in';

      if (modalgg.style.opacity = '1') {
         modalwp.style.top = '7%';
      };
   };

   let dinoElementStyle = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));

   if (dinoElementStyle == 660) {
      dino.style.display = "none";
   };

}, 10);




let gameForm = document.querySelector('.gameForm');
let main = document.querySelector('.main');

document.querySelector('.gameForm__btn').onclick = play;

function play() {
   let input = document.querySelector('.gameForm__name').value;
   document.getElementById('playerName').innerHTML = input;
   gameForm.style.visibility = "hidden", gameForm.style.opacity = "0", gameForm.style.transition = "all 0.2s";
   main.style.display = "block";
}

