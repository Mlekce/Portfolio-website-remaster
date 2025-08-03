 document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".portfolio__list-item");
    const projects = document.querySelectorAll(".portfolio__project");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("portfolio__list-item--active"));
        button.classList.add("portfolio__list-item--active");

        const selectedCategory = button.dataset.portfolioFilter;

        projects.forEach(project => {
          const projectCategory = project.dataset.category;
          const shouldShow = selectedCategory === "all" || selectedCategory === projectCategory;

          project.style.display = shouldShow ? "block" : "none";
        });
      });
    });
  });