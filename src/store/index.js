export default {
    isDark: true,
    content: "Hello World !",
    language: "text",
    languages: [{
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
        }
    ],
    setLanguage(index) {
        this.language = this.languages[index].code;
    },
    toggleDark() {
        this.isDark = !this.isDark;
    }
}