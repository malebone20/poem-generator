function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["zulu poetry"],
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
