<template>
  <v-card
    max-width="700"
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
            height="250px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined small color="primary" @click="openCertified(card.src)">Abrir</v-btn>
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
      { title: 'PHP 7 - Certificado', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e7a429bc-2bc8-4398-87d4-bd575f311cc8.jpg' },
      { title: 'SCRUM - Certificado', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-17fb95f7-a47a-45f5-9308-5ae3f1393172.jpg' },
      { title: 'Docker - Certificado', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b7e12324-eba9-464d-a8f0-7e97b16fb743.jpg' },
      { title: 'Python - Certificado', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3ZEUTW19.jpg' },
    ],
  }),

  mounted () {
    console.log(this.$vuetify.breakpoint.name)
  },

  methods: {
    openCertified (url) {
      window.open(url)
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
