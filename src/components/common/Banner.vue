<script setup>
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Fade,
  Kenburn,
  Swipe,
  Slide,
  Waterfall,
  Zip,
  Blinds2D,
  Blinds3D,
  Blocks1,
  Blocks2,
  Concentric,
  Warp,
  Camera,
  Cube,
  Book,
  Fall,
  Wave,
  Round1,
  Round2,
  Explode,
} from 'vue-flux'
import 'vue-flux/style.css'
import pic from '@/assets/img/mustang.png'
import pic1 from '@/assets/img/mustang1.png'
import pic2 from '@/assets/img/mustang2.jpg'
import pic3 from '@/assets/img/mustang3.png'
import pic4 from '@/assets/img/BugattiVeyron.jpg'
import pic5 from '@/assets/img/Koenigsegg.jpg'
import pic6 from '@/assets/img/Lamborghini.webp'
import pic7 from '@/assets/img/AstonMartin.jpeg'

const propsData = defineProps({
  bannerList: {
    type: Array,
    default: () => [],
  },
})

const sliderCpn = ref()
const asyncImgs = ref([])
const list = [
  new Img(pic1, 'img 1'),
  new Img(pic1, 'img 2'),
  new Img(pic2, 'img 3'),
  new Img(pic3, 'img 3'),
  new Img(pic4, 'img 3'),
  new Img(pic5, 'img 3'),
  new Img(pic6, 'img 3'),
  new Img(pic7, 'img 3'),
]

onMounted(() => {
  // console.log('sliderCpn', sliderCpn.value)
})

const getbannerList = () => {
  asyncImgs.value = propsData.bannerList.map((item) => {
    return new Img(item.thumb, item.thumb.title)
  })
}
getbannerList()

const options = shallowReactive({
  autoplay: true,
})

// console.log('list', list, asyncImgs.value)
const rscs = shallowReactive(list)

const transitions = shallowReactive([
  // Fade,
  // Kenburn,
  Swipe,
  // Slide,
  Waterfall,
  Zip,
  Blinds2D,
  // Blinds3D,
  Blocks1,
  Blocks2,
  Concentric,
  Warp,
  // Camera,
  // Cube,
  // Book,
  // Fall,
  Wave,
  Round1,
  Round2,
  Explode,
])
</script>
<template>
  <div>
    <VueFlux
      ref="sliderCpn"
      :options="options"
      :rscs="rscs"
      :transitions="transitions"
      style="height: 740px"
    >
      <!-- <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps" />
    </template> -->

      <template #caption="captionProps">
        <FluxCaption v-bind="captionProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>

      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>

      <!-- <template #index="indexProps">
      <FluxIndex v-bind="indexProps" />
    </template> -->
    </VueFlux>
    <el-button @click="sliderCpn.show('next')"></el-button>
  </div>
</template>

<style lang="scss" scoped></style>
