// Your code goes here

// functions

function testEvent(event) {
  console.log(`it works, in theory`);
}

function stopProp(event) {
  event.stopPropagation();
}

function prevDefaultClick(each) {
  each.addEventListener(`click`, function (event) {
    event.preventDefault();
    console.log(`No ${event.target.textContent} for you!`);
  });
}

function userAlert(event) {
  alert("You've triggered an event, the machine was listening..");
}

function specUserAlert(event) {
  alert(`You've triggered a secret event, the machine listens anyway.`);
}

function drag(event) {
  event.dataTransfer.setData(`text`, event.target.src);
  console.log("is it working drag?");
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  console.log(data);
  event.target.setAttribute("src", data);
}

function allowDrop(event) {
  event.preventDefault();
}

// ^           BUG: returns as many times as there are links ^^

// Variables

let all_links = Array.from(document.links);

let all_imgs = Array.from(document.images);
console.log(all_imgs);

let main_nav = document.querySelector(".main-navigation");

let home_div = document.querySelector(".home");

let intro_head = document.querySelector(`.intro`);

let intro_img = intro_head.querySelector("img");

let first_content_img = document.querySelector(
  `.content-section > .img-content > img`
);

// Drag and Drop

intro_img.setAttribute(`draggable`, `true`);
intro_img.ondragstart = drag;
first_content_img.ondragover = allowDrop;
first_content_img.ondrop = drop;
// first_content_img.addEventListener(`ondrop`, function (event) {
//   alert(`Secret bus tour!!`);
// });
first_content_img.style.border = `10px red solid`;

// Nested similar events

home_div.addEventListener(`dblclick`, userAlert);
intro_head.addEventListener(`dblclick`, stopProp);
intro_head.addEventListener(`dblclick`, specUserAlert);

// Prevent links
all_links.forEach(prevDefaultClick);

// Debuggery

// all_imgs.forEach((each) => each.addEventListener(`ondrop`, testEvent));
