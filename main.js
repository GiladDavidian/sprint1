'use strict'

var gBoard = {
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function onInit() {
    renderBoard()
}

var matBoard = createMat(gLevel.SIZE, gLevel.SIZE)

function createMat(rows, cols) {
    const mat = []
    for (var i = 0; i < rows; i++) {
        const row = []
        for (var j = 0; j < cols; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}

function renderBoard() {
    var strHTML = ``
    for (var i = 0; i < matBoard.length; i++) {
        strHTML += `<tr>`
        for (var j = 0; j < matBoard[0].length; j++) {
            strHTML += `<td><button>X</button></td>`
        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function setMinesNegsCount(){

}