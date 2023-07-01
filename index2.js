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