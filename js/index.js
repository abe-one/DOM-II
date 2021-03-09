// Your code goes here

// functions

function testEvent(event) {
  console.log(`it works, in theory`);
}

function prevDefaultClick(each) {
  each.addEventListener(`click`, function (event) {
    event.preventDefault();
    console.log(`No ${event.target.textContent} for you!`);
  });
}

// ^           BUG: returns as many times as there are links ^^

// Variables

let main_nav = document.querySelector(".main-navigation");
// // console.log(main_nav);
// let main_nav_links = Array.from(main_nav.links);

let home_div = document.querySelector(".home");

// Prevent links
Array.from(document.links).forEach(prevDefaultClick);

// Nested similar events

main_nav.addEventListener(`mouseover`, testEvent);
