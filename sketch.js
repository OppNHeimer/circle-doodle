var x = 0
var y = 0
var coordinates = [{}]
var length = 1

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight)
}

function draw() {
  background(255)
  update()

  for (var i = coordinates.length - 1; i >= 0; i--) {
    ellipse(coordinates[i].x, coordinates[i].y, 50, 40)
  }
}

function update () {
  xDirection = Math.sign(mouseX - x)
  yDirection = Math.sign(mouseY - y)
  xMult = Math.abs(mouseX - x) / 10
  yMult = Math.abs(mouseY - y) / 10
  x = x + xDirection * xMult
  y = y + yDirection * yMult
  coordinates.unshift({x: x, y: y})
  coordinates.pop()

}

function mouseClicked () {
  coordinates.push({})
}

