I want you to create a simple guess the number type game. It should choose a random number between 1 and 100, then challenge the player to guess the number in 10 turns. After each turn the player should be told if they are right or wrong and, if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.

random x 1-100, player has to guess x in 10 turns, after turn right or wrong, too low or too high, what x previously guessed, end once player guesses x or out of turns, player option to restart the game.

1. random number between 1-100 to show up on board.
    * variables = math.random, placement
    * functions = starting number 
    * Math to do that 
    * Function to put it up on the board at the start of the game.

2. Player goes to input puts in a number, presses the button
    * variables = input, button, too-high-or-too-low, GameOver counter
    * functions = knows whats been guessed on each turn, restart button
    * loops < 10 turn loop i--
    * input = math.random. end game call restart button
    * input > math.random. show on board too-high. take one off of GameOver counter, display GameOver counter
    * input < math.random. show on board too-low. take one off of GameOver counter, display GameOver counter
    * counter == 0, display restart button

3. Restart button once pressed restarts the game.
    * pressed == true - refresh the game
My Logic
^^^^^^^^^^^^^^^^^^

1.Generate a random number between 1 and 100.

2.Record the turn number the player is on. Start it on 1.

3.Provide the player with a way to guess what the number is.

4.Once a guess has been submitted first record it somewhere so the user can see their previous guesses.

5.Next, check whether it is the correct number.

6.If it is correct:
    1.Display congratulations message.
    2.Stop the player from being able to enter more guesses (this would mess the game up).
    3.Display control allowing the player to restart the game.

7.If it is wrong and the player has turns left:
    1.Tell the player they are wrong.
    2.Allow them to enter another guess.
    3.Increment the turn number by 1.

8.If it is wrong and the player has no turns left:
    1.Tell the player it is game over.
    2.Stop the player from being able to enter more guesses (this would mess the game up).
    3.Display control allowing the player to restart the game.

9.Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.



