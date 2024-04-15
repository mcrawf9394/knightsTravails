class nodes {
    constructor (x, y) {
        this.xAxis = x
        this.yAxis = y
        this.above = null
        this.below = null
        this.right = null
        this.left = null
    }
}
class chessBoard {
    constructor () {
        this.root = new nodes (0, 0)
        this.buildChessBoard()
    }
    buildChessBoard () {
        let start = this.root
        while (start.xAxis <= 7) {
            if (start.xAxis % 2 === 0) {
                while (start.yAxis < 7) {
                    let newY = start.yAxis + 1
                    let prevNode = start
                    start = new nodes(start.xAxis, newY)
                    start.below = prevNode
                    prevNode.above = start 
                }
            }
            else {
                while (start.yAxis > 0) {
                    let newY = start.yAxis - 1
                    let prevNode = start
                    start = new nodes (start.xAxis, newY)
                    start.above = prevNode
                    prevNode.below = start
                }
            }
            let newX = start.xAxis + 1
            let prevNode = start
            start =  new nodes (newX, start.yAxis)
            if (start.xAxis === 8){
                break
            }
            prevNode.right = start
            start.left = prevNode
        }
        start = this.root
        while (start.xAxis <= 7) {
            let currentNode
            if (start.xAxis % 2 != 0) {
                if (start.yAxis === 0) {
                    currentNode = start.right
                }
                else {
                    currentNode = start.below
                }
            }
            else {
                if (start.yAxis === 7) {
                    currentNode = start.right
                }
                else {
                    currentNode = start.above
                }
            }
            while (currentNode.xAxis != (start.xAxis + 1)) {
                while(currentNode.yAxis != start.yAxis) {
                    if (start.xAxis === 7) {
                        return
                    }
                    if (currentNode.xAxis % 2 === 0) {
                        if (currentNode.yAxis != 7) {
                            currentNode = currentNode.above
                        }
                        else {
                            currentNode = currentNode.right
                        }
                    }
                    else {
                        if (currentNode.yAxis != 0) {
                            currentNode = currentNode.below
                        }
                        else {
                            currentNode = currentNode.right
                        }
                    }
                }
            }
            currentNode.left = start
            start.right = currentNode
            if (start.xAxis %2 === 0) {
                if (start.yAxis != 7) {
                    start = start.above
                }
                else {
                    start = start.right
                }
            }
            else {
                if (start.yAxis != 0) {
                    start = start.below
                }
                else {
                    start = start.right
                }
            }
        }
    }
}
let newChessBoard = new chessBoard ()
console.log(newChessBoard.root)