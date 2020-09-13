<template>
  <div class="chessboard">
      <template v-for="i in 8">
          <template v-for="j in 8"> 
          <div class="chessbox-square" :key="`sq_${i}_${j}`" :id="`sq_${(9-i)*8+j}`">
            {{(8-i)*8+j}}
          </div>
          </template>
      </template>
  </div>
</template>

<script>
export default {
  name: "Chess",

  methods: {
      changeAddressSpace(i){
          return i
      }
  }
};
</script>


<style scoped lang="scss">
.chessboard {
    width: 80vmin;
    height: 80vmin;
    background: transparent;
}

.chessbox-square {
    background: black;
    height: 10vmin;
    width: 10vmin;
    display: inline-block;
    color: blue;
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
    background: white;
}


</style>