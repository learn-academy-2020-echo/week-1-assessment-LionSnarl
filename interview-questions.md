# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer: A function is a piece of code that you can use to help you do an action on specific data sets. A function is something we can use very fluidly to create certain outputs that are desired. You can use them together to do a lot of actions intandem, so like one function does the first step, second function does the next and so on and so forth.

  Researched answer:
Functions are reusable pieces of code that only execute when "called" and always return an output. Functions can have information passed into the scope of the function through an "argument". Functions are designed to be used many times in a program and should be as generic as possible while still being descriptive as to their purpose. A function is a set of instructions detailing how to do a task. We can use the instructions to build something over and over again, in the same way that one blueprint can be used many times to build many buildings. It is important to remember that there is a difference between a function declaration - creating the instructions, and a function call - following the instructions to perform a task.



2. What is the difference between .map() and .filter()?

  Your answer: I know that they are both higher order functions, but .map selects (looks at) every value and you can do things repeatedly to each of those values, and .filter lets you create rules that it will follow to sort through every value it is given and report back to you what you tell it to filter. I want to just say that I think they do both deal with array's of information.

  Researched answer:The .map() function iterates through an array and returns a new array of the same length.  .map() iterates through the specified array AND returns a new array with the updated values. The .filter() function loops through an array and returns a new array with only the values that are truthy or the values that satisfy your stated condition. Filter will return a subset of the given array.


3. What is the difference between console.log() and return?

  Your answer: console log calls in the terminal/the console, while return actually completes a function.

  Researched answer: Return will terminate a function, and can return a value from that function. console.log() is used for debugging, it is only displayed in the console..



4. In regards to functions, what is an argument?

  Your answer: a value or set of data you want to be manipulated

  Researched answer: An argument is information passed through the scope of a function.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: The Driver has his code (text) editor up and is the person to actually physically type the code. They learn by hands-on-approach. The Navigator are the eyes on the entire playing field of the language where they are to direct the driver in the best direction. They learn by teaching -- one of the best ways to learn. The roles shared by both people though is to keep each other on tract, along with a few other things.

  Researched answer: The driver is the one with their hands on the keyboard. They are responsible for entering information and following the instructions given by the navigator. This approach requires constant communication. And talking about your code will make you a better developer and a better teammate. It is important to switch roles every 10-20 minutes and take frequent breaks.



6. What is TDD? Describe the work flow associated with TDD.

  Your answer: Test Driven Development, or TDD, is the concept where you are the puppet but also the puppet master, it's an idea where you know what will work while you are doing the work. I would say the work flow of this would be to build tests around your code while you're creating to prevent any headaches along the road. Then, if you wanted to update something, it would help control for unwanted consequences while you are creating.

  Researched answer: Test Driven Development: even more powerful benefit to writing tests for your code as well. When we write our tests first, then write the code required to make them pass, we as developers, are think about our code in a different, more logical way. Breaking the code into a series of tests helps us break the big problem down into much smaller ones, and smaller problems are easier to solve, so we write dramatically better code because of it.
-If you have solid tests, and decide that you want to refactor some part of your application because either the requirements of the application changed, or you have realized a better way, you are free to do so with confidence. During the entire refactor, you are confident that you aren't breaking your app because your tests pass.

The work flow:
Write the test first
Run your testing suit to see a failing test
Write the code
Run your testing suit to see your test pass
Refactor if necessary
-This is known as Red-Green Refactor-

7. What is something we did in class this week you found helpful?  

Your answer: Your patience but also your persistence - I think it has been critical to "snapping" our heads to focus on, dare I say it, `thinking different :)`. Knowing that testing was a big portion and going over the basics for us, but making sure we focused on grasping all the beginnings of javascript really helped me. I like that we are encouraged to ask questions and those responses in which have had methodical explanations are vital for anyone listening. I do like when we are asked questions from time to time too! It makes participation reach just that more active. I feel like the biggest thing is that your staff have been realists, but they stop right before any negativity that could be associated, and express only positivity. Pair Programming is good, whether a driver or navigator, learning is best through hands on experience and through teaching. Taking the breaks!! I think also the time we have dedicated to "play games" in order to create that space where we all feel comfortable with each other.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Classes = Classes are a particular type of function that contain data and behavior. Classes are the blueprints of objects. Just like functions, classes have their own scope.
These are key words used to to create and access information within a class:
constructor: a special method for creating and initializing objects
this: a JavaScript keyword that refers to the object it belongs to
new: used when creating a new instance of a class (an object)
Class syntax have specific conventions about them:
-class names are always capitalized
-Class names are PascalCased (like camelCase, but the first word is capitalized)
-Instance of classes (objects) are always lowercase
Just like functions, classes are reusable. Each object created from the class is independent from each other.
Class instances can store any kind of data.
- React = React is used to build webpages, mobile web pages, and even native mobile applications. It is component based, which means that we use it to build many small parts, and then join them together to form entire applications. This turns out to be extremely scalable. It was created from Facebook as that application grew and became more dynamic. Everything in React is a component, and components are analogous to functions. They share characteristics and can be used in a similar way.Every component returns something in the same way that a function returns something. Everything that is visible on the page is made up of smart and dumb components. Smart components hold all of the logic, and dumb components hold all the user interface elements. Just like in functions, when we pass in arguments, in components we pass props from smart components down the river to dumb components. But, in React, what is unique is that dumb components can send data back up the river to the smart component using state.
- React State = Methods in the program can update the value of the state object and therefore change what appears in the browser. It's real-time data input and function response output to show directly on the browser.
- CRUD = CRUD is an acronym describing the minimal actions necessary for a full stack web application.
New - The controller method new represents a midway point between C and R in CRUD and is the Rails convention for the route that displays a form to the user. The HTTP verb associated with new is get. The new route is: get '/resources/new' => 'resources#new'
Create-The controller method create represents the C in CRUD and is the Rails convention for adding information to the database. The HTTP verb associated with create is post. The create route is: post '/resources' => 'resources#create'
Update-The controller method update represents the U in CRUD and is the Rails convention for modifying information in the database The HTTP verb associated with update is put/patch . The update route is: put/patch '/resources/:id' => 'resources#update'
Delete-The controller method destroy represents the D in CRUD and is the Rails convention for removing information from the database. The HTTP verb associated with delete is delete (shocking right? Terrifying!!! D:). The delete route is: delete '/resources/:id' => 'resources#destroy'
