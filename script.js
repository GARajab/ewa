// const
const imgPlyr0 = document.getElementById("plrImg0")
const imgPlyr1 = document.getElementById("plrImg1")
const imgPlyr2 = document.getElementById("plrImg2")
const imgPlyr3 = document.getElementById("plrImg3")
const imgPlyr4 = document.getElementById("plrImg4")
const imgPlyr5 = document.getElementById("plrImg5")

const imgPc0 = document.getElementById(".compImg0")
const imgPc1 = document.getElementById(".compImg1")
const imgPc2 = document.getElementById(".compImg2")
const imgPc3 = document.getElementById(".compImg3")
const imgPc4 = document.getElementById(".compImg4")
const imgPc5 = document.getElementById(".compImg5")

//? variable
let pcArrwosRandomByMath = []
// ! all arrows are up (player)
let playerArrowsDirections = []
let initArray = [0, 0, 0, 0, 0, 0]
let array = new Array(7).fill(null) // Create an array of length 7 filled with null values

//? functions
function changeImage(playerVal, playerImg) {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  playerImg.src = images[currentIndex]
}
const images = [
  "/images/0.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
]

// Current index
currentIndex = 0
const filling = () => {
  let newElements = playerArrowsDirections // Replace with your actual new elements
  fillArray(newElements)
}
const fillArray = (newElements) => {
  array.splice(0, 7, ...newElements) // Replace the first 7 elements with the new elements
  // console.log(array)
}
const changePlayerArrowsDirectionsZero = () => {
  filling()
  const lZeroVal = imgPlyr0.getAttribute("value")
  // playerArrowsDirections.unshift(currentIndex)
  if (playerArrowsDirections.length > 0) {
    playerArrowsDirections[0] = currentIndex
  } else {
    playerArrowsDirections.push(currentIndex)
  }
  console.log(playerArrowsDirections)

  changeImage(lZeroVal, imgPlyr0)
  // console.log(images[currentIndex])
}
const changePlayerArrowsDirectionsOne = () => {
  filling()
  const lOneVal = imgPlyr1.getAttribute("value")
  if (playerArrowsDirections.length > 1) {
    playerArrowsDirections[1] = currentIndex
  } else {
    playerArrowsDirections.push(currentIndex)
  }
  console.log(playerArrowsDirections)
  changeImage(lOneVal, imgPlyr1)
  // console.log(images[currentIndex])
}
const changePlayerArrowsDirectionsTwo = () => {
  filling()

  const lTwoVal = imgPlyr2.getAttribute("value")
  if (playerArrowsDirections.length > 2) {
    playerArrowsDirections[2] = currentIndex
  } else {
    playerArrowsDirections.push(currentIndex)
  }
  console.log(playerArrowsDirections)
  changeImage(lTwoVal, imgPlyr2)
  // console.log(images[currentIndex])
}
const changePlayerArrowsDirectionsThree = () => {
  filling()
  const lThreeVal = imgPlyr3.getAttribute("value")
  if (playerArrowsDirections.length > 3) {
    playerArrowsDirections[3] = currentIndex
  } else {
    playerArrowsDirections.push(currentIndex)
  }
  console.log(playerArrowsDirections)
  changeImage(lThreeVal, imgPlyr3)
  // console.log(images[currentIndex])
}
const changePlayerArrowsDirectionsFour = () => {
  filling()
  const lFourVal = imgPlyr4.getAttribute("value")
  if (playerArrowsDirections.length > 4) {
    playerArrowsDirections[4] = currentIndex
  } else {
    playerArrowsDirections.push(currentIndex)
  }
  console.log(playerArrowsDirections)
  changeImage(lFourVal, imgPlyr4)
  // console.log(images[currentIndex])
}
const changePlayerArrowsDirectionsFive = () => {
  filling()
  const lFiveVal = imgPlyr5.getAttribute("value")
  if (playerArrowsDirections.length > 5) {
    playerArrowsDirections[5] = currentIndex
  } else {
    playerArrowsDirections.push(currentIndex)
  }
  console.log(playerArrowsDirections)
  changeImage(lFiveVal, imgPlyr5)
  // console.log(images[currentIndex])
}

const fillPlayerTriesArray = () => {}
// working 100% for player cards
const initializeGame = () => {
  //   resetPcArrows()
  resetPlayerArrows()
  currentIndex = 0
  let pcArrwosRandomByMath = []
}
const fillPcArrowsRandomly = () => {
  for (let i = 0; i < 6; i++) {
    pcArrwosRandomByMath.push(Math.floor(Math.random() * 3))
  }

  console.log(pcArrwosRandomByMath)
}
const startGame = () => {
  console.dir(pcArrows)
  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.remove("hide-img")
  })
  fillPcArrowsRandomly()
}

const resetPlayerArrows = () => {
  cards.forEach((card) => {
    card.classList.add("hide-img")
  })
  pcArrows.forEach((pcArrow) => {
    pcArrow.classList.add("hide-img")
  })
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
// full playerArrows cashing
// const playerArrowsImgs = document.querySelectorAll("#imgID")

// events only (any Thing To Be Clicked Will Be Here)

// start button
startBtn.addEventListener("click", startGame)
// resetEvent
rstButton.addEventListener("click", initializeGame)
// full 12 btn click event
// buttons.forEach((button) => {
//   button.addEventListener("click", changePlayerArrowsDirections)
// })
//? full 12 btn seperate cashing and lisiting
const lZero = document.getElementById("L0")
lZero.addEventListener("click", changePlayerArrowsDirectionsZero)
// const Rzero = document.getElementById("R0")
// Rzero.addEventListener("click", changePlayerArrowsDirections)
const lOne = document.getElementById("L1")
lOne.addEventListener("click", changePlayerArrowsDirectionsOne)
// const Rone = document.getElementById("R1")
// Rone.addEventListener("click", changePlayerArrowsDirections)
const lTwo = document.getElementById("L2")
lTwo.addEventListener("click", changePlayerArrowsDirectionsTwo)
// const Rtwo = document.getElementById("R2")
// Rtwo.addEventListener("click", changePlayerArrowsDirections)
const lThree = document.getElementById("L3")
lThree.addEventListener("click", changePlayerArrowsDirectionsThree)
// const Rthree = document.getElementById("R3")
// Rthree.addEventListener("click", changePlayerArrowsDirections)
const lFour = document.getElementById("L4")
lFour.addEventListener("click", changePlayerArrowsDirectionsFour)
// const Rfour = document.getElementById("R4")
// Rfour.addEventListener("click", changePlayerArrowsDirections)
const lFive = document.getElementById("L5")
lFive.addEventListener("click", changePlayerArrowsDirectionsFive)
// const Rfive = document.getElementById("R5")
// Rfive.addEventListener("click", changePlayerArrowsDirections)

// full 6 images to change there src

// test area

// Assuming you have a button element with the id "myButton"

// Array of images
