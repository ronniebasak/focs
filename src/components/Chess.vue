<template>
  <div class="chessboard">
    <template v-for="i in 8">
      <template v-for="j in 8">
        <div
          class="chessbox-square"
          :key="`sq_${i}_${j}`"
          :id="`sq_${findSq(i,j)}`"
          :data-sqn="findSq(i,j)"
          @click="handleClick(i,j)"
        >
          <img
            class="piece"
            :src="require('@/assets/Sprites/'+chessInst[8-i][j-1].sprite)"
            v-if="chessInst && chessInst[8-i] && chessInst[8-i][j-1] && facingMode"
          />
          <img
            class="piece"
            :src="require('@/assets/Sprites/'+chessInst[i-1][8-j].sprite)"
            v-if="chessInst && chessInst[i-1] && chessInst[i-1][8-j] && !facingMode"
          />

          <div class="dot" v-if="dotFlag && dotBoard[8-i][j-1] && facingMode"></div>
          <div class="dot" v-if="dotFlag && dotBoard[i-1][8-j] && !facingMode"></div>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import Game from "./chess_game/game";
const gameInst = new Game();

export default {
  name: "Chess",
  props: ["playStatus", "facingMode"],
  data: () => ({
    chessInst: gameInst.board,
    turn: gameInst.turn,
    dotFlag: false,
    dotBoard: [
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false],
      [false, false, false, false, false, false, false, false]
    ],

    selectedPiece: false
  }),
  methods: {
    changeAddressSpace(i, j) {
      return (8 - i) * 8 + j;
    },
    findSq(i, j) {
      let file = "a";
      let rank = (9 - i).toString();

      switch (j) {
        case 1:
          file = "a";
          break;
        case 2:
          file = "b";
          break;
        case 3:
          file = "c";
          break;
        case 4:
          file = "d";
          break;
        case 5:
          file = "e";
          break;
        case 6:
          file = "f";
          break;
        case 7:
          file = "g";
          break;
        case 8:
          file = "h";
          break;
        default:
          "";
      }
      return file + rank;
    },
    handleClick(p, q) {
      let i, j;
      if (this.facingMode) {
        [i, j] = [8 - p, q - 1]; // coordinate transformation
      } else {
        [i, j] = [p - 1, 8 - q]; // coordinate transformation
      }

      if (!this.selectedPiece) {
        if (!this.dotFlag) {
          if (this.chessInst[i][j] != 0) {
            for (let i in this.dotBoard) {
              for (let j in this.dotBoard[i]) {
                this.dotBoard[i][j] = true;
              }
            }
            this.dotFlag = true;
            this.selectedPiece = [i, j];
          }
        } else {
          for (let i in this.dotBoard) {
            for (let j in this.dotBoard[i]) {
              this.dotBoard[i][j] = false;
            }
          }
          this.dotFlag = false;
        }
      } else {
        gameInst.movePiece(this.selectedPiece, [i, j]);
        this.selectedPiece = false;
        this.dotFlag = false;
      }
    }
  },
  watch: {}
};
</script>


<style scoped lang="scss">
.chessboard {
  width: 80vmin;
  height: 80vmin;
  background: transparent;
  display: grid;
  grid-template-columns: 10vmin 10vmin 10vmin 10vmin 10vmin 10vmin 10vmin 10vmin;
  grid-auto-rows: 10vmin 10vmin 10vmin 10vmin 10vmin 10vmin 10vmin 10vmin;
}

.chessbox-square {
  position: relative;
  background: #695046;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  margin: 0;
  padding: 0;
}

.chessbox-square:nth-child(16n + 1),
.chessbox-square:nth-child(16n + 3),
.chessbox-square:nth-child(16n + 5),
.chessbox-square:nth-child(16n + 7),
.chessbox-square:nth-child(16n + 10),
.chessbox-square:nth-child(16n + 12),
.chessbox-square:nth-child(16n + 14),
.chessbox-square:nth-child(16n + 16) {
  background: #ddae9f;
}

.piece {
  height: 60%;
  width: auto;
}

div.dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(230, 4, 4, 0.5);
  border-radius: 1000px;
  transform: scale(0.25);
}
</style>