<template>
  <div class="app">
     <div class="login_form_id">
      <b-form >
        <b-form-input type="text" id="user_id" placeholder="아이디"  v-model="user.user_id"></b-form-input>
         <b-form-input type="password" id="password" placeholder="비밀번호"  v-model="user.password" ></b-form-input>
         <b-button class="login_button"  variant="outline-primary" @click="signUp" >가입하기</b-button>
      </b-form>
    </div>
  </div>
  
</template>

<script>

import dayjs from 'dayjs'

export default {
components: {dayjs},
 methods: {
    signUp: function (event) {
      this.$http.post("/api/users/signUp", {
          user: this.user,
        })
        .then((res) => {
          if (res.data.success == true) {
            alert(res.data.message);
             this.$router.push("/login");
          }
          if (res.data.success == false) {
            alert(res.data.message);
          }
        })
    }
  },

  data() {
    return {
      user: {
        user_id: "",
        password: "",
        sign_date:dayjs().format('YYYY-MM-DD HH:mm:ss'), 
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