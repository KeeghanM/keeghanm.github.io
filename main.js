let typeString = document.querySelector(".typed").innerHTML;
document.querySelector(".typed").innerHTML = "";
let typeit = new TypeIt(".typed", {
  strings: typeString,
  speed: 25,
  lifelike: true,
});

typeit.go();
// console.log(typeit.getQueue().getItems());

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    typeit.destroy();
    document.querySelector(".typed").innerHTML = typeString;
    document.querySelector(".skip").remove();
  }
});
