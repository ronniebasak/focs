<template>
  <div class="chessboard">
      <template v-for="i in 8">
          <template v-for="j in 8"> 
          <div class="chessbox-square" :key="`sq_${i}_${j}`" :id="`sq_${findSq(i,j)}`" :data-sqn="findSq(i,j)">
              <img class="piece" :src="require('@/assets/Sprites/blackBishop.png')" />
          </div>
          </template>
      </template>
  </div>
</template>

<script>
import Game from './chess_game/game';
const gameInst = new Game();


export default {
  name: "Chess",
  data: () => ({
      chessInst: gameInst.board
  }),
  methods: {
      changeAddressSpace(i,j){
          return (8-i)*8+j
      },
      findSq(i,j){
          let file="a"
          let rank=(9-i).toString()

          switch(j){
              case 1: file="a"; break;
              case 2: file="b"; break;
              case 3: file="c"; break;
              case 4: file="d"; break;
              case 5: file="e"; break;
              case 6: file="f"; break;
              case 7: file="g"; break;
              case 8: file="h"; break;
              default: ""
          }
          return file+rank
      }
  }
};
</script>


<style scoped lang="scss">
.chessboard {
    width: 80vmin;
    height: 80vmin;
    background: transparent;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    grid-auto-rows:  auto auto auto auto auto auto auto auto;
}

.chessbox-square {
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

.chessbox-square:nth-child(16n+1),
.chessbox-square:nth-child(16n+3),
.chessbox-square:nth-child(16n+5),
.chessbox-square:nth-child(16n+7),
.chessbox-square:nth-child(16n+10),
.chessbox-square:nth-child(16n+12),
.chessbox-square:nth-child(16n+14),
.chessbox-square:nth-child(16n+16)
 {
    background: #ddae9f;
}


.piece {
    height: 60%;
    width: auto;

}

</style>