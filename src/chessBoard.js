class nodes {
    constructor (x, y) {
        this.xAxis = x
        this.yAxis = y
        this.next = null
        this.prev = null
        this.UUR = null
        this.URR = null
        this.ULL = null
        this.UUL = null
        this.DRR = null
        this.DDR = null
        this.DLL = null
        this.DDL = null
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
            while (start.yAxis < 7) {
                let newY = start.yAxis + 1
                let prevNode = start
                start = new nodes(start.xAxis, newY)
                prevNode.next = start 
            }
            let newX = start.xAxis + 1
            let prevNode = start
            start =  new nodes (newX, 0)
            if (start.xAxis === 8){
                break
            }
            prevNode.next = start
        }
        start = this.root
        let newX
        let newY
        while (start.xAxis <= 7 && start.yAxis <=7) {
            newX = start.xAxis + 1
            newY = start.yAxis + 2
            if (this.checkValid(newX, newY) === true) {
                start.UUR = this.find(newX, newY)
            }
            newX = start.xAxis + 2
            newY = start.yAxis + 1
            if (this.checkValid(newX, newY) === true) {
                start.URR = this.find(newX, newY)
            }
            newX = start.xAxis - 2
            newY = start.yAxis + 1
            if (this.checkValid(newX, newY) === true) {
                start.ULL = this.find(newX, newY)
            }
            newX = start.xAxis - 1
            newY = start.yAxis + 2
            if (this.checkValid(newX, newY) === true) {
                start.UUL = this.find(newX, newY)
            }
            newX = start.xAxis + 2
            newY = start.yAxis - 1
            if (this.checkValid(newX, newY) === true) {
                start.DRR = this.find(newX, newY)
            }
            newX = start.xAxis + 1
            newY = start.yAxis - 2
            if (this.checkValid(newX, newY) === true) {
                start.DDR = this.find(newX, newY)
            }
            newX = start.xAxis - 2
            newY = start.yAxis - 1
            if (this.checkValid(newX, newY) === true) {
                start.DLL = this.find(newX, newY)
            }
            newX = start.xAxis - 1
            newY = start.yAxis - 2
            if (this.checkValid(newX, newY) === true) {
                start.DDL = this.find(newX, newY)
            }
            if (start.next) {
                start = start.next
            }
            else {
                return
            }
        }
    }
    checkValid (x, y) {
        if (x > 0 && x <= 7 && y > 0 && y <= 7) {
            return true
        }
        else {
            return false
        }
    }
    find (x, y) {
        let currentNode = this.root
        while (currentNode.xAxis != x) {
            currentNode = currentNode.next
            while (currentNode.yAxis != y) {
                currentNode = currentNode.next
            }
        }
        return currentNode
    }
}
let newChessBoard = new chessBoard ()
export default newChessBoard