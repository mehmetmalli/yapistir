<template>
<div class="bg pa-5">
   <pre class="white--text">{{ content }}</pre>
</div>
</template>

<script>
export default {
  name: "ContentView",
  data: () => {
    return {
      content: "",
    };
  },
  methods: {
    async getContent() {
      const response = await fetch("http://localhost:3000/data");
      const { content } = await response.json();
      this.content = content;
    },
  },
  mounted() {
    this.getContent();
  },
};
</script>

<style scoped>
.bg {
  height: 100%;
  background-color: #1e1e1e;
}
</style>

