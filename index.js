let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")



function addHome1() {
   homeScoreEl.textContent = homeScore += 1
}

function addGuest1() {
    guestScoreEl.textContent = guestScore += 1
}

function addHome2() {
    homeScoreEl.textContent = homeScore += 2
}

function addGuest2() {
    guestScoreEl.textContent = guestScore += 2
}

function addHome3() {
    homeScoreEl.textContent = homeScore += 3
}

function addGuest3() {
    guestScoreEl.textContent = guestScore += 3
}