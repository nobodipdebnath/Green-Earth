let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "0.5s";
  } else if (currentScroll < lastScroll) {
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "0.5s";
  }

  lastScroll = currentScroll;
});


const buttons = [
  "all-tree",
  "fruit-tree",
  "flower-tree",
  "shade-tree",
  "medicinal-tree",
  "timber-tree",
  "evergreen-tree",
  "ornamental-tree",
  "bamboo-tree",
  "climbers-tree",
  "aquatic-tree",
];

const containers = [
  "fruit-container",
  "flower-container",
  "shade-container",
  "medicinal-container",
  "timber-container",
  "evergreen-container",
  "ornamental-container",
  "bamboo-container",
  "climbers-container",
  "aquatic-container",
];

function showSection(activeId) {
  containers.forEach((container) => {
    const element = document.getElementById(container);
    if (element) element.classList.add("hidden");
  });

  if (activeId === "all-tree") {
    containers.forEach((container) => {
      const element = document.getElementById(container);
      if (element) element.classList.remove("hidden");
    });
  } 
  else {
    const sectionId = activeId.replace("-tree", "-container");
    const section = document.getElementById(sectionId);
    if (section) section.classList.remove("hidden");
  }

  buttons.forEach((btn) => {
    const button = document.getElementById(btn);
    if (!button) return;

    if (btn === activeId) {
      button.classList.add("btn-bg", "text-white");
      button.classList.remove("text-color", "header-bg");
    } else {
      button.classList.remove("btn-bg", "text-white");
      button.classList.add("text-color", "header-bg");
    }
  });
}

buttons.forEach((btn) => {
  const button = document.getElementById(btn);
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(btn);
    });
  }
});

