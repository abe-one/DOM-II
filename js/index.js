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

// ^           BUG: returns as many times as there are links ^^

// Variables

let main_nav = document.querySelector(".main-navigation");

let all_links = Array.from(document.links);

let home_div = document.querySelector(".home");

let intro_head = document.querySelector(`.intro`);

// Prevent links
all_links.forEach(prevDefaultClick);

// Nested similar events

home_div.addEventListener(`dblclick`, userAlert);
intro_head.addEventListener(`dblclick`, stopProp);
intro_head.addEventListener(`dblclick`, specUserAlert);
