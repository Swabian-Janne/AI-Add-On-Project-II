/** @format */

function generatePoem(event) {
  event.preventDefault();
  // let poemElement = document.querySelector("#poem");
  // poemElement.innerHTML = "Your German poem is being generated...";
  //is not needed because of the typewriter effect, which will display the message as it is being generated.

  //import Typewriter from "typewriter-effect/dist/core";

  new Typewriter("#poem", {
    strings: ["Was bedächtlich Natur sonst unter viele verteilet"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  // alert("Your German poem is being generated!");
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
