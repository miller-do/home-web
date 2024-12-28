<script setup>
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const pageIndex = ref(1)
const pageSize = ref(10)
const total = ref(22)
const handleSizeChange = (val) => {
  //
}
const handleCurrentChange = (val) => {
  //
}

const hdView = (data) => {
  console.log(data)
  router.push({ path: '/articleDetail', query: { id: data } })
}
const SearchInput = ref('')
</script>
<template>
  <div class="bg-[#f9f9f9] min-h-screen">
    <div class="py-6 container">
      <div
        class="w-full h-full mb-2 min-h-screen border border-slate-300 border-solid p-6 bg-white"
      >
        <div class="h-full flex justify-between flex-col">
          <div class="mb-6">
            <el-breadcrumb separator="/" class="mb-4">
              <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <router-link to="/animations">动画特效</router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
            <div class="text-left mb-4">
              <el-input
                v-model="SearchInput"
                style="width: 300px"
                size="large"
                placeholder="请输入搜索内容"
                :suffix-icon="Search"
              />
            </div>
            <el-space :size="6" class="mb-6">
              <el-link>综合排序</el-link>
              <el-link type="info">最新上传</el-link>
              <el-link type="info">最多下载</el-link>
            </el-space>
            <div>
              <div class="grid grid-cols-6 gap-4">
                <div
                  v-for="(item, index) in 10"
                  :key="index"
                  shadow="never"
                  class="mb-2 shadow-sm bg-white dark:bg-slate-900 dark:border-sky-500 border border-slate-200 border-solid"
                >
                  <div class="overflow-hidden h-[130px]">
                    <img
                      src="../../assets/img/mustang2.jpg"
                      alt=""
                      class="w-full object-cover hover:scale-120 transition-all"
                    />
                  </div>
                  <div class="p-4">
                    <h4 class="m-0 mb-4 overflow-hidden line-clamp-2">
                      css气泡背景动态特效css气泡背景动态特效css气泡背景动态特效css气泡背景动态特效{{
                        index
                      }}
                    </h4>
                    <div class="mb-2">
                      <el-space>
                        <el-tag type="info">css3气泡</el-tag>
                        <el-tag type="info">网页特效</el-tag>
                        <el-tag type="info">水球</el-tag>
                        <!-- <el-tag type="info">按钮动画</el-tag>
                        <el-tag type="info">流光文字</el-tag>
                        <el-tag type="info">3d云标签</el-tag> -->
                      </el-space>
                    </div>
                    <div
                      class="flex justify-between items-center text-right mb-2"
                    >
                      <el-icon :size="20">
                        <Star />
                      </el-icon>
                      <span class="color-slate-500 text-sm"
                        >2022-06-12 12:20:12</span
                      >
                    </div>
                    <div class="text-right">
                      <el-button type="primary" plain @click="hdView(item)"
                        >在线预览
                      </el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <el-pagination
            v-model:current-page="pageIndex"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
