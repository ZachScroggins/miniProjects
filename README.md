# miniProjects

A collection of small JavaScript projects, created with React, [Next.js](https://nextjs.org/) SSG, [Material-UI](https://material-ui.com/), and [Firebase Hosting](https://firebase.google.com/products/hosting). App uses cookies([react-cookie](https://github.com/reactivestack/cookies/tree/master/packages/react-cookie/)) to persist chosen color theme and light/dark mode preferences. All functional components with hooks except for pages/\_document.js.

## Color Changer

Change the color theme of the whole website. Pick from preset colors or enter hex code. Uses cookies to persist color choices and Context API to manage state. The color theme is integrated with custom SVG background I made in Adobe Illustrator and SVG from undraw.co. Used React.forwardRef() and [clsx](https://github.com/lukeed/clsx) to integrate SVG's with Material-UI theme colors.

## Task List

CRUD task list. Mark tasks as complete, add, update, and delete tasks.

## Calorie Tracker

CRUD calorie tracker. Keeps track of total calories. Add, update, and delete meals/calorie counts.

## Loan Calculator

Enter loan amount, interest rate, and term. Returns monthly payment, total payment, and total amount of interest.

## Joke Generator

Fetch Chuck Norris jokes with async/await from 3rd party API ([The Internet Chuck Norris Database API](http://www.icndb.com/api/)).
