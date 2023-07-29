const labels = document.querySelectorAll(".custom-sidebar .label");

labels.forEach((label, index) => {
  label.style.transitionDelay = `${index * 50}ms`;
});

const sidebarBtn = document.querySelector(".custom-sidebar .sidebar-btn");
const customSidebar = document.querySelector(".custom-sidebar");

sidebarBtn.addEventListener("click", () => {
  customSidebar.classList.toggle("active");
});

