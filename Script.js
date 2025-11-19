/* -------------------------------------
   SMOOTH SCROLL FOR NAV LINKS
--------------------------------------*/
document.querySelectorAll("nav ul li a, .nav-btn, .btn1, .btn2").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

/* -------------------------------------
   COUNTER ANIMATION
--------------------------------------*/
const counters = document.querySelectorAll(".counter");

function runCounters() {
  counters.forEach(counter => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const speed = 50;

    const update = () => {
      let current = +counter.innerText;
      let increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(update, 50);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}

/* -------------------------------------
   SKILL BAR ANIMATION
--------------------------------------*/
const skillBars = document.querySelectorAll(".bar-fill");

function fillSkillBars() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

/* -------------------------------------
   SECTION REVEAL (POP + FADE)
--------------------------------------*/
const revealElements = document.querySelectorAll(".section, .service-card");

function revealOnScroll() {
  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();
});

/* -------------------------------------
   RUN ON FIRST SCROLL INTO VIEW
--------------------------------------*/
let started = false;

window.addEventListener("scroll", () => {
  const skills = document.querySelector("#skills").getBoundingClientRect().top;
  const stats = document.querySelector(".stats").getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (skills < screenHeight && !started) {
    started = true;
    fillSkillBars();
  }

  if (stats < screenHeight) {
    runCounters();
  }
});

/* -------------------------------------
   PARTICLES BACKGROUND
--------------------------------------*/
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#00ff99" },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 4,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#00ff99",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 150, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

/* -------------------------------------
   AUTO UPDATE YEAR
--------------------------------------*/
document.getElementById("year").textContent = new Date().getFullYear();
