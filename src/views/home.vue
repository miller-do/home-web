<script setup>
import { test } from '@/api/index'
const num = ref(0)
const getList = async () => {
  const res = await test()
  console.log(res)
}
getList()
</script>

<template>
  <div
    class="ml-20px c-blue b-2px b-solid p-10px bg-gradient-to-r from-black to-#eeff2c text-30px"
  >
    {{ num }}
  </div>
  <div class="mt-20px">
    <!-- <van-button class="w-100px" @click="getList">test</van-button> -->
  </div>
</template>

<style lang="scss" scoped></style>
