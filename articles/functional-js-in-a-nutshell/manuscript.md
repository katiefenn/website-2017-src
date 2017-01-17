## Composition
  Currying allows you compose a function out of two existing functions:

  ```
  function compose(first, second) {
      return function(subject) {
          return second(first(subject));
      }
  }
  ```

  This function takes two functions as settings, and returns a function for later use that combines them both. This allows us to compose a single function that replaces both the name of the animal, and the sound it makes without writing a new function especially to do that.

  ```
  var cowToDog = curriedReplace(/cow/g, 'dog');
  var mooToBark = curriedReplace(/moo/g, 'bark');
  var changeToDog = compose(cowToDog, mooToBark);
  ```

  Now if we run iterate over the lines of the song using this new function, we should see the correct result.

  ```
  console.log(song.map(changeToDog));
  0: "Old McDonald had a farm"
  1: "E I E I O"
  2: "And on that farm he had a dog"
  3: "E I E I O"
  4: "With a bark bark here"
  5: "And a bark bark there"
  6: "Here a bark"
  7: "There a bark"
  8: "Everywhere a bark bark"
  ```

  Breaking down code into smaller, single-purpose functions has allowed us to combine and re-use them. This spares us the effort of writing, testing and maintaining lots of specialised functions. If we wanted to make a new function to replace "cow" with "chicken", and "moo" with "cluck", we can do this without having to write a suite of new unit tests.
