<template>
  <div class="add">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodoItem"/>
      <button v-on:click="addTodoItem">
          
          <i class="fas fa-plus"></i>
      </button>
  
  </div>
  
</template>
<script>
var count=0;
export default {
data(){
    return{
        newTodoItem: [] 
    }
},
    methods:{
        addTodoItem(){
            localStorage.setItem(this.newTodoItem, count );
            var value = this.newTodoItem && this.newTodoItem.trim();
            this.$emit('addTodo',value);
            this.newTodoItem='';
           
        }
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100px;
}
div > input{
    width: 90%;
    border: none;
    outline: none;
    /* height: 100%; */
    height: 30px;
    }
div > button{
    height: 30px;
    background-color: #6e89e0;
    border: none;
    width: 40px;
}
div > button > .fa-plus:before{
color: white;
}
</style>