import newChessBoard from "./chessBoard";
console.log(newChessBoard.root)
class knight {
    constructor (startPosition, endPosition) {
        if (startPosition[0] > 0 && startPosition [0] < 8 && startPosition[1] > 0 && startPosition[1] < 8) {
            this.start = startPosition
        }
        else {
            console.log("invalid position")
        }
        if (endPosition[0] > 0 && endPosition [0] < 8 && endPosition[1] > 0 && endPosition[1] < 8) {
            this.end = endPosition
        }
        else {
            console.log("invalid position")
        }
        this.possibleMoves = [
             [-2, 1],
             [-1, 2],
             [-2, -1],
             [-1, -2],
             [2, 1],
             [1, 2],
             [2, -1],
             [1, -2],
        ]
        this.movesCount = this.moves()
    }
    movement (array, currentNode) {
        let x = array[0]
        let y = array[1]
        while (x != 0) {
            if (x > 0) {
                if (currentNode.right === null) {
                    return null
                }
                currentNode = currentNode.right
                x = x -1
            }
            else {
                if (currentNode.left === null) {
                    return null
                }
                currentNode = currentNode.left
                x = x + 1 
            }
        }
        while (y != 0) {
            if (y > 0) {
                if (currentNode.above === null) {
                    return null
                }
                currentNode = currentNode.above
                y = y - 1
            }
            else {
                if (currentNode.below === null) {
                    return null
                }
                currentNode = currentNode.below
                y = y + 1
            }
        }
        return currentNode
    }
    moveKnight(currentNode, finishNode, i) {
        if (currentNode === finishNode) {
            this.movesCount = i
            console.log(this.movesCount)
            return
        }
        if (currentNode === null) {
            this.moveKnight(newChessBoard.find(this.start), finishNode, 0)
        }
        i = i + 1
        let firstMove = Math.floor(Math.random()*8)
        currentNode = this.movement(this.possibleMoves[firstMove], currentNode)
        console.log(currentNode)
        this.moveKnight(currentNode, finishNode, i)
    }
    moves () {
        let startNode = newChessBoard.find(this.start)
        let finishNode = newChessBoard.find(this.end)
        let i = 0
        let num = this.moveKnight(startNode, finishNode, i)
        return num
    }
}
let currentKnight= new knight ([2, 2], [3, 3])
console.log (currentKnight)