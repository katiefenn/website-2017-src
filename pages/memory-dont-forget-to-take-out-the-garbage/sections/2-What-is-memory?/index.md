<!-- DON'T FORGET TO RECORD! -->
## What is memory? Why do we need it?
Before we can answer that, we need to learn about what memory is and why it is needed.

Memory is used to store instructions and data for computer programs. Early computers like the ENIAC and Colossus were programmed by rewiring their hardware, and consumed data for processing from punched tape. They were fast at breaking encrypted messages, but it would take weeks to re-program them to perform a different task.

![The Colossus computer](images/colossus.jpg)

Memory was introduced later to make re-programming computers more convenient. These "stored program computers" could also re-program themselves depending on the data stored in memory.

The memory used by modern-day computers, Random Access Memory, is lightning fast and can read and write data at an imperceptible speed.

![A stick of RAM in a computer motherboard](images/ram.jpg)

Web browsers and JavaScript manage memory on our behalf. The areas of memory it manages are called heaps.

### Memory and JavaScript
JavaScript assigns memory for us whenever we declare variables, a fancy name for "a stored value that can change". Declaration reserves space in memory for our variables. There are four ways of declaring variables:

`var functionScopedVariable`

`let blockScopedVariable`

`const blockScopedConstant`

`globalVariable = '...'`

JavaScript reserves areas of memory for declaring variables globally and inside scopes. If the heap is a farm, scopes are fields.

```
if () {

}

class {

}

while () {

}

for () {

}

switch () {

}

function() {

}
```

Scopes capture the variables outside of functions and blocks and make them available for use inside. Inside of a scope, you can re-declare variable names and protect variables from being written to by other functions. Most importantly, any variables declared and used only within the scope can be discarded when the function ends, allowing the memory they use to be freed.

`var`, `let` and `const` tell JavaScript to bind variables to the closest scope. Each one declares variables in different ways, so it's a great idea to read more about about [how](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let) [they](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) [work](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). Using these keywords inside of scopes means they can be safely discarded by JavaScript when the function ends. This is good because memory can be freed for variables we no longer need.

The fourth way of declaring a variable has important consequences for our code. When you assign a value to an un-declared variable, a new global variable is created. This is an easy mistake to make, and a common source of bugs. The global scope exists for the lifetime that our website is open in a browser, and as such these variables can never be automatically discarded by JavaScript.

JavaScript is our friend when it comes to the chore of allocating and freeing memory, but unless we are very careful, it will behave in ways we don't expect.

Once variables are declared, they can be assigned a value. You and I commonly call "=" the "equals sign", but its proper name in JavaScript is the "assignment operator".

![Assignment oprtators in JavaScript](images/assignment-operators.png)

In fact, all of these operators assign memory. They tell javascript to take a value from the code on the right, and assign it to a memory address described by the variable name on the left.

### Webassembly is the future
Webassembly is a new feature for allowing browsers to run languages other than JavaScript in your web pages. It makes it possible to run high-performance code written in languages like C, C++, or Rust in a browser, like this example from Mozilla of the Unreal engine animating a complex 3d scene in real-time.

<iframe width="560" height="315" src="https://www.youtube.com/embed/TwuIRcpeUWE" frameborder="0" allowfullscreen></iframe>

Check out Mozilla's article here: [https://hacks.mozilla.org/2017/03/firefox-52-introducing-web-assembly-css-grid-and-the-grid-inspector/](https://hacks.mozilla.org/2017/03/firefox-52-introducing-web-assembly-css-grid-and-the-grid-inspector/)

Webassembly programs have complete ownership over the memory that they use, and can make their own decisions about how to allocate and free memory. This will give developers the same fine-control of memory, and the performance that comes with it, as native applications.

For more information about webassembly, Lin Clark's excellent talk from JSConf covers the topic in much more detail!

<iframe width="560" height="315" src="https://www.youtube.com/embed/HktWin_LPf4" frameborder="0" allowfullscreen></iframe>
