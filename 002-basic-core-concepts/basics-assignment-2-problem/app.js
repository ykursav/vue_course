const app = Vue.createApp({
	data() {
		return {
			userInput: "",
			userInputConfirmed: "",
		};
	},
	methods: {
		showAlert() {
			alert("This is example alert");
		},
		updateUserInput(event) {
			this.userInput = event.target.value;
		},
		updateUserInputConfirmed(event) {
			this.userInputConfirmed = event.target.value;
		},
	},
});

app.mount("#assignment");
