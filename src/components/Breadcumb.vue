<template>
  <div class="home">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }" v-for="(v,i) in breadList" :key="i">
        <router-link :to="v.path" />
        {{v.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default ({
  name:'index',
  data() {
    return{
      breadList:[]
    }
  },
  created(){
      console.log(this.$route.matched);
      this.breadList = this.$route.matched;
  },
  watch:{ //监听路由地址的变化
    $route(to, from){
      this.breadList = to.matched;
      console.log(from.matched)
    }
  }
})
</script>

<style>
.home{
  margin-top: 20px;
}
</style>