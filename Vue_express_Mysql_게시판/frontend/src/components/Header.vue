<template>
  <header>
    <div class="header_view">
  <div class="Header_login" v-if="test.session===''" > 
      <b-button variant="outline-primary" ><router-link to="/login" class="text-align"> 로그인</router-link></b-button>
  </div>
   
  <div v-else class="Header_login" >
    <div>
      <router-link to="/login" > {{test.session}}님</router-link>  <b-button class="Header_login_togle_button" v-on:click="logout" variant="outline-primary"> 로그아웃</b-button>
    </div>
  </div>
  <b-nav pills class="navbar">
    <b-nav-item > <router-link to="/">게시판</router-link></b-nav-item>
    <b-nav-item><router-link to="/signUp">회원가입</router-link></b-nav-item>
  </b-nav>
</div>
  </header>

</template>

<script>
import Login from '@/components/Login.vue'

export default {
components:{
    Login,
},
data: function () {
    return {
    test:{
      session:"",
    }
    }
  },
  methods: {
    // 로그아웃
      logout: function (event) {
     this.$http.get("/api/users/logout").then((response) => {
     this.test.session = response.data;
     alert('로그아웃 했습니다.');
      this.$router.go();
     
    });
    }
  },
  // 세션 유지
    created() {
    this.$http.get("/api/users/login").then((response) => {
      this.test.session = response.data;
      console.log(response.data);
      // this.$router.push('/');

    });
  }
};
</script>

<style scoped>

.header_view{ 
  margin-bottom: 10px;     
  display: flex;
  flex-direction: column;
  }

.Header_login{    
    display: flex;
    justify-content: flex-end;} 
/* ul 기호 빼기 */
ul{
  list-style:none;     
  display: flex;
  justify-content: center;
  }

/* router-link 밑줄 제거 */
a { text-decoration:none;} 
.Header_login_togle_button{
  margin-left: 30px;
}

</style>