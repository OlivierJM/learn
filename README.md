## Learn

This repo is aimed at helping beginners learn the basics of `Javascript`  by reading and following the given examples.

You are welcome to create an issue, if you have a question regarding what you are currently learning.

Questions and Comments, You can use [discussions here](https://github.com/OlivierJM/learn/discussions)

Introduction to Programming

- [Introduction to Computers and Programming](https://www.pearsonhighered.com/assets/samplechapter/0/3/2/1/0321537114.pdf)
- [A Gentler Introduction to Programming](https://www.freecodecamp.org/news/a-gentler-introduction-to-programming-1f57383a1b2c/)
- [Technical details for web application](https://softwareengineering.stackexchange.com/questions/46716/what-technical-details-should-a-programmer-of-a-web-application-consider-before)
- Learning to code https://medium.com/swlh/learning-to-code-45f7e1657c1e
- Naming https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/
- Lazy https://exceptionnotfound.net/be-the-laziest-programmer-you-can-be/
- Functions https://zellwk.com/blog/js-functions/
- Front-end developer handbook https://frontendmasters.com/books/front-end-handbook/2019/#1 (Very important)
- List of Hand picked Javascript reading materials https://github.com/twhite96/js-dev-reads/blob/master/README.md


Introduction to HTML

- [MDN Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [Intoduction to HTML & CSS](https://www.khanacademy.org/computing/computer-programming/html-css)


Introduction to Github

- Github Skills https://skills.github.com/
- Git and Github https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners
- Introduction to Git https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/ 

### How to use learn-js

To get best out of learn-js, you will need to clone the repo, install the dependencies (`babel` and `jest`) .

### Requirements
- Nodejs ˆ8.10
- Latest version of Npm or Yarn
- Access to a terminal
- Being able to read English

### Get Started
 Start by cloning this repo

`git clone https://github.com/OlivierJM/learn-js.git`

`cd learn-js`

`yarn` or `npm install`

If you are starting from the beginning, follow the order mentioned **here**
when you are done in each file run the test to check if you have done It correctly.
`yarn run test` or 	`npm run test`


### Structure order

The following is the structure in the way it should be followed by a beginner
```bash

├── intro
│   └── intro.js
├── datatypes
│   ├── datatypes.js
│   └── datatypes.test.js
├── variables
│   ├── variable.test.js
│   └── variables.js
├── operators
│   ├── operators.js
│   └── operators.test.js
├── arrays
│   ├── arrays.js
│   └── arrays.test.js
├── condititios
│   ├── condition.js
│   └── condition.test.js
├── loops
│   ├── loops.js
│   └── loops.test.js
├── objects
│   ├── objects.js
│   └── objects.test.js
├── functions
│   ├── functions.js
│   └── functions.test.js
├── prototypes
│   ├── inheritance.js
│   └── inheritance.test.js
├── ES6-ES8
│   ├── es-future.js
│   └── es-future.test.js
├── DOM

```

### For Contributors

Fork this repo and check for issues and see which ones you can work on, you are also welcome to create issues where you see necessary.
When you start working on a specific issue kindly assign it to yourself for clearance's sake.

#### Good Setup to first time contributors

check for the issues that are labeled `good-first-issue` or `help-wanted`

Fork the repo and Clone the forked repo

`git clone https://github.com/your-github-username/learn-js`

Set up the remote version

`git remote add upstream https://github.com/OlivierJM/learn-js`

verify that you have added and you have 2 remotes

`git remote -v`

- **origin** should point to your fork
- **upstream** should point to this repo

To Keep your fork up to date, do the following and make sure you do it everytime you want to push

`git pull upstream master`

After making changes on a specific branch, push your changes
Always remember to create a specific branch that describes the issue you are working, and create a pull-request against the master of thisrepo.

`git push origin your_branch_name`

Then create a Pull Request from here, we will take a look at it and merge it as soon as we can.


