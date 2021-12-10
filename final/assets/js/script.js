document.addEventListener("DOMContentLoaded", () => {
  let background = document.querySelector(".background");
  let bgImgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

  let currentIdx = 0;

  var anim1 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1800 / 1920,
    image1: `./assets/images/${bgImgs[0]}`,
    image2: `./assets/images/${bgImgs[1]}`,
    displacementImage: "./assets/images/distortion.jpg",
    hover: false
  });

  var anim2 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1800 / 1920,
    image1: `./assets/images/${bgImgs[1]}`,
    image2: `./assets/images/${bgImgs[2]}`,
    displacementImage: "./assets/images/distortion.jpg",
    hover: false
  });

  var anim3 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1800 / 1920,
    image1: `./assets/images/${bgImgs[2]}`,
    image2: `./assets/images/${bgImgs[3]}`,
    displacementImage: "./assets/images/distortion.jpg",
    hover: false
  });

  var anim4 = new hoverEffect({
    parent: document.querySelector(".background"),
    intensity: 0.3,
    imagesRatio: 1800 / 1920,
    image1: `./assets/images/${bgImgs[3]}`,
    image2: `./assets/images/${bgImgs[0]}`,
    displacementImage: "./assets/images/distortion.jpg",
    hover: false
  });

  let distortionAnimations = [
    anim1,
    anim2,
    anim3,
    anim4
  ];

  function startNextDistortionAnimation() {
    let prevIdx = currentIdx;
    currentIdx = (currentIdx + 1) % 4;
    distortionAnimations[prevIdx].next();
    
    setTimeout(() => {
      let canvas = background.querySelectorAll("canvas");
      background.appendChild(canvas[0]);
      distortionAnimations[prevIdx].previous();
    }, 1200);
  }

  const percentage = document.getElementById('percentage');
  const progressCircle = document.getElementById('progress-circle');
  let count = 0;

  setInterval(() => {
    count += 1;
    percentage.innerText = count;
    progressCircle.style.strokeDashoffset = `${238.76 - (238.76 * count) / 100}px`;

    if (count == 100) {
      count = 0;
      startNextDistortionAnimation()
    }
  }, 6000 / 100);

  const hamburger = document.getElementById('hamburger');
  const aside = document.getElementById('aside');
  const close = document.getElementById('close');

  hamburger.addEventListener('click', () => {
    aside.classList.toggle('show');
  });
 
  close.addEventListener('click', () => {
    aside.classList.toggle('show');
  });

})