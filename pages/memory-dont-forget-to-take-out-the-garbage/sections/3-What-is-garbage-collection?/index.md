<!-- DON'T FORGET TO RECORD! -->
## Garbage collection
So far we've learned about how memory is allocated. Let's talk about how memory is freed.

Memory is a finite resource inside the computer. It's not created or destroyed. JavaScript can only make sure that it is only using as much memory as it needs and free up memory it doesn't need for re-use.

This is the job of the Garbage Collector.

Before we take a look at that, let's take a quick look at how memory is managed in a language called C.

C is a language that is used to make many software tools. It is a powerful language that gives you a lot of authority over resources like memory.

```
int *array = malloc(10 * sizeof(int));

```

The `malloc` function is used to dynamically allocate memory. In JavaScript we can change the size of objects and arrays at will, but to do this in C we need to use memory management functions. This line of code declares an array with ten items. Interestingly, malloc doesn't *initialise* memory. If you tried to read items from this array now, you will get random data from memory. You might even find data left behind from other applications! Memory is freed using the `free` function.

```
free(array);
```

This is a lot of control, but it is also a lot of work to manually allocate and free memory.

Garbage Collection is designed to do take care of memory management for you. And it does an excellent job!

The garbage collector is not one single process. Memory is divided up into two areas: the young generation and the old generation.

![Diagram of the young generation and old generation](images/young-generation-old-generation.png)

Variables in JavaScript are mostly short-lived, used for a split-second for a single purpose and then discarded again. The young generation is specially designed to make this as fast as possible so your code is not held up. All new variables are allocated memory here, and organised into 1 megabyte pages.

The young generation is partitioned into two semi-spaces. When a semi-space becomes full, a "minor" garbage collection begins. Variables are determined to be "living" or "dead" in a process called a scavenge. "Dead" variables are "unreachable", they were declared inside a function that has run its course and can no-longer be traced to living data. These variables are discarded. The whole process takes less than 1ms, and the more dead data is discarded the more efficient the minor GC is.

![Diagram showing data moving from the young generation to the old generation](images/generation-progression.png)

"Living" variables that are still being used are moved to the second semi-space. Any living variables that are still being used after they've already been moved once are moved to the "old generation".

The old generation is designed for longer-lived data. Unlike the young generation, which is a small, agile part of memory, the old generation can expand to a very large size. When the size of the whole heap grows large enough, a major garbage collection begins.

The major GC undertakes a root-and-tip survey of the whole heap to find dead data. This process is called "marking", and its job is to find data that is not needed and mark it to be reclaimed. The more data that is in the older generation, the longer marking takes. This is significant because your application must be paused while the survey is undertaken. Marking the heap can take up to 100ms, or six frames of animation, for very large applications. V8, Chrome's implementation of JavaScript, breaks this process up into smaller 6ms chunks so that most applications keep running without any noticeable pauses. The latency of the garbage collector is one of the major reasons why JavaScript struggles with high-performance applications such as videogames, and why webassembly is so exciting for the future.

The heap is then "swept", which makes memory usable again. Sweepers run on dedicated CPU threads, but when there is too much data in the heap the main thread mucks in and helps. This is a serious performance consideration for your application: if the main thread has to spend time sweeping memory, that is time that your application cannot respond to user interaction. Any time that the main thread uses to sweep memory is time it cannot spend running your application, you won't be able to click buttons or even scroll the page. Using only the memory you need is important for giving your users a jank-free experience.

Finally, when memory has been freed it can be compacted. Empty space left in pages of memory can be compacted, allowing memory to be freed up and re-used.

The garbage collector then is a program that uses an "educated guess" to remove unused data and free up memory. Problems with memory occur when we fill up memory with long-lived, "live" data that can't be reclaimed. The two major problems that cause this are memory bloat and memory leaks.
