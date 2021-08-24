<template>
  <div id="app">
    <Header></Header>
    <Input v-on:addTodo="addTodo" ></Input>
    <List v-bind:propsdata="TodoItems" ></List>
    <Footer v-on:removeAll="clearAll"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Input from './components/Input.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'

export default {
  data(){
    return{
      TodoItems:[]
    }
  },
   created: function(){
            if(localStorage.length >0){
                for(var i=0; i<localStorage.length; i++){
                    if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                        this.TodoItems.push(localStorage.key(i));
                     }
                 }
             }
    },
  methods:{
    addTodo(TodoItem){
      localStorage.setItem(TodoItem,TodoItem);
      this.TodoItems.push(TodoItem);
    },
   clearAll(){
    localStorage.clear();
    this.TodoItems=[];
  }
  },
  name: 'App',
  components: {
    Header,
    Input,
    List,
    Footer,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
