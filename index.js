var typingEffect = new Typed(".multiText", {
  strings: ["Coder", "UI/UX Designer", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  return bubble;
}

function createBubbleUp() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble2");
  return bubble;
}

// Function to randomly generate bubble positions
function getRandomPosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate multiple bubbles from top to bottom
function generateBubbles() {
  const bubblesContainer = document.querySelector(".bubbles-container");
  const bubbleCount = 10; // Number of bubbles to generate

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = createBubble();
    const randomLeft = getRandomPosition(0, 100); // Random horizontal position
    const randomDelay = getRandomPosition(-10000, 5); // Random delay for animation

    bubble.style.left = randomLeft + "%";
    bubble.style.animationDelay = randomDelay + "s";

    bubblesContainer.appendChild(bubble);
  }
}

// Function to generate multiple bubbles from bottom to top
function generateBubblesUp() {
  const bubblesContainer = document.querySelector(".bubbles-container");
  const bubbleCount = 10; // Number of bubbles to generate

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = createBubbleUp();
    const randomLeft = getRandomPosition(0, 100); // Random horizontal position
    const randomDelay = getRandomPosition(-10000, 5); // Random delay for animation

    bubble.style.left = randomLeft + "%";
    bubble.style.animationDelay = randomDelay + "s";

    bubblesContainer.appendChild(bubble);
  }
}

generateBubbles();
generateBubblesUp();

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

document.querySelectorAll(".carousel").forEach(carousel =>{
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, ()=>{
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML("beforeend",
  `<div class="carousel__nav">
  ${buttonsHtml.join("")}
  </div>`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i)=>{
    button.addEventListener("click",()=>{
      items.forEach(item => item.classList.remove("carousel__item--selected"));
      buttons.forEach(button => button.classList.remove("carousel__button--selected")); 

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});



