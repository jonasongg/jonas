const cvwo = document.querySelector(".cvwo>a>div>img");

const startGif = () => {
  cvwo.src = "https://www.comp.nus.edu.sg/~vwo/assets/img/projects/2023-lbsa/singpass_2fa.gif";
};

const stopGif = () => {
  cvwo.src = "https://www.comp.nus.edu.sg/~vwo/assets/img/projects/2023-lbsa/review_monthly_statements_react.png";
};

const scrollContainer = document.getElementById("parallax");

const setScrollVar = () => {
  const htmlElement = document.documentElement;
  htmlElement.style.setProperty("--scroll", Math.min(1, scrollContainer.scrollTop / htmlElement.clientHeight));
}

scrollContainer.addEventListener("scroll", setScrollVar);
scrollContainer.addEventListener("resize", setScrollVar);

setScrollVar();

const toggleExpand = (e) => {
  // console.log(e.childNodes)
  const description = e.childNodes[5];
  description.classList.add("expand");
}

PowerGlitch.glitch('.glitch', { playMode: 'hover' })