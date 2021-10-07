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
      v-if="showButtons"
    >
      <v-chip v-for="(lang, i) in store.languages" :key="i">{{
        lang.name
      }}</v-chip>
    </v-chip-group>
    <v-spacer></v-spacer>
    <div v-if="showButtons">
      <v-btn @click="store.toggleDark()" title="Toggle Dark/Light Mode" icon>
        <v-icon>{{ `mdi-lightbulb${store.isDark ? "" : "-off"}` }}</v-icon>
      </v-btn>
      <v-btn @click="post(store.content)" title="Create Link" icon>
        <v-icon>mdi-link</v-icon>
      </v-btn>

      <v-snackbar v-model="snackbar" :timeout="2000" right>
        {{ alert }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
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
      snackbar: false,
      alert: ""
    };
  },
  methods: {
    copyStringToClipboard: (str) => {
      var el = document.createElement("textarea");
      el.value = str;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },

    post: async function (content) {
      if (content && content.trim() !== "") {
        const response = await fetch(
          `${
            process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"
          }/save`,
          {
            method: "POST",
            body: JSON.stringify({
              content,
            }),
          }
        );
        const { id } = await response.json();
        if (response.status === 200) {
          this.copyStringToClipboard(window.location.href + "data?id=" + id);
          this.alert = "Link oluşturulup panoya kopyalandı."
          this.snackbar = true;
        } else {
          this.alert = "Link oluşturulurken bir hata oluştu."
          this.snackbar = true;
        }

      }
    },
  },
  computed: {
    showButtons() {
      return !window.location.search;
    },
  },
};
</script>

<style scoped>
.dim {
  color: #dcdcdc;
}
</style>

