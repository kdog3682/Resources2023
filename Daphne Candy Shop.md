Daphne's Candy Shop

As every business woman knows, the key to running a successful candy business is knowing what your customers want.

That's why Daphne is conducting a survey. The purpose of her survey is to find the perfect amount of sugar for a gummy bear.

table {
    Daphne's 5 Gummy Bears
    Gummy Bear | Grams of Sugar
    A | 3
    B | 4
    C | 5
    D | 6
    E | 7
}

dialogue speakers = daphne, emerson {

    $,
    ----------------
    Yes, Businesswoman $?
    ----------------
    I have 5 gummy bears for you to try
    ----------------
    nar $1 shows $2 a platter of the 5 gummy bears
    ----------------
    oh boy! gummies!
    ----------------
    after you eat them $, I would like you to rank them from 1 to 5. 1 means most favorite, and 5 means least favorite
    ----------------
    nar However, $2's mouth was filled with gummies. He had already eat them.
    ----------------
    Um, what did you say $?
    ----------------
    $2! You werent supposed to eat them yet. You have to eat them one at a time and fill out a survey
    ----------------
    $narend

    $1 gave $2 another set of 5 gummy bears.
    "Do it right this time."

    $2 did. He filled out his survey and turned it in to $1

    list {
        $2's Survey Results
        From favorite to least favorite
        Gummy Bear C
        Gummy Bear D
        Gummy Bear B
        Gummy Bear E
        Gummy Bear A
    }

    $1 repeated the survey with her other classmates.

    Here are the final results

    graph histogram {
        title = Favorite Amount of Sugar in Gummy Bear
        data = [
            olivia ABCDE
            emerson CDBEA
        ]
    }
}

questions {
    
Which gummy is their favorite?


}
