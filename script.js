//? variable
let playerArrowsDirections = []
let currentIndices = Array(6).fill(0) // Initialize current indices for each image
let randomArray = [] // Store the PC's random arrows here
let countdownInterval = null
let isSubmitted = false
let countdownStart = 10

const images = [
  "/images/0.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
]

//? functions Start
// Functions to change player arrow images
const changeImageOfPlayer = (index) => {
  currentIndices[index] = (currentIndices[index] + 1) % images.length // Increment index and wrap around
  const img = document.getElementById(`plrImg${index}`)
  // Change the src of the image
  img.src = images[currentIndices[index]]
}

// Function to generate a random array
const generateRandomArray = () => {
  const result = []
  while (result.length < 6) {
    const randomNumber = Math.floor(Math.random() * 4) // Generates 0 to 3
    result.push(randomNumber)
  }
  return result
}

// Function to show the PC's arrows
const changeImgForPC = () => {
  randomArray = generateRandomArray() // Store the generated random array
  randomArray.forEach((randNum, index) => {
    const img = document.getElementById(`compImg${index}`)
    if (img) {
      img.src = images[randNum] // Update the image source
    }
    // Add spin class to animate
    img.classList.add("spin")
    // Remove spin class after animation is done
    setTimeout(() => {
      img.classList.remove("spin")
    }, 1000) // Match this timeout with the duration of the spin CSS animation
  })
}
const timeOut = () => {
  // You must reset countdownStart each time you start it
  countdownStart = 10

  // Clear previous interval to prevent multiple intervals running
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }

  // Start the countdown interval
  countdownInterval = setInterval(() => {
    console.log(`Countdown at ${countdownStart}`) // Debugging line
    if (!isSubmitted && countdownStart >= 0) {
      if (countdownStart > 6) {
        countdownElement.textContent = `Total Time After The Arrows Disappear is ${countdownStart} Seconds 😎`
      } else if (countdownStart > 2) {
        countdownElement.style.backgroundColor = "#FFC105"
        countdownElement.style.color = "Black"
        countdownElement.textContent = `Time Become ${countdownStart} Hurry Up 🤯`
      } else if (countdownStart > 0) {
        countdownElement.style.color = "White"
        countdownElement.style.backgroundColor = "#c82333"
        countdownElement.textContent = `Only ${countdownStart} Seconds Remains 😡`
      } else {
        countdownElement.textContent = "Time's Up!"
        clearInterval(countdownInterval) // Clear the interval if time is up
      }
      countdownStart-- // Decrease countdown
    }
  }, 1000) // Update every second
}

const initializeGame = () => {
  resetPlayerArrows()
  startBtn.textContent = "Start"
  startBtn.disabled = false
  countdownElement.textContent =
    "Total Time After The Arrows Disappear is 10 Seconds 😎"
  countdownElement.style.backgroundColor = "#28A745"
  countdownElement.style.color = "white"

  for (let i = 0; i < 6; i++) {
    const button = document.getElementById(`L${i}`)
    if (button) {
      button.removeAttribute("disabled")
    }
  }
  submitAction.removeAttribute("disabled")

  // Start the countdown
  isSubmitted = false // Reset submission status
  // Start the countdown timer
}

// Handling Reset Button
// rstButton.addEventListener("click", initializeGame); // Ensure initializeGame correctly sets up the game
// Start game function
const startGame = () => {
  // setTimeout(() => {
  pcArrows.forEach((pcArrow) => {
    pcArrow.style.transition = "all 1s ease-in-out"
    pcArrow.classList.remove("hide-img")
    setTimeout(() => {
      pcArrow.style.transition = "all 1s ease-in-out"
      pcArrow.classList.add("hide-img")
      timeOut()
    }, 3000)
  })

  // Generate and show PC directions
  changeImgForPC()
  for (let i = 0; i < 6; i++) {
    const button = document.getElementById(`L${i}`)
    button.removeAttribute("disabled", "")
  }
  submitAction.removeAttribute("disabled", "")
  startBtn.disabled = true
  startBtn.textContent = "Started..."
  startBtn.style.width = "200px"
}

const submitAllPlayerArrows = () => {
  // Clear the countdown interval to stop the timer
  isSubmitted = true

  // The rest of your existing logic goes here
  for (let i = 0; i < 6; i++) {
    if (currentIndices[i] === randomArray[i]) {
      const greenCard = document.getElementById(`cardID${i}`)
      greenCard.style.backgroundColor = "#69CD80FF"
      scoreCounter++
      greenCardsCounter++
    } else {
      const redCards = document.getElementById(`cardID${i}`)
      redCards.style.backgroundColor = "#C82333"
      redCardsCounter++
    }
  }

  let win = false

  for (let i = 0; i < 6; i++) {
    const button = document.getElementById(`L${i}`)
    button.setAttribute("disabled", "")
  }
  submitAction.setAttribute("disabled", "")
  scoreLabel.innerText = `Score is: ${scoreCounter}`

  if (greenCardsCounter > redCardsCounter) {
    // confetti code
    win = true
  }

  if (win) {
    startBtn.disabled = true
    startBtn.textContent = "Finished"
    startBtn.style.width = "200px"
    var duration = 3 * 1000
    var end = Date.now() + duration

    ;(function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      })
      // and launch a few from the right edge
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      })

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    })()
  }
}

// To start the countdown, you can call the timeOut function:
// timeOut();

// Function to reset player arrows
const resetPlayerArrows = () => {
  currentIndices.fill(0) // Reset current indices
  cards.forEach((card) => {
    card.classList.add("hide-img")
    setTimeout(() => {
      for (let i = 0; i < 6; i++) {
        const img = document.getElementById(`plrImg${i}`)
        img.src = images[0]
      }
      card.classList.remove("hide-img")
    }, 1500) // Wait for 3 seconds before removing the class
    card.style.backgroundColor = "white"
  })

  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.add("hide-img")
  })
  // for (let i = 0; i < 6; i++) {
  //   const button = document.getElementById(`L${i}`)
  //   button.removeAttribute("disabled", "")
  // }
  // submitAction.removeAttribute("disabled", "")
}
let scoreCounter = 0
let greenCardsCounter = 0
let redCardsCounter = 0

//? cashing

// full 12 btn cashing
const buttons = document.querySelectorAll(".btn")
//  full playerArrows cashing
const cards = document.querySelectorAll(".card")
// reset button
const startBtn = document.getElementById("startGame")
// reset button
const rstButton = document.getElementById("resetFullGame")
// full pcArrows cashing
const pcArrows = document.querySelectorAll(".pcImg0")
// submit Burron Cshing
const submitAction = document.getElementById("submitBtm")
// score
const scoreLabel = document.getElementById("scoreLabel")
// timr
const countdownElement = document.getElementById("countdown")

// events only (any Thing To Be Clicked Will Be Here)

// start button
startBtn.addEventListener("click", startGame)
// resetEvent
rstButton.addEventListener("click", initializeGame)
// submitBtn
submitAction.addEventListener("click", submitAllPlayerArrows)
// Add event listeners for each button
for (let i = 0; i < 6; i++) {
  const button = document.getElementById(`L${i}`)
  button.addEventListener("click", () => changeImageOfPlayer(i))
}
