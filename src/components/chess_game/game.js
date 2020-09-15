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
        this.enpassant = false; // will contain coordinate
        this.isWhiteKingCastle = true;
        this.isWhiteQueenCastle = true;
        this.isBlackKingCastle = true;
        this.isBlackQueenCastle = true;

        this.setup()
    }


    isSquareEmpty(coordinate) { // literally empty
        return this.board[coordinate[0]][coordinate[1]] == 0;
    }
    isSquareOccupied(coordinate, color) { // occupied by same color
        return this.isSquareEmpty(coordinate) || this.board[coordinate[0]][coordinate[1]].color != color;
    }

    setup() {
        /// PIECES: white
        this.board[0][0] = new Rook("a1", "white")
        this.board[0][7] = new Rook("h1", "white")

        this.board[0][1] = new Knight("b1", "white")
        this.board[0][6] = new Knight("g1", "white")

        this.board[0][2] = new Bishop("c1", "white")
        this.board[0][5] = new Bishop("f1", "white")

        this.board[0][4] = new King("e1", "white")
        this.board[0][3] = new Queen("d1", "white")


        /// PIECES: black
        this.board[7][0] = new Rook("a8", "black")
        this.board[7][7] = new Rook("h8", "black")

        this.board[7][1] = new Knight("b8", "black")
        this.board[7][6] = new Knight("g8", "black")

        this.board[7][2] = new Bishop("c8", "black")
        this.board[7][5] = new Bishop("f8", "black")

        this.board[7][4] = new King("e8", "black")
        this.board[7][3] = new Queen("d8", "black")

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

    /**
     * @returns {Boolean} is this move legal or not
     * @param {Piece} pieceInst Piece instance
     * @param {array} targetSquareCoord target square coordinates
     * @param {array} destinationSqaureCoord destination square coordinates 
     */
    isMoveLegal(pieceInst, targetSquareCoord, destinationSqaureCoord) {
        if (this.turn == 0 && pieceInst.color == "black") return false;
        if (this.turn == 1 && pieceInst.color == "white") return false;
        if (!this.isSquareOccupied(destinationSqaureCoord, pieceInst.color)) return false;

        if (pieceInst instanceof Pawn) {
            let direction = pieceInst.color == "white" ? 1 : -1;
            let initRank = pieceInst.color == "white" ? 1 : 6;

            if (targetSquareCoord[1] == destinationSqaureCoord[1] && targetSquareCoord[0] + direction == destinationSqaureCoord[0]) {
                return this.isSquareEmpty(destinationSqaureCoord);
            }
            else if (Math.abs(targetSquareCoord[1] - destinationSqaureCoord[1]) == 1 && targetSquareCoord[0] + direction == destinationSqaureCoord[0]) { // capture
                return !this.isSquareEmpty(destinationSqaureCoord)
            }
            else if (targetSquareCoord[0] == initRank && targetSquareCoord[1] == destinationSqaureCoord[1] && targetSquareCoord[0] + 2 * direction == destinationSqaureCoord[0] && this.isSquareEmpty([targetSquareCoord[0] + direction, targetSquareCoord[1]])) {
                this.enpassant = [targetSquareCoord[0] + direction, targetSquareCoord[1]];
                return this.isSquareEmpty(destinationSqaureCoord);
            }
        }

        if (pieceInst instanceof Knight) {
            return (
                Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0]) == 2 && Math.abs(destinationSqaureCoord[1] - targetSquareCoord[1]) == 1
                || Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0]) == 1 && Math.abs(destinationSqaureCoord[1] - targetSquareCoord[1]) == 2
            )
        }

        if (pieceInst instanceof Bishop) {
            if (Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0]) == Math.abs(destinationSqaureCoord[1] - targetSquareCoord[1])) {
                // check if all squares from target to destination are empty
                let dx = (destinationSqaureCoord[0] - targetSquareCoord[0]) / Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0])
                let dy = (destinationSqaureCoord[1] - targetSquareCoord[1]) / Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0])
                let dist = Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0])

                if (dist == 1) return true;
                for (let i = 1; i < dist; i++) {
                    console.log("TSQ", [targetSquareCoord[0] + (i * dx), targetSquareCoord[1] + (i * dy)], this.isSquareEmpty([targetSquareCoord[0] + (i * dx), targetSquareCoord[1] + (i * dy)]))
                    if (!this.isSquareEmpty([targetSquareCoord[0] + (i * dx), targetSquareCoord[1] + (i * dy)])) {
                        return false; // prevent jumping
                    }
                }
                return true
            }
        }

        if (pieceInst instanceof Rook) {
            if (destinationSqaureCoord[0] == targetSquareCoord[0] && destinationSqaureCoord[1] != targetSquareCoord[1]) {
                let dist = Math.abs(destinationSqaureCoord[1] - targetSquareCoord[1]);
                let start = Math.min(destinationSqaureCoord[1], targetSquareCoord[1]);
                let end = Math.max(destinationSqaureCoord[1], targetSquareCoord[1]);

                for (let i = start + 1; i < end; i++) {
                    if (!this.isSquareEmpty([destinationSqaureCoord[0], i])) return false
                }
                return true
            } else if (destinationSqaureCoord[1] == targetSquareCoord[1] && destinationSqaureCoord[0] != targetSquareCoord[0]) {
                let dist = Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0]);
                let start = Math.min(destinationSqaureCoord[0], targetSquareCoord[0]);
                let end = Math.max(destinationSqaureCoord[0], targetSquareCoord[0]);

                for (let i = start + 1; i < end; i++) {
                    if (!this.isSquareEmpty([i, destinationSqaureCoord[1]])) return false
                }
                return true
            }
        }


        if (pieceInst instanceof Queen) {
            if (Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0]) == Math.abs(destinationSqaureCoord[1] - targetSquareCoord[1])) {
                // check if all squares from target to destination are empty
                let dx = (destinationSqaureCoord[0] - targetSquareCoord[0]) / Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0])
                let dy = (destinationSqaureCoord[1] - targetSquareCoord[1]) / Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0])
                let dist = Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0])

                if (dist == 1) return true;
                for (let i = 1; i < dist; i++) {
                    console.log("TSQ", [targetSquareCoord[0] + (i * dx), targetSquareCoord[1] + (i * dy)], this.isSquareEmpty([targetSquareCoord[0] + (i * dx), targetSquareCoord[1] + (i * dy)]))
                    if (!this.isSquareEmpty([targetSquareCoord[0] + (i * dx), targetSquareCoord[1] + (i * dy)])) {
                        return false; // prevent jumping
                    }
                }
                return true
            }
            else if (destinationSqaureCoord[0] == targetSquareCoord[0] && destinationSqaureCoord[1] != targetSquareCoord[1]) {
                let dist = Math.abs(destinationSqaureCoord[1] - targetSquareCoord[1]);
                let start = Math.min(destinationSqaureCoord[1], targetSquareCoord[1]);
                let end = Math.max(destinationSqaureCoord[1], targetSquareCoord[1]);

                for (let i = start + 1; i < end; i++) {
                    if (!this.isSquareEmpty([destinationSqaureCoord[0], i])) return false
                }
                return true
            } else if (destinationSqaureCoord[1] == targetSquareCoord[1] && destinationSqaureCoord[0] != targetSquareCoord[0]) {
                let dist = Math.abs(destinationSqaureCoord[0] - targetSquareCoord[0]);
                let start = Math.min(destinationSqaureCoord[0], targetSquareCoord[0]);
                let end = Math.max(destinationSqaureCoord[0], targetSquareCoord[0]);

                for (let i = start + 1; i < end; i++) {
                    if (!this.isSquareEmpty([i, destinationSqaureCoord[1]])) return false
                }
                return true
            }
        }

        if(pieceInst instanceof King){
            if((destinationSqaureCoord[0] == targetSquareCoord[0] && Math.abs(destinationSqaureCoord[1]-targetSquareCoord[1])==1 )) return true
            else if((destinationSqaureCoord[1] == targetSquareCoord[1] && Math.abs(destinationSqaureCoord[0]-targetSquareCoord[0])==1 )) return true
            else if(Math.abs(targetSquareCoord[0]-destinationSqaureCoord[0]) == 1 == Math.abs(targetSquareCoord[1]-destinationSqaureCoord[1])) return true
        }
        return false;
    }
    /**\
     * @returns {Boolean} if move has been made successfully or not
     * targetSquare is the origin square of piece either as array [0,0] or as chess coordinate "a4", "b3" etc
     * destinationSqaure is the destination square of piece
     */
    movePiece(targetSquare = [0, 0], destinationSqaure = [0, 0]) {
        let targetSquareCoord = targetSquare;
        let destinationSqaureCoord = destinationSqaure;

        let tRank = targetSquareCoord[0];
        let tFile = targetSquareCoord[1];

        let dRank = destinationSqaureCoord[0];
        let dFile = destinationSqaureCoord[1];


        let pieceInst = this.board[tRank][tFile];

        if (pieceInst instanceof Piece) {
            let epState = this.enpassant;
            if (this.isMoveLegal(pieceInst, targetSquareCoord, destinationSqaureCoord)) {
                console.log("LEGAL MOVE");
                // move
                // if(this.epState == this.enpassant && this.enpassant){
                //     this.enpassant = false;
                //     console.log("ENPASSANT Retracted")
                // } else {
                //     console.log("Allow ENPASSANT", this.enpassant)
                // }
                this.board[tRank][tFile] = 0;
                this.board[dRank][dFile] = pieceInst;

                this.turn = (this.turn + 1) % 2;
            } else {
                console.log("ILLEGAL MOVE");
            }
        }
    }
}



export default Game