<template>
  <v-app>
    <Layout/>
    <v-main>
      <v-container>
        <GridCertified/>
        <!-- If using vue-router -->
        <!-- <router-view></router-view> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Layout from './layout/Layout';
import GridCertified from './components/GridCertified.vue';

export default {
  name: 'App',
  components: {
    Layout,
    GridCertified
  }
}
</script>
