<script setup>
import { recommendList, latestList, hotList } from '@/api/article'
import { useRouter } from 'vue-router'
const router = useRouter()

const recList = ref([])
const getrecommendList = async () => {
  // 这里是获取推荐文章列表的接口
  const { data, code, msg } = await recommendList()
  recList.value = data?.data
}
getrecommendList()

const latestLis = ref([])
const getlatestList = async () => {
  // 这里是获取最新文章列表的接口
  const { data, code, msg } = await latestList()
  latestLis.value = data?.data
}
getlatestList()

const hotLis = ref([])
const gethotList = async () => {
  // 这里是获取热门文章列表的接口
  const { data, code, msg } = await hotList()
  hotLis.value = data?.data
}
gethotList()

const handleDetail = (id) => {
  router.push({ path: '/articleDetail', query: { id: id } })
}
</script>

<template>
  <div class="">
    <el-card shadow="never" class="mb-4">
      <template #header>
        <div class="card-header">
          <h3 class="my-0"><span>最新资讯</span></h3>
        </div>
      </template>
      <div
        v-for="(item, index) in latestLis"
        :key="item.id"
        class="flex flex-row items-start mb-2"
      >
        <div class="bg-blue-400 text-white px-2.6 py-0.6 text-center mt-2">
          {{ index + 1 }}
        </div>
        <div class="pl-4">
          <p class="text item my-0 line-height-8">
            <span
              class="hover:text-blue-600 cursor-pointer color-gray-400"
              @click="handleDetail(item.id)"
              >{{ item.title }}</span
            >
            <el-tag type="info" class="ml-2">{{ item.clickcount }}热度</el-tag>
          </p>
        </div>
      </div>
      <!-- <template #footer>Footer content</template> -->
    </el-card>
    <el-card shadow="never" class="mb-4">
      <template #header>
        <div class="card-header">
          <h3 class="my-0"><span>热门资讯</span></h3>
        </div>
      </template>
      <div
        v-for="(item, index) in hotLis"
        :key="item.id"
        class="flex flex-row items-start mb-2"
      >
        <div class="bg-blue-400 text-white px-2.6 py-0.6 text-center mt-2">
          {{ index + 1 }}
        </div>
        <div class="pl-4">
          <p class="text item my-0 line-height-8">
            <span
              class="hover:text-blue-600 cursor-pointer color-gray-400"
              @click="handleDetail(item.id)"
              >{{ item.title }}</span
            >
            <el-tag type="info" class="ml-2">{{ item.clickcount }}热度</el-tag>
          </p>
        </div>
      </div>
      <!-- <template #footer>Footer content</template> -->
    </el-card>
    <el-card shadow="never" class="mb-4">
      <template #header>
        <div class="card-header">
          <h3 class="my-0"><span>推荐资讯</span></h3>
        </div>
      </template>
      <div
        v-for="(item, index) in recList"
        :key="item.id"
        class="flex flex-row items-start mb-2"
      >
        <div class="bg-blue-400 text-white px-2.6 py-0.6 text-center mt-2">
          {{ index + 1 }}
        </div>
        <div class="pl-4">
          <p class="text item my-0 line-height-8">
            <span
              class="hover:text-blue-600 cursor-pointer color-gray-400"
              @click="handleDetail(item.id)"
              >{{ item.title }}</span
            >
            <el-tag type="info" class="ml-2">{{ item.clickcount }}热度</el-tag>
          </p>
        </div>
      </div>
      <!-- <template #footer>Footer content</template> -->
    </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
