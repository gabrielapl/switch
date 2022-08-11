const toggleButton = document.querySelector('.toggle');
const body = document.querySelector('body');
let theme = "";

toggleButton.addEventListener("click", () => {
  if (theme == "") {
    theme = 'dark';
    toggleButton.classList.add("toggle-dark");
    body.classList.add("body-container-light");

    return;
  }

  if (theme == "light") {
    theme = 'dark';
    toggleButton.classList.toggle("toggle-light");
    toggleButton.classList.toggle("toggle-dark");

    body.classList.add("body-container-light");
    return;
  };

  if (theme == "dark") {
    theme = "light";

    toggleButton.classList.toggle("toggle-dark");
    toggleButton.classList.toggle("toggle-light");

    body.classList.remove("body-container-light");
    return;
  };

});