### variables

In programming variables are used to hold values, you can think of variables as containers that store data values of different types. 
variables are one of the most important part of every programming language because as you are building your program you need to store values and later on make a reference to them, you can then programmatically change the values of the variable or do anything you want to do with it. 

Variables in Javascript are not so different, variables in javascript hold the value given and Javascript doesn't require you to explicitly say what type of a variable it is like other languages, this is because Javascript is a loosely typed language. 

a typical example of a variable in javascipt  
`var name = "Olivier";`  
 Here the variable name is `name` and the value is holds is "Olivier", in this case if you want to access the name "Olivier" you don't have to type over and over again you can simply access by the variable name.  
Let's say we want to show the value of name in the browser console.   
`console.log(name);` This will log "Olivier" in the console  

**variables** are created using the *keyword** `var` followed by a name which is called an *identifier** this is called variable declaration. when you have declared the variable you can give it the value to hold.   
`var age;`==> we declare a variable like this where age is the identifier of the variable.
we can later in our program give this variable a value  
`age = 30;` This is called assignment   
You can also give a variable a value on declaration, so in our case we would have this 
 `var age = 30;`  
For some reason you might want to change the value of the age, this is easy, you simply re-assign it with a different value.

> Notes: You can consider Variables like a box or a container that contains things inside it can pens, books or anything, then that box has a label that can identify it depending on what is inside. 

If you follow the explanation from the notes above it will help you create meaningful variable names, in this case variables than easily tell what you are storing, if it is a box that you are using to keeping books, then books would be a good name.  

### what to keep in mind

- You can not use Javascript keywords* as variable names.   
-  Variables are used to store data that can be accessed later in the program.  
-  Javascript doesn't require defining the types of the value you are storing in a variable.  

#### Notes  
**Keywords** the are the words that come with the javascript language specification examples include words like var, we will learn more as in other chapters.    
**identifier** is another word for variable name, it is best to call it an identifier as it should be unique for the purpose of what it is storing.   

#### Exercise   

1.  Declare two variables:  `language`  and  `name`.  
2.  Assign the value  `"John"`  to  `name`.  
3. Assign the value `"Javascript"` to `language`  

#### Further reading   

[variables on w3schools](https://www.w3schools.com/js/js_variables.asp)  
[variables in computer science](https://en.wikipedia.org/wiki/Variable_%28computer_science%29)