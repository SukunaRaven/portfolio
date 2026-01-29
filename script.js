// HERO animations
gsap.to("#hero-title", { opacity: 1, duration: 1.2, y: -20 });
gsap.to("#hero-subtitle", { opacity: 1, duration: 1.2, delay: 0.3 });

// Projects data
const projects = [
  { title: "Moody", desc: "Finland Exchange Project", link: "projects/moody.html" },
  { title: "Natuurmoment", desc: "Natuurmonumenten project", link: "projects/natuurMoment.html" },
  { title: "Storyge", desc: "Cultural Game", link: "projects/storyge.html" },
  { title: "Camaro's", desc: "A Laravel project about Camaro's", link: "projects/camaros.html" },
];

const grid = document.getElementById("project-grid");

projects.forEach((p, i) => {
  const col = document.createElement("div");
  col.className = "column is-one-third";

  col.innerHTML = `
    <div class="neon-card">
      <h3 class="title is-4 neon-cyan">${p.title}</h3>
      <p>${p.desc}</p>
      <a href="${p.link}" class="neon-purple">View</a>
    </div>
  `;

  grid.appendChild(col);

  gsap.from(col, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: i * 0.2,
    scrollTrigger: col
  });
});
