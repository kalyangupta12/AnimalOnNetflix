const btn = document.querySelector(".play");
const closeIcon = document.querySelector(".close");
const trailerContainer = document.querySelector(".trailer");
const video = document.querySelector("video");
trailerContainer.classList.add("active");
const bgm = document.getElementById("bgm");
btn.addEventListener("click", () => {
  trailerContainer.classList.remove("active");
  video.play();
});

closeIcon.addEventListener("click", () => {
  trailerContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});

document.body.addEventListener("click",() => {
    bgm.play();
});
video.addEventListener("play",() => {
    bgm.pause();
});