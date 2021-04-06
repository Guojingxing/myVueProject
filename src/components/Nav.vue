<template>
  <div class="index">
    <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo" router>
      <NavItem v-for="v in items" :key="v.url"
              :item="v" :basePath="v.url"/>
    </el-menu>
  </div>
</template>

<script>
import NavItem from './NavItem';
export default {
  data(){
    return{
      id:0,
      items:[
        {
          name:'首页',
          url:'/index'
        },
        {
          name:'数据统计',
          url:'/stats'
        },
        {
          name:'信息管理',
          url:'/wms',
          child:[
            {
              name:'列表展示',
              url:'/wms/list'
            }
          ]
        }
      ]
    }
  },
  components:{
    NavItem
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
</style>