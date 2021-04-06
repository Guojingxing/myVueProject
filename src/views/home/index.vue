<template>
  <div class="index">
    <el-container class="container">
      <el-aside width="200px"  style="height:100%">
        <Nav />
      </el-aside>
      
      <el-container>
        <el-header :model="Header">
          <el-button class="exit" type="primary" @click="goBack()" style="align:right">返回</el-button>
          <Breadcumb />
        </el-header>
        <el-main :model="Main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Breadcumb from '@/components/Breadcumb';
export default ({
  name:'index',
  data() {
    return{
      
    }
  },
  components: {
    Nav, 
    Breadcumb
  },
  methods: {
    goBack(){
      this.$router.push('/login');
      sessionStorage.removeItem('username');
    }
  },
  created() {

  }
})
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%; 
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .exit {
    float: right;
    margin-top: 10px;
  }

  .container{
    margin-bottom: 0px;
  }

</style>