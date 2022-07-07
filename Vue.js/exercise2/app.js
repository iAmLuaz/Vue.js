const app = Vue.createApp({
    data() {
        return {
            data: '',
            data1: ''
        };
    },
    methods: {
        showAlert(){
            alert('Presionaste la alerta perrillo');
        },
        outputData(event){
            this.data = event.target.value;
        },
        outputDataone(event){
            this.data1 = event.target.value;
        }
    }
});

app.mount('#assignment');
