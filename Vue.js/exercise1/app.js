const app = Vue.createApp({
    data(){
        return {
            outputA: 'Luis Angel Vásquez Hernández',
            outputB: 21, 
            vueLink: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg'
        };
    },
    methods:{
        outputAgefive(){
            const age = this.outputB;
            const ageFive = age + 5;
            return ageFive 
        }
    }
});
app.mount('#assignment');