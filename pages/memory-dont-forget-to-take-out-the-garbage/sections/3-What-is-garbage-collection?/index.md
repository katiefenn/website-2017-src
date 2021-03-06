<!-- DON'T FORGET TO RECORD! -->
### Garbage collection
So far we've learned about how memory is allocated. Let's talk about how memory is freed.

Memory is a finite resource inside the computer. It's not created or destroyed. JavaScript can only make sure that it is only using as much memory as it needs and free up memory it doesn't need for re-use.

This is the job of the Garbage Collector.

Before we take a look at that, let's take a quick look at how memory is managed in a language called C.

C is a language that is used to make many software tools. It is a powerful language that gives you a lot of authority over resources like memory.

```
int *array = malloc(10 * sizeof(int));

```

The `malloc` function is used to dynamically allocate memory. In JavaScript we can change the size of objects and arrays at will, but to do this in C we need to use memory management functions. This line of code declares an array with ten items.

Memory is freed using the `free` function.

```
free(array);
```

This is a lot of control, but it is also a lot of work to manually allocate and free memory. If you wanted to add more items to the array, you have to repeat this cycle again to allocate more memory. You also have to keep track of all the data your application does and does not need.

Garbage Collection is designed to do take care of memory management for you. And it does an excellent job!

The garbage collector is not one single action. Memory is divided up into two areas: the young generation and the old generation.

![Diagram of the young generation and old generation](images/young-generation-old-generation.png)

Variables in JavaScript are mostly short-lived, used for a split-second for a single purpose and then discarded again. The young generation is specially designed to make this as fast as possible so your code is not held up. All new variables are allocated memory here, and organised into half-megabyte pages.

The young generation is partitioned into two semi-spaces. When a semi-space becomes full, a "minor" garbage collection begins. Variables are determined to be "living" or "dead" in a process called a scavenge. "Dead" variables are "unreachable", they were declared inside a function that has run its course and can no-longer be traced to living data. These variables are discarded. The minor garbage collection can take as little as 1ms, and the more dead data is discarded the more efficient the minor GC is.

![Diagram showing data moving from the young generation to the old generation](images/generation-progression.png)

"Living" variables that are still being used are moved to the second semi-space. Any living variables that are still being used after they've already been moved once are moved to the "old generation".

The old generation is designed for longer-lived data. Unlike the young generation, which is a small, agile part of memory, the old generation can expand to a very large size. When the size of the whole heap grows large enough, a major garbage collection begins.

The major GC undertakes a root-and-tip survey of the whole heap to find dead data. This process is called "marking", and its job is to find data that is not needed and mark it to be reclaimed. The more data that is stored in the older generation, the longer marking takes. This is significant because marking can pause your application, causing it to be unresponsive. Marking the heap can take up to 100ms, or six frames of animation, for very large applications. This latency is one of the major reasons why JavaScript struggles with high-performance applications such as videogames, and why webassembly is so exciting for the future.

V8, Chrome's implementation of JavaScript, breaks this process up into smaller 1ms chunks so that most applications keep running without any noticeable pauses. The V8 team has recently introduced concurrent marking, allowing around two-thirds of this process to happen in the background while your application keeps running.

The heap is then "swept", which makes memory usable again. Sweepers also run in the background while your application is running, so that your application can keep running.

Memory is compacted throughout garbage collection. The empty space left in pages of memory means data can be re-organised to make more efficient use of space, and reduces the amount of memory the browser uses.

The garbage collector then is a program running within the browser that frees up memory used by unreachable data. It assumes that all unreachable data is not needed and can be discarded. Problems with memory occur when we fill it up with data we don't need, or when data never becomes unreachable and memory is not freed. These problems are called memory bloat and memory leaks.
