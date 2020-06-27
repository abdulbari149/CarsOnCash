let imageSlider = document.querySelector(".product");
let images = document.querySelectorAll(".product img");
let counter = 1;
let btnNext = document.querySelector("#nextBtn");
let btnPrev = document.querySelector("#previousBtn");
let slideWidth = images[0].getBoundingClientRect().width;

imageSlider.style.transform = "translateX(" + -slideWidth * counter + "px)";

btnNext.addEventListener("click", (e) => {
  if (counter >= images.length - 1) return;
  imageSlider.style.transition = "transform 2s ease-in-out";
  counter++;
  imageSlider.style.transform = "translateX(" + -slideWidth * counter + "px)";
  imageSlider.style.transition = "transform 2s ease-in-out";
  console.log(counter);
});

btnPrev.addEventListener("click", (e) => {
  if (counter <= 0) return;
  imageSlider.style.transition = "transform 2s ease-in-out";
  counter--;
  imageSlider.style.transform = "translateX(" + -slideWidth * counter + "px)";
  console.log(counter);
});

imageSlider.addEventListener("transitionend", () => {
  if (images[counter].id === "last-clone") {
    imageSlider.style.transition = "none";
    counter = images.length - 2;
    imageSlider.style.transform = "translateX(" + -slideWidth * counter + "px)";
  }
  if (images[counter].id === "first-clone") {
    imageSlider.style.transition = "none";
    counter = images.length - counter;
    imageSlider.style.transform = "translateX(" + -slideWidth * counter + "px)";
  }
});
