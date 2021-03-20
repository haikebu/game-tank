let hp = 20;
function moveTank(e) {
    let keyCode = e.keyCode
    switch (keyCode){
        case 38 : moveUp()
        break
        case 40 : moveDown()
        break
        case 37 : moveLeft()
        break
        case 39 : moveRight()
        break
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
    if(stepOnMine()) {
        hit()
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
    if(stepOnMine()) {
        hit()
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
    if(stepOnMine()) {
        hit()
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
    if(stepOnMine()) {
        hit()
    }
}
function hit() {
    hp -= 1; 
    document.getElementById("hp").innerText = hp
    let thanhmau
    let mau
    switch(hp){
        case 19 : thanhmau = hp*10
            mau = "green"      
        break
        case 18 : thanhmau = hp*10
        mau = "green"
            break
        case 17 : thanhmau = hp*10
        mau = "green"
            break
        case 16 : thanhmau = hp*10
        mau = "green"
            break
        case 15 : thanhmau = hp*10
        mau = "greenyellow"
            break
        case 14 :thanhmau = hp*10
        mau = "greenyellow"
            break
        case 13 : thanhmau = hp*10
        mau = "greenyellow"
            break
        case 12 : thanhmau = hp*10
        mau = "greenyellow"
            break
        case 11 : thanhmau = hp*10
        mau = "greenyellow"
            break
        case 10 : thanhmau = hp*10
        mau = "yellow"
            break
        case 9 : thanhmau = hp*10
        mau = "yellow"
            break
        case 8 : thanhmau = hp*10
        mau = "yellow"
            break
        case 7 : thanhmau = hp*10
        mau = "yellow"
            break
        case 6 : thanhmau = hp*10
        mau = "yellow"
            break
        case 5 : thanhmau = hp*10
        mau = "red"
            break
        case 4 : thanhmau = hp*10
        mau = "red"
            break
        case 3 : thanhmau = hp*10
        mau = "red"
            break
        case 2 : thanhmau = hp*10
        mau = "red"
            break
        case 1 : thanhmau = hp*10
        mau = "red"
            break
        case 0 : 
            document.getElementById("tank").src = "explosion.png"
            break
    }
    document.getElementById("hp").style["width"] = `${thanhmau}px`
    document.getElementById("hp").style["background-color"] = mau
}
function stepOnMine() {
    let leftMine = parseInt(document.getElementById("boom").style["left"])
    let topMine = parseInt(document.getElementById("boom").style["top"])
    let leftTank = parseInt(document.getElementById("tank").style["left"])
    let topTank = parseInt(document.getElementById("tank").style["top"])
    let isOnMine = (leftMine == leftTank && topMine == topTank)
    return isOnMine
}
function explode() {
    document.getElementById("tank").src = "explosion.png"
    document.getElementById("boom").style.visibility = "hidden"
}