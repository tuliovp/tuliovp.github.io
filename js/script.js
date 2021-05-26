// toggle in pure js
function toggleClass(el){
  el = document.querySelector(el);
  className = 'hidden';
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);
  
    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);
  
    el.className = classes.join(' ');
  }
}

// show email when clicked
function toggletext() {
  const x = document.getElementById("email");
  if (x.innerHTML === "Email") {
    x.innerHTML = "tulio.vasconcelos1@gmail.com";
  } else {
    x.innerHTML = "Email";
  }
}

// scroll down slowly
function scrollToSmoothly(pos, time) {
  var currentPos = window.pageYOffset;
  var start = null;
  if(time == null) time = 500;
  pos = +pos, time = +time;
  window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      var progress = currentTime - start;
      if (currentPos < pos) {
          window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
      } else {
          window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
      }
      if (progress < time) {
          window.requestAnimationFrame(step);
      } else {
          window.scrollTo(0, pos);
      }
  });
}

// all page modals
var modals = document.querySelectorAll('.modal');

// [START] certifications modal

// open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// thumbnail image controls
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

// [END] certifications modal

// [START] filtering buttons

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

// [END] filtering buttons

// [START] case modal

// create references to all cases -- note I'm using a class!
var cases = document.getElementsByClassName('myCases');
// the image in the modal
var modalCaseImg = document.getElementById("caseImg");

// go through all of the cases with our custom class
for (var i = 0; i < cases.length; i++) {
  var Case = cases[i];
  // and attach our click listener for this case.
  Case.onclick = function(evt) {
    modal_case = document.querySelector(evt.target.getAttribute("href"));
    modal_case.style.display = "block";
    modalCaseImg.src = this.src;
    // captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
   for (var index in modals) {
    if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
   }
  }
}

// get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// when the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// [END] case modal

// song player
document.getElementById("playAudio").addEventListener("click", function(){
  var audio = document.getElementById('Audio');
if(this.className == 'is-playing'){
  this.className = "";
  this.innerHTML = "Play"
  audio.pause();
}else{
  this.className = "is-playing";
  this.innerHTML = "Pause";
  audio.play();
}
});





