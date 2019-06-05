# About

A working prototype of how a customer could assign a digital worker to tasks, based on a Sketch design. 

## Features

-Search bar <br>
-Task sections<br>
-Form for task name and description<br>
-Play icon - when clicked a progress bar and inspect icon appear<br>
-Inspect icon - when clicked gives user more info about task<br>
-Number of workers assigned out of 25 - plus or minus buttons to add or remove workers<br>
-Star buttons to rate priority of task - these can be clicked or unclicked to set priority<br>
-Settings icon - when clicked shows user a drop down of available actions

## To Run App

Clone this repo then run

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing App

### `npm test`

Launches the test runner in the interactive watch mode.

Test suite - Jest and Enzyme 

## Testing Accessibility

To test accessibility I ran a audit with Lighthouse in Chrome Dev Tools, to make sure the app passed the accessibility tests - [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

I added an ES Lint extension to check for accessibility best practices - [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

I also turned on the voiceover on my laptop and tabbed through the app to make sure everything was described correctly 