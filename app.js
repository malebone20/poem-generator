function showPoem(response) {
  if (response.data && response.data.answer) {
    const formattedPoem = response.data.answer.replace(/\n/g, "<br>");
    new Typewriter("#poem", {
      strings: [formattedPoem],
      autoStart: true,
      delay: 75,
      cursor: "",
      html: true,
    });
  } else {
    document.querySelector("#poem").textContent =
      "Sorry, no poem was generated.";
  }
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#input-field");
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and you love to write beautiful and emotional poems. Your poems are known for their vivid imagery and heartfelt expressions. Your mission is to generate a 5 lined poem.The lines should be beneath eachother. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(
    context
  )}&key=etc38b7c1eb0ao0943f30198bb3d0e65`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `✨ Generating poem about ${instructionsInput.value}...`;

  axios
    .get(apiUrl)
    .then(showPoem)
    .catch(function (error) {
      document.querySelector("#poem").textContent =
        "Error generating poem. Please try again.";
      console.error(error);
    });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
