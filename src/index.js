/** @format */

//create function to display the poem in the HTML with the API response as input
function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  //let poemElement = document.querySelector("#poem");
  //poemElement.innerHTML = "";

  //build the API URL
  let instructionsInput = document.querySelector("#user-instructions"); //connect new class & id with the input field in the HTML
  let apiKey = "ef3aab353f2ado9faa8tccd552b00647";
  let prompt = `User instructios: Generate a German poem about ${instructionsInput.value}.`; //Write a poem in the style of Goethe about the beauty of nature.
  let context =
    "You are a poet who writes in the style of Goethe and other famous German poets of this time period. Your mission is to generate a 4 line poem in basic HTML. Do not use a title. Make sure to follow the user instructions."; // giving the AI a "persona" to write in a specific style, so that the output is more accurate and relevant to the user's input
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=$(prompt)}&context=${context}&key=${apiKey}`;

  console.log("generating poem...");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  // make call to the API with axios
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

//new Typewriter("#poem", {
//strings: ["Was bedächtlich Natur sonst unter viele verteilet"],
// autoStart: true,
//delay: 50
//cursor: "",
//loop: false,
// }); somehow doesn't work, so I use the "start" method instead of "strings" and "loop"

//let typewriter = new Typewriter(poemElement, {
//  autoStart: true,
//  delay: 50,
//  cursor: "",
//});

//typewriter
//.typeString("Was bedächtlich Natur sonst unter viele verteilet")
//.pauseFor(1000000) // basically "never delete"
//.start();
