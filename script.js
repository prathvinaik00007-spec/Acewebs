/* -------------------------------------------------
   SMOOTH SCROLL NAVIGATION
--------------------------------------------------*/
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* -------------------------------------------------
   NAVBAR ACTIVE ON SCROLL
--------------------------------------------------*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* -------------------------------------------------
   COUNTERS
--------------------------------------------------*/
const counters = document.querySelectorAll(".counter");
let startedCount = false;

function runCounters() {
  counters.forEach(counter => {
    let target = +counter.dataset.target;
    let count = 0;
    let step = Math.ceil(target / 50);

    let interval = setInterval(() => {
      if (count < target) {
        count += step;
        counter.innerText = count;
      } else {
        counter.innerText = target;
        clearInterval(interval);
      }
    }, 50);
  });
}

/* -------------------------------------------------
   SKILL BARS ANIMATION
--------------------------------------------------*/
let skillStarted = false;

function fillSkillBars() {
  const bars = document.querySelectorAll(".bar-fill");
  bars.forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
}

/* -------------------------------------------------
   SCROLL REVEAL
--------------------------------------------------*/
const revealElements = document.querySelectorAll(".service-card, .project-card");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

  const skillsPos = document.querySelector("#skills").getBoundingClientRect().top;
  const statsPos = document.querySelector(".stats").getBoundingClientRect().top;

  if (!startedCount && statsPos < window.innerHeight - 150) {
    startedCount = true;
    runCounters();
  }

  if (!skillStarted && skillsPos < window.innerHeight - 150) {
    skillStarted = true;
    fillSkillBars();
  }
});

/* -------------------------------------------------
   PARTICLES BACKGROUND
--------------------------------------------------*/
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 90,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#00ff99" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5, "random": true
    },
    "size": {
      "value": 4, "random": true
    },
    "move": {
      "enable": true, "speed": 2.2
    },
    "line_linked": {
      "enable": true,
      "color": "#00ff99",
      "opacity": 0.45,
      "width": 1
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    }
  },
  "retina_detect": true
});

/* -------------------------------------------------
   UPDATE YEAR IN FOOTER
--------------------------------------------------*/
document.getElementById("year").textContent = new Date().getFullYear();
