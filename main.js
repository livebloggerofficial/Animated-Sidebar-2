const labels = document.querySelectorAll(".custom-sidebar .label");

labels.forEach((label, index) => {
  label.style.transitionDelay = `${index * 50}ms`;
});
