<template>
  <v-app-bar app color="#1e1e1e" dark>
    <v-btn
      href="https://github.com/mehmetmalli/yapistir"
      target="_blank"
      title="See on GitHub"
      icon
    >
      <v-icon color="#dcdcdc">mdi-open-in-new</v-icon>
    </v-btn>

    <div class="d-flex align-center">
      <h2 class="dim">YAPIŞTIR</h2>
    </div>

    <v-spacer></v-spacer>

    <v-chip-group
      v-model="selection"
      active-class="grey lighten-1 white--text"
      column
      @change="store.setLanguage(selection)"
      title="Syntax Highlighting"
    >
      <v-chip v-for="(lang, i) in store.languages" :key="i">{{
        lang.name
      }}</v-chip>
    </v-chip-group>
    <v-spacer></v-spacer>
    <v-btn @click="store.toggleDark()" title="Toggle Dark/Light Mode" icon>
      <v-icon>{{ `mdi-lightbulb${store.isDark ? "" : "-off"}` }}</v-icon>
    </v-btn>
    <v-btn @click="post(store.content)" title="Create Link" icon>
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
  methods: {
    post: async (data) => {
      const response = await fetch("http://localhost:3000/save", {
        method: "POST",
        body: data
      });
      const body = await response.json();
      console.log(body);
    },
  },
};
</script>

<style scoped>
.dim {
  color: #dcdcdc;
}
</style>

