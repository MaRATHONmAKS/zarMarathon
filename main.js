const btn = document.getElementById('btn-kick');

const character = {
   name: 'Pikachu',
   defaultHP: 100,
   damageHP: 100,
   elHP: document.getElementById('health-character'),
   elProgressbar: document.getElementById('progressbar-character'),
};
const enemy = {
   name: 'Charmander',
   defaultHP: 100,
   damageHP: 100,
   elHP: document.getElementById('health-enemy'),
   elProgressbar: document.getElementById('progressbar-enemy'),
};


btn.addEventListener('click', () => {
   changeHP(random(20), character);
   changeHP(random(20), enemy);
});

// * функция инициализатор 
function init() {
   console.log("start game");
   renderHP(character);
   renderHP(enemy);
};
// * /

// * Изменение хп персонажей
function renderHPLife(hero) {
   hero.elHP.innerText = hero.damageHP + '/' + hero.defaultHP;
};
function renderProgrssbarHP(hero) {
   hero.elProgressbar.style.width = hero.damageHP + '%';
};
function renderHP(hero) {
   renderHPLife(hero);
   renderProgrssbarHP(hero);
};
// */

// * урон по герою
function changeHP(count, hero) {
   if (hero.damageHP < count) {
      hero.damageHP = 0;
      alert(hero.name + ' проирал!');
      btn.disabled = true;
   } else {
      hero.damageHP -= count;
   }

   renderHP(hero);
}
// * /

// * тут мы вычисляем наносимый урон нашими героями
function random(num) {
   return Math.ceil(Math.random() * num);
}
// * /




init();