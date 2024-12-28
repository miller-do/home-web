<script setup></script>

<template>
  <router-view />

  <!-- <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/demo" icon="search">标签</van-tabbar-item>
  </van-tabbar> -->
  <el-backtop :right="100" :bottom="100" />
  <!-- <el-backtop :bottom="100">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      "
    >
      UP
    </div>
  </el-backtop> -->
</template>

<style scoped></style>
