/** @format */

function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  //new Typewriter(poemElement, {
  //strings: ["Was bedächtlich Natur sonst unter viele verteilet"],
  // autoStart: true,
  //delay: 50
  //cursor: "",
  //loop: false,
  // }); somehow doesn't work, so I use the "start" method instead of "strings" and "loop"

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
