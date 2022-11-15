'use strict'

const { createApp } = Vue

createApp({
    data() {
      return {
        newTodo: '',
        toDoList : [
            {
                text: 'Fare i compiti',
                done: true
            },
            {
                text: 'Andare in palestra',
                done: false
            },
            {
                text: 'Andare a fare la spesa',
                done: false
            },
        ],
      }
    },
    methods : {
        addTodo() {
            this.toDoList.push(this.newTodo);
            this.newTodo = '';
        }
    }
  }).mount('#app')