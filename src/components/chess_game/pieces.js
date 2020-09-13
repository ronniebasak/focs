class Piece {
    constructor(start_pos, color, selfId, sprite){
        this.start_pos= start_pos
        this.color= color
        this.sprite=""
        this.selfId = selfId
    }

    getAvailableMoves(){
        return [
            "a3","b3", "c3", "d3", "e3", "f3", "g3", "h3"
        ]
    }
}

class King extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "King")
        
        switch(color){
            case "white": 
                this.sprite = "whiteKing.png";
                break;
            case "black":
                this.sprite = "blackKing.png"
                break;
            default: 
                this.sprite ="";
                break;
        }
    }
}

class Queen extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "Queen")

        switch(color){
            case "white": 
                this.sprite = "whiteQueen.png"
                break;
            case "black":
                this.sprite = "blackQueen.png"
                break;
            default: 
                this.sprite ="";
                break;
        }
    }
}


class Bishop extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "Bishop")

        switch(color){
            case "white": 
                this.sprite = "whiteBishop.png"
                break;
            case "black":
                this.sprite = "blackBishop.png"
                break;
            default: 
                this.sprite ="";
                break;
        }
    }
}


class Rook extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "Rook")

        switch(color){
            case "white": 
                this.sprite = "whiteRook.png"
                break;
            case "black":
                this.sprite = "blackRook.png"
                break;
            default: 
                this.sprite ="";
                break;
        }
    }
}


class Knight extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "Knight")

        switch(color){
            case "white": 
                this.sprite = "whiteKnight.png"
                break;
            case "black":
                this.sprite = "blackKnight.png"
                break;
            default: 
                this.sprite ="";
                break;
        }
    }
}


class Pawn extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "Pawn")

        switch(color){
            case "white": 
                this.sprite = "whitePawn.png"
                break;
            case "black":
                this.sprite = "blackPawn.png"
                break;
            default: 
                this.sprite ="";
                break;
        }
    }
}


export {
    King, Queen, Knight, Rook, Bishop, Pawn, Piece
}