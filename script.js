//? variable
let playerArrowsDirections = []
let currentIndices = Array(6).fill(0) // Initialize current indices for each image
let randomArray = [] // Store the PC's random arrows here

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
  img.src = images[currentIndices[index]] // Change the src of the image
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
  })
}

const initializeGame = () => {
  resetPlayerArrows()
  currentIndex = 0
  startBtn.textContent = "Start"
  startBtn.disabled = false
  if (startBtn.textContent === "Start") {
    startBtn.style.width = "100px"
  }
  countdownElement.textContent =
    "Total Time After The Arrows Disappere is 10 Seconds 😎"
  for (let i = 0; i < 6; i++) {
    const button = document.getElementById(`L${i}`)
    button.removeAttribute("disabled", "")
  }
}
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
  startBtn.disabled = true
  startBtn.textContent = "Started..."
  startBtn.style.width = "200px"
}

const timeOut = () => {
  let countdownStart = 10 // Start the countdown from 10 seconds

  const countdownElement = document.getElementById("countdown") // Assume there's an element with the id 'countdown'

  let countdownInterval = setInterval(() => {
    if (countdownStart > 5) {
      countdownElement.textContent = `Total Time After The Arrows Disappear is ${countdownStart} Seconds 😎`
    } else if (countdownStart > 4) {
      countdownElement.style.backgroundColor = "#FFC105"
      countdownElement.style.color = "Black"
      countdownElement.textContent = `Time Become ${countdownStart} Hurry Up 🤯`
    } else if (countdownStart > 0) {
      countdownElement.style.color = "White"
      countdownElement.style.backgroundColor = "#c82333"
      countdownElement.textContent = `Only ${countdownStart} Seconds Remains 😡`
    }

    if (countdownStart === 0) {
      clearInterval(countdownInterval)
      countdownElement.textContent = "Time's Up!"
      for (let i = 0; i < 6; i++) {
        const button = document.getElementById(`L${i}`)
        button.setAttribute("disabled", "")
      } // Display message when time runs out
    }

    countdownStart--
    // scoreBonus()
  }, 1000) // Execute every 1000 milliseconds (1 second)
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
}
let scoreCounter = 0
const submitAllPlayerArrows = () => {
  for (let i = 0; i < 6; i++) {
    if (currentIndices[i] === randomArray[i]) {
      const greenCard = document.getElementById(`cardID${i}`)
      greenCard.style.backgroundColor = "#69CD80FF"
      scoreCounter++
    } else {
      const redCards = document.getElementById(`cardID${i}`)
      redCards.style.backgroundColor = "#C82333"
    }
  }
  scoreLabel.innerText = `Score is: ${scoreCounter}`
}

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

//test
// whant timr control th inv mans at 10s scor will b 2*scor.....
// const scoreBonus = () => {
//   if (countdownStart > 5) {
//     scoreCounter = scoreCounter * scoreCounter
//   } else if (countdownStart > 4) {
//     scoreCounter = scoreCounter * 2
//   } else {
//     return
//   }
// }
