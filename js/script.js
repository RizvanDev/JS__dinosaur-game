
const dino = document.getElementById('dino');
const cactus1 = document.getElementById('cactus-1');
const cactus2 = document.getElementById('cactus-2');
const road = document.getElementById('road');
const road2 = document.getElementById('road-2');
const home = document.getElementById('home');
const homeAway = document.getElementById('home-away');
const cave = document.getElementById('cave');
const modal = document.querySelector('.modal');

document.addEventListener('click', function (event) {
   jump();
});
document.addEventListener('keydown', function (event) {
   jump();
});

function jump() {
   if (dino.classList != 'jump') {
      dino.classList.add('jump');
   }
   setTimeout(function () {
      dino.classList.remove('jump');
   }, 500)
};

let isAlife = setInterval(function () {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
   let cactus2Left = parseInt(window.getComputedStyle(cactus2).getPropertyValue('left'));

   if (cactus2Left < 58 && cactus2Left > 0 && dinoTop >= 148) {
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

}, 1);