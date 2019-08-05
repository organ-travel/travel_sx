<template>
  <div class="home">
    <div v-if="arrItem && arrItem.length" class="m-swiper m-wrap swiper-container">
      <div class="swiper-wrapper">
        <div v-for='(el, index) in arrItem' :key="index" class="swiper-slide">
          <img class="img" :src="el.imgUrl">
        </div>
      </div>
    </div>
    <type :type-arr="typeArr"></type>
    <survey :survey-arr="surveyArr"></survey>
    <info>
      <tab slot="tab" :nav="infoNav" :arr="infoArr" :active-index="activeIndex" @changeInfo="changeInfo"></tab>
    </info>
    <div class="m-merge">
      <wonder :wonder-arr="wonderArr"></wonder>
      <strategy :strategy-arr="strategyArr"></strategy>
    </div>
    <custom></custom>
    <div class="m-map m-wrap"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Type from '@/components/home/Type.vue'
import Survey from '@/components/home/Survey.vue'
import Info from '@/components/home/Info.vue'
import Tab from '@/components/home/Tab.vue'
import Wonder from '@/components/home/Wonder.vue'
import Strategy from '@/components/home/Strategy.vue'
import Custom from '@/components/home/Custom.vue'
import dataset from '@/config/dataset'
import Swiper from 'swiper'

export default {
  name: 'Home',
  components: {
    Type,
    Survey,
    Tab,
    Info,
    Wonder,
    Strategy,
    Custom
  },
  data () {
    return {
      typeArr: dataset.typeArr,
      surveyArr: dataset.surveyArr,
      infoNav: dataset.infoNav,
      wonderArr: dataset.wonderArr,
      strategyArr: dataset.strategyArr,
      // arrItem: [],
      arrItem: [{
        name: 'swiperSlide5',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg'
      }, {
        name: 'swiperSlide1',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
      }, {
        name: 'swiperSlide51',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg'
      }, {
        name: 'swiperSlide1111115',
        imgUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg'
      }],
      datas: [],
      infoArr: [],
      activeIndex: 0
    }
  },
  computed: {
    ...mapGetters('Home', ['getInfo'])
  },
  mounted () {
    const dynamics = [{
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }]
    const travel = [{
      date: '6-19',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }]
    const activities = [{
      date: '6-19',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }, {
      date: '6-20',
      year: '2019',
      title: '壶口瀑布惊现彩虹美景!如鹊桥横跨秦晋两省,网友壶口瀑布惊现彩虹',
      brief: '壶口瀑布是仅次于黄果树瀑布的中国第二大瀑布，位于山西省和陕西省的交界处，是黄河流域重要的旅游景点之一...'
    }]
    this.datas.push(dynamics)
    this.datas.push(travel)
    this.datas.push(activities)
    this.infoArr = this.datas[this.activeIndex]
    // this.arrItem = [{
    //   name: 'swiperSlide5',
    //   imgUrl: 'https://c-ssl.duitang.com/uploads/item/201808/16/20180816005721_otyvr.jpg'
    // }, {
    //   name: 'swiperSlide1',
    //   imgUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605234527_efvgj.jpg'
    // }, {
    //   name: 'swiperSlide51',
    //   imgUrl: 'https://c-ssl.duitang.com/uploads/item/201805/21/20180521133102_gnvii.jpg'
    // }, {
    //   name: 'swiperSlide1111115',
    //   imgUrl: 'https://c-ssl.duitang.com/uploads/item/201806/05/20180605090433_snnuy.jpg'
    // }]
    /* eslint-disable */
    new Swiper ('.m-swiper', {
      loop: true
      // 如果需要分页器
      // pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
    }) 
  },
  methods: {
    changeInfo (index) {
      this.activeIndex = index
      this.infoArr = this.datas[index]
    }
  }
}
</script>
<style lang="stylus" scoped>
.m-map {
  width 100%
  height 622px
  background url('~@/assets/img/map.jpg') no-repeat center
  background-size cover
}
.m-merge {
  background url('~@/assets/img/wonder.jpg') no-repeat center
  background-size cover
}
.swiper-container {
  width 100%
  height 1015px
  .img {
    width 100%
    height 1015px
  }
}
</style>
