<template>
  <div class="hello">
    <h2> 자유 게시판 </h2>
    <!-- <div>{{req.session.name}}</div> -->
      <ul class="ul_background">
        <li class="li_main_form li_main_form_number ">번호</li>
        <li class="li_main_form li_main_form_title">제목</li>
        <li class="li_main_form li_main_form_ac"> 작성자</li>
        <li class="li_main_form li_main_form_date">작성시간</li>
        
      </ul>
    <div v-for="(user, index) in users" :key="index" class="user-wrap">

<router-link :to=" {name: 'list', params:{ id:user.no}}">
     <ul>
         <li class="li_sub_form_number">{{index+1}}</li>
        <li class="li_sub_form_title">{{ user.title }}</li>
        <li class="li_main_form_ac"> {{ user.name }}</li>
        <li class="li_main_form_date">{{user.date}}</li>
      </ul>

</router-link>
  
    </div>

    <button><router-link class="button_color" to="/write" >글 쓰기</router-link></button>
    
  </div>
</template>

<script>

export default {
 
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.$http.get("/api/users").then((response) => {
      this.users = response.data;
    });
  }
};
</script>

<style scoped>
ul{
  display: flex;
  list-style:none;
  border-bottom: 1px solid rgb(218, 207, 207);
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}

.ul_background{
  background-color: antiquewhite;
  border-top: 2px solid black;
  height: 50px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}
li{
    color: black;
  
}
.li_main_form{
  margin-top: 15px;
}
.li_main_form_number{
  width: 10%;
}
.li_main_form_title{
  width: 40%;
}
.li_main_form_ac{
width: 20%;
}
.li_main_form_date{
  width: 20%;
}
.li_sub_form_number{
    width: 10%;
}
.li_sub_form_title{
   width: 40%;
   text-align: center;
}
button{
  border: none;
  background-color: antiquewhite;
  border-color: rgb(248, 225, 195);
  float: right;
  margin-right: 16%;
  width: 100px;
  height: 30px;
}
.button_color{
  color: black;
}

a { text-decoration:none; } 
</style>