Vue.createApp({
    data: () => ({
       result: 0,
    }),
    computed: {
        resultText() {
            if (this.result < 37) {
                return `Not there yet (${this.result})`;
            } else if (this.result === 37) {
                return `Precisely ${this.result}`;
            } else {
                return `Too much! (${this.result})`;
            }
        }
    },
    watch: {
      result() {
          console.log('Watcher executing...');
          setTimeout(() => {
              this.result = 0;
          }, 5000);
      }
    },
    methods: {
        add(num) {
            this.result += num;
        }
    }
}).mount('#assignment');