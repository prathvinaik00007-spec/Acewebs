/* -------------------------------------------------
   NAVBAR ACTIVE HIGHLIGHT
--------------------------------------------------*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop;
    if (pageYOffset >= top - 200) current = sec.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* -------------------------------------------------
   PROJECT POPUP MODAL
--------------------------------------------------*/
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

const projectInfo = {
  1: {
    title: "Portfolio Layout",
    desc: "A clean beginner portfolio layout practice."
  },
  2: {
    title: "Landing Page Concept",
    desc: "A simple landing page learning project."
  },
  3: {
    title: "Restaurant Mockup",
    desc: "A menu and gallery styled layout concept."
  }
};

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project");
    modalTitle.textContent = projectInfo[id].title;
    modalText.textContent = projectInfo[id].desc;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

/* -------------------------------------------------
   SKILL BAR ANIMATION
--------------------------------------------------*/
let skillsStarted = false;
window.addEventListener("scroll", () => {
  const skillsPos = document.getElementById("skills").getBoundingClientRect().top;
  if (skillsPos < window.innerHeight - 100 && !skillsStarted) {
    skillsStarted = true;
    document.querySelectorAll(".bar-fill").forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }
});

/* -------------------------------------------------
   PARTICLES BACKGROUND
--------------------------------------------------*/
particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#00ff99"},
    "shape": {"type": "circle"},
    "opacity": {"value": 0.5, "random": true},
    "size": {"value": 4, "random": true},
    "move": {"enable": true, "speed": 2.3},
    "line_linked": {"enable": true, "color": "#00ff99"}
  },
  "interactivity": {
    "events": {
      "onhover": {"enable": true, "mode": "repulse"},
      "onclick": {"enable": true, "mode": "push"}
    }
  }
});

/* -------------------------------------------------
   CURSOR NEON TRAIL
--------------------------------------------------*/
const canvas = document.getElementById("cursorCanvas");
const c = canvas.getContext("2d");
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener("mousemove", e => {
  for (let i = 0; i < 4; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 4,
      speedY: (Math.random() - 0.5) * 4
    });
  }
});

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.x += p.speedX;
    p.y += p.speedY;
    p.size *= 0.95;

    c.fillStyle = "#00ff99";
    c.beginPath();
    c.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    c.fill();

    if (p.size < 0.5) particles.splice(i, 1);
  }
}

function animateParticles() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* -------------------------------------------------
   FOOTER YEAR AUTO UPDATE
--------------------------------------------------*/
document.getElementById("year").textContent = new Date().getFullYear();
