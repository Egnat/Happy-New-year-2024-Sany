//SLIDER Congratulation
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,11000);//время сменки фото

function nextSlide(){
  goToSlide(currentSlide+1);
}

function previousSlide(){
  goToSlide(currentSlide-1);
}

function goToSlide(n){
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');
//pauseButton.style.position = "absolute";
pauseButton.style.width = "80px";
pauseButton.style.height = "67px";
pauseButton.style.top = "185px";
pauseButton.style.left = "449px";
pauseButton.style.transform = "rotate(0deg)";
pauseButton.style.borderRadius = "115p";

function pauseSlideshow(){
  pauseButton.innerHTML = '&#9658;'; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide,11000);// время сменки фото
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var next = document.getElementById('next');
next.onclick = function(){
  pauseSlideshow();
  nextSlide();
};
//next.style.position = "absolute";
next.style.width = "56px";
next.style.height = "64px";
next.style.top = "217px";
next.style.left = "879px";

var previous = document.getElementById('previous');
previous.onclick = function(){
  pauseSlideshow();
  previousSlide(); 
};
//previous.style.position = "absolute";
previous.style.width = "56px";
previous.style.height = "64px";
previous.style.top = "217px";
previous.style.left = "30px";
//previous.style.transform = "rotate(180deg)"; ?width: 56px; height: 64px; top: 217px;
///СЛАЙДЕР

// Мигание текста
const textTwoSlide = document.querySelector('.textTwoSlide');
function blink() {
  const h2 = document./*getElementById*/querySelector('.textTwoSlide');//#hi
  h2.style.width = "800px";
   h2.style.fontSize = "30px";
  if (h2.style.visibility == "hidden") {
    h2.style.visibility = "visible";
    //textTwoSlide.style.color = "yellow"; //изменить цвет текста здесь можно
  } else {
    h2.style.visibility = "hidden";
  }
} 
/*можно сделать в штмл див или артикль id, но рекомендуют, чтобы id был 1, или class с текстом hi, найти его 
const article = document.getElementById, .querySelector('hi'); и включить сэт интервал*/
//window.setInterval(blink, 2000);
const time = setInterval(() => {
  const resultLoop = blink();
  if (resultLoop === true) { // если элемент найден
    clearInterval(time); // остановить setInterval
  }
}, 2000);  /*можно использовать для изменения фото если 
поставить ссылку с неограниченным колличеством фоток, на пример, 
'https://picsum.photos/100'*/

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNamesss = ["blue", "cyan", "red", "gold", "green", "yellow", "orange"];

// функция поиска random-числа
const randomss = (min, max) => {
  max = colorNamesss.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphsss = document.getElementsByClassName("textTwoSlide");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphsss.length; i++) {
    paragraphsss[i].style.color = colorNamesss[random(0)];
  }
}, 3000);
console.log(colorNamesss);

/* DROPDOUN When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.imgDropShevron')) {
    var dropdowns = document.getElementsByClassName("dropdownShevron-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/////////

//Исчезнавение и появление светящегося текста при клике на другой элиментможно так писать, как сделал я
/*const cardOf = document.querySelector('.cardOfffGlowText');

cardOf.addEventListener('click', () => {//function show
  const textOff = document.querySelector('.textOffGluwText');//Можно спрятать и вернуть любой элемент 
  if (textOff.style.display == "none") {
     textOff.style.display = "block";
      return true;
  } else { // иначе он найден
    textOff.style.display = "none";
     return false;
  }
  alert('hi');// просто для проверки работы кода
});*/
/////////