const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");
const form = document.querySelector("[data-demo-form]");

menuButton?.addEventListener("click", () => {
  const open = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.querySelector(".form-status").textContent =
    "Prototype only—your information has not been sent or stored.";
});
