const app = Vue.createApp({
	data() {
		return {
			currentTaskVal: "",
			listHidden: false,
			tasks: [],
		};
	},
	computed: {
		buttonName() {
			console.log(this.btnName);
			if (this.listHidden === false) {
				return "Hide List";
			} else {
				return "Show List";
			}
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.currentTaskVal);
		},
		toggleListVisibility() {
			this.listHidden = !this.listHidden;
		},
	},
});

app.mount("#assignment");
