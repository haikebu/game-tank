let hp = 20;
function getMineTop() {
  let mineTop = document.getElementById("boom").style["top"]
  mineTop = parseInt(mineTop)
  return mineTop
}
function getMineLeft() {
    let mineLeft = document.getElementById("boom").style["top"]
    mmineLeft = parseInt(mineLeft)
    return mineLeft
}
function moveTank(e) {
let keyCode = e.keyCode
if (keyCode == 38) {
    moveUp()
    }
else if (keyCode == 40) {
    moveDown()
    }
else if (keyCode == 37) {
    moveLeft()
    }
else if (keyCode == 39) {
    moveRight()
    }
}
function moveDown() {
let top = document.getElementById("tank").style["top"];
top = parseInt(top);
if (top < 270) {
    top = top + 30;
    document.getElementById("tank").style["top"] = `${top}px`;
    document.getElementById("tank").style["transform"] = "rotate(180deg)"
    } 
}
function moveUp() {
let top = document.getElementById("tank").style["top"];
top = parseInt(top);
if (top > 0) {
    top = top - 30;
    document.getElementById("tank").style["top"] = `${top}px`;
    document.getElementById("tank").style["transform"] = "rotate(0deg)"
    }
}
function moveLeft() {
let left = document.getElementById("tank").style["left"];
left = parseInt(left);
if (left > 0) {
    left = left - 30;
    document.getElementById("tank").style["left"] = `${left}px`;
    document.getElementById("tank").style["transform"] = "rotate(-90deg)"
    }   
}
function moveRight() {
let left = document.getElementById("tank").style["left"];
left = parseInt(left);
if (left<270) {
    left = left + 30;
    document.getElementById("tank").style["left"] = `${left}px`;
    document.getElementById("tank").style["transform"] = "rotate(90deg)"
    }
}
function hit() {
    hp -= 1;
    document.getElementById("hp").innerText = hp
    if (hp == 0) {
        document.getElementById("tank").src = "explosion.png"  
    }
}
    let curTop = parseInt(document.getElementById("tank").style["top"]) 
    let curLeft = parseInt(document.getElementById("tank").style["left"])
    let mineTop = getMineTop()
    let mineLeft = getMineTop()
    console.log(curTop)
    if ((curTop == mineTop) & (curLeft == mineLeft)) {
        document.getElementById("tank").src = "explosion.png"
        document.getElementById("boom").style.visibility = "hidden"
    }