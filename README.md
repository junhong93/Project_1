# Number BaseBall

## Description:
Generally, this game is to guess the right number that computer has randomly created. This game does not follow the real baseball rules, but this game has borrowed the concept of it.
The random number is a three digit number, so you can only guess with three digit number. There are three variables that you can obtain: strike, ball, and out.
>**Strike**: You can obtain strike if you have guessed the right number with the same digit (position). ex) Your guessed number: 813  and the right number is 816.
You will be given a value of 2 strikes because 8 and 1 is the right number and is located in the same digit (position). Another example is as follows: yor guessed number: 824 and the right number is 816.
You will be given a value of 1 strike because only the value 8 is the right number with the right location.

>**Ball**: You can obtain ball if you have guessed the right number but has the different digit (position). ex) Your guessed number: 183 and the right number is 816.
You will be given a value of 2 balls because value 1 and 8 is the right number but it is in the wrong location. Another example is as follows: your guessed number: 849 and the answer is 824.
You will be given a value of 1 strike and 1 ball because 8 is the right number and is rightly located, but value 4 is the right number but is in the different location.

>**Out**: You can obtain out if you have guessed the wrong number. ex) Your guessed number: 183 and the right number is 492.
You will be given a value of 3 outs because none of the numbers that you have guessed is in the right number. Another example is as follows: your guessed number: 849 and the answer is 891.
You will be given a value of 1 strike, 1 ball, and 1 out because 8 is the right number with right location, but value 9 is the right number but with wrong location. value 4 is not the right number so it is out.

Clicking on Restart will restart the webpage, which will generate different random number. 
Clicking on Delete button will delete the number that you have clicked from the end.

**Caution**: You cannot have the same digit for the guessing number. ex) 333, 335, 353
> Try not to click on the button "Show Answer" because it will show the answer.

## Technologies Used:
* HTML5 
* CSS3
* ECMAScript 2018 

## Getting Started:
https://junhong93.github.io/Project_1/

## Next Steps: Planned future enhancements:
* Creating a table to list all the guessed with Stike/Ball/Out
* Creating a second player to battle between the two
* Creating a ranking data which shows the ranking of the players which updates everything it is played.
