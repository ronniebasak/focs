class Piece {
    constructor(start_pos, color, selfId){
        this.start_pos= "a1"
        this.color= "white"
        this.sprite=""
    }
}

class King extends Piece {
    constructor(start_pos, color){
        super(start_pos, color, "King")
        
        switch(color){
            case "white": 
                this.sprite = "whiteKing.png"
            case "black":
                this.sprite = "blackKing.png"
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
            case "black":
                this.sprite = "blackQueen.png"
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
            case "black":
                this.sprite = "blackBishop.png"
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
            case "black":
                this.sprite = "blackRook.png"
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
            case "black":
                this.sprite = "blackKnight.png"
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
            case "black":
                this.sprite = "blackPawn.png"
            default: 
                this.sprite ="";
                break;
        }
    }
}


export {
    King, Queen, Knight, Rook, Bishop, Pawn, Piece
}