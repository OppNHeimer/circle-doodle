
var animate = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame

var canvas = document.getElementsByTagName('canvas')
// console.log(canvas)

var context = canvas[0].getContext('2d')

animate(step)

function step () {
  update()
  render()
  animate(step)
}

function update () {
}

function render () {
  // context.fillStyle = 'red'
  // context.fillRect(0, 0, 100, 100)
  // head.render()
  ellipse(50, 50, 80, 80)
}

// class Circle {
//   constructor (x, y, radius) {
//     this.x = x
//     this.y = y
//     this.radius = radius
//     this.x_speed = 0
//     this.y_speed = 0
//   }
//   render () {
//     context.beginPath()
//     context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
//     context.fillStyle = 'green'
//     context.fill()
//   }
// }

// var head = new Circle(80, 90, 10)