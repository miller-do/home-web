<script setup>
const activeIndex = ref('2')
const input1 = ref('')
const handleSelect = (index) => {
  console.log('index', index)
}
</script>
<template>
  <div class="flex justify-between items-center px-4">
    <el-menu
      :ellipsis="false"
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :popper-offset="16"
      style="max-width: 600px"
      @select="handleSelect"
    >
      <el-menu-item index="index">
        <img
          style="width: 100px"
          src="@/assets/img/zirsn.png"
          alt="Element logo"
        />
      </el-menu-item>
      <el-menu-item index="index">首页</el-menu-item>
      <el-menu-item index="article">资讯中心</el-menu-item>
      <el-menu-item index="animations">动画特效</el-menu-item>
      <!-- <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="4" disabled>Orders</el-menu-item> -->
    </el-menu>
    <div class="el-right flex items-center">
      <el-input
        v-model="input1"
        class="serach-input pr-4"
        style="width: 240px"
        size="large"
        placeholder="搜索"
      />
      <!-- :prefix-icon="Search" -->

      <el-space :size="10" spacer="|">
        <loginForm />
        <!-- <el-button round type="warning" @click="dialogVisible = true"
          >登录 / 注册</el-button
        > -->
        <!-- <el-link class="" :underline="false">
          <router-link
            to="/login"
            class="text-[#409EFF] text-decoration-none no-underline"
            >登录</router-link
          >
        </el-link>
        <el-link class="" :underline="false">
          <router-link
            to="/register"
            class="text-[#409EFF] text-decoration-none no-underline"
            >注册</router-link
          >
        </el-link> -->
      </el-space>
      <el-link class="pl-4" :underline="false">
        <router-link
          to="/help"
          class="text-[#409EFF] text-decoration-none no-underline"
          >帮助</router-link
        >
      </el-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-menu {
  background-color: transparent;
  border-bottom: none;
}
:deep(.serach-input) {
  .el-input__wrapper {
    background-color: transparent;
  }
}
</style>
