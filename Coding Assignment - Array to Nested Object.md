HSCA
HSCI
-------------
status: almost done (needs a solution)
assignmentType: 
difficulty:
subject: 
tags:
title: Array to Nested Object
topic: Data Structures
-------------

For this assignment, you are given a flat array of objects.

const items = [
    { "from": 0, "to": 35, "name": "FunctionDeclaration" },
    { "from": 0, "to": 8, "name": "function" },
    { "from": 9, "to": 11, "name": "VariableDefinition" },
    { "from": 11, "to": 13, "name": "ParamList" },
    { "from": 11, "to": 12, "name": "(" },
    { "from": 12, "to": 13, "name": ")" },
    { "from": 14, "to": 35, "name": "Block" },
    { "from": 14, "to": 15, "name": "{" },
    { "from": 20, "to": 33, "name": "LineComment" },
    { "from": 34, "to": 35, "name": "}" },
]

The goal is to transform this array, using `from` and `to` positions, into a nested object.

Look at the item with name `ParamList`.

The 2 items which come after it

    { "from": 11, "to": 12, "name": "(" },
    { "from": 12, "to": 13, "name": ")" },

have `from` and `to` positions which are contained within the `from` and `to` positions of `ParamList`.

We can therefore conlude these items must be children of ParamList.

Instead of a flat array like 

    { "from": 11, "to": 13, "name": "ParamList" },
    { "from": 11, "to": 12, "name": "(" },
    { "from": 12, "to": 13, "name": ")" },

A more representative structure is

    { 
        "from": 11, 
        "to": 13, 
        "name": "ParamList",
        "children": [
            { "from": 11, "to": 12, "name": "(" },
            { "from": 12, "to": 13, "name": ")" },
        ]
    }


That is the objective for this assignment: Take a flat array (of any size) of position objects, and transform it into a nested object.

Name your transformational function: `flatArrayToNestedObject`.


Examples:

sampleItemsA = 
flatArrayToNestedObject(sampleItemsA)
flatArrayToNestedObject(sampleItemsB)
flatArrayToNestedObject(sampleItemsC)


Handwrite Paper Assignments

I love to play chess. In a real life chess tournament, you have to write down your moves, as well as your opponent's moves. In online chess, it's fast. It's easy. You just move!

Real life chess forces you to think deeper.
I always learned more playing real life chess than online chess.
I think everyone does.

--------------------------------
For our class, when you are given an online coding assignment, you do it however you like.
When you are given a paper assignment, your final code must be hand-written.

Check it on a computer.
Mess with it on a computer.

But the final thing turned in must be handwritten.

--------------------------------

Some coding questions are hard.
You will look at the computer screen and have no idea what to do.
You will want to ask google or ask chatgpt.
The cursor is blinking blinking blinking and you feel like time is wasting away.

Doing it on paper lets you draw some pictures.
You can draw arrows and diagrams.
There is a little bit less pressure.
You can think more deeply.

--------------------------------

The gameplan for our class is to have both types of assignments.

- 25% of assignments will ask for handwritten solutions.
- 75% of assignments it is up to you. (handwritten or online)


--------------------------------

Think for the long term.

Growing strong problem-solving muscles
    - solving problems on your own

Absorbing lots and lots of information
    - using chatgpt
    - using google
    - talking with classmates
    - reading answers and explanations


When you are stuck on a problem

    It does not mean you are not good at X.
    It means you are using Strategy #2: Absorbing 

Blindly copying your classmates or online answers: no no.
Absorbing your classmates or online answers: Yes Yes!

Coding is all about the long term.
You may look at a project and wonder ... how the heck was that made?
It was made, literally, one day at a time.
