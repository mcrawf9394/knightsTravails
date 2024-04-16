import newChessBoard from "./chessBoard";
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
        this.pathway = this.moves()
        this.moveCount = this.pathway.length - 1
    }
    moves () {
        let x = this.start[0]
        let y = this.start[1]
        let currentNode = newChessBoard.find(x, y)
        x = this.end[0]
        y = this.end[1]
        let endNode = newChessBoard.find(x, y)
        let pathway = []
        let queue = []
        let i = 0
        function check (node, end) {
            if (node === end) {
                return true
            }
            else {
                let currentNode = queue[0]
                console.log(currentNode)
                let array = [currentNode.UUR, currentNode.URR, currentNode.DRR, currentNode.DDR, currentNode.ULL, currentNode.UUL, currentNode.DDL, currentNode.DLL]
                array.forEach(node => {
                    if (node) {
                        node.prev = currentNode
                    }
                })
                queue.push(currentNode.UUR, currentNode.URR, currentNode.DRR, currentNode.DDR, currentNode.ULL, currentNode.UUL, currentNode.DDL, currentNode.DLL)
                return false
            }
        }
        queue.push(currentNode)
        while (queue.length > 0) {
            if (queue[0] === null) {
                queue.splice(0, 1)
            }
            else {
                if (check(queue[0], endNode) === true) {
                    pathway.push(endNode)
                    currentNode.prev = null
                    while (endNode.prev) {
                        pathway.unshift(endNode.prev)
                        endNode = endNode.prev
                    }
                    return (pathway)
                }
                queue.splice(0, 1)
            }
        }
    }
}
let currentKnight= new knight ([2, 2], [5, 3])
console.log (currentKnight.pathway, currentKnight.moveCount)