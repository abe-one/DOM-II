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

// function fadeTrans(event) {
//   event.preventDefault;
//   event.target.style.transparency = `(100--) / 100`;
// }

function changeColor(event) {
  event.target.style.color = `orange`;
}

function shrink(event) {
  event.target.style.maxWidth = `85%`;
}

function copyrightWarning(even) {
  alert(
    `Don't you see that this page is ${
      document.querySelector(`footer > p`).textContent
    }`
  );
}

function offlineWarning(event) {
  alert(
    `You are now offline. Refreshing will wreck everything but the html.index`
  );
}

function fontUp(event) {
  event.target.preventDefault;
  let y = event.deltaY;
  let current_size = window
    .getComputedStyle(event.target)
    .getPropertyValue(`font-size`);
  console.log(current_size);
  if (y < 0) {
    new_size = parseFloat(current_size) + 5;
    console.log(current_size);
  } else if (y > 0) {
    new_size = parseInt(current_size) - 5;
  }
  event.target.style.fontSize = `${new_size}px`;
}

// Drag and Drop

function drag(event) {
  event.dataTransfer.setData(`text`, event.target.src);
  //   console.log("is it working drag?");
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

let all_cent = 100;

let one_var = 1;

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

// Event listeners

document.querySelector(`h2`).addEventListener(`mouseover`, changeColor);

document.addEventListener(`copy`, copyrightWarning);

Array.from(document.querySelectorAll(`p`)).forEach((each) =>
  each.addEventListener(`wheel`, fontUp)
);

document.addEventListener("keydown", function (event) {
  if (event.key === `b`) {
    alert(`B, bu, bus?`);
  }
});

// Drag and Drop

intro_img.setAttribute(`draggable`, `true`);
intro_img.ondragstart = drag;
first_content_img.ondragover = allowDrop;
first_content_img.ondrop = drop;
// first_content_img.addEventListener(`ondrop`, function (event) {
//   alert(`Secret bus tour!!`);
// });
// first_content_img.style.border = `10px red solid`;

// Nested similar events

home_div.addEventListener(`dblclick`, userAlert);
intro_head.addEventListener(`dblclick`, stopProp);
intro_head.addEventListener(`dblclick`, specUserAlert);

// Prevent links
all_links.forEach(prevDefaultClick);

// Debuggery

all_imgs.forEach((each) => each.addEventListener(`click`, shrink));
