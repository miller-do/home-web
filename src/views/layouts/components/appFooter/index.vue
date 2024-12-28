<template>
  <div class="container py-6">
    <el-row class="mb-4">
      <div class="el-col el-col-2">
        <img src="@/assets/img/ercode.jpg" class="w-full" alt="" />
      </div>
      <div class="el-col el-col-22">
        <div class="pl-6">
          <el-space wrap size="small">
            <div v-for="o in 4" :key="o" class="">
              <div class="card-header mb-2">section name</div>
              <div v-for="item in 4" :key="item" class="text item mb-1">
                <el-link :underline="false" class="text-#286eee">{{
                  'List item ' + o
                }}</el-link>
              </div>
            </div>
          </el-space>
        </div>
      </div>
    </el-row>
    <el-row class="flex justify-center items-center">
      <div class="inline-block">
        <el-text class="text-gray-500">Copyright © 2021</el-text>
        <el-link class="text-#286eee">比谷科技</el-link>
        <el-link class="text-#286eee">zrisn.com</el-link>
        <el-text class="text-gray-500">All rights reserved</el-text>
      </div>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
