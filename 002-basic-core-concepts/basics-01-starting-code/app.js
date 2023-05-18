const app = Vue.createApp({
	data() {
		return {
			courseGoalA: "Finish the course and learn Vue",
			courseGoalB: "<h2>Master the Vue and build amazing apps.</h2>",
			vueLink: "https://vuejs.org",
		};
	},
	methods: {
		randomGoal() {
			const randomNumber = Math.random();
			if (randomNumber < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
	},
});

function randomGoal() {}
app.mount("#user-goal");
