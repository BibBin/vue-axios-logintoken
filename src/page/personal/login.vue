<script src="../../router/router.js"></script>
<template>
 <div class="whole">
     <div class="k-title">Welcome to BiBin</div>
     <div class="login-form">
         <div class="user-name common-div">
             <input type="text" name="username" value="" placeholder="请输入您的手机号码" v-model="mobile" />
         </div>
         <div class="user-pasw common-div">
             <input type="password" name="password" value="" placeholder="请输入您的密码" v-model="password" />
             <span><router-link :to="{name: 'reset-password'}"  class="get-code" >忘记密码？</router-link></span>
         </div>
         <div class="login-btn common-div" @click="gotoLogin">登录</div>
     </div>
     <div class="forgets text-r">
         <router-link :to="{name: 'register'}">新用户？<span>点击注册</span> </router-link>
     </div>
 </div>
</template>
<style lang="scss">
@import './../../assets/css/personal.scss';
</style>
<script charset="UTF-8">
  import * as api from '../../api/account'
  import * as checkJs from '../../assets/js/pubFunc'
  export default{
     computed:{
       mdpassword: function () {
         return checkJs.encryptedPassword(this.password)
       }
      },
    mounted () {

    },
    data () {
      return {
        mobile:'',
        password:''
      }
    },
    components: {

    },
    methods: {
      gotoLogin(){
        let self = this;
        if (!checkJs.isPhone(this.mobile)) {
          $.toast('请输入正确的手机号码！')
          return;
        }
        if (checkJs.isNullOrEmpty(this.password)) {
          $.toast('请填写密码！')
          return;
        }
        let params = {
          tenancyName : '',
          usernameOrEmailAddress : this.mobile,
          password : this.mdpassword
        }
        api.userLoginApi(params).then(
          res=>{
          if (res.data.success == true) {
            const token = res.data.result;
            self.$store.dispatch('update_token', {
              token: res.data.result
            }).then(() => {
              //window.localStorage.setItem('token', JSON.stringify(token));
              self.$router.push({ path: '/routerview'});
            });
          } else {
            $.toast('登录失败~')
          }
        },
        err=>{
          $.toast(err.response.data.error.details);
        }
      )
      }
    }
  }
</script>
