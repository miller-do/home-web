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
  <div>{{ num }}</div>
  <div class="mt-20px">
    <van-button class="w-100px" @click="getList">test</van-button>
  </div>
</template>

<style lang="scss" scoped></style>
