<template>
  <div class="app">
     <div class="login_form_id">
      <b-form >
        <b-form-input type="text" id="name" placeholder="아이디"  v-model="user.name"></b-form-input>
        <b-form-input type="text" id="title" placeholder="제목"  v-model="user.title" ></b-form-input>
         <b-form-input type="text" id="content" placeholder="내용"  v-model="user.content" ></b-form-input>
        <b-button class="login_button"  variant="outline-primary" @click="write" >작성하기</b-button>
      </b-form>
    </div>
  </div>
  
</template>

<script>

import dayjs from 'dayjs'

export default {
components: {dayjs},
 methods: {
    write: function (event) {
      this.$http.post("/api/users/write", {
          user: this.user,
        })
        .then((res) => {
          if (res.data.success == true) {
            alert(res.data.message);
             this.$router.push("/");
          }
          if (res.data.success == false) {
            alert(res.data.message);
            this.$router.push("/");
          }
        })
    }
  },
  data() {
    return {
      user: {
        name: "",
        title: "",
        date:dayjs().format('YYYY-MM-DD HH:mm:ss'), 
        content:"",
      }
    }
  },
}
</script>



<style scoped>
.login_form_id{
    width: 40%;
    margin-left: 35%;
    margin-right: 35%;
    border: solid 1px;
    border-radius: 5px;
}
</style>