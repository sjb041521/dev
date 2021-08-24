<template>
  <div class="Clear_TodoList">
    <button v-on:click="ClearToList">모두 지우기</button>
  </div>
</template>

<script>
export default {
methods:{
  ClearToList(){
   this.$emit('removeAll');
  }
}
}
</script>

<style>
div button{
      border: none;
    background-color: #eff0f1;
    width: 200px;
    height: 40px;
    font-size: large;
}

</style>