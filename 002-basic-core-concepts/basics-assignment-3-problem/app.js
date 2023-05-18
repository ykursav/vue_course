const app = Vue.createApp({
	data() {
		return { result: "", counter: 0 };
	},
	watch: {
		calculatedresult() {
			const that = this;
			setTimeout(function () {
				that.counter = 0;
			}, 5000);
		},
	},
	computed: {
		calculatedresult() {
			console.log(this.counter);
			if (this.counter < 37) {
				return "Not there yet";
			} else if (this.counter > 37) {
				return "Too much!";
			}
			return this.counter;
		},
	},
	methods: {
		add(val) {
			this.counter += val;
		},
	},
});

app.mount("#assignment");
