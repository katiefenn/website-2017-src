<!-- DON'T FORGET TO RECORD! -->
# Memory Bloat and Memory Leaks
## Memory Bloat
Memory bloat is making websites using excessive amounts of assets. HTML, CSS and your JavaScript code are also stored in memory, and Chrome has its own heap of memory to manage these in. It's important to remember that both heaps contribute to a page's memory footprint, and a page can experience problems without a single line of JavaScript being written.

![The task manager](images/task-manager.png)

Opening the Chrome task manager shows us how much memory each tab is consuming in total. It also breaks down the memory used by just the JavaScript heap to help you diagnose whether your issue is related to your JavaScript code, or whether your page is bloated by your HTML and CSS.

The baseline memory consumption for a "Hello World" page with no JavaScript, no CSS and no images is around 160 megabytes. A crowded page consuming 500 megabytes may not cause an issue on a modern laptop with 16 gigabytes of memory, but it is significant for even a modern smartphone with 2 gigabytes of memory. It becomes critical on older and inexpensive devices that might have only 1 gigabyte of memory or less.

## Memory leaks
![A webpage with a terminal memory leak](images/terminal-memory-leak.png)
When your application steadily accumulates more data in memory than you expect, you have a memory leak. The majority of data created by applications are short-lived and are quickly discarded. Memory leaks occur when your JavaScript code persistently adds more data to the heap than it discards. They are caused by code mistakes that prevent data from becoming unreachable and dying.

### Accidental globals
Variables created in the global scope are by definition long-lived. This is because the global scope lasts as long as the website is open in the browser. Global variables live forever unless they are manually unset.

```
function repeat() {
  results = []
  for (var index = 0; index < 100000; index++) {
    results.push({index})
  }
}
```

This function illustrates how easily global variables can be accidentally created. Because the "results" variable is declared without a "var" keyword, the data is created in the global scope and lives forever. Let's look at what this function does to memory consumption.

![Memory profile for accidental globals example](images/accidental-globals-profile.png)

```
function repeat() {
  var results = []
  for (var index = 0; index < 100000; index++) {
    results.push({index})
  }
}
```

By fixing the global assignment, the garbage collector can free up all the memory assigned in this function after it is called.

![Memory profile for accidental globals example - fixed](images/accidental-globals-fixed-profile.png)

Linting tools such as [JShint](http://jshint.com/) and [ESlint](https://eslint.org/) can be configured to locate undeclared variables, and [JavaScript's strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) makes it impossible to create them.

### Forgotten timers
There are other scopes that create long-lived data. Timers and intervals have access to variables in their scope, and because they are needed as long as the timers are active, their scopes stay alive.

```
function startTimer() {
  var results = []
  return setInterval(() => {
    console.log('Tick')
    results.push(makeLargeString())
  }, 1000)
}
```

![Memory profile for forgotten timers](images/forgotten-timers-profile.png)

The overall trend is upwards, the classic mark of a memory leak. The way to fix this is to always remember to clear your timeouts and intervals using `clearTimeout()` and `clearInterval()`.

![Memory profile for forgotten timers](images/forgotten-timers-fixed-profile.png)

### Forgotten event listeners
Event listeners also capture variables in their scope and can keep them alive just like timers.

```
function createButton() {
  var strings = []
  var button = document.createElement('input')
  button.value = "Create large string"
  button.type = "button"
  button.onclick = () => {
    strings.push(makeLargeString())
  }
  document.body.appendChild(button)
}
```

As long as the event listener is active, its scope is kept alive. Removing unneeded event listeners using `removeEventListener()` frees up the memory they use.

### Detached DOM nodes
A common source of memory leaks are orphaned DOM nodes. We use DOM nodes for creating and manipulating HTML elements.

```
var buttons = new Array(100000)
  .fill('')
  .map(() => document.createElement('input'))
  .map(button => Object.assign(button, {value: 'Click me'}))
  .map(button => Object.assign(button, {type: 'button'}))
```

This script creates detached DOM nodes, which are useless if they are not added to the DOM tree. Chrome DevTools can help us find these orphaned nodes by taking a memory heap snapshot.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iaZiu-CSqxs" frameborder="0" allowfullscreen></iframe>

By taking a memory snapshot, and filtering for "Detached" nodes, we can find all the nodes currently in memory that are not in the DOM tree. By clicking on these, we can look for clues to where they can be found. This snapshot lists the object containing our DOM nodes.
