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

// scroll down with delay
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


// all page modals
var modals = document.querySelectorAll('.modal');

// [START] CERTIFICATIONS MODAL

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

// [END] CERTIFICATIONS MODAL


// [START] CASE STUDIES MODAL

// create references to the modal...
// var modal_case = document.getElementById('myModal_case');
// to all cases -- note I'm using a class!
var cases = document.getElementsByClassName('myCases');
// the image in the modal
var modalCaseImg = document.getElementById("caseImg");
// and the caption in the modal
// var captionText = document.getElementById("caption");

// Go through all of the cases with our custom class
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

// [END] CASE STUDIES MODAL

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}



// [START] CASE STUDIES MODAL

// Get the button that opens the modal
//var btn = document.querySelectorAll("button.modal-button");

// All page modals
//var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
//for (var i = 0; i < btn.length; i++) {
 //btn[i].onclick = function(e) {
   // e.preventDefault();
    //modal = document.querySelector(e.target.getAttribute("href"));
    //modal.style.display = "block";
 //}
//}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
  //  if (event.target.classList.contains('modal')) {
    // for (var index in modals) {
      //if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     //}
   // }
//}

// [END] CASE STUDIES MODAL
