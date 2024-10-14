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

const initializeGame = () => {
  resetPlayerArrows()
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
  submitAction.removeAttribute("disabled", "")
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
      }
      submitAction.setAttribute("disabled", "")
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
  for (let i = 0; i < 6; i++) {
    const button = document.getElementById(`L${i}`)
    button.removeAttribute("disabled", "")
  }
  submitAction.removeAttribute("disabled", "")
}
let scoreCounter = 0
let greenCardsCounter = 0
let redCardsCounter = 0
const submitAllPlayerArrows = () => {
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
  submitAction.setAttribute("disabled", "")
  scoreLabel.innerText = `Score is: ${scoreCounter}`
  if (greenCardsCounter > redCardsCounter) {
    // confetti code
    poof()
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

// Globals
var random = Math.random,
  cos = Math.cos,
  sin = Math.sin,
  PI = Math.PI,
  PI2 = PI * 2,
  timer = undefined,
  frame = undefined,
  confetti = []

var particles = 10,
  spread = 40,
  sizeMin = 3,
  sizeMax = 12 - sizeMin,
  eccentricity = 10,
  deviation = 100,
  dxThetaMin = -0.1,
  dxThetaMax = -dxThetaMin - dxThetaMin,
  dyMin = 0.13,
  dyMax = 0.18,
  dThetaMin = 0.4,
  dThetaMax = 0.7 - dThetaMin

var colorThemes = [
  function () {
    return color(
      (200 * random()) | 0,
      (200 * random()) | 0,
      (200 * random()) | 0
    )
  },
  function () {
    var black = (200 * random()) | 0
    return color(200, black, black)
  },
  function () {
    var black = (200 * random()) | 0
    return color(black, 200, black)
  },
  function () {
    var black = (200 * random()) | 0
    return color(black, black, 200)
  },
  function () {
    return color(200, 100, (200 * random()) | 0)
  },
  function () {
    return color((200 * random()) | 0, 200, 200)
  },
  function () {
    var black = (256 * random()) | 0
    return color(black, black, black)
  },
  function () {
    return colorThemes[random() < 0.5 ? 1 : 2]()
  },
  function () {
    return colorThemes[random() < 0.5 ? 3 : 5]()
  },
  function () {
    return colorThemes[random() < 0.5 ? 2 : 4]()
  },
]
function color(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")"
}

// Cosine interpolation
function interpolation(a, b, t) {
  return ((1 - cos(PI * t)) / 2) * (b - a) + a
}

// Create a 1D Maximal Poisson Disc over [0, 1]
var radius = 1 / eccentricity,
  radius2 = radius + radius
function createPoisson() {
  // domain is the set of points which are still available to pick from
  // D = union{ [d_i, d_i+1] | i is even }
  var domain = [radius, 1 - radius],
    measure = 1 - radius2,
    spline = [0, 1]
  while (measure) {
    var dart = measure * random(),
      i,
      l,
      interval,
      a,
      b,
      c,
      d

    // Find where dart lies
    for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
      ;(a = domain[i]), (b = domain[i + 1]), (interval = b - a)
      if (dart < measure + interval) {
        spline.push((dart += a - measure))
        break
      }
      measure += interval
    }
    ;(c = dart - radius), (d = dart + radius)

    // Update the domain
    for (i = domain.length - 1; i > 0; i -= 2) {
      ;(l = i - 1), (a = domain[l]), (b = domain[i])
      // c---d          c---d  Do nothing
      //   c-----d  c-----d    Move interior
      //   c--------------d    Delete interval
      //         c--d          Split interval
      //       a------b
      if (a >= c && a < d)
        if (b > d) domain[l] = d // Move interior (Left case)
        else domain.splice(l, 2)
      // Delete interval
      else if (a < c && b > c)
        if (b <= d) domain[i] = c // Move interior (Right case)
        else domain.splice(i, 0, c, d) // Split interval
    }

    // Re-measure the domain
    for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
      measure += domain[i + 1] - domain[i]
  }

  return spline.sort()
}

// Create the overarching container
var container = document.createElement("div")
container.style.position = "fixed"
container.style.top = "0"
container.style.left = "0"
container.style.width = "100%"
container.style.height = "0"
container.style.overflow = "visible"
container.style.zIndex = "9999"

// Confetto constructor
function Confetto(theme) {
  this.frame = 0
  this.outer = document.createElement("div")
  this.inner = document.createElement("div")
  this.outer.appendChild(this.inner)

  var outerStyle = this.outer.style,
    innerStyle = this.inner.style
  outerStyle.position = "absolute"
  outerStyle.width = sizeMin + sizeMax * random() + "px"
  outerStyle.height = sizeMin + sizeMax * random() + "px"
  innerStyle.width = "100%"
  innerStyle.height = "100%"
  innerStyle.backgroundColor = theme()

  outerStyle.perspective = "50px"
  outerStyle.transform = "rotate(" + 360 * random() + "deg)"
  this.axis =
    "rotate3D(" + cos(360 * random()) + "," + cos(360 * random()) + ",0,"
  this.theta = 360 * random()
  this.dTheta = dThetaMin + dThetaMax * random()
  innerStyle.transform = this.axis + this.theta + "deg)"

  this.x = window.innerWidth * random()
  this.y = -deviation
  this.dx = sin(dxThetaMin + dxThetaMax * random())
  this.dy = dyMin + dyMax * random()
  outerStyle.left = this.x + "px"
  outerStyle.top = this.y + "px"

  // Create the periodic spline
  this.splineX = createPoisson()
  this.splineY = []
  for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
    this.splineY[i] = deviation * random()
  this.splineY[0] = this.splineY[l] = deviation * random()

  this.update = function (height, delta) {
    this.frame += delta
    this.x += this.dx * delta
    this.y += this.dy * delta
    this.theta += this.dTheta * delta

    // Compute spline and convert to polar
    var phi = (this.frame % 7777) / 7777,
      i = 0,
      j = 1
    while (phi >= this.splineX[j]) i = j++
    var rho = interpolation(
      this.splineY[i],
      this.splineY[j],
      (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
    )
    phi *= PI2

    outerStyle.left = this.x + rho * cos(phi) + "px"
    outerStyle.top = this.y + rho * sin(phi) + "px"
    innerStyle.transform = this.axis + this.theta + "deg)"
    return this.y > height + deviation
  }
}

function poof() {
  if (!frame) {
    // Append the container
    document.body.appendChild(container)

    // Add confetti
    var theme = colorThemes[0],
      count = 0
    ;(function addConfetto() {
      var confetto = new Confetto(theme)
      confetti.push(confetto)
      container.appendChild(confetto.outer)
      timer = setTimeout(addConfetto, spread * random())
    })(0)

    // Start the loop
    var prev = undefined
    requestAnimationFrame(function loop(timestamp) {
      var delta = prev ? timestamp - prev : 0
      prev = timestamp
      var height = window.innerHeight

      for (var i = confetti.length - 1; i >= 0; --i) {
        if (confetti[i].update(height, delta)) {
          container.removeChild(confetti[i].outer)
          confetti.splice(i, 1)
        }
      }

      if (timer || confetti.length) return (frame = requestAnimationFrame(loop))

      // Cleanup
      document.body.removeChild(container)
      frame = undefined
    })
  }
}
