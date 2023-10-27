let offset = 0;
const sliderline = document.querySelector(".slider_line");

document.querySelector(".slider_next").addEventListener("click", function () {
  offset = offset + 1000;
  if (offset > 2000) {
    offset = 0;
  }
  sliderline.style.left = -offset + "px";
});

document.querySelector(".slider_prev").addEventListener("click", function () {
  offset = offset - 1000;
  if (offset < 0) {
    offset = 2000;
  }
  sliderline.style.left = -offset + "px";
});
