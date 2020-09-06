<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-actions>
            <p>
              Desculpe, nada por aqui...<strong>(404)</strong>
            </p>
            <v-spacer></v-spacer>
            <router-link to="/">
              <v-btn class="primary">
                Voltar
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script >
export default {
  name: 'Error404'
}
</script>