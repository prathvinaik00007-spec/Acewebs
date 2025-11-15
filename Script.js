// Smooth scrolling for navbar links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Animate skill bars when visible
const bars = document.querySelectorAll(".bar-fill");

function animateBars() {
  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

window.addEventListener("scroll", () => {
  const skills = document.getElementById("skills");
  const rect = skills.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    animateBars();
  }
});
