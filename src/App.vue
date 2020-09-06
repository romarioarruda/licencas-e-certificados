<template>
  <v-app>
    <Layout/>
    <v-main>
      <v-container>
        <GridLicences/>
        <GridCertified/>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Layout from './layout/Layout';
import Footer from './layout/Footer';
import GridLicences from './components/GridLicences.vue';
import GridCertified from './components/GridCertified.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Footer,
    GridLicences,
    GridCertified
  }
}
</script>
