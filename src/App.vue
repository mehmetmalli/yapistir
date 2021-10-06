<template>
  <v-app>
    <Header />
    <v-main>
      <MonacoEditor
        class="editor"
        v-model="store.content"
        :language="store.language"
        :theme="store.isDark ? 'vs-dark' : 'vs-light'"
      />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import MonacoEditor from "vue-monaco";

import store from "./store";

export default {
  name: "App",
  components: {
    Header,
    MonacoEditor,
  },
  data: () => {
    return {
      store,
      selection: 0,
    };
  },
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
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