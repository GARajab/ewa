# Pseudocode of the Arrow Game

### Story is the game will give the player multiple numbers of arrows (6) with different directions like (up,down,right,up,left,down) for a small time and they will be turned up side down and let the player take his time to guess and try to remember the directions.

- **Player** will depend on his memory to try to get all directions of the flipped over cards correctly
- **Score** is counted by arrows one correct by one correct not by the full arrows correct
  **_(means if the player got more than 1 and less than and equal to 3 cards out of 6 correct his score will be 3 points even if he got one card correct else if more than 3 and less than and equal 6 will git 5 points else he will git (0)) rounds will be there max 5 rounds then score will be counted at the end of the game time_**
- **Some speed** will be there each two time correct the speed will be increased till max 6 times correct for example **_(2 speed will be 1, 4 speed will be 2, 6 speed will be 3)_** - **The player will change his cards by using two directions arrow** under each card, **Each** click will change the direction of the arrow (up,right,down,left,again up)
- **There will be tow modes** an **_easy_** and an hard mode, easy will git all his boxes filled with **up direction** box and there is **no time limit**, **_Hard_** will get all boxes filled with arrows but **each arrow is in different direction** and there will be a **limited time per round**

# Code side

1. I will make 6 divs will contain the random directions arrows (PC ARROWS).
2. I will make 6 divs will contain the Player arrows boxes (Player ARROWS), each player boxes there are 12 divs to make small two boxes will handel the change of player directions.
3. I will make three variables handel the score , how many box correct and the the last one will contain the numbers of the rounds.
4. I need to have two arrays one for (random pc arrows) and the other is the player array.
5. Will use loop to loop throw the two arrays to get the score how many correct and how many incorrect.
6. Will make <button>Reset</button> to reset the game and the full values except the player score.
7. I will make a new div containing a switch to toggle between easy mode and hard mode.
8. I have to have an if condition to differ between the two scenarios (all boxes are correct with no empty box means all ids (player and pc are matched (each array of pc and player are identical)), And the other if is some boxes empty(innerHTML= "") and how many of filed ones are correct or no)
9. I need a function to randomizes the pc boxes
10. I need a function to check the player boxes
11. I need a function to count scores and other for rounds and correct/incorrect player boxes.
12. I need a function to reset the full game except the score after each round.
13. will use this function to update the stattus of the pc arraw as will as player array

```JavaScript
const updateBoard = () => {
  for (let i = 0; i < board.length; i++) {
    const squareEl = squareEls[i]
    squareEl.textContent = board[i]
  }
}
```

14. will use this function to update the massage:

```JavaScript
const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.innerHTML = ""
  } else if (winner === false && tie === true) {
    messageEl.innerHTML = "It Is Tie Please Try Again!"
    showItIsTie()
    showHideResetBtn()
    tieNumbersCounter++
    tries--
    triesEl.innerHTML = tries
    tieNumbersCounterEl.innerHTML = `Number Of Ties Is: ${tieNumbersCounter}`
    tieEl.style.color = "#EF476F"
    oPlayColor.style.color = "white"
    xPlayColor.style.color = "white"
  } else {
    messageEl.innerHTML = `<img src=/images/fest-bgrmvd.png>  Player ( ${turn} ) Won!  <img src=/images/fest-bgrmvd.png>`
    showHideResetBtn()
    showHideGameOver()
  }
}
```

15. will use this function to handel the click:

```JavaScript
const handleClick = (event) => {
  // Obtain the index of the clicked square
  const squareIndex = parseInt(event.target.id)

  // Check if the square is already taken or the game is over
  if (board[squareIndex] !== "" || winner) {
    return
  }

  // Update the board with the current player's move
  board[squareIndex] = currentPlayer

  checkForWinner()
  checkForTie()
  // switch between x and o
  currentPlayer = currentPlayer === "X" ? "O" : "X"

  updateBoard()
  placePiece(squareIndex)
  switchPlayerTurn()
  updateMessage()
}
```

16. will use this function to add ids to pc arrows

```JavaScript
const placePiece = (index) => {
  board[index] = turn
}

```

17. this function is the important one to check the combination true or false

```JavaScript

const checkForWinner = () => {
  // for if loop to get the winning criteria no blank and a=b and a=c and b=c
  for (let combo of winningCombos) {
    const [a, b, c] = combo
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winner = true
      winningCombination = [a, b, c]
      highlightWinningCombination()
      winnerCounter()
      confetti()
      break
    }
  }
}

```

18. this function will count the score:

```JavaScript
const winnerCounter = () => {
  if (currentPlayer === "X") {
    xWinCount++
    tries--
  } else if (currentPlayer === "O") {
    oWinCount++
    tries--
  }

  oScoreVal.innerHTML = `Score Is: ${oWinCount}`
  xScoreVal.innerHTML = `Score Is: ${xWinCount}`
  triesEl.innerHTML = tries
}

```

19. this function will use to hide or show items:

```JavaScript
const showHideResetBtn = () => {
  if (animatedReset.style.display === "none") {
    animatedReset.style.display = ""
  } else {
    oPlayColor.style.color = "white"
    xPlayColor.style.color = "white"
    animatedReset.style.display = "none"
  }
}

```

20. the most importatnt function to highlite the correct directions:

```javascript
const highlightWinningCombination = () => {
  for (let index of winningCombination) {
    const cell = document.getElementById(`${index}`)
    cell.style.backgroundColor = "lightgreen"
  }
}
```

21. this function maybe used to reset winning colors:

```javascript
const rstWinColorBack = () => {
  for (let i = 0; i < board.length; i++) {
    const cell = document.getElementById(`${i}`)
    cell.style.backgroundColor = ""
    cell.textContent = ""
  }
}
```

22. this will be used for dark mode:

```javascript
animatedReset.addEventListener("click", init)
const setTheme = (theme) => (document.documentElement.className = theme)
```

23. this to handel the clickes:

```javascript
boards.forEach((cell) => {
  cell.addEventListener("click", handleClick)
})
```

finish 90% of front-end
back-end logical \*pending

1-listeners Almost (Done)
2-change classes
3-arrow direction logic "i got array with all player images now you have to test till 100% alhamdulleah" (Done)
4-pc arrows random logic
5-pc arrows disappeare logic (Done)
5-pc arrows disappeare logic after time while playing
6-correct arrows logic
7-incorrect arrows logic
8-rounds
9-counter before game over
10-reset btn (Done)
11-start btn (Done)
