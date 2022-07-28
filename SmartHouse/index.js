const secondNAv = document.querySelector(".second-nav");
const hamburger = document.querySelector(".hamburger");
const secondNAvSide = document.querySelector(".second-nav-side");
const times = document.querySelector(".fa-times");

hamburger.addEventListener("click", function () {
  secondNAv.style.right = "0px";
  secondNAvSide.style.display = "block";
});
times.onclick = () => {
  secondNAvSide.style.display = "none";
};
secondNAvSide.onclick = () => {
  if (event.target == secondNAvSide) {
    secondNAvSide.style.display = "none";
  }
};
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1";

  setTimeout(showSlides, 5000);
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const slider = $(".imgBox");
slider.slick({
  dots: true,
});

slider.on("wheel", function (e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick("slickNext");
  } else {
    $(this).slick("slickPrev");
  }
});

const cards = document.querySelectorAll(".card");
cards.forEach((p) => {
  p.addEventListener("click", () => {
    p.classList.toggle("Active");
  });
});

$(cards).on("click", function () {
  $(this).addClass("Active").siblings("div").removeClass("Active");
});

var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
