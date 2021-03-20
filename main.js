let hp = 20;
function getMineTop() {
  let mineTop = document.getElementById("boom").style["top"]
  mineTop = parseInt(mineTop)
  return mineTop
}
function getMineLeft() {
    let mineLeft = document.getElementById("boom").style["left"]
    mmineLeft = parseInt(mineLeft)
    return mineLeft
}
function moveTank(e) {
let keyCode = e.keyCode
switch (keyCode){
    case (38) : {
    moveUp()
    break
        }
    case (40) : {
    moveDown()
    break
        }
    case (37) : {
    moveLeft()
    break
        }
    case (39) : {
    moveRight()
    break
        }
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
switch(hp){
    case (19) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 190px"
        break
        }
    case (18) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 180px"
        break
        }
    case (17) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 170px"
        break
        }
    case (16) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 160px"
        break
        }
    case (15) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 150px"
        break
        }
    case (14) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 140px"
        break
        }
    case (13) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 130px"
        break
     }
    case (12) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 120px"
        break
        }
    case (11) : {
        document.getElementById("hp").style = "background-color: greenyellow; height: 30px; width: 110px"
        break
        }
    case (10) : {
        document.getElementById("hp").style = "background-color: yellow; height: 30px; width: 100px"
        break
        }
    case (9) : {
        document.getElementById("hp").style = "background-color: yellow; height: 30px; width: 90px"
        break
        }
    case (8) : {
        document.getElementById("hp").style = "background-color: yellow; height: 30px; width: 80px"
        break
        }
    case (7) : {
        document.getElementById("hp").style = "background-color: yellow; height: 30px; width: 70px"
        break
        }
    case (6) : {
        document.getElementById("hp").style = "background-color: yellow; height: 30px; width: 60px"
        break
        }
    case (5) : {
        document.getElementById("hp").style = "background-color: red; height: 30px; width: 50px"
        break
        }
    case (4) : {
        document.getElementById("hp").style = "background-color: red; height: 30px; width: 40px"
        break
        }
    case (3) : {
        document.getElementById("hp").style = "background-color: red; height: 30px; width: 30px"
        break
        }
    case (2) : {
        document.getElementById("hp").style = "background-color: red; height: 30px; width: 20px"
        break
        }
    case (1) : {
        document.getElementById("hp").style = "background-color: red; height: 30px; width: 10px"
        break
        }
    case (0) : {
        document.getElementById("tank").src = "explosion.png"
        break
        }
    }
}