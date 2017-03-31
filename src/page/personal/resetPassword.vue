<template>
 <div class="whole">
     <div class="k-title">Welcome to BiBin</div>
     <div class="login-form">
         <div class="user-name common-div">
           <input type="text" name="username" value="" placeholder="请输入您的手机号码" v-model="mobile" />
         </div>
         <div class="user-pasw common-div">
           <input type="text" name="code" value="" placeholder="请输入您的验证码" v-model="code" />
           <span class="get-code" @click="getResetCode">获取验证码</span>
         </div>
         <div class="user-pasw common-div">
             <input type="password" name="password" value="" placeholder="请输入您的新密码" v-model="password" />
         </div>

         <div class="login-btn common-div" @click="gotoRestPassword" >完成</div>
     </div>
     <div class="forgets">
         <a href="#">确定表示您同意K5game用户使用协议</a>
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
    computed: {
      mdpassword: function () {
        return checkJs.encryptedPassword(this.password)
      }
    },
    mounted () {

    },
    data () {
      return {
        hint : {
          show: false,
          info:'正在加载中...'
        },
        mobile : '',
        password : '',
        code : '',
        isGetCode : false,
        getCoding : false
      }
    },
    components: {},
    methods: {
      getResetCode() {
        if (!checkJs.isPhone(this.mobile)) {
          $.toast('请输入正确的手机号码!')
          return;
        }
        let self = this,stop;
        if(!self.getCoding){
          self.getCoding = true;
          var gcode = document.querySelector('.get-code');
          var duringTime = 0,surplusTime = 60000;
          gcode.innerHTML = 60+"秒后重发"
          stop = setInterval(function(){
            surplusTime -=  1000;
            if(surplusTime >=0 ){
              gcode.innerHTML = surplusTime/1000+"秒后重发"
            }else{
              clearInterval(stop)
              self.getCoding = false;
              gcode.innerHTML = "获取验证码"
            }
          },1000)
        }else{
          return;
        }
        self.hint.show = true;
        api.getResetPasswordCodeApi(`{"phoneNumber":"${self.mobile}"}`).then(
          res=>{
            self.hint.show = false;
            if (res.status == 200) {
              self.isGetCode = true;
              $.toast('验证码获取成功！')
            } else {
              $.toast('验证码获取失败！')
            }
          },
          err=>{
            $.toast(err.response.data.error.message);
            clearInterval(stop)
            self.getCoding = false;
            gcode.innerHTML = "获取验证码"
            self.hint.show = false;
          }
        )
      },
      gotoRestPassword(){
        let self = this;
        if (!checkJs.isPhone(this.mobile)) {
          $.toast('请输入正确的手机号码！')
          return;
        }
        if (!this.isGetCode) {
          $.toast('请先获取验证码')
          return;
        }
        if (checkJs.isNullOrEmpty(this.code)) {
          $.toast('请填写验证码')
          return;
        }
        this.hint.show = true;
        let params = {
          phoneNumber : this.mobile,
          password : this.mdpassword,
          resetCode: this.code
        }
        api.ResetPasswordApi(params).then(
          res=>{
            this.hint.show = false;
            if (res.data.result.canLogin == true) {
              $.toast('恭喜你修改成功!')
              setTimeout(function(){
                self.$router.push({ name: 'login'})
              },2000)
            } else {
              $.toast('修改失败~')
            }
          },
          err=>{
            this.hint.show = false;
            $.toast(err.response.data.error.message);
          }
        )
      }
    }
  }
</script>
