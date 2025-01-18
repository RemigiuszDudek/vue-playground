Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = ''
        }
    }
}).mount('#app')


// const buttonEl = document.querySelector('button' )
// const inputEl = document.querySelector('#goal')
// const listEl = document.querySelector('ul')
//
// function addElementToList() {
//     const enteredValue = inputEl.value
//     const newEl = document.createElement('li')
//     newEl.textContent = enteredValue
//
//     listEl.appendChild(newEl)
// }
//
// buttonEl.addEventListener('click', addElementToList)