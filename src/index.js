function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "Nothing has happened in the past; it happened in the Now. Nothing will ever happen in the future; it will happen in the Now.",
    autoStart: true,
    delay: 40,
    cursor: null,
  });
}

let quoteFormElement = document.querySelector("#quotes-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
