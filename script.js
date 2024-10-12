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

// Functions to change player arrow images
const changeImageOfPlayer = (index) => {
  currentIndices[index] = (currentIndices[index] + 1) % images.length // Increment index and wrap around
  const img = document.getElementById(`plrImg${index}`)
  img.src = images[currentIndices[index]] // Change the src of the image
}

// Add event listeners for each button
for (let i = 0; i < 6; i++) {
  const button = document.getElementById(`L${i}`)
  button.addEventListener("click", () => changeImageOfPlayer(i))
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
    } else {
      console.error(`Image element with id 'compImg${index}' not found.`)
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
}
// Start game function
const startGame = () => {
  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.remove("hide-img")
  })
  changeImgForPC() // Generate and show PC directions
  startBtn.disabled = true
  startBtn.textContent = "Started..."
  startBtn.style.width = "200px"
}

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
  })

  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.add("hide-img")
  })
}
const submitAllPlayerArrows = () => {
  // Check if currentIndices is equal to randomArray
  const isWin =
    currentIndices.length === randomArray.length &&
    currentIndices.every((value, index) => value === randomArray[index])

  if (isWin) {
    console.log("Win")
  } else {
    console.log("Try Again")
  }
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
// events only (any Thing To Be Clicked Will Be Here)

// start button
startBtn.addEventListener("click", startGame)
// resetEvent
rstButton.addEventListener("click", initializeGame)
// submitBtn
submitAction.addEventListener("click", submitAllPlayerArrows)
