<template>
  <v-app>
    <Header />
    <v-main>
      <MonacoEditor
        class="editor"
        v-model="store.content"
        :language="store.language"
        :theme="store.isDark ? 'vs-dark' : 'vs-light'"
        v-if="showEditor"
      />
      <ContentView v-else/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import MonacoEditor from "vue-monaco";
import ContentView from "./components/ContentView";

import store from "./store";

export default {
  name: "App",
  components: {
    Header,
    MonacoEditor,
    ContentView
  },
  data: () => {
    return {
      store
    };
  },
  computed: {
    showEditor() {
      return !window.location.search;
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

.editor {
  height: 100%;
  width: 100%;
}
</style>