04-08-2023 

+ NOT using pathlib for python

    because my focus is not python
    my focus is javascript and pdfgen

+ new directory drivedir/UNORGANIZED-TEXTS

+ changelog.md -> drivedir/UNORGANIZED-TEXTS
+ new.py + next.py = base.py

    new.py preserves the utils
    next.py has all the random stuff
    but we still do all operations in base.py

+ python.superfn = fa

+ learning
    various git command line expressions
    git rm --cached
    git diff
    git diff --word-diff
    git diff
    
+ vim
    qw and qe for indent and dedent
    visual action has many new
    implicit 

+ vim.expressions
    [ = SmarterBrace (global)

+ vim.navigation
    1: qw = indent
    2: qe = dedent 

    the indent or dedent is smart.
    it will jump to the right place


+ vim.modes @ Node1()
    1: execRef.cleaner -> execRef.cmo (cleanerMode)
        you will be prompted for a file to save the appends
        pressing 1 then saves lines to this file.
    2: execRef.itm -> execRef.imo (inoremap mode)
        test vim commands directly in your current file
        auto prepends <buffer> tag
        if the line has ec ... doesnt append buffer line
    3: execRef.done
        saves the results of itm

    

+ rules.kevin

    write in python less
        python is for
            git & github
            zip
            backup
            file systems
            various google api

            infrequent
                praw
                tesseract


    no computer after 6PM.
    no unsultry actions
    no chess
    keep changelog clean
    meet your obligations to PS105 students
    meet your obligations to CWT students
    meet obligations to yourself
    go to the basketball court earlier

         
+ kevin.todo
    make browser-viewer
        
        It is a selection tool

    use browser-viewer to clean up vimrc file
        Actually used redit to clean up vimrc and it is pretty effective

    deal with vim.mappings.txt
    deal with vim.globals.txt
    deal with vim.variables.txt

        these files carry all of the essential vim information.
        i have no idea how to organize it.

    write a changelog parser 

04-09-2023 

+ everything just kind of works

+ basketball.rules
    need to drink and bring more water
    maybe I should ask


+ vim.modes @ Node1()
    1: execRef.namo (NodeArgMode)
        The keys 1,2,3 in the current buffer are mapped to RunJS(1,2,3)
        This is connected to SysArg which allows for fast toggling between clip and log and string.
        This functionality was first used in testing pdfgen.components.document.js


04-10-2023 

+ vim.GoFile
    
    Is essentially a super navigation.
    It traverses PDFS | JSONS | UTF8 | IMAGES | HTML | BUFFERS | URLS
    It also traversers BOOKMARKS
    It should be renamed to "Navigator"

+ vim.AutoTab
    
    No longer uses word spiral.
    No longer matches short words.
    Is a bit more expensive
    

+ vim.visual.btb
     takes the current block or the current screen and sends it to
         gdoc
         email
         text (clip)
     
+ vob
     abstracted away the style methods into 'AbstractElement'

+ BREAKINGCHANGE: util.toNestedArray only coerces on 1D arrays. 
+ function: toString
     Objects and Arrays are stringified
     null returns ''
     everything else returns native toString()

+ Debugging ElementObjects
    the output was a vuestring, when the target was a htmlstring
    the reason stemmed 

There is nothing wrong with the Object.
But it is being rendered as a vue string when what we want is html.

And the reason this is happening is because the parent of the SVGObject is vue. Therefore, the json that gets produced, is rendered by the parent. So we need a marker. Something to distinguish between Vue and not Vue.

04-11-2023 

+ jobs.txt
     schema: {
         # = the date
         ## = The job posting
         ## = my cover letter
     }

+ GetVim()
     eval g:key
     redir g
     These will get the 

+ DottedLine Component
     Not correct to proliferate the vim prop with 1000 svg circles
     Let the browser make them.

+ htmlString / vueString / smartString

    Currently ...
    This object will not work for vue.
    Vue requires a vob-like entity.
    Make sure the internal block-items do not have padding or margin
    we are already taking it into account.

    To be of the proletariat.
    That these are your friends.
Numerous 



Asking questions to put you into a certain position
+ debug: stroke-color is not a svg attribute. the attribute is stroke.

04-12-2023 

The puppeteer 

1030AM - Get everything set up.
Take a shower after Ahge1028 goes to work.

Each page can have a different layout.


Und

AI illuminates where ...
It feels like the Chinese phenotype has difficulies in working together.

Confidence can only be built. 
Did not expect it to go like that.

The insecurity over language ... but that is not something that we can admit to.

What are you currently doing?

I have been learning and working on using code to generate math assignments. 

I think children in general mean well.


That my coding skills have increased dramatically.
And my talking skills have proportionally gone down.

Track the experiences.
Track for posterity.
That ... I ... yeah. 
Talking about the money ... 

I don't really like that aspect.

Most of my teaching work.

Look at the camera.
My hat is missing.



scale.com
matterbar.com
brooklyngiro

To be labeled a "genius" is a disadvantage when you haven't actually created anything yet. It feels like the code he uploads is so difficult ... that a normal person would not be able to put it back together.


When I talk to parents, I try to convey a positive feeling.
If there is anything negative or concerning, 

Acting ... to put your heart into the act...

I think I am a good teacher.

To be working at the bottom. 

Exercises to strengthen my vocal chords
Exercises to strengthen my speaking
Exercises to strengthen my energy

Is he really 
Work talk.
Brooklyn Learning

+ Paul King - King Education Interview

A way to win ... that benefits everyone.
A way to create a system .

The city has money for black youth, but none for asian youth.
The city has zero money for asian youth.
That's okay. But I will work towards this.


Outdoor Coding Class

8 students per class

Learn Python, Javascript, Web Design, AI.

Beginner Class
Intermediate Class
Advanced Class

65 dollars 1 month
90 minutes every weekend

It is super learning.
You can learn a lot in 1 month.

Ask for a free sample.

wo yi qian shi yi ge shu xue laoshi.
xian zai 
zuo wan zhang.
dan shi wo keyi gei ni yi ge free sample.

to understand that it doesnt work.

Changed the order of master and key in vueSetup.
This will affect a few functions.

//PDF
//PDFGEN is consumed by main(components,componentKey*, props*)
//The props are controlled at the window level or at the input level.
//No internet ...
// That you cannot see me.
// But I am ... coming ... and I am bringing an education ... you have never seen before.
// To talk in Chinese.

Keep looking for Jobs.
Do my weekend program.

One step at a time.
Additional program.
Having it cost more money.
Having it be online.
Speaking.

Find a way to talk everyday

The way the structure of pdfgen works is that every week ... a different data packet is sent.



04-12-2023 

+ Deleted COLORDIR (rarely used)
+ Deleted CWFDIR   (rarely used)


The structure of main() at serve_html_file.js has changed.
It only takes strings now ...
The main action happens at pdfgen
That is where all the data is stored.
The keys of main only perform directions.
For example, right now the key is foo123.

ColorScheme
     foreground = 
     background
     gradient
     emphasis
     italic
     underline
     h1
     h2
     h3
     h4
     bullet
     highlight

     title = h1
     subtitle = h1 + h2
     normal = p
     bold = strong
     italic = em

     table variant
     graph variant
     SvgBackground
     code variant  ... numbers are highlighted a certain way 



Direct Child a > b (no nested children)
Regular Child a b (yes nested children)

The way of the theming should be to be complementary
And not over powering

Image Assets ... 

Feature your Artwork

If you would like to submit artwork 



04-13-2023 

+ fixed the pdf print problem
    The problem was 'body/html: height = 100%'
    That is so weird.
    In general, if something works in 1 medium, and not another,
    It must be a small error.


It has to be much better than anything previous


+ 
! syntax highlighting 

The color theming needs to be cohesive ...
Like they need to match.

h1 ~ h2 ~ h3 
/* Styles for the h3 element that comes after an h1 and an h2 element */

color: blue;
}
/* h2 which comes directly after h1 */
h1 + h2 {
  color: red;
}

h1 + h2 + h3 {
  color: red;
}

If the item is empty ...


CSS PYTHON JAVASCRIPT HTML

Write a math 


G4 & G5
Weekend Coding Class

Learn javascript
Learn python
Learn web design

Grow strong at math and coding


Payment is $65 / month

Teacher: Kevin Lee


Parent Introduction

Dear Parents,

First of all, 

Thank you for signing up your child to this program.
It is a new program, and it is risky.
I will do my best to give your child a good education.


There are a few matters that need to be addressed.

Safety

Every week, 1 parent needs to come to watch.
This will make me feel reassured.

Rain

What happens if it rains?

We will have online class.

Group 1 = 9:00 to 10:30 (4 students)
Group 2 = 10:30 to 12:00 (4 students)

Online class is bad with 8 students.
That is why split into 2 groups.

Rain is definitely going to happen.
That means online class will most likely happen 3 or 4 times.

I will send you text-message notification Friday evening for online class.

Example: 
Friday Evening: 
Saturday Morning: ... weather is good.
We still do online class.
No take backs.


Additional Resources

Coding Competitions
Math Competitions
Robotics
SHSAT Exam
Hunter Exam
Extra Homework
Self Learning

Call me or text me.
I am happy to set this up for you.

8 students is the maximum.


To give that type of help.

Feedback form.

Feedback Interaction Form

Positives

Are you sure want to view the negatives?

How many negative comments do you want to read? 

Do you want to see them one at a time, or all at once?

Do you want the comments by themselves, or with pictures of cats?

Used a word count of 112 words

Positive Score = 100
Overall Score = 96

What happened

result


What could have happened

recipient feels kind of miffed
recipient feels a feeling of connection

ungratefullness
周末编程课

asdas
I shouldnt teach high school.
To have a better feeling.

High School Volunteer Opportunity At Sunset Park

Weekend Reading Program

Read stories with Children


Hey Boys, 

I have an idea that may be of some benefit to you.
By the way, this idea benefits me as well.


Chance of Failure: High

Do it well ... the parents will come back.


Who is in charge?

Who is in charge ... is a question that was asked in China for 1000s of years. And still, no one could find an answer. Dynasty after dynasty after dynasty fought each other endlessly, searching for the answer.

So I don't know who is in charge.
But it is not me.


Documentary

Reading Program.
I will provide all the books / writings that you will need.

My Personal Motivations

So how do I benefit? :D :D
I benefit a lot from this.
I don't really want to play.

That much.






























Motivational Quotes
haoyu/scorereport
Parses the direction.













At the Library ...

Future

It is my hope to create a strong learning program.
Will it happen? I dont know.

I have many ideas to create great learning for your children.

Please support me by telling your friends.

Work Hard.
Bring a snack.
To celebrate the end of summer.


Dear Parents,

Please fill out this parent survey to improve the teaching.

We will follow this survey

More homework?
Is anything wrong?
Change anything?
Add anything new?

Teacher: Mr. Lee

They need to write it out.
Coding and math goes straight together as solid as anything I have ever encountered.

It is the practice of logic.

Practice writing it out.
Play a silly game together.
To go together. 
Volunteer for reading.


Story Reading ... 

Read English
Read Chinese

Ms. Karla.
Di dian.
Sunset Park

Mr. Wei.

Mr. Lee will be mad.

We are going to do both.
65 dollars a month.

5 dollars.

1 student ... takes 2.

Learning how to.

Writing the materials.
Take the kids.

Take the kids to eat 

What kind of food.
Take the kids eating.

That there is 
That I ... 




Everyth





A second iteration.




































Good morning ... Hemat

May same pavilion ... 
6300 8th ave. bring Id ....








Safety

Every class ... one parent needs to be present.

Are you in high school?

Something that changes the 



Your child:

bu neng jiao laoshi "teacher."
ru guo nin xiao hai yao jiao laoshi, yao yong mingzi: Mr. Lee

90 minute class every weekend.
65 

Class canceled:

Start with the young kids.



Requirements

Change the game.



@ High School Students


Where I feel accepted ...
I needed a push.

Start in a single place ... and move forward

Darren ... ... a nice kid.
That I was a temporary shining light for the kids.
And then it ended.

Challenge Basketball Version 2

Mr. Lee in 2018 ,
In the end, Mr. Lee failed.

Reason #1 - It is good Experience
Reason #2 - You can make money.

I know you can make money from it.
If you do it well, parents will pay.

Maybe ... 

Maybe ... 

Will you fail?

I believe you can do it.

Daren, my phone-number. They did things, that I never saw anywhere else.
These memories are real.



FAQ: Im just a kid. 
To let them be kids.
He is the nicest teacher.

they knew right away ... that i was something else.
yinsu.
What is and isn't valued.
That I may 

Mr. Lee ... is trying to do something.
But I will fail.

That I am trying.




Stanley
Anthony

A small team of educators.
To go bigger.



Beginner Class



Introduction to Code

Solving algorithms

I dont need a teacher. I can learn it by myself.

Think of a teacher as a rocket booster.
Yes you can fly to the moon by yourself, but a rocket booster saves you some energy. You don't have to go looking for challenging questions or additional materials or et cetera et cetera. The teacher can save that time for you.

That the people who need it the most ... are the least likely to get it.

Homework TodoList


StaticSiteGenerator

def html_generator(s):
    passs


We have been writing html and css.
We are going to switch topics briefly to go into python.[1]


def paragraph(s):
    return 'p ' + s


So now, instead of having to type "p Hello there!"
You can type paragraph("hello there!")

Um... But doesnt that take even longer?


Check out this one: 

def red(s):
    return 'p ' + s + '\n    color = red'

Now instead of typing 

p warning!
    color = red

We can just type

red(warning!)

Each of these items is a function.
Functions produce actions.

There are a few flavors of actions. 

Here is a computational function that we learn early in our lives:

def sum(a, b):
    return a + b

sum(3, 7)

Here is a computational function to determine if a number is even.

def isEven(n):
    if n == 0 or n == 2 or n == 4 or n == 6 or n == 8:
        return True
    else:
        return False

    # This function is incorrect
    # By the way ... these are called comments.


Function Actions fall primarly into 3 categories:

Computations
Wrappers
Mutations

The functions we wrote paragraph() red() warning() ... these are wrappers. Wrappers are essentially "shortcuts" that wrap around something to make thait easier or faster to use.

For example a teacher might write a wrapper function that does something like this.

function endOfDayTodoList() {
    const classroom = new Classroom()

    classroom.cleanup()
    classroom.gradeStudents()
    classroom.publishResultsOnline()

    const results = classroom.getResults()

    save(results)
}

Frequently, we are going to switch between javascript and python.
The year is 2023.
Artificial Intelligence and Machines are coming to take over.
It is essential that you be able to write in multiple languages.

Javascript is the language of front-end.
Python is the language of back-end.

It is important to be good at both.
The more languages you have under your belt, the easier it is to learn new languages.

At enterprise companies, very rarely will you use just a single language.



Translate.

Practice Online

brooklynlearning.github.io/codeground
juypiternotebooks
jsbin.com

Send in your questions.
File Finding.

Personal Projects:

A code editor.
Update and test the function.

Save Session




















Footnotes

The first time I heard the word "python" was in my freshman cs class in college. Our teacher was teaching java, but one day he randomly said, "I encourage all of you to check out python."

I didn't. Python sounded like a goofy name. Some toy language.

It was only about 10 years later, when I actually did check out python, and realize that it is perhaps the GOAT of languages. 
















p Lets go to the store 
    color = red
    align = center
    background = blue
    padding = 10

p 

There is another way to do it.
Instead of creating "inline-styles" as shown above, we create a "style-class" which is globally applied to each item.


.my-style-1 {
    color = red
    align = center
    background = blue
    padding = 10
}

p .my-style-1 Lets go to the store.
p .my-style-1 Howdy howdy.


The general recommendation is to always prefer style-classes over inline-styles. Style Classes are more compact.
Style classes separate layout from stylization.
Style classes create new flexibilities previously unavailble with inline styles.

The most powerful selector

Is this guy: '*'

* {
    color: red
}

What will happen when this selector is 


Note: It is clear that style classes hold many advantages over inline-styles. But inline styles hold one advantage, and it is this singular advantage, that often leads this writer, to use inline-styles.

Imagine you have a code-base of 1000 files.
Stylesheets flying all over the place.

Sometimes, it is nice to have an inline-style because you know exactly what you are looking at.


This is called a css file. Css stands for "Cascading Style Sheets".
We will soon find out what cascading means.


Let's use a piece of paper as a reference point.
Your stand letter size paper is 8.5 inches by 11 inches.


Let's begin setting up our stylesheet and html

.my-first-page {
    width: 8.5in                  /* empty */
    height: 11in
    background: yellow 
}

Now, let's put a item into my-first-page.

.my-first-item {
    width: 50%
    background: red
}

The width will be 50% * 8.5 which equals 4.25in.
All is good.

Let's put an item inside my first item.

.child-of-my-first-item {
    width: 25%
}

The width is always calculated from the parent.
What happens if we do not put a width on the parent?

A) The computer assumes the parent is full-width aka 100%
B) The computer looks at the parent's parent and uses that as the width.

Position Absolute

Write some html and css to geneerate the following

x
xx
xxx
xxxx
xxxxx

import {HTMLTextBuilder} from "./codeground.js"

    Evaluate the Class Object
    And it becomes ...

To write Sam's name.
To collaborate ... and have it quickly sink into nothing.




for row in rows:



Coordinates have been listed for each element.

Red Green Blue

Animation

Need the lessons

Github

Save to github ... 

Are you tired of 


Common Mishap #1 - No width on the parent.






























First Homework Assignment

Copy the generated HTML

container
    background = yellow

    p hello
    p goodbye

container
    background = green


What if you wanted 1000 containers?
Working really hard, you might be able to write it by hand.

What if you wanted 1000 containers, every single day, that are completely different?

The above generation is static.
Static means unchanging.


function createContainer() {
    
}

Paste it 1000 times.

What code will this generate.
Write the out

What is the typo?

Hey ChatGPT,
Write this function for me in python.

Hey ChatGPT,
Write this function for me in lua.

Hey ChatGPT,
Write this function for me in lua.

Notice how similar each of ...

You may one day hear someone say, "I can code in 8 different languanges."
Every language shares the

Go to brooklynlearning.github.io/codeground

Assignment 1 will be available.

Your job i
Part 1 - 

Assignment 2

Class Readings










To open up the 

Make a github account.


    


















04-13-2023 

+ Clean up Changelog from last date.
  strip out all the spaces

+ Try to incorporate some pictures and graphs.

To want to win.
No mercy.

Adding more and more wrinkles.
Pursuing the project in spare time.


Adding graphs is critical.

Rice Brothers

Maybe ... Maybe it works
Preparing them for the SHSAT

Dynamic Assignments.

8000 10000 12000

A sense of humor.
Not every day.
But occassionally.

Change the structure.

It was a stormy day.

The Storm

Emerson is a 5th grader.
Olivia is a 5th grader.
Emerson often wears the Dallas Mavericks.
Olivia wears glasses and sometimes has bangs.

Character 1
Character 2
Character 3
Character 4

The Fish Journey


Hey Olivia, want to go catch some fish?

No

We can sell each fish for 200 dollars.

Narrator

And so it was that Emerson and Olivia went fishing.
But where they should go fishing?

Jamin pulled up the charts.
According to my analysis, 

The place you should go fishing at is 


A)
B)
C)
D)

The key to fishing is patience.
But I don't have any patience.

You have to sit still without moving.
Sat for a while.

Buying the Bait

$0.15.

$0.15 means 15 cents.

First, I forget about the decimals, and then I put them back in.

It's like this: a b c d e.

Something that has soul.
Chicken soup for the soul.

My new brand of story.

Five Star Resturant

Welcome to Five Star.

Soups, Salads, Sandwiches, Salmon, Steak.

It's important to eat your greens!

The 10s place. The 20s place.

Login ... Humzles. Currently, logging in is not finished yet.
Hammy and Sammy are baking cakes.
Mr. Lee is writing stories.

Shujing crunched the numbers.
here is what they sold:

sandwiches in the background.
It has to be good ... not only for them, but for any student reading it.

Norah may one day read this story.
The crucial element is one of uplifting feelings.

That in the end ... it was combined together.

You're just a bunch of smelly kids.

No we're not.
I mean, we are just 

Hammy would eat a cake.
Should we eat a cake?

No, we need a plan.

To close the business due to ... factors uncontrollable.










This is a Hammy Math Story.
Hammy Math Stories.

Triple speed.

He's flying!
Creates the illusions.








Performed a few quick calcultions.

Excuse me, little boy, but shouldn't you be in school?





# + # = 10

Something that would take forever to come out.



The Turtle 


The Builder

It was a 

She is a mine craft specialist.

The Builder

To write their names into the stories.

Hehehehe.




















Writes math story.




























The number of grains of rice Anderson eats.









04-13-2023 

The way of code education for children is that it needs to be very visual. It also needs to be very verbal.


04-13-2023 Code for Kids


Good morning everyone.


Patterns

A lot of people think coding is scary.
Sam
Yeah?
Run! It's the coding monster.
I'm not scared of the coding monster.
Why not?
Because code is just math combined with words.
Like a story problem?
Kind of.
Herb, what does 1 + 2 equal?
It equals 3 million. Just kidding it equals 3.

In code, we do can do similar operations like 1 + 2.
But often, we do it with words.

Watch this:

strawberry = 1
banana = 2

What does strawberry + banana equal?

It equals a delicious strawberry banana smoothie.
Does anyone want me to make one for them?

I want one.
I want three!

That's the answer $.
Since strawberry = 1, and banana = 2, put them together and you get 3.

Is that it?
Coding feels really easy.

Okay then. Let's go to the next level.
Remember, coding is a lot like math. But not just for words. For numbers too.

a = 'booga'
b = 'boop'

What does a + b equal?

I think since we're adding them together, maybe the answer is 'boogaboop' ?

That is correct $!

When you add strings together, you just add them one after another.

For example

string1 = 'ham'
string2 = 'bur'
string3 = 'ger'

string1 + string2 + string3 = 'hamburger'

Why is it called a string? 

Because it's like string beans. You string them on a one at a time.

Are you making this up Mr. Lee?

Nope. I'm serious.

Are iphones and computers and other electronics made out of string beans?

Some of it. But there's more. So far, we have learned of 2 types.
The first type you learned in first grade: Numbers.

The second type we learned right now: Strings.

There are many more types, but for today, we are going to learn just one more type.

Is the third type Chicken wings?
I like to eat chicken wings with string beans.
My mom cooks it with

The third type is called the grocery list.
is it really called a grocery list?

No, it's actually called a "list."
But if you want to be fancy, you can call it an "array."

We sometimes do array multiplication in school. Is it that array?
It's just like that.

Has anyone written a grocery shopping list before?

Eggs.
Soy sauce.
Adding it to the list.
Don't forget dumplings.
And tofu.

Mr. Lee, I think you made a mistake.
What happened?

You started the grocery list at zero.
Shouldn't you start it at one?

That is a very good observation.
In regular grocery lists, we start at one.
But in the world of coding, lists and arrays always start at zero.

Take a look at our grocery list.

item index 0: soy sauce
item index 1: soy sauce
item index 2: soy sauce


Now it's time for a practice question.
Take a look at our list.

What is the first item?

The first item is soy sauce.

What item is at the 0 index?

The 0 index always represents the first item. So soy sauce.


PEMDAS

Please eat my delicious apple sauce
Please excuse my dear aunt sally

a[3] + a[2]
a[1] + a[6] + a[3] * a[1]


a[0][1][a[5]][a[3]]

Soon, we will do questions like these.
This type of question is called array position.
I know that you can definitely do it.


Classwork

Addition

Subtraction


Homework:

In class, $ reminded Mr. Lee about the watermelons for his grocery list.
That's why Mr. Lee did groceryList.append('watermelon')

groceryList before: 
groceryList after: 

Your turn. Add some pickles and cupcakes to the list.

newGroceryList = [                                     ]

What is the item at index 3 in newGroceryList?

What is the value of newGroceryList[3] + newGroceryList[4]


You can remove items from a list by calling pop!

myNumbers = [1,2,3]
myNumbers.pop() 
myNumbers.pop()
myNumbers.pop()

Now myNumbers is empty! []


Sam has a list with 10 numbers in it.
He uses append 40 times.
Then he uses pop 20 times.
How many items are in Sam's list now?

Ham has a list with 5 numbers in it, and the numbers add up to 10.
After calling pop 4 times, the numbers in Ham's list still add up to 10!

What must have been Ham's original list? 
Write all 5 numbers of Ham's original list in the correct order.



Multiplication

In math, 3 times 5 equals 15.
In code, 3 * 'booga' = 'boogaboogabooga'

What does 3 * apple + booga equal?

Order of Operations 

Parentheses beats everything.
Multiplication and division beats addition and subtraction.

What does 3 * ('apple' + 'booga') equal?


apple = 'sauce'
sauce = 'apple'

what does apple + sauce equal?

What does sauce + "sauce" equal?

Variables vs. Strings

To have a set lesson plan.
To do 8 students for 90 minutes.





Bulbasaur Check.

Hi Sam, it's me Bulbasaur.

Are you rushing through these questions?
Are you doing everything in your head and not writing anything down?

It's a trap Sam.
Don't fall for the trap.

You have to go into the question.
Even when you feel frustrated, you have to go into it.

You can do it Sam.

Report Cards ...
Meeting notes ...
//Bye
















Problem Solving: 

















Grade 4 and Grade 5 math combined together.
Anything online will be printed in black paper perhaps.
And it will come attached with names.













I prepared a copy for you.
Ni ye kai shi lai xue ba. 






Jia jing qu. help me translate it.






A) The first item is soy sauce because that is the first item in the list.B) The first item is eggs because that is the item at index 1.


myFruits = ['apple', 'banana', 'grapes']

You forgot about the watermelons.

You're right $. I totally forget the watermelons.

myFruits.append('watermelon')

What does append do?

It is how you add items into a list.

In english class, the word append means "to add on."

Okay, so we have a list of 4 fruits.

myFruits = ['apple', 'banana', 'grapes', 'watermelon']




Homework:

Array Addition

m[0]

Can you help Holly find her way out of the maze?

Hey guys, 






































1 + 1 equals 2.
Everyone knows that Sam.






It has to be fun.
But it also has to be light.


Today we are going to learn how to


I am going to split into two classes.

The purpose of this assessment is 



04-14-2023 

The way to teach a coding class to children is to essentially teach a math class. The coding aspect provides an overarching structure. But the daily contents are mostly going to be mathematical in nature.

You cannot overload them everyday.
It has to be kept simple.

Variables and pattern matching.
Function inputs in and out.

Addition | Subtraction | Multiplication | Division | Fractions
Coins | Word Problems | Age Problems | Decimals | Number Patterns

Graphs | Charts | He is the best teacher ... They might say.

The math comes first.
But the feeling is of coding.


Graphs | 


Practice Worksheet.

Tables.

Ham is

The Chinese phenotype has demonstrated again and again, that the way is not of teamwork.



Every day, to have some elements.

Perfectly divisible.
Multiply and times.

Not enough content.

That I don't seem like 
Black families also face grave challenges.

04-14-2023 

fn: weaveTemplater
fn: generateCodeArithmetic

weaveTemplater extends templater with fn:vArg and regex:/v:\w+/
It holds a local v_val store for vArgRunner to access v_vals after any weave actions have taken place.
It is a convoluted function that I may or may not remember.

