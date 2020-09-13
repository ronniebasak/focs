<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="6" offset-md="3" offset-lg="3">
        <Chess :playStatus="isPlaying" :facingMode="facing"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="6" offset-md="3" offset-lg="3">
        <v-btn color="blue" @click="isPlaying = !isPlaying" class="mr-5">
          {{isPlaying ? "PAUSE" : "PLAY"}}
        </v-btn>
        <v-btn color="blue" @click="facing = !facing">
          Swtich to {{facing ? "Black" : "White"}} Side
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chess from "./Chess";

export default {
  name: "ChessBoard",
  components: {
    Chess
  },
  data: () => ({
    isPlaying: false,
    facing: true
  })
};
</script>
