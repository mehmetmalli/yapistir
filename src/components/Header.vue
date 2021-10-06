<template>
  <v-app-bar app color="#1e1e1e" dark>
    <div class="d-flex align-center">
      <h2 class="dim">YAPIŞTIR</h2>
    </div>

    <v-spacer></v-spacer>

    <v-chip-group
      v-model="selection"
      active-class="grey lighten-1 white--text"
      column
      @change="store.setLanguage(selection)"
    >
      <v-chip v-for="(lang, i) in store.languages" :key="i">{{ lang.name }}</v-chip>
    </v-chip-group>
    <v-spacer></v-spacer>
    <v-btn @click="store.toggleDark()" icon>
      <v-icon>{{ `mdi-lightbulb${store.isDark ? "" : "-off"}` }}</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-link</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import store from "../store";

export default {
  name: "Header",
  data: () => {
    return {
      store,
      selection: 0,
    };
  },
};
</script>

<style scoped>
.dim {
  color: #dcdcdc;
}
</style>

