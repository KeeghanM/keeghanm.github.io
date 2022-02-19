let typeString = document.querySelector(".typed").innerHTML;
let finished = false;
document.querySelector(".typed").innerHTML = "";
let typeit = new TypeIt(".typed", {
  strings: typeString,
  speed: 25,
  lifelike: true,
  afterComplete: async (typeit) => {
    finish();
  },
});

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    finish();
  }
});

function finish() {
  typeit.destroy();
  document.querySelector(".typed").innerHTML = typeString;
  document.querySelector(".skip").remove();
  scroll();
  finished = true;
}

function scroll() {
  window.scrollTo(0, document.body.scrollHeight);
  if (!finished) {
    setTimeout(scroll, 100);
  }
}

typeit.go();
scroll();
