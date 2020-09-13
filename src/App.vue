<template>
  <v-app dark>
    <v-app-bar
      app
      color="blue"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/logo.svg')"
          transition="scale-transition"
          width="100"
        />
        </div>
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
