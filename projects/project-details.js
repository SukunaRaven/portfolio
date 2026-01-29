// PAGE ANIMATIONS
gsap.to(".fade-in-hidden", {
  opacity: 1,
  duration: 1.2,
  y: -20,
  stagger: 0.2
});

// ---- FILL PAGE ----
document.getElementById("project-title").textContent = exampleProject.title;
document.getElementById("project-subtitle").textContent =
  exampleProject.subtitle;
document.getElementById("project-image").src = exampleProject.image;
document.getElementById("project-description").textContent =
  exampleProject.description;

// Inject technologies
const techList = document.getElementById("tech-list");
exampleProject.tech.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  techList.appendChild(li);
});

// GitHub link
document.getElementById("github-link").href = exampleProject.github;
