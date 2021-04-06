<template>
  <div class="index">
    <el-menu
      :default-active="$route.path" exact
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose" router>

      <el-menu-item :index="basePath" v-if="!item.child">
        <i class="el-icon-s-platform"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
      
      <el-submenu v-else :index="basePath">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <NavItem v-for="child in item.child" :key="child.url"
          :item="child" :basePath="child.url"/>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'NavItem',
  data(){
    return{
      
    }
  },
  props:['item','basePath']
}
</script>

<style>
</style>