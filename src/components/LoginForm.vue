<script setup>
import { View, Hide } from '@element-plus/icons-vue'
const dialogVisible = ref(false)

const tabActiveName = ref('1')
const handleClick = (tab, event) => {
  tabActiveName.value = tab.name
}

const ruleForm = reactive({
  username: '',
  password: '',
  code: '',
})

const remember = ref(false)

const hdlogin = () => {
  console.log('login', ruleForm)
}
</script>
<template>
  <el-button round type="warning" @click="dialogVisible = true"
    >登录 / 注册</el-button
  >
  <el-dialog
    v-model="dialogVisible"
    class="login-dialog animate__animated animate__zoomInDown"
    width="500"
    destroy-on-close
    :close-on-click-modal="false"
    append-to-body
  >
    <el-tabs v-model="tabActiveName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="登录" name="1"></el-tab-pane>
      <el-tab-pane label="注册" name="2"></el-tab-pane>
    </el-tabs>
    <el-form
      v-if="tabActiveName === '1'"
      ref="formRef"
      class="w-full bg-white p-8 box-border"
      :model="ruleForm"
    >
      <el-form-item label="用户名" label-width="80px">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" label-width="80px">
        <el-input
          v-model="ruleForm.password"
          :suffix-icon="View"
          type="password"
        />
      </el-form-item>
      <el-form-item label="验证码" label-width="80px">
        <div class="flex justify-between items-center w-full">
          <el-input v-model="ruleForm.code" class="w-80px" style="flex: 1" />
          <el-image
            src="@/assets/img/code.jpg"
            class="ml-10px"
            width="100"
            height="36"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <div class="flex justify-between items-center w-full">
          <el-checkbox v-model="remember" label="记住密码" size="large" />
          <router-link
            to="#"
            class="text-[#409EFF] text-decoration-none no-underline"
            >忘记密码？</router-link
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" class="w-full" @click="hdlogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <el-form
      v-if="tabActiveName === '2'"
      ref="formRef"
      class="w-full bg-white p-8 box-border"
      :model="ruleForm"
    >
      <el-form-item label="用户名" label-width="80px">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" label-width="80px">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>
      <el-form-item label="手机号" label-width="80px">
        <el-input type="password" v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="验证码" label-width="80px">
        <div class="flex justify-between items-center w-full">
          <el-input v-model="ruleForm.code" class="w-80px" style="flex: 1" />
          <el-image
            src="@/assets/img/code.jpg"
            class="ml-10px"
            width="100"
            height="36"
          />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" class="w-full" @click="hdlogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="text-center color-gray-500 mb-8">
      注册登录即代表同意 《职日生用户协议》 《职日生隐私政策》
    </div>
  </el-dialog>
</template>
<style lang="scss" scoped></style>
