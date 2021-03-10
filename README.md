# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Instructions

### Task 1: Project Set Up

#### Set Up The Project With Git

**Follow these steps to set up and work on your project:**

- [1] Create a forked copy of this project.
- [1] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [1] Create a new branch: git checkout -b `<firstName-lastName>`.
- [1] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [1] Push commits: git push origin `<firstName-lastName>`.

#### Launch the project with npm

- [1] Navigate to the root of the project with your command line.
- [1] Run `npm install` to download any dependencies listed in the `package.json` file.
- [1] Run `npm start` to compile your project and launch a development server.
- [1] Navigate Chrome to the URL indicated in the output of the `npm start` command.

### Task 2: Create listeners for 10 types of events

- [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
  - [1]`mouseover`
  - [1]`copy`
  - [1]`offline`
  - [1]`keydown`
  - [1]`wheel`
  - `load`
  - `focus`
  - `resize`
  - `scroll`
  - `select`
  - [1]`click`
  - [1]`dblclick`
  - [1]`drag / drop`

Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

- [1] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
- [1] Stop the navigation items from refreshing the page by using `preventDefault()`

### Task 3: Stretch

- [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

#### Stretch assignment

- [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.

## Submission Format

**Follow these steps for completing your project.**

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` (student's Repo). **Please don't merge your own pull request**
