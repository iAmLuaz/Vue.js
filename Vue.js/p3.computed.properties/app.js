const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    addTen(num) {
      this.counter = this.counter + num;
    },
    add() {
      this.counter++;
    },
    remove() {
      this.counter--;
    },
    removeTen(num) {
      this.counter = this.counter - num;
    }
  },
  //Computed properties are the better for outputting data 
  computed: {
    setName() {
      console.log('and once again');
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Vasquez';
    },
  }
});

app.mount('#events');
