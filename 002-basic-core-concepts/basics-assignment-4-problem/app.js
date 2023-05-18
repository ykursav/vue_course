const app = Vue.createApp({
	data() {
		return {
			username: "",
			paragraphVisible: "visible",
			bgColor: "",
		};
	},
	computed: {
		paragraphVisibility() {
			return { visibility: this.paragraphVisible };
		},
	},
	methods: {
		toggleParagraph() {
			if (this.paragraphVisible === "visible") {
				this.paragraphVisible = "hidden";
			} else {
				this.paragraphVisible = "visible";
			}
		},
	},
});

app.mount("#assignment");
