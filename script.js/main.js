//ресурсы по типу Udemy или Coursera низкооплачиваемые курсы фронтенд

//https://www.w3schools.com/howto/howto_js_lightbox.asp сайт со слайдерами
    /*когда пишу скрипт в футере, в хэде ссылка <script type="text/javascript" src="main.js">>не нужна*/

//Смена цвета у слов // массив цветов
//Функции и переменные не должно называться одинаково для использования двух или ольше элементов
let colorNames = ["blue", "cyan", "red", "gold", "#d51e8f", "yellow", "orange", "white", "wheat"];

// функция поиска random-числа
const random = (min, max) => {
  max = colorNames.length - 1;
  const rand = min + Math.round(Math.random() * (max - min));
  return rand;
};

// найти элементы для изменения свойств
let paragraphs = document.getElementsByClassName("letters");

// менять цвет каждую секунду, присвоив каждому эл-ту массива paragraphs новое значение
setInterval(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = colorNames[random(0)];
  }
}, 2000);
console.log(colorNames);

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

//Исчезнавение и появление текста при клике на другой элиментможно так писать, как сделал я
const cardOff = document.querySelector('.cardOfFFilterArticle');

cardOff.addEventListener('click', () => {//function show
  const photoOff = document.querySelector('.filter-p-article__cardOff');//Можно спрятать и вернуть любой элемент 
  if (photoOff.style.display == "none") {
     photoOff.style.display = "block";
      return true;
  } else { // иначе он найден
    photoOff.style.display = "none";
     return false;
  }
  //alert('hi'); просто для проверки работы кода
});
///////

/*Сайдбар*/ 
/*function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}*/

/*Это не из примера, это я сам*/
const anim = document.querySelector('.w3-animate-righ');
anim.addEventListener("click", (event) => {
  anim.style.animation = "0.4s";
});
//////////

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
/*/Сайдбар*/ 

//LITBOX
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//Пока не работает Исчезнавение и появление светящегося текста при клике на другой элиментможно так писать, как сделал я
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
