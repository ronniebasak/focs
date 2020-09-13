import { Piece, King, Queen, Bishop, Rook, Knight, Pawn } from './pieces';
const PLAYERS = ["P1", "P2"]

class Game {
    constructor() {
        this.white = PLAYERS[0]
        this.black = PLAYERS[1]
        this.turn = 0
        this.board = [
            [0, 0, 0, 0, 0, 0, 0, 0], // white side a1,b1,c1,d1,e1,f1,g1,h1
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0] // black side a8,b8,c8,d8,e8,f8,g8,h8
        ]


        this.setup()
    }

    setup() {
        /// PIECES: white
        this.board[0][0] = new Rook("a1", "white")
        this.board[0][7] = new Rook("h1", "white")

        this.board[0][1] = new Knight("b1", "white")
        this.board[0][6] = new Knight("g1", "white")

        this.board[0][2] = new Bishop("c1", "white")
        this.board[0][5] = new Bishop("f1", "white")

        this.board[0][3] = new King("d1", "white")
        this.board[0][4] = new Queen("e1", "white")


        /// PIECES: black
        this.board[7][0] = new Rook("a8", "black")
        this.board[7][7] = new Rook("h8", "black")
        
        this.board[7][1] = new Knight("b8", "black")
        this.board[7][6] = new Knight("g8", "black")

        this.board[7][2] = new Bishop("c8", "black")
        this.board[7][5] = new Bishop("f8", "black")

        this.board[7][3] = new King("d8", "black")
        this.board[7][4] = new Queen("e8", "black")


        // PAWNS: white
        this.board[1][0] = new Pawn("a2", "white");
        this.board[1][1] = new Pawn("b2", "white");
        this.board[1][2] = new Pawn("c2", "white");
        this.board[1][3] = new Pawn("d2", "white");
        this.board[1][4] = new Pawn("e2", "white");
        this.board[1][5] = new Pawn("f2", "white");
        this.board[1][6] = new Pawn("g2", "white");
        this.board[1][7] = new Pawn("h2", "white");

        // PAWNS: black
        this.board[6][0] = new Pawn("a7", "black");
        this.board[6][1] = new Pawn("b7", "black");
        this.board[6][2] = new Pawn("c7", "black");
        this.board[6][3] = new Pawn("d7", "black");
        this.board[6][4] = new Pawn("e7", "black");
        this.board[6][5] = new Pawn("f7", "black");
        this.board[6][6] = new Pawn("g7", "black");
        this.board[6][7] = new Pawn("h7", "black");
    }
}



export default Game