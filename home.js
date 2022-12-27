// Smooth scroll to anchor links
const anchors = document.querySelectorAll("a[href^='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Toggle mobile menu
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", function() {
  mobileMenu.classList.toggle("open");
});

// Form validation
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  if (name === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }
  if (email === "") {
    alert("Please enter your email.");
    emailInput.focus();
    return;
  }
  if (message === "") {
    alert("Please enter a message.");
    messageInput.focus();
    return;
  }
  form.reset();
  alert("Thank you for your message! We will get back to you as soon as possible.");
});
