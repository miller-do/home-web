<script setup>
import { cateList } from '@/api/cate'
import { getList } from '@/api/article'

import { useRouter } from 'vue-router'
const router = useRouter()

import siderBar from '../../components/common/ArticleSider.vue'

const pageIndex = ref(1)
const pageSize = ref(10)
const total = ref(0)

const size = ref('default')
const disabled = ref(false)

const loading = ref(false)

const handleSizeChange = (val) => {
  getArticleList()
}
const handleCurrentChange = (val) => {
  getArticleList()
}

const list = ref([])
const getArticleList = async () => {
  // 这里是获取文章列表的接口
  // 假设获取成功
  loading.value = true
  const params = {
    tabId: activeName.value,
    cateId: activeRadio.value,
    pageIndex: pageIndex.value,
    pageSize: pageSize.value,
  }
  const { data, code, msg } = await getList(params)
  // console.log('params', params, data)

  list.value = data.list
  total.value = data.total
  loading.value = false
}

const listCate = ref([])
const listCateAll = ref([])
const getcateList = async () => {
  // 这里是获取分类列表的接口
  const { data, code, msg } = await cateList()
  listCateAll.value = data.list
  listCate.value = data.list.filter(
    (item) => item.pid === 0 && (item.id === 25 || item.id === 43)
  )
  activeName.value = listCate.value[0].id

  listCatePanel.value = listCateAll.value.filter(
    (item) => item.pid === activeName.value
  )
}

const activeName = ref('')
const listCatePanel = ref([])
const handleClick = (tab, event) => {
  activeName.value = tab.paneName
  activeRadio.value = ''
  getArticleList()
  listCatePanel.value = listCateAll.value.filter(
    (item) => item.pid === tab.paneName
  )
}

const activeRadio = ref('')
const hdChangeRadio = (val) => {
  // console.log('val', val)
  getArticleList()
}

const handleDetail = (id) => {
  router.push({ path: '/articleDetail', query: { id: id } })
}

onMounted(() => {
  getcateList().then(() => {
    getArticleList()
  })
})
</script>
<template>
  <div class="bg-[#f9f9f9] min-h-screen">
    <el-row class="py-6 container">
      <el-col :span="18">
        <div class="pr-6">
          <el-card shadow="never" class="h-full">
            <el-breadcrumb separator="/" class="mb-4">
              <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
              <el-breadcrumb-item>
                <router-link to="/article">资讯中心</router-link>
              </el-breadcrumb-item>
            </el-breadcrumb>
            <el-tabs
              v-model="activeName"
              class="demo-tabs"
              @tab-click="handleClick"
            >
              <el-tab-pane
                v-for="it in listCate"
                :key="it.id"
                :label="it.catename"
                :name="it.id"
              >
                <el-radio-group v-model="activeRadio" @change="hdChangeRadio">
                  <el-radio-button label="全部" value="" />
                  <el-radio-button
                    v-for="(item, index) in listCatePanel"
                    :key="item.id"
                    :value="item.id"
                    :label="item.catename"
                  />
                </el-radio-group>
                <div v-loading="loading" class="divide-y divide-blue-200 mb-6">
                  <div v-if="list.length">
                    <div
                      v-for="(item, index) in list"
                      :key="index"
                      class="border-0 border-solid border-slate-500 mb-2 pt-6"
                    >
                      <div class="flex justify-start items-stretch">
                        <div class="grow-0">
                          <div class="w-full max-h-200px overflow-hidden">
                            <img
                              style="width: 200px"
                              :src="item.thumb"
                              alt="Element logo"
                              class="hover:scale-110 transition cursor-pointer"
                              @click="handleDetail(item.id)"
                            />
                          </div>
                        </div>
                        <div class="pl-4 grow flex flex-col justify-start">
                          <h3
                            class="mt-0 hover:text-blue-600 cursor-pointer"
                            @click="handleDetail(item.id)"
                          >
                            {{ item.title }}
                          </h3>
                          <div
                            class="color-gray-400 line-clamp-3 overflow-hidden"
                          >
                            {{
                              !item.desc || item.desc == 'undefined'
                                ? '暂无'
                                : item.desc
                            }}
                          </div>
                        </div>
                      </div>
                      <div class="w-full flex justify-between items-center">
                        <div class="flex my-4">
                          <el-space :size="10">
                            <el-tag
                              v-for="(item1, index1) in item.tags.split(',')"
                              :key="index1"
                              type="info"
                              >{{ item1 ? item1 : '暂无' }}</el-tag
                            >
                            <!-- <el-tag type="primary">中国移动</el-tag>
                          <el-tag type="success">2024年财报</el-tag>
                          <el-tag type="warning">流量经济</el-tag>
                          <el-tag type="danger">内容创作</el-tag> -->
                          </el-space>
                        </div>
                        <div class="ml-8 color-gray-300">
                          {{ item.create_time }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <el-empty v-else description="暂无数据" />
                </div>

                <el-pagination
                  v-model:current-page="pageIndex"
                  v-model:page-size="pageSize"
                  :page-sizes="[10, 20, 50, 100]"
                  :size="size"
                  :disabled="disabled"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
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
<style lang="scss" scoped></style>
