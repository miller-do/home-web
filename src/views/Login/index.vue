<script setup></script>
<template>
  <div class="w-full h-full flex justify-center items-center">
    <img
      src="@/assets/img/BugattiVeyron.jpg"
      alt=""
      class="w-full h-full object-cover blur-sm"
    />
    <div class="absolute top-1 right-1 px-10 py-10">
      <router-link
        to="/index"
        class="text-[#409EFF] text-decoration-none no-underline"
        >home</router-link
      >
    </div>
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <el-form class="bg-slate-200/90 shadow-md rounded-md p-8 w-full max-w-xs">
        <div class="font-bold text-3xl text-center mb-10">登录</div>
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="username" />
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input type="password" v-model="password" />
        </el-form-item>
        <el-form-item label="验证码" label-width="80px">
          <div class="flex justify-between items-center w-full">
            <el-input v-model="code" class="w-80px" style="flex: 1" />
            <el-image
              src="@/assets/img/code.jpg"
              class="ml-10px"
              width="100"
              height="36"
            />
          </div>
        </el-form-item>
        <div class="flex justify-between items-center mt-10">
          <router-link
            to="#"
            class="text-[#409EFF] text-decoration-none no-underline"
            >忘记密码？</router-link
          >
          <div>
            没有账号？<router-link
              to="/register"
              class="text-[#409EFF] text-decoration-none no-underline"
              >去注册</router-link
            >
          </div>
        </div>
        <div class="flex justify-center items-center mt-10">
          <el-button type="primary" class="w-full" @click="login"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
