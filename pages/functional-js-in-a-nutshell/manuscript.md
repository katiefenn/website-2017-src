## History
Brendan Eich created Javascript in just ten days.

He was told to make it like Java, the cool new programming language in 1995, but not to make it so good that it would  compete.

He was also told to make it easy-to-use, so that the millions of people making websites who don't understand what classes, compilers and threading are.

He needed to make it extensible so that experienced programmers could add features that had been left out.

Javascript was born in a hurry, and has suffered for it. If you wanted to make a programming language that would be popular in twenty years time you would certainly want to give yourself more than ten days. But its felxibility has seen it through twenty years of the the pressure of being the web's only programming language. It has survived the mass transit of software from desktop to mobile. It has survived its graduation from a language that people used to make things blink to a language that powers some of the most popular apps in the world.

Eich says himself that this is because Javascript had "just enough of the good parts" to survive. So what exactly are we talking about here?

## OO vs. Functional
The majority of the most widely-used languages are designed around the object-oriented programming principle, which structures data in a program like objects in the real world. Modeling complex systems such as transportation networks or commerce using software components that resemble physical properties and behaviour can make code easier to understand.

If the train in your computer programme is doing something that its real-life counterpart is not doing, a software component that resembles the properties and behaviour of a train makes locating and refining problems easier.

JavaScript has features to support object-oriented programming, but compromises had to be made to make it easy to understand and fast enough to do its job when a page is seen only for a split-second before a user "surfs" to the next page.

- Type system
- Class-based inheritance
- Static typing
- Compiler

Many of the "advanced" features of Java were forgotten for these reasons, and simpler features introduced:

- Duck-typing
- Prototypal inheritance
- Dynamic typing
- Interpreter

Developers who learn JavaScript after learning Java, Python or Ruby find the differences between it and other popular object-oriented languages disorientating. Lessons learned in writing high-quality code don't apply in the same way.

However, Brendan Eich was a fan of a functional language called Scheme. He originally took the job of creating JavaScript on the promise that it could be just like it, but was overruled by the need to make it look like Java to make it marketable. JavaScript was given many features from functional languages that makes  them similar:

- First-class functions
- Higher-order functions
- Lexical scoping

JavaScript shares these features with quite a few functional languages. So what can we learn about JavaScript from functional programming?

## Functions!
Functions in computer languages were adapted from mathematics. They describe a relationship between an input and an output. For instance, if I wanted to write a function to write the first line of "ten green bottles", we can accept the number of bottles as an input and return the line as an output:

```
function greenBottles (num) {
	return num + " green bottles hanging on the wall";
}

greenBottles(10);

/*
Outputs:
10 green bottles hanging on the wall
*/
```

JavaScript has higher-order functions, which means a function can be an input or an output of another function.

<a class="jsbin-embed" href="http://jsbin.com/japomo/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.16"></script>

You may have used this to create a callback function, telling JavaScript what to do with the response when an AJAX request is complete. Congratulations! You've already taken your first steps with functional programming.

## Purity
As we've seen, functions receive inputs from their parameters, and give outputs using their return values. But functions can also have inputs and outputs that aren't immediately obvious.

<a class="jsbin-embed" href="http://jsbin.com/japomo/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.16"></script>

Here we have a function that sings "row, row, row your boat". It takes the first line of the song, and says it out loud. It then waits a bit, and then repeats itself with the next line.

When we run it, it sings us the lines of the song.

Like any good campfire songs, row row row your boat is good fun to sing with your friends. What happens if we try to run "sing" more than once?

<a class="jsbin-embed" href="http://jsbin.com/yukeke/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.18"></script>

Hmm. That's not meant to happen. The first singer is stealing lines before the others can sing them. That doesn't happen in real life!

"Sing" uses a function called "splice". "Splice" returns items from the array that allows us to pick out the first line of the song, but it also has a side effect. It removes items from the original array, which makes our "sing" function remove lines of the song as it sings them.

We've written a function that is a bad citizen. It changes data that doesn't belong to it, and when it depends on that data things go wrong. We call these actions "side effects" - when functions change data outside of their own scope.

<a class="jsbin-embed" href="http://jsbin.com/gexeta/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.15"></script>

I've fixed the "sing" function to read the lines of the song using a parameter, and use "slice" instead of "splice" which does not remove items from the original array. When we run our program again, all the lines should be sung as we'd expect.

Writing functions to work with their parameter inputs and their return outputs means they will always return the same output when given the same input and have no side effects. This is called "purity" by programmers because they are like functions in mathematics, but their benefits are easy to understand:

- Pure functions are easier to understand *(by breaking behaviour into simpler input and output)*
- Pure functions are testable *(because they always give the same output for a given input)*
- Pure functions are flexible *(because they have no state of their own they can be used in any part of your code, even back and front-end)*

## Currying
The ability of functions to return other functions gives you some amazing abilities. It allows you to prepare functions with settings for later use, or fuse two functions together to do two things at once.

Let's look at a song called Old MacDonald Had a Farm. It goes like this:

```
var song = [
    'Old McDonald had a farm',
    'E I E I O',
    'And on that farm he had a cow',
    'E I E I O',
    'With a moo moo here',
    'And a moo moo there',
    'Here a moo',
    'There a moo',
    'Everywhere a moo moo'
];
```

What if we wanted to sing the next verse with a dog instead of a cow? Let's write a special function called a curried function to do that for us.

<a class="jsbin-embed" href="http://jsbin.com/jocupow/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.18"></script>

Currying allows you to write a function that called in two stages. You call the function the first time to pre-load some settings for later. It then returns a function that can be called later to perform an action. It's really helpful when  iterating over data and changing it - like changing words in a song.

<a class="jsbin-embed" href="http://jsbin.com/pexaji/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.18"></script>

When we call the function the first time, the settings we give it are saved for later. It doesn't replace anything right away.

When we pass it into map to iterate over the lines of the song, the second part of the function leaps into action and replaces the words using the settings we saved earlier.

```
0: "Old McDonald had a farm"
1: "E I E I O"
2: "And on that farm he had a dog"
3: "E I E I O"
4: "With a moo moo here"
5: "And a moo moo there"
6: "Here a moo"
7: "There a moo"
8: "Everywhere a moo moo"
```

## Composition

Oops. Dogs don't say moo. What we need is a function that replaces "cow" with "dog", and "moo" with "bark". Luckily, it's quite easy to compose a function out of two other functions.

```
function compose(first, second) {
    return function(subject) {
        return second(first(subject));
    }
}
```

This is a curried function that takes two functions as settings, and returns a function for later use that combines them both. This would allow us to compose a single function that replaced both the name of the animal, and the sound it makes without writing a new function especially to do that.

<a class="jsbin-embed" href="http://jsbin.com/mexikos/embed?js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.18"></script>

Now if we run iterate over the lines of the song using this new function, we should see the correct result.

```
0: "Old McDonald had a farm"
1: "E I E I O"
2: "And on that farm he had a dog"
3: "E I E I O"
4: "With a woof woof here"
5: "And a woof woof there"
6: "Here a bark"
7: "There a bark"
8: "Everywhere a bark bark"
```

# Bringing it together
Functional programming does more than just making JavaScript easier to work with. What is our code capable of if we apply these ideas on a larger scale?

Let's take a look at React and Elm. React is a JavaScript framework created by Facebook. Elm is a new functional language that compiles to JavaScript. What makes them remarkable is how they're using functional programming to change the way we make software.

Purity is employed on an architectural level. Instead of keeping state in objects passing messages between each-other, all application state is stored in a single place. This allows you to write the majority of your application code as pure functions that describe how its state changes.

Keeping application code and state separate gives you some special abilities.

[Super Mario demo](http://debug.elm-lang.org/edit/Mario.elm)

This is Super Mario technical demo written in Elm, and you can find it on the Elm website. You can move around an jump just like a normal platformer game. But because application state is stored in one place, it's possible to store its history and "rewind" and "fast forward". That means you can replay actions again and again and again, which we do so often when debugging code. Long procedures for recreating bugs and testing code is reduced to the click of a button.

You can also make changes to your code without it affecting its state. For instance, I can change the code and increase the height Mario can jump without restarting the application. It just carries on from where it left off. This allows me to experiment with my code to fix bugs and test changes while my application is running, and saves a lot of time.


# Benefits
Using fundamental lessons from functional programming in your JavaScript code takes advantage of its better features, and there's plenty more that you can learn from functional languages that you can apply to your everyday work.

More than this, I think it makes sense for the kind of work we do. As frontend developers, our work commonly breaks down to the same three tasks:

- React to user interraction
- Process transactions with the network, state and storage
- Manipulate the DOM

I think functional programming perfectly suits these tasks because our work is dominated by responding to user interraction.

That's not to say object orientation should be retired, or had its day. In fact, JavaScript should be praised for offering the ability to use both methodologies. Object orientation was conceived to model complex interactions between system components. This makes it relevant for work like making videogames in JavaScript. Simulating worlds with people, places and things suits object oriented programming well.

Functional programming is an exciting prospect for the future of computing beyond frontend development.

Modern computer hardware incorporates chips with multiple processing cores allowing them to do two pieces of work at once. This is because chip manufacturers like Intel are reaching the physical limits of our ability to make computer chips. In the sense that "a problem shared is a problem halved", making our code work well in parallel is going to be an important topic for the future of software.

As we saw with the "row, row, row your boat" example, splitting data between multiple processes can be surprisingly hard. Functional programming gives us useful tools to tackle this incredibly difficult problem we are expecting to face more and more in the future.

In the present, it allows you to


# Going Further
There are a few more things you might want to look into once you've taken your first steps with functional programming.

Immutable.JS is another Facebook tool that adapts ideas from other functional languages. It gives you data structures like JavaScript's arrays and objects whose items cannot be modified. Changes can only be made by making a new copies of data. This makes unexpected side effects harder to introduce.

If you're determined to go all-in on a new functional language entirely, there are lots of popular functional languages that can be compiled to work in web browsers.

- [ClojureScript](http://clojure.org/)
- [Elm](http://elm-lang.org/)
- [Scala](http://www.scala-lang.org/)

There's also a great book called [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide) which covers everything I've mentioned and more, in great detail.


# Summary
JavaScript was written in just ten days, and it suffers with a reputation among programmers to this day that it is a bit pants.

But that isn't entirely true. Hidden from the first glance is a powerful and expressive functional language.

Using techniques from functional programming can help you make fuller use of JavaScript, make your code easier to understand and test.
