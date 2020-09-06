<template>
  <v-app>
    <Layout/>
    <v-main>
      <v-container>
        <GridLicences/>
        <GridCertified/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Layout from '../layout/Layout';
import Footer from '../layout/Footer';
import GridLicences from '../components/GridLicences.vue';
import GridCertified from '../components/GridCertified.vue';

export default {
  name: 'Index',
  components: {
    Layout,
    Footer,
    GridLicences,
    GridCertified
  }
}
</script>
