/** @format */

function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";
  //is not needed because of the typewriter effect, which will display the message as it is being generated.

  //import Typewriter from "typewriter-effect/dist/core";

  //ew Typewriter(poemElement, {
  //strings: ["Was bedächtlich Natur sonst unter viele verteilet"],
  // autoStart: true,
  //delay: 50
  //cursor: "",
  //loop: false,
  // });
  let typewriter = new Typewriter(poemElement, {
    autoStart: true,
    delay: 50,
    cursor: "",
  });

  typewriter
    .typeString("Was bedächtlich Natur sonst unter viele verteilet")
    .pauseFor(1000000) // basically "never delete"
    .start();
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
