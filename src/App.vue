<template>
  <v-app dark>
    <v-app-bar
      app
      color="blue"
      dark
    >
      FOCS
    </v-app-bar>

    <v-main>
      <ChessBoard/>
    </v-main>
  </v-app>
</template>

<script>
import ChessBoard from './components/ChessBoard';

export default {
  name: 'App',

  components: {
    ChessBoard,
  },

  data: () => ({
    //
  }),
};
</script>
