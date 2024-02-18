function showQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "0c9a9eb6fa633t1c3o446ff55ab61320";
  let context =
    "You are a motivational AI assistant and provide short motiviational quotes from the book Power of Now. Make sure the quotes are simple and short. Do not include the authors name";
  let prompt = `Generate a motivational quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let quoteElement = document.querySelector("#quote");

  quoteElement.innerHTML = "Generating quote...";

  axios.get(apiURL).then(showQuote);
}

let quoteFormElement = document.querySelector("#quotes-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
