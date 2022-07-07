const app = Vue.createApp({
    data() {
      return {
        counter: 10,
        data: '',
        data1: ''
      };
    },
    methods: {
      click(event){
        alert('Submitted!');
      },
      clickRight(event){
        alert('It worked!');
      },
      clickMiddle(event){
        alert('Still working!');
      },
      keyEnter(event){
        alert('You pressed Enter pal');
      },
      keyShift(event){
        alert('You pressed Shift + Enter mF');
      },
      keyCtrl(event){
        alert('You pressed Ctrl + Enter Lmao');
      },
      inputData(event){
        this.data = event.target.value;
      },
      dataOne(event){
        this.counter = event.target.value;
      },
      resetData(event){
        this.data1 = '';
      }
    }
  });
  
  app.mount('#events');
  