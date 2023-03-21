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
const links = document.querySelectorAll(".nav-links>li>a");
let c = 0;
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    c++;
    if (link.getAttribute("href") == "./images/Akshay-Chavan-Resume.pdf") {
      return;
    }
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
  "An Ambitious Node Back End Developer. Have more than 1200 plus hours of coding experience and have the capabilities of writing web pages using both Front End Technologies as well as Back End Technologies. Solved more than 600 Data Structures and Algorithms Questions. Looking for a job opportunity in Technology Driven Organization that will enhance one's Carrier and showcase one's Skills.";

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

const header = document.querySelector("header");
header.style.transition = "all 0.5s ease";

window.onload = () => {
  typing();
  if (window.pageYOffset == 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "#425664";
  }
};

window.onscroll = () => {
  // console.log(window.pageYOffset);
  if (window.pageYOffset > 0) {
    header.style.backgroundColor = "#425664";
  } else {
    header.style.backgroundColor = "transparent";
  }
};

// resume download and view
const resume = document.querySelectorAll(".resume-btn-bar");
resume.forEach((btn) => {
  btn.addEventListener("click", () => {
    window.open("./images/Akshay-Chavan-Resume.pdf", "_blank");
  });
});

// github calender
GitHubCalendar(".calendar", "akshaychavan010101", { responsive: true });

const calendar = document.querySelector(".calendar");
calendar.style.backgroundColor = "black";
calendar.style.borderRadius = "10px";
calendar.style.padding = "1rem";
calendar.style.marginTop = "1rem";

// sending mail

const sendMail = async (event) => {
  event.preventDefault();
  const form = document.querySelector("form");
  console.log(form);
  let formdata = new FormData(form);
  let actualdata = Object.fromEntries(formdata);
  const { name, email, subject, message } = actualdata;
  const Mailchecker = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!name || !email || !subject || !message) {
    alert("Please fill all the fields");
  } else if (!Mailchecker.test(email)) {
    alert("Please enter a valid email");
  } else {
    const res = await fetch("https://lilac-horse-vest.cyclic.app//sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(actualdata),
    });
    const data = await res.json();
    console.log(data);
  }
};
