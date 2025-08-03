// PORTFOLIO PROJECT ZOOM - MODAL

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    e.preventDefault();
    let body = document.querySelector(".portfolio");
    let img = e.target.closest(".modal").getAttribute("data-modal");
    let title = e.target.closest(".modal").getAttribute("data-title");
    let elem = document.createElement("div");
    elem.innerHTML = `
    <div class="modal__window"> 
      <div class="modal__wrapper">
        <img src="${img}" alt="${title}" class="modal__img"/> 
        <p class="modal__title">
        <i >
          ${title}
        </i>
        </p>
        <button class="modal__close">x</button>
      </div>
    </div>
`;
    body.append(elem);
    elem.querySelector(".modal__close").addEventListener("click", () => {
      elem.remove();
    });

    elem.addEventListener("click", (e) => {
      if (e.target === elem) {
        elem.remove();
      }
    });

    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") {
        elem.remove();
        document.removeEventListener("keydown", escHandler);
      }
    });
  });
});
