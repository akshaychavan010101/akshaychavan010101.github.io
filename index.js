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

const header = document.querySelector("header");
header.style.transition = "all 0.5s ease";

window.onload = () => {
  if (window.pageYOffset == 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "#425664";
  }
};

window.onscroll = () => {
  // console.log(window.pageYOffset);
  const username = document.getElementById("user-detail-name");
  if (window.pageYOffset > 0) {
    username.style.display = "block";
    header.style.backgroundColor = "#425664";
  } else {
    username.style.display = "none";
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
GitHubCalendar(".react-activity-calendar", "akshaychavan010101", {
  responsive: true,
});

const calendar = document.querySelector(".react-activity-calendar");
calendar.style.backgroundColor = "black";
calendar.style.borderRadius = "10px";
calendar.style.padding = "1rem";
calendar.style.marginTop = "1rem";

// sending mail

const sendMail = async (event) => {
  event.preventDefault();
  const form = document.querySelector("form");
  let formdata = new FormData(form);
  let actualdata = Object.fromEntries(formdata);
  const { name, email, subject, message } = actualdata;
  const Mailchecker = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!name || !email || !subject || !message) {
    alert("Please fill all the fields");
  } else if (!Mailchecker.test(email)) {
    alert("Please enter a valid email");
  } else {
    console.log(actualdata);
    try {
      const res = await fetch(
        "https://eager-red-gaiters.cyclic.app//sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(actualdata),
        }
      );
      const data = await res.json();
      alert(data.msg);
    } catch (error) {
      alert("Something went wrong");
    }
  }
};

// skills section title
const skillsDiv = document.querySelectorAll("#skills-container>div");

const displaySkills = () => {
  for (let i = 0; i < skillsDiv.length; i++) {
    let targeted = skillsDiv[i].innerHTML;
    let skill = "Skill";
    if (i == 0) {
      skill = "HTML 5";
    } else if (i == 1) {
      skill = "CSS 5";
    } else if (i == 2) {
      skill = "Node";
    } else if (i == 3) {
      skill = "JavaScript";
    } else if (i == 4) {
      skill = "Express";
    } else if (i == 5) {
      skill = "Mongoose";
    } else if (i == 6) {
      skill = "MongoDB";
    } else {
      skill = "MySQL";
    }

    skillsDiv[i].addEventListener("mouseover", () => {
      skillsDiv[i].innerHTML = `<h2 class = "skills-name">${skill}</h2>`;
    });
    skillsDiv[i].addEventListener("mouseout", () => {
      skillsDiv[i].innerHTML = targeted;
    });
  }
};
displaySkills();
