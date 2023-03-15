const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const bars = document.getElementsByClassName("bar");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  if (hamburger.innerHTML === "❌") {
    hamburger.innerHTML = `
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
    `;
  } else {
    hamburger.innerHTML = "❌";
  }
});

// section scroll
const links = document.querySelectorAll(".nav-links a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.classList.toggle("show");
    if (hamburger.innerHTML === "❌") {
      hamburger.innerHTML = `
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      `;
    } else {
      hamburger.innerHTML = "❌";
    }
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// bio text
const typeText = document.getElementById("bio-text");
const text =
  "AKSHAY CHAVAN is a talented NodeJS Backend Developer with expertise in Node.js, Express.js, Mongo db, and Mongoose. With a strong foundation in computer science, he is currently associated with Masai School and has extensive experience in developing scalable and efficient back-end systems using Node.js. His expertise in these technologies and his passion for coding make him a valuable asset to any team.";

let i = 0;
let br = i;
function typing() {
  if (i < text.length) {
    typeText.innerHTML += text.charAt(i);
    i++;
    if (text[i] === " ") {
      br++;
    }

    if (br === 10) {
      typeText.innerHTML += `<br>`;
      br = 0;
    }
    let interval = setTimeout(typing, Math.floor(Math.random() * 10) + 30);
    if (i === text.length) {
      clearInterval(interval);
    }
  }
}
window.onload = () => {
  typing();
};
