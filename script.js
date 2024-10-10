// const
const imgPlyr0 = document.getElementById("imgID0")
const imgPlyr1 = document.getElementById("imgID1")
const imgPlyr2 = document.getElementById("imgID2")
const imgPlyr3 = document.getElementById("imgID3")
const imgPlyr4 = document.getElementById("imgID4")
const imgPlyr5 = document.getElementById("imgID5")
// variable
let pcArrwosRandomByMath = []
let playerArrowsDirections = []
let array = new Array(7).fill(null) // Create an array of length 7 filled with null values

// functions
function changeImage(direction) {
  // Update the index based on the direction
  if (direction === "imgUp" || direction === "imgLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length
  } else if (direction === "imgDown" || direction === "imgRight") {
    currentIndex = (currentIndex + 1) % images.length
  }
  imgPlyr0.src = images[currentIndex]
  // Update the image source for each image element
  // playerArrowsImgs.forEach((img) => {
  //   img.src = images[currentIndex] // Update individual image source
  // })
}
const images = [
  "/images/0.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
]

// Current index
let currentIndex = 0

const leftOrRight = () => {
  // playerArrowsImgs.forEach((playerArrowsImg, index) => {
  //   let imgsValue = playerArrowsImg.getAttribute("value")
  //   // Append new contents
  //   playerArrowsDirections.push(imgsValue)
  //   playerArrowsDirections.length = index + 1
  // })

  const filling = () => {
    let newElements = playerArrowsDirections // Replace with your actual new elements

    fillArray(newElements)
  }
  filling()

  const LzeroVal = imgPlyr0.getAttribute("value")
  console.log(LzeroVal)

  changeImage(LzeroVal)
  console.log(images[currentIndex])
}

const fillArray = (newElements) => {
  array.splice(0, 7, ...newElements) // Replace the first 7 elements with the new elements
  console.log(array)
}

const fillPlayerTriesArray = () => {}
// working 100% for player cards
const initializeGame = () => {
  //   resetPcArrows()
  resetPlayerArrows()
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

// cashing

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
//   button.addEventListener("click", leftOrRight)
// })
// full 12 btn seperate cashing
const Lzero = document.getElementById("L0")
Lzero.addEventListener("click", leftOrRight)
const Rzero = document.getElementById("R0")
Rzero.addEventListener("click", leftOrRight)
const Lone = document.getElementById("L1")
Lone.addEventListener("click", leftOrRight)
const Rone = document.getElementById("R1")
Rone.addEventListener("click", leftOrRight)
const Ltwo = document.getElementById("L2")
Ltwo.addEventListener("click", leftOrRight)
const Rtwo = document.getElementById("R2")
Rtwo.addEventListener("click", leftOrRight)
const Lthree = document.getElementById("L3")
Lthree.addEventListener("click", leftOrRight)
const Rthree = document.getElementById("R3")
Rthree.addEventListener("click", leftOrRight)
const Lfour = document.getElementById("L4")
Lfour.addEventListener("click", leftOrRight)
const Rfour = document.getElementById("R4")
Rfour.addEventListener("click", leftOrRight)
const Lfive = document.getElementById("L5")
Lfive.addEventListener("click", leftOrRight)
const Rfive = document.getElementById("R5")
Rfive.addEventListener("click", leftOrRight)

// full 6 images to change there src

// test area

// Assuming you have a button element with the id "myButton"

// Array of images
