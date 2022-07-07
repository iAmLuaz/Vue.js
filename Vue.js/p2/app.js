const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course at learning Vue',
            courseGoalB: 'Whats up nigga',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');
