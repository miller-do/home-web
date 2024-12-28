<script setup>
import { recommendList, latestList, hotList, detail } from '@/api/article'
import coolBanner from '@/components/common/Banner.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const bannerList = ref([])
const gethotList = async () => {
  const { data, code, msg } = await hotList()
  bannerList.value = data.data.splice(0, 5)
}
gethotList()
const activeCard = ref(0)
const hdHover = (index) => {
  activeCard.value = index
}

//防抖函数
const debounce = (func, wait) => {
  let timeout
  return function () {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, arguments)
    }, wait)
  }
}

const getDetail = async (id) => {
  console.log('getDetail', id)
  // const { data, code, msg } = await detail(id)
  // console.log('data', data)
  // // 跳转到详情页面
  router.push({
    path: '/articleDetail',
    query: {
      id,
    },
  })
}
</script>
<template>
  <div class="mb-10">
    <coolBanner v-if="bannerList.length" :banner-list="bannerList"></coolBanner>

    <div class="container mb-10">
      <h2 class="text-center">最新资讯</h2>
      <div class="card-wrapper1">
        <!-- :class="[index == activeCard ? 'col-span-2' : '']" -->
        <div
          v-for="(item, index) in bannerList"
          :key="index"
          class="card-item inline-block box-border"
          :class="[index == activeCard ? 'active' : '']"
          @mouseover="hdHover(index)"
        >
          <div
            class="w-full card-item-content border border-gray-300 border-solid p-4 box-border"
          >
            <div class="h-16">
              <h3 @click="getDetail(item.id)">
                {{ item.title }}
              </h3>
            </div>
            <div class="mb-4">
              {{
                item.author && item.author != 'undefined' ? item.author : '佚名'
              }}
            </div>
            <div class="mb-4">
              {{ item.desc && item.desc != 'undefined' ? item.desc : '暂无' }}
            </div>
            <el-space :size="4">
              {{ item.tags && item.tags != 'undefined' ? item.tags : '暂无' }}
            </el-space>
          </div>
        </div>
      </div>
    </div>
    <div class="container mb-10">
      <!-- grid grid-cols-5 gap-4 -->
      <h2 class="text-center">面向丰富业务场景的全栈解决方案</h2>
      <div class="card-wrapper grid grid-cols-4 gap-4">
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="card-item w-full bg-gray-100 border border-gray-300 border-solid inline-block p-6 box-border"
        >
          <div class="w-full">
            <h3>微搭低代码</h3>
            <div>致力于打造高质量、全方位生态的网站服务平台</div>
          </div>
          <div class="md:block">
            <div>
              <h4>客户案例</h4>
              <el-space :size="4">
                <el-tag>xxx大学</el-tag>
                <el-tag>xxx公司</el-tag>
              </el-space>
            </div>
            <div>
              <h4>相关产品</h4>
              <el-space :size="4">
                <el-tag>xxx平台</el-tag>
                <el-tag>xxx系统</el-tag>
              </el-space>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-main {
  min-height: 100vh;
}
.card-wrapper1 {
  .card-item {
    width: 16.6666667%;
    margin-right: 0.6%;
    transition: all 0.2s ease-in-out;
    &:last-of-type {
      margin-right: 0;
    }
    &.active {
      width: 30.7%;
    }
    .card-item-content {
      // width: 20%;
      box-sizing: border-box;
      // background-image: url(../../assets/img/BugattiVeyron.jpg);
      // background-size: contain;
      color: #fff;
      // width: 300px;
      background: linear-gradient(
        0deg,
        rgba(14, 183, 177, 0.6),
        rgba(40, 110, 242, 0.8)
      );
    }
  }
  .col-span-2 {
    // width: 500px;
  }
}
</style>
