
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

   if (cactus2Left < 58 && cactus2Left > 0 && dinoTop >= 238) {
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