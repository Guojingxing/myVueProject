<template>
  <div class="Login">
    <el-row :gutter="10">
      <el-col :sm="8" >
        <h1>学生管理系统登录</h1>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="user">
            <el-input v-model="ruleForm.user" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="Login()">提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :sm="16"></el-col>
    </el-row>
  </div>
</template>

<script>
  export default{
    name:'Login',
    data() {
      return{
        ruleForm:{
          user: 'Admin',
          password: '',
        },
        rules:{
          user:[
            {required:true, message:'请输入用户名',trigger:'blur'},
            {min:3, max:18, message:'用户名长度在3-18之间', trigger:'blur'}
          ],
          password:[
            {required:true, message:'请输入密码',trigger:'blur'},
            {min:8, message:'密码应超过8位',trigger:'change'},
            {max:18, message:'密码过长，应小于18位', trigger:'change'}
          ]
        },
      }
    },
    methods:{
      Login(){
        let {user, password} = this.ruleForm;
        this.$http ({
          method:'post',
          url:'/get_login',
          data: {
            user:user,
            password:password
          }
        }).then(res=>{ //后端返回的数据信息
          console.log(res);
          let {code, msg} = res.data;
          if (code == '200') {
            sessionStorage.setItem('username', user)
            this.$router.push('/home')
          } else {
            alert(msg);
          }
        })
      }
    }
  }
</script>

<style>
</style>
