<template>
  <v-app>
    <Layout/>
    <v-main class="mt-6">
      <v-container>
        <h3 class="text--secondary">Principais tecnologias utilizadas no desenvolvimento deste projeto</h3>
        <v-divider class="purple"></v-divider>
        <v-row class="mt-4">
          <v-col cols="6" sm="3">
            <v-img
              src="../assets/javascript.png"
            >
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-col>

          <v-col cols="6" sm="3">
            <v-img src="../assets/vue.png">
              <div class="fill-height bottom-gradient"></div>
            </v-img>
          </v-col>

          <v-col cols="6" sm="3">
            <v-img src="../assets/docker.png">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
          </v-col>
          
          <v-col cols="6" sm="3">
            <v-img src="../assets/vuetify2.png">
              <div class="fill-height repeating-gradient"></div>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Layout from '../layout/Layout'
import Footer from '../layout/Footer'

export default {
  name: 'Tech',
  components: {
    Layout,
    Footer
  }
}
</script>
