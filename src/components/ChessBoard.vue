<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="6" offset-md="3" offset-lg="3">
          <Chess/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Chess from './Chess'


  export default {
    name: 'ChessBoard',
    components: {
      Chess
    },
    data: () => ({
    }),
  }
</script>
