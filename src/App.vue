<template>
  <v-app>
    <v-app-bar app color="#1e1e1e" dark>
      <div class="d-flex align-center">
        <h2 class="dim">YAPIŞTIR</h2>
      </div>

      <v-spacer></v-spacer>

      <v-chip-group
        v-model="selection"
        active-class="grey lighten-1 white--text"
        column
      >
        <v-chip v-for="(lang, i) in languages" :key="i">{{ lang.name }}</v-chip>
      </v-chip-group>
      <v-spacer></v-spacer>
      <v-btn @click="isDark = !isDark" icon>
        <v-icon>{{`mdi-lightbulb${isDark ? '' : '-off'}`}}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-link</v-icon>
      </v-btn>
     <!--  <v-btn
        href="https://github.com/mehmetmalli/yapistir"
        target="_blank"
        text
      >
        <span class="mr-2 dim">See on GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <Editor :theme="isDark ? 'vs-dark' : 'vs-light'" :language="selectedLanguage"/>
    </v-main>
  </v-app>
</template>

<script>
import Editor from "./components/Editor";

export default {
  name: "App",
  components: {
    Editor,
  },
  data: () => {
    return {
      isDark: true,
      selection: 0,
      languages: [
        {
          name: "Plain Text",
          code: "text",
        },
        {
          name: "JavaScript",
          code: "javascript",
        },
        {
          name: "CSS",
          code: "css",
        },
        {
          name: "HTML",
          code: "html",
        },
      ],
    };
  },
  computed: {
    selectedLanguage() {
      return this.languages[this.selection].code;
    },
  },
};
</script>

<style scoped>
.dim {
  color: #dcdcdc;
}
</style>