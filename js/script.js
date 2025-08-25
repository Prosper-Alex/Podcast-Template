document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

 // Dropdown functionality 
document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// Disable draggable attribute on all images
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("draggable", "false");
  img.addEventListener("dragstart", (e) => e.preventDefault());
});
