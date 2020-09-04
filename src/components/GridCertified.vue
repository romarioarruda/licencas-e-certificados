<template>
  <v-card
    max-width="600"
    class="mx-auto mt-6"
  >
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="imageViewPort"
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn outlined small color="primary">Abrir</v-btn>
            <v-spacer></v-spacer>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="red">mdi-thumb-up</v-icon>
                </v-btn>
              </template>
              <span>Curtir</span>
            </v-tooltip>

            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="blue">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Compartilhar</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
    ],
  }),
  mounted () {
    console.log(this.$vuetify.breakpoint.name)
  },
  computed: {
    /* eslint-disable */
    imageViewPort () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 12
        case 'sm': return 6
        case 'md': return 6
        case 'lg': return 6
        case 'xl': return 6
      }
    }
  }
}
</script>
