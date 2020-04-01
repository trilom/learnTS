// Typescript is very similar to node

// You are able to use node commands just like you would expect in javascript
console.log('hello')

// Prints hello

// this also prints hello again
if (true === true) {
  console.log('hello again')
}

// Package.json looks like the following

/**
{
  "scripts": {
    "build": "yarn && tsc -p ../../ --outDir .",
    "start": "tsc-watch -p ../../ --outDir . --onSuccess \"node index.js\""
  },
  "devDependencies": {
    "tsc-watch": "^4.2.3"
  }
}
 */

// our start command will run tsc-watch
// this is the tsc program which compiles our typescript code into javascript
// our output is in our current directory
// tsc-watch allows us to run a command if our compilation succeeds

// console.log(no)    //  UNCOMMENT THIS LINE WILL PRODUCE AN ERROR

// the variable named no doesn't exist, so there is an error
const no = 'Define no'
console.log(no) // this fixes it
