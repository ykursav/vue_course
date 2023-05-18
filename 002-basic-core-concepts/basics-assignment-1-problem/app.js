const app = Vue.createApp({
	data() {
		return {
			name: "Yunus",
			age: 32,
			random: Math.random(),
			src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
			defaultValue: "My Value",
		};
	},
	methods: {
		generateRandom() {
			return Math.random();
		},
	},
});

app.mount("#assignment");
