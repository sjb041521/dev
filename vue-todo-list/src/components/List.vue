<template>
  <div class="List">
            <ul id="List_content"> 
                <li v-for="(TodoItem, index) in propsdata" v-bind:key="TodoItem"  >
                 <span>{{TodoItem}} </span> <i v-on:click="removeTodoList(TodoItem,index)" class="far fa-minus-square"></i>
                </li>
            </ul>
      </div>

</template>

<script>

export default {
    
    props: ['propsdata'],
    methods:{
        removeTodoList: function(TodoItem,index){
            localStorage.removeItem(TodoItem);
            this.propsdata.splice(index,1);
        }
    },

   
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400&display=swap');
li{
    list-style: none;
}
.List {
    display: flex;
    width: 100%;
}
#List_content{
    width: 80%;
}
div > ul > li{
font-family: 'Noto Sans KR', sans-serif;
margin-bottom: 3px;
}
div > ul > li > i{
    float: right;
}


</style>