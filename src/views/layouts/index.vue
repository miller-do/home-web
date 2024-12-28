<script setup>
import AppNavbar from '@/views/layouts/components/navBar/index.vue'
import AppMain from '@/views/layouts/components/appMain/index.vue'
import AppFooter from '@/views/layouts/components/appFooter/index.vue'
</script>
<template>
  <el-container>
    <el-header class="px-0">
      <AppNavbar />
    </el-header>

    <div class="main">
      <AppMain />
    </div>
    <!-- <el-main class="container"></el-main> -->
    <el-footer>
      <AppFooter />
    </el-footer>
  </el-container>
</template>
<style lang="scss" scoped>
.el-header {
  position: fixed;
  z-index: 99;
  width: 100%;
  background-color: rgb(255 255 255 / 70%);
  backdrop-filter: blur(2px);
  // box-shadow: 0 4px 6px #eee;
  border: 1px solid #eee;
}
.el-main {
  min-height: 100vh;
}
.el-container {
  position: relative;
}

.main {
  width: 100%;
  overflow: hidden;
  padding-top: 60px;
}
.el-footer {
  // background-color: #286eee;
  background-color: #e6e8eb;
  // color: #fff;
  height: auto;
}
</style>
