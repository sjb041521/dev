<template>
  <div class="hello">
      
      <div v-for="(user, index) in users" :key="index" class="user-wrap">
      <ul>
        <li class="li_main_form_title">{{ user.title }}</li>
        <li class="li_main_form_name"> {{ user.name }} | {{user.date}} </li>
        <li class="li_main_form_content">{{user.content}}</li>
      </ul>
      <b-button variant="outline-primary" v-on:click="remove" >글 삭제</b-button>
      
    </div>
    
    </div>

</template>

<script>
export default {
    methods: {
    remove: function (event) {
     this.$http.get("/api/users/remove/"+this.$route.params.id).then((response) => {
          if(response.data.success == true){
          alert(response.data.message);
          this.$router.push("/");
          }
           if(response.data.success == false){
          alert(response.data.message);
          this.$router.push("/");
          }
    });
    
    }
  },
  data() {
    return {
      users: [],
      session:[],
   }
  },
  created() {
    this.$http.get("/api/users/list/"+this.$route.params.id).then((response) => {
      this.users = response.data;
    });
   
  }
};
</script>

<style scoped>

/* ul 기호 빼기 */
ul{list-style:none;}

/* 게시글 제목 */
.li_main_form_title{font-size: x-large; margin-bottom: 10px; text-align: start; border-top:1px solid #dad4ce; padding-top: 5px; }

.li_main_form_name{font-size: medium; margin-bottom: 10px; text-align: start; color: #bbbbb5;}

.li_main_form_content{
  font-size: medium; margin-bottom: 10px; text-align: start; border-top: 1px solid #dad4ce; padding-top:10px;
}
a { text-decoration:none } 
</style>