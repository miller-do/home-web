<script setup>
import { useRouter, useRoute } from 'vue-router'
import { detail, recommendList } from '@/api/article'
import siderBar from '../../components/common/ArticleSider.vue'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  let id = route.query.id
  getDetail(id)
  getrecommendList()
})

watch(
  () => route.query.id,
  (id) => {
    getDetail(id)
  }
)
const loading = ref(false)
const detailData = ref({})
const getDetail = async (id) => {
  loading.value = true
  const { data, code, msg } = await detail({ id })
  console.log('data', data)
  detailData.value = data
  loading.value = false
}
const recList = ref([])
const getrecommendList = async () => {
  // 这里是获取推荐文章列表的接口
  const { data, code, msg } = await recommendList()

  recList.value = data?.data
}

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}

const comments = ref('')
const hdPublishComment = () => {
  console.log('publish comment', comments.value)
}
</script>
<template>
  <div class="bg-[#f9f9f9] min-h-screen">
    <el-row class="py-6 container">
      <el-col :span="18">
        <div v-if="detailData" class="pr-6">
          <el-card shadow="never" class="h-full mb-2">
            <!-- <el-page-header @back="goBack">
              <template #content>
                <span class="text-large font-100 mr-3"> 热点 </span>
                <span class="text-large font-100 mr-3"> 关键词 </span>
                <span class="text-large font-100 mr-3"> iPhone16最新资讯 </span>
                <span class="text-large font-100 mr-3"> 正文 </span>
              </template>
            </el-page-header> -->
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <router-link to="/article">资讯中心</router-link>
              </el-breadcrumb-item>
              <el-breadcrumb-item>{{ detailData.title }}</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="" v-loading="loading">
              <h1>{{ detailData.title }}</h1>
              <p class="text-slate-400 font-300 mb-10">
                {{
                  !detailData.author || detailData.author == 'undefined'
                    ? '佚名'
                    : detailData.author
                }}
                | {{ detailData.create_time }} | 浏览量：{{
                  detailData.clickcount
                }}
              </p>
              <div class="w-full max-h-[200px] overflow-hidden">
                <img
                  :src="detailData.thumb"
                  alt="Element logo"
                  class="w-[200px] object-cover"
                />
              </div>
              <section v-html="detailData.content" class="content"></section>
            </div>
          </el-card>

          <el-card shadow="never" class="mb-2">
            <template #header>
              <div class="card-header">
                <span>精彩评论</span>
              </div>
            </template>
            <div class="flex flex-row items-start mb-4">
              <div class="">
                <img
                  src="@/assets/img/Koenigsegg.jpg"
                  class="w-18 h-18"
                  alt=""
                />
              </div>
              <div class="pl-4 flex-1">
                <el-input
                  v-model="comments"
                  class="w-full"
                  :autosize="{ minRows: 6, maxRows: 4 }"
                  resize="none"
                  show-word-limit
                  maxlength="300"
                  type="textarea"
                  placeholder="写下你的评论"
                />
                <div class="text-right">
                  <el-button
                    type="primary"
                    class="mt-4"
                    @click="hdPublishComment"
                  >
                    发布评论
                  </el-button>
                </div>
              </div>
            </div>
            <div>
              <el-divider direction="vertical" />
              <span
                class="text-slate-950 font-600 border-0 border-solid border-slate-500"
                >全部评论</span
              >
            </div>
            <template #footer>
              <div v-if="detailData.comments" class="">
                <div
                  v-for="(item, index) in detailData.comments"
                  :key="index"
                  class="mb-6"
                >
                  <div class="flex flex-row items-start">
                    <div>
                      <img
                        src="@/assets/img/mustang2.jpg"
                        alt=""
                        class="w-18 h-18 rounded-full"
                      />
                    </div>
                    <div class="flex-1 pl-4">
                      <div class="mb-2">
                        <div class="inline-block text-slate-950 font-600">
                          用户{{ item.user_id }}
                        </div>
                        <div class="inline-block text-slate-400 font-300 pl-4">
                          {{ item.create_time }}
                        </div>
                      </div>
                      <div class="mb-2">{{ item.content }}</div>
                      <div class="mb-2 flex items-center">
                        <el-link :underline="false">
                          <el-icon :size="16"> <Comment /> </el-icon>
                          <span class="ml-1">回复</span>
                        </el-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <el-empty
                v-else
                description="暂无评论哦，快来评论一下吧！"
                :image-size="200"
              />
            </template>
          </el-card>

          <el-card shadow="never" class="h-full mb-2">
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              @tab-click="handleClick"
            >
              <el-tab-pane label="相关推荐" name="first">
                <el-empty description="暂无数据" :image-size="200" />
              </el-tab-pane>
              <el-tab-pane label="大家在看" name="second">
                <el-empty description="暂无数据" :image-size="200" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <siderBar></siderBar>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
:deep(.content) {
  p {
    img {
      width: 100%;
    }
  }
}
</style>
