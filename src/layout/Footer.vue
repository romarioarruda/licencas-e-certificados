<template>
  <v-footer
    dark
    padless
    class="mt-5"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
      >
        <v-card
          flat
          tile
          color="deep-purple"
          class="lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-tooltip left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-for="icon in icons"
                  :key="icon.icon"
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="openExternLink(icon.src)"
                >
                  <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
              </template>
              <span>Clique para ver o perfil</span>
            </v-tooltip>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
              &copy; {{ new Date().getFullYear() }} — <strong>Romário Arruda</strong>
          </v-card-text>
        </v-card>
      </v-col>  
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        { icon: 'mdi-linkedin', src: 'https://www.linkedin.com/in/romário-arruda/' },
        { icon: 'mdi-github', src: 'https://github.com/romarioarruda' },
      ],
    }),

    methods: {
      openExternLink (url) {
        let win = window.open()
            win.opener = null
            win.location = url
      }
    }
  }
</script>