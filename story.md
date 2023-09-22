Here are some methods you may need:

Method: startsWith
Method: endsWith
Method: toUpperCase


let a = 'apple'
a.startsWith('a') // true

let b = 'banana'
b.endsWith('a') // true

let c = 'c'
c.toUpperCase() -> C

Write your answer function in javascript.


Homework:


Grocery Lists


def abc(n):
    if n > 0:
        return n
    else:
        return 0


abc(5) = ?

5 is bigger than 0.
abc returns 5. 
The answer is 5.


Context switch between numbers.


    
function goo(n) {
    if (n > 3) {
        return n - 3
    }
    else if (n < 0) {
        return n + 2
    }
    else {
        return n + 100
    }
}


goo(1) = ?

1 is not bigger than 3. Keep going.
1 is not less than 0. Keep going.
The final else statement says add 100. The answer is 101.


def hoo(a, b):
    if a > b:
        return a - b
    elif a + b == 3:
        return a - b
    else:
        return b - a

hoo()


Loops

def abc(a, b):
    if a + b == 3:
        return abc(a, b - 1)
    return a + b


Bouncing Back and Forth

def sam(x):
    if is_even(x):
        return ham(x - 1)
    else:
        return x

def ham(x):
    if is_odd(x):
        return sam(x + 1)
    else:
        return x



sam(3) = ?

3 is an odd number.
So we skip the even part.
the answer is 3.

sam(4) = ?

sam(4) will go into the if statement. We give the value 4 - 1 to ham.
So now we do: ham(3)

 3 is an odd number. So we bounce back to sam.
 dont forget to add 1.
 right, so sam(3 + 1) or sam(4)

wait a minute. arent we back at where we started?

sam(4) goes into the if-statement and becomes ham(3)
ham(3) goes into the if-statement and becomes sam(4)
It will repeat forever. 3 -> 4 -> 3 -> 4 -> ...

This is an infinite loop.
It is a common mistake.


Multiplication and Factorials

def abc(n):
    if n > 1:
        return abc(n - 1)
    else:
        return n

abc(1) = ?

1 is not bigger than 1.
So return 1.

What about abc(2)

2 is bigger than 1. So we go into the if-statement.
We return abc(2 - 1) which is just abc(1)

Now we do abc(1)
But we dont need to do it because $ already did it.

The answer is 1.

wait a second, abc(1) = 1?
Yes

And abc(2) also equals 1?
Yup. It goes into the loop. abc(2) -> abc(1) -> 1

What about abc(3) ?
It probably equals 1 too. It's going to become abc(2) which is going to become abc(1) which becomes 1.

abc(999) ? 
It equals one.

;()

I have a question.
Yes Sam?

This title is called Multiplication and Factorials
It most certainly is.

Where is the multiplication?
Where are the factorials?

My friends, that's going to be our job.
What do you mean?

We are going 


Homework Question

Factorials are a fancy way of doing multiplication.
They are represented by exclamation marks.

4! means 4 * 3 * 2 * 1 = 24
5! means 5 * 3 * 2 * 1 = 120
1! means 1 = 1


Your job is to turn the function abc(n) into the function factorial(n)

Step 1. Change the name "abc" into "factorial" 
Step 2. Put 2 additional characters "*" and "n" somewhere.


def abc(n): <-- you cant put them here
    if n > 1: <-- you could put the characters here
        return abc(n - 1) <-- you could put the characters here
    else:
        return n <-- you could put it here

By putting the '*' and 'n' in the correct places, you will turn the abc function into the very useful (and famous) factorial function.


Modulus

Modulus gives you the remainder.

6 % 3 means what is the remainder after you do 6 divided by 3.
The remainder is zero.
So 6 mod 3 equals 0.

What does 2 % 2 equal? 2 divided by 2 equals 1 with no remainder. So it equals 0.
What does 4 % 2 equal? Zero because no remainder.
What does 6 % 2 equal? Stop it $. This is boring. The answer is zero!
8 % 2 = 0
10 % 2 = 0
12 % 2 = 0

Every even number mod 2 always equals
zero!

Congratulations everyone.
We just created one of the most useful functions.

def is_even(n):
    return n % 2 == 0

is_even(2) # true
is_even(4) # true
is_even(6) # true
is_even(-16) # true
is_even(1) # false

Homework:

Write the function is_odd(n)

def is_odd(n):
    return not is_even(n)

def is_odd(n):
    return n % 2 == 1

def is_odd(n):
    return n % 2 != 0
        
    # != means "not equal"


Help Ham add up a list of numbers.

Step 1.
We will need a variable to keep track of the current total.

At the beginning, the current will be 0.
total = 0

for number in numbers:
    total += number

+= is pronounced "plus equal" and it just means "add on top".

The final fu will look like this:

def sum(numbers):
    total = 0
    for number in numbers:
        total += number

        # run through the numbers one by one
        # each time, we add it to the current total

    return total

    # finally return the total


Add Up Pennies, Nickels, Dimes, Quarters

def coin_sum(coins):
    
    total = 0
    for coin in coins:
        if coin == 'penny':
            total += 1

        # keep going

    return total


Spell Check

h gys hud?
dg br!

What are you guys even writing?

Oops sorry. I forgot to turn on my custom spell checker.

def spellcheck(word):

    dictionary = {
        'h': 'hey',
        'gys': 'guys',
        'hud': 'how are you doing',
        'dg': 'doing great',
        'br': 'bro'
    }

    if word in dictionary:
        return dictionary[word]

A few important notes about $'s spellcheck

1. the order matters. What if you wrote it like this?

def spellcheck(word):

    if word in dictionary:
        return dictionary.get(word)

    dictionary = {
        'h': 'hey',
        'gys': 'guys',
        'hud': 'how are you doing',
        'dg': 'doing great',
        'br': 'bro'
    }

There will be an error.
The function will not know what the dictionary is.
You have to declare a variable before the variable can be used.

2. dicts

In javascript you saw {} everywhere.
Javascript uses "brackets" to declare blocks of code.

That's not what this is.

    coin_dictionary = {
        'penny': 1,
        'nickel': 5,
    }

In python land, this is called a dict.
Some people call it a map.
Some people call it a hash table.
In javascript land, it is called an object literal or an object.

    const coinDictionary = {
        'penny': 1,
        'nickel': 5,
    }

Everyone calls it a dictionary.

booga = {
    'a': 1,
    'b': 1,
}

# Even though its name is booga, it's still a dictionary or an object or ... We will call it a dictionary.

The first part is called the key.
The second part is called the value.

The formal definition of a dictionary is "a set of key-value pairs"


Nested Dictionaries

Yo dawg, I heard you like dictionaries, so we put a dictionary in your dictionary 

my_pokemon_cards = {
    'grass': {
        'favorite_card': 'bulbasaur',
        'num_cards': 100,
    },
    'fire': {
        'favorite_card': 'charmander',
        'num_cards': 46,
    },
}

my_pokemon_cards['water'] -> ERROR
my_pokemon_cards['fire']['favorite_card'] = 'charmander'

number_dict_maze = {
    'a': {
        b: 3
        c: 4
    },
    d: {
        e: 5
    },
    '6': 7,
    '
}
a[b] - c[a] = ?

Dictionaries are Awesome

Why do dictionaries, hash tables, maps, object literals, (which are all basically the same thing) have so many differnt names in so many different languages?

It's because they're awesome.

@reference(coin_sum)

Rewrite coin_sum.
Use this dictionary in your code.

@ref(coin_values)

No if / elif / else statements allowed.


Types

The first type is "Number" also called "int"
    examples

    1
    12
    336

The second type is "String" also called "str"
    "This is a string"
    "Sentences are strings"
    "Words are strings"
    "Anything with quotes is a string"
    "0" is a string because "quotes"

The third type is list also called "Array"

The fourth type is called dict

The fifth type is called None or null

coin_values = {
    'penny': 1,
}

coin_values.get('half_dollar') # None
coin_values doesnt have a half_dollar entry.

Javascript:
    coin_values['half_dollar'] = null

Python:
    coin_values.get('half_dollar') # None


Javascript Land

You really need a purpose.


So that is python.
From these simple building blocks, 
You can entire build galaxies of code.

We are going to switch to javascript now.

Reason:

To go further in python, you need a purpose.

Example: You have 1000s of files on your computer. You want to sort and organize them.

Great: We will use the python os and pathlib library to do this.

Example: You want to make a reddit bot
Great: We will use the reddit library to do this.

Example: 

A typical python class now starts doing "turtle" and "pycharm" and "pygame" but this is rediculous. 

The game you make on pygame, no one i


















































Differences between Javascript and Python

def multiply(a, b):
    return a * b

function multiply(a, b) {
    return a * b
}
Javascript declares functions with "function"
Python declares functions with "def"

Winner: Python (def takes 2 second to type, and function takes 4 seconds to type)

Javascript uses brackets { } to create blocks.
Python uses colons and spacing.
Winner: Python (less clutter)

Javascript initializes variables with const and let
Python just declares them

let x = 0
if (x > 1) {
    x = 2000
}

Javascript writes else if as "else if"
Python writes else if as "elif"
Winner: Tie. else if is more clear. But elif is 2 letters shorter. They take approximately the same amount of time to type.

Winner: Python (faster)

Note from the author:

Please don't misunderstand me.
I am not trying to say python is better than javascript. (although it kind of is) These differences are superficial differences.

When you code more in javascript and python, you will see that both have distinct advantages and disadvantages.

In fact, this is true for every language.
Python saves you 2 letters writing elif over elseif.
Python saves you lots of letters by not having to write "const" and "let" everywhere.
But this is only part of the story.
Sometimes, in python, you have to a turn a list of numbers (3, 1, 2) into a list [3, 1, 2] before you can sort the list.

In javascript, you just sort the list.

In your coding journey,
You will undoubtedly experience a few languages.

The eternally asked question is:
Should you learn X?
Should you learn Y because that's what Microsoft uses?
Should you learn Z because Hammy built cool cakes with it?

Here's my answer #1
Learn all of it.

No one codes in a single language.
No one.

Answer #2

Don't think about it.
Just eat it.

Maybe your future employer wants you to write some scala because their system is in scala. But you don't know scala. 

Go to openai.com/chatgpt. Ask: "Hey chatgpt, can you turn my_function_in_python into a scala function?"

Chatgpt will do it near perfectly, and you will see how similar it is to what you already know.
All code is basically the same idea
logic statements
functions
variables
returning things
calling functions
putting things into lists

Add the phrase Pika-Pika onto the end of every sentence.

solution


def pika(sentence):
    return sentence + ', pika-pika!'

This function has a problem.
What if the function has a period at the end?

pika('I like fish.') -> 'I like fish., pika-pika!'


I know. 
Let's just remove the last character.
So we have to check what the last character is.
Remove last letter.





Finding Factors of a Number








A factorial is a math class that makes




Help Mr. Lee write a homework assignment.

Mr. Lee: 
Mr. Li: 

You need to teach the students about ternary operators.
I dont want to. Its boring.
But its an important topic.



Factorials

factorial(5) means 5 * 4 * 3 * 2 * 1

How might we write a function that can calculate factorials?





def sam(x):
    if is_even(x):
        return ham()
    else:
        return x

def ham(x):
    if is_odd(x):
        return sam(x + 1)
    else:
        return x











Avoiding Infinite Loops Version #1

count = 0

def sam(x):
    count += 1
    if count > 100:
        raise Exception('Infinite Loop Detected')
    if is_even(x):
        return ham(x - 1)
    else:
        return x

def ham(x):
    count += 1
    if count > 100:
        raise Exception('ERROR - Infinite Loop Detected')
    if is_odd(x):
        return sam(x + 1)
    else:
        return x


This time we have added a counter to detect how many times the functions have been called. If the count goes over 100, we stop the program.

But this piece of code is not good.
It depends on "count."
And the "count" variable is spread out in 3 places.

Place #1 - it is a variable outside on the street.
Place #2 - it is also placed in Ham's house.
Place #3 - it is also placed in Sam's house.

When you have a variable placed all over the place like this,




there are a few guidelines to how 
This is

The short answer is yes.
Python is better than javascript.
The long answer is no.

You have chatgpt.

ChatGPT can convert between languages




box(0, 5, fill="red")
circle(0, 0, 5)


The root node.

Add a child.

The world of javascript is the almighty DOM.
DOM stands for "document object model."

When you click a button on a webpage to make a purchase, that button, is a child of the DOM.

When you check your email and there are 15 messages, those 15 messages, areeach children of the DOM.

Those 15 messages have words in them. And yes. You guessed it. Those words, are children of the DOM. 

But not exactly.
The messages are children of the DOM.
The words are children of the messages.
So you might think of the words as being grandchildren of the DOM.

Think of a tree.
The seed becomes a trunk.
The trunk becomes branches.
The branches might split into more branches.
Which might split into more branches.
They might keep splitting for a very long time.
Eventually the end of the branch may sprout into leaves.

The DOM is a tree.

In javascript, we call each point of branching a "node".
Terminal nodes are when there is no more branching. (leaves)
Branch nodes are the branches.
Lastly, there is the root node. The node that brought forth everything.

.root
    .page-top
        p Hi from the top!
        p I am the second child of page-top.
        p I am the third child of page-top.
    .page-left
        p I am a paragraph.
    .page-right
        .page-right-top
            h1 I am a heading. I am also the grand child of page-right.
        .page-right-bottom
            h2 I am also a heading.
    .page-bottom
        p Howdy howdy.

Let's take a look at this tree.
We begin at the root.

The root has 4 children.
    page-top
    page-left
    page-right
    page-bottom


Lets build this in javascript.

const dom = new DOM()

const root = dom.appendChild('root')

First we make the root node.
"append" means "add on"
so dom.appendChild('root') means we are adding a child to the dom and the name of this child is 'root'
Now it's time to give the root some children.

const pageTop = root.appendChild('pageTop')
const pageRight = root.appendChild('pageRight')
const pageBottom = root.appendChild('pageBottom')
const pageLeft = root.appendChild('pageLeft')

pageTop has 3 children.
We will add it like so:

pageTop.appendChild('p', 'Hi from the top!')
pageTop.appendChild('p', 'I am the second child of page-top.')
pageTop.appendChild('p', 'I am the third child of page-top.')


There is 1 child for pageLeft:
pageLeft.appendChild('p', 'I am a paragraph')

pageRight goes in 1 layer.
.page-right
    .page-right-top
        h1 I am a heading. I am also the grand child of page-right.
    .page-right-bottom
        h2 I am also a heading.
.page-bottom
    p Howdy howdy.

I want the howdy howdy to be yellow.

pageBottom.firstChild.style.color = 'yellow'

Howdy howdy is in the paragraph of the first child of pageBottom.
We touch it b

howdyHowdyNode





Okay. Let's set the style to yellow.









p means "paragraph" 
h1 means "heading 1"
h2 means "heading 2"
h3 means "heading 3"

ul means "bullet list container"
ol means "number list container"

li means bullet item or number item

ul
    li apples
    li banana
    li orange

The li means bullet because its parent is a bullet list container

ol
    li apples
    li banana
    li orange

The li in this one means number item  because its parent is a number list container

ol stands for "ordered list" - aka numbers

section means "section"
article means "article"




The









function pikachuText(line) {
    return {
        activation: {
            key: 'enter',

        },
        value: line + ' pika pika!'
    }
}



function pikachuText(line) {
    return line + ' pika pika!'
}

Your Turn

Write a function bulbasaurText which adds the words 'bulba bulba!' to the start of the line.


function pikachuTextV2(line) {
    return line.replace('pika', 'pika pika!')
}

//Deactivate pikachuText
//typing function over and over adds up over time.
//Write a function fasterFunction which changes "fun" into "function"
//To tie it directly in.


# Coordinate Systems

The normal coordinate system begins with (0,0) as the origin.
The axes will often range from -10 to 10.
The resultant graph looks like this:

@graph(-10, 10, -10, 10)

Or, the axises may just be positive: from 0 to 10.

@graph(0, 10, 0, 10)

When working with websites, (0,0) no longer starts in the center.
Think about writing on paper: we start in the top-left corner.

Thus, the coordinate system of a web document has the origin (0,0) in the top left corner.


Before drawing anything, first we setup the page up. [fn]

Give the body container a width and height:

    body.style.width = 400
    body.style.height = 400

100 pixels is approximately 1 inch.

Let's draw a square at (0,0). 
The square has width = 50 and height = 50.

Just like writing on paper, the flow of the document points downwards.

Writing goes rightward.
Writing goes downward.
There are no negatives.

The normal y-axis in math class points up.
For web documents, it points down.


    const square = body.appendChild('square')
    square.style.width = 50
    square.style.height = 50
Let's draw a square at x = 50 and y = 50
Now we are moving in the x-direction 50 right.
We are moving in the y-drectiton 50 down.

    const square = body.appendChild('square')
    square.width = 50
    square.height = 50
    square.x = 50
    square.y = 50

Let's draw a square at the lower bottom corner

    square.style.x = 50
    square.style.y = 50

Let's draw a square at the bottom corner.

    square.style.x = 400
    square.style.y = 400

400 because we defined 400 and 400 as the width and height of the body container.


But this extends beyond the page.
So actually, we need to take into account the width and height of our squaree.

    square.style.x = 400 - 50
    square.style.y = 400 - 50

Now it works!


Practice

Write down the coordinates to draw a 50 by 50 square at each of the 4 corners of the container.

The goal is something like this:


Write the coordinates to draw 5 squares shaped like a cross.
The goal is something like this:



midpoint formula: x + y / 2


Our practice document size is 816px by 1056px. [fn]
This corresponds to 8.5in by 11in (the size of a normal piece of paper)

Let's draw our square at 


There are many strategies to avoid writing "".
This type of code is called "boiler plate".
Boiler Plate code is basically "setup code."

In most situations, boiler plate code will be automatically generated.
After we have learned a bit more: you will write a function hook to automatically generate 

What is a function hook?

A function hook can be thought of as a linked event that happens with the main event.

For example, the main event is waking up.
What are some linked events that happen with waking up?

brushTeeth()   <-- function hook
eatBreakfast() <-- function hook

Normally, on entering codeground, you have to type:

The function hook will be called:

autoCreateHtmlAndBody()

autoCreateHtmlAndBody does exactly










Foot Notes:

We first practice our documents as normal paper because everyone has a good feeling for the size of a normal piece of paper.

Later on, we will use document sizes of:
iphone
ipad
13.3 inch macbook pro
17 inch 

A rem equals 16 pixels.
62.5%

Foot notes

"Let's draw a square at x = 50 and y = 50"
"square.style.width = 50"

The unit is pixels.

When no number is specified, do assume it is in pixels.

@equivalent

    Let's draw a square at x = 50 and y = 50
    square.style.width = 50

    x = 50px and y = 50px
    square.style.width = 50px

pixels is the standard unit for web design.


Other units:

1 rem = 16 pixels
1 point = 4/3 pixels



        const image = element.appendChild('image')
        image.src = globals.resources.chess.bishop.url
        image.src = globals.resources.chess.bishop.url

Later, we are going to make nested objects.
I am going to make a nested object school.codingClass.students.sarah.favoriteFood.url

You don't have to globals.resources.chess.bishop.url
Instead, you can go to google and search: "picture of a chess bishop"
The result might be something like this: 'https://static.vecteezy.com/system/resources/previews/002/494/264/original/chess-bishop-piece-free-vector.jpg'

Instead of writing 

        image.src = globals.resources.chess.bishop.url

You can write

        image.src = 'https://static.vecteezy.com/system/resources/previews/002/494/264/original/chess-bishop-piece-free-vector.jpg'



Arrays, Strings, Numbers




Text Models

Coding is a process of trying, doing, and repeating.
Often you will have a goal in mind, but you're not sure how to get there.

Test 1 brings you a little closer.
Test 2 brings you a little farther.
Test 3 ... Test 4 ... Test 5 ... Test 100 ...
Finally you get there.

The more you code.


Complicated Diagrams.

What happens if the width and height are different?

This ... doesnt look that good.
Your homework is to fix it to make it look good.

To have an diea.


A lot of coding is about trying something out,
Changing it.
Trying it again.
Repeat repeat repeat.

Model it in text first.
And the data should direcly transfer over.

let row1 = 


let width = 10
let height = 10


To make the assignments in vivo.





Javascript and the DOM



Think of a tree.
The world of javascript is the almighty DOM.
DOM stands for "document object model."
Here are some methods you may need
It is a common mistake.
