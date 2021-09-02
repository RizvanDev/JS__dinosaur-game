"use strict"

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
const dinoStart = document.querySelector('.dinoStart');

const btn = document.querySelector('.jump-btn');

function jump() {
   if (dino.classList != 'jump') {
      dino.classList.add('jump');
   }
   setTimeout(function () {
      dino.classList.remove('jump');
   }, 610)
};

btn.addEventListener('click', function (event) {
   jump();
});

let isAlife = setInterval(function () {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
   let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue('left'));

   if (cactus2Left < 125 && cactus2Left > 0 && dinoTop >= 362) {
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

   if (caveElemenStyle == 700) {
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
         modalwp.style.top = '17%';
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


function doNumbers(number) {

   let startModal = document.querySelector('.start__modal');
   let startNumbers = document.querySelector('.start__numbers');
   let gameTitle = document.querySelector('.game__title');
   let gameForm = document.querySelector('.gameForm');

   startNumbers.innerHTML = number;

   if (number == 3) {
      startNumbers.style.color = 'skyblue';
   } else if (number == 2) {
      startNumbers.style.color = 'lightgreen';
   } else if (number == 1) {
      startNumbers.style.color = 'red';
   } else if (number == 0) {
      startNumbers.style.color = 'sienna';
      startNumbers.innerHTML = `Let's Go !`;
      startNumbers.style.fontSize = '90px';
      startModal.style.animationPlayState = 'paused';
   } else if (number == -1) {
      startModal.style.top = '48%';
      startModal.style.height = '0';
      startNumbers.style.display = 'none';
      gameForm.style.top = '300px';
      gameTitle.style.marginTop = '100px';
      dinoStart.style.left = '0';
      return false;
   };

   setTimeout(doNumbers, 1100, --number);

};

setTimeout(doNumbers, 390, 3);