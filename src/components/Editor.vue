<template>
  <MonacoEditor class="editor" v-model="content" :language="language" :theme="theme"/>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  components: {
    MonacoEditor,
  },

  data() {
    return {
      content: `Hello World !`};
  },

  props: ["language", "theme"]
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