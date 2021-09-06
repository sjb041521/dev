<template>
<div >
  <div class="login_form" v-if="test.session===''"> 
    <div class="login_form_id">
      <b-form >
        <b-form-input type="text" id="user_id" placeholder="아이디"  v-model="user.user_id"></b-form-input>
        <b-form-input type="password" id="password" placeholder="비밀번호"  v-model="user.password" ></b-form-input>
         <b-button class="login_button"  variant="outline-primary" v-on:click="login" >로그인</b-button>
      </b-form>
    </div>
  </div>
  
  <div v-else >
        <h2 class="login_success">{{test.session}}님 어서오세요</h2>
        <b-button class="login_button"  variant="outline-primary" v-on:click="logout" >로그아웃</b-button>
  </div>

</div>

</template>

<script>
export default {
  data: function () {
    return {
      user: {
        user_id: "",
        password: "",
      },
    test:{
      session:"",
    }
    }
  },
  methods: {
    login: function (event) {this.$http.post("/api/users/login", {
          user: this.user,
        }).then((res) => {
            //로그인 성공
            console.log(res);
            if (res.data.success == true) {
            alert(res.data.message);
             this.test.session=res.data.login_session;
             this.$router.go();
          }
          },
          (err) => {
            // error 를 보여줌
            alert("Login failed! please check your id or password");
          }
        )
        .catch((err) => {
          alert(err);
        });
    },
    // 로그아웃
      logout: function (event) {
     this.$http.get("/api/users/logout").then((response) => {
     this.test.session = response.data;
     alert('로그아웃 했습니다.');
      this.$router.push("/");
      this.$router.go();
    });
    }
  },
  // 세션 유지
    created() {
    this.$http.get("/api/users/login").then((response) => {
      this.test.session = response.data;
      console.log(response.data);
    });
  }
};
</script>

<style scoped>

.login_form{
    width: 40%;
    margin-left: 35%;
    margin-right: 35%;
    border: solid 1px;
    border-radius: 5px;
}
.login_button{
  height: 50px;
  width: 50%;
}
.login_success{
  font-size: large;
  margin-bottom: 10px;
}
#name{height: 50px;}
#password{height: 50px;}
.header_login{float: right;}
a { text-decoration:none; color: black; margin-left: 40px;} 
</style>