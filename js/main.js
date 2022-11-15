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
        addToDo() {
            if( this.newTodo !== '' ) {
                this.newTodo = {
                    text: this.newTodo,
                    done: false,
                };
            this.toDoList.push(this.newTodo);
            this.newTodo = '';
        }
    },
    removetoDo(i) {
        this.toDoList.splice(i, 1);
    },
    }
  }).mount('#app')