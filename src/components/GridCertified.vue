<template>
  <v-card
    max-width="700"
    class="mx-auto mt-6"
  >
    <h2 class="ml-3">Certificados</h2>
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
  data: () => ({
    cards: [
      { title: 'PHP 7 - (73,5 horas)', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e7a429bc-2bc8-4398-87d4-bd575f311cc8.jpg' },
      { title: 'PHP OO - (25 horas)', src: 'https://alunos.b7web.com.br/media/certificates/certificado_8691.jpg' },
      { title: 'PHP Fundamentos - (20 horas)', src: 'https://alunos.b7web.com.br/media/certificates/certificado_5039.jpg' },
      { title: 'HTML5 e CSS3 - (20 horas)', src: 'https://alunos.b7web.com.br/media/certificates/certificado_5040.jpg' },
      { title: 'MySQL - (10 horas)', src: 'https://alunos.b7web.com.br/media/certificates/certificado_4840.jpg' },
      { title: 'SCRUM Fundamentos - (1,5 horas)', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-17fb95f7-a47a-45f5-9308-5ae3f1393172.jpg' },
      { title: 'Docker - (5,5 horas)', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-b7e12324-eba9-464d-a8f0-7e97b16fb743.jpg' },
      { title: 'Python - (2 horas)', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-3ZEUTW19.jpg' },
      { title: 'Shell - (3,5 horas)', src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-15e068fa-14f6-44f1-9ecc-c31051bfbd9f.jpg' },
      { title: 'JavaScript - (25 horas)', src: 'https://alunos.b7web.com.br/media/certificates/certificado_8492.jpg' },
    ],
  }),

  mounted () {
    console.log(this.$vuetify.breakpoint.name)
  },

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
