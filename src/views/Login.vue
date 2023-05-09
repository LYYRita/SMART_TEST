<template>
<div class="login-wrapper">
  <div class="model">
    <el-form ref="" :model="user" status-icon :rules="rules">
      <div class="user-title">火星</div>
      <el-form-item prop="userName">
        <el-input v-model="user.userName" type="text"  prefix-icon="el-icon-search"/>
      </el-form-item>
      <el-form-item prop="userPwd">
        <el-input v-model="user.userPwd" type="text"  :prefix-icon="View"/>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>


</template>

<script>
import { ref } from 'vue'
import { Search,View } from '@element-plus/icons-vue'
export default {
  name:'login',
  data() {
    return {
      user: {
        userName:'',
        userPwd:''
      },
      rules:{
        userName:[
          {
            required:true, message:'请输入用户名',trigger:"blur"
          }
        ],
        userPwd:[
          {
            required:true, message:'请输入密码',trigger:"blur"
          }
        ]
      }
    }
  },
  methods:{
    login() {
      this.$refs.userForm.validate((validate)=>{
        if(validate) {

        }else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width:100vw;
  height: 100vh;
  .model{
    width: 500px;
    padding: 50px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .user-title{
      font-size: 50px;
      line-height: 1.5%;
      text-align: center;
      margin-bottom: 30px;
    }
    .login-btn{
      width: 100%;
    }
  }
}
</style>