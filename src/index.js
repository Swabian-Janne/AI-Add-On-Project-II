/** @format */

function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";
  //is not needed because of the typewriter effect, which will display the message as it is being generated.

  //import Typewriter from "typewriter-effect/dist/core";

new Typewriter(poemElement, {
    strings: ["Was bedächtlich Natur sonst unter viele verteilet"],
    autoStart: true,
    delay: 50
    cursor: "",
    loop: false,
  });
  

}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
