const cvwo = document.querySelector("#cvwo>a>div>img");

const startGif = () => {
  cvwo.src = "./singpass_2fa.gif";
};

const stopGif = () => {
  cvwo.src = "./review_monthly_statements_react.png";
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
  const description = e.childNodes[5];
  description.classList.add("expand");
}

PowerGlitch.glitch('.glitch', { playMode: 'hover' })

const menuItems = document.querySelectorAll(".nav-links li");
const pill = document.querySelector(".nav-links .pill");

let currentActiveHash = 0, clicked = 0, isScrolling = false

const setPill = (item) => {
  const itemRect = item.getBoundingClientRect();
  const menuRect = item.parentElement.getBoundingClientRect();

  pill.style = `left: ${itemRect.left - menuRect.left - 10}px; width: ${itemRect.width + 20}px;`;
  menuItems.forEach(item => item.classList.remove("hover"));
  item.classList.add("hover");
}

scrollContainer.addEventListener("scroll", () => {
  let temp = Math.max([...menuItems]
    .map(item => document.querySelector(item.querySelector("a").hash).getBoundingClientRect().top)
    .findLastIndex(x => x < 10), 0)

  if (clicked === temp) isScrolling = false;

  if (currentActiveHash !== temp && !isScrolling) {
    currentActiveHash = temp
    setPill(menuItems[currentActiveHash])
  }
});

menuItems.forEach((item, i) => {
  item.addEventListener("mouseover", () => setPill(item));
  item.addEventListener("mouseout", () => setPill(menuItems[currentActiveHash]));
  item.addEventListener("click", (e) => {
    e.preventDefault();
    setPill(item);
    currentActiveHash = clicked = i;
    isScrolling = true;
    document.querySelector(item.querySelector("a").hash).scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("resize", () => setPill(menuItems[currentActiveHash]));

setPill(menuItems[0]);
