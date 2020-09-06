<template>
  <v-card
    max-width="700"
    class="mx-auto mt-6"
  >
    <h2 class="mb-4 text--secondary">Licenças/Certificações</h2>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="imageViewPort"
      >
        <v-card>
          <v-img
            src="../assets/scrum-certified.png"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined small color="primary" @click="openExternLink(card.src)">Abrir</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'GridLicencas',
  data: () => ({
    cards: [
      { 
        title: 'SFC - (Scrum Fundamentals Certified)',
        src: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-Rom%C3%A1rioRodriguesArruda-781122.pdf'
      },
    ],
  }),

  methods: {
    openExternLink (url) {
      let win = window.open()
          win.opener = null
          win.location = url
    }
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
