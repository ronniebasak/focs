<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ChessBoard msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ChessBoard from '@/components/ChessBoard.vue'

export default {
  name: 'Home',
  components: {
    ChessBoard
  }
}
</script>
