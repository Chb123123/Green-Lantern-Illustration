<template>
  <div class="homeContainer">
    <div class="heardr">
      <div class="headerTitle" @click="goIndex">青灯看图</div>
    </div>
    <div class="imgClassification">
      <span v-for="(item, index) in navList" :key="index" :class="item.style" @click="taggerNav(index,item.type,item.name)">{{ item.name }}</span>
    </div>
    <div class="imglist">
      <div v-for="item in imgList" :key="item.id" class="imgStyle" @click="goImgAbout(item)">
        <img :src="item.url" alt="" :title="item.title">
        <div class="imgTitle">{{ item.title }}</div>
      </div>
    </div>
    <div class="imgNum">
      <van-pagination
        v-model="currentPage"
        :total-items="125"
        :show-page-size="5"
        force-ellipses
        @change="taggerImgList"
      />
    </div>
  </div>
</template>

<script>
import { getImgList } from '@/api/getImgList'
import { mapMutations } from 'vuex'
export default {
  name: 'HomeView',
  data () {
    return {
      navList: [
        { name: '全部', type: '', style: 'navStyle checkedNav' },
        { name: '动物', type: 'animal', style: 'navStyle' },
        { name: '美', type: 'beauty', style: 'navStyle' },
        { name: '汽车', type: 'car', style: 'navStyle' },
        { name: '漫画', type: 'comic', style: 'navStyle' },
        { name: '食物', type: 'food', style: 'navStyle' },
        { name: '游戏', type: 'game', style: 'navStyle' },
        { name: '电影', type: 'movie', style: 'navStyle' },
        { name: '人物', type: 'person', style: 'navStyle' },
        { name: '壁纸', type: 'phone', style: 'navStyle' },
        { name: '风景', type: 'scenery', style: 'navStyle' }
      ],
      imgList: [],
      show: false,
      currentPage: 1,
      // 当前选中的标签
      newType: '',
      flag: false,
      // 当前的图片类型
      imgType: '全部'
    }
  },
  methods: {
    ...mapMutations(['getImgAbout']),
    async taggerNav (index, type, name) {
      this.imgType = name
      this.currentPage = 1
      this.newType = type
      const res = await getImgList(type)
      if (res.status !== 200) {
        this.show = true
      } else {
        // console.log(res.data)
        this.imgList = res.data.result.list
      }
      // eslint-disable-next-line array-callback-return
      this.navList.some((item) => {
        if (item.style === 'navStyle checkedNav') {
          item.style = 'navStyle'
          return true
        }
      })
      this.navList[index].style = 'navStyle checkedNav'
    },
    async getinitImg () {
      const res = await getImgList()
      this.imgList = res.data.result.list
      // console.log(res.data.result)
    },
    async taggerImgList () {
      // if (this.flag) {
      //   clearTimeout(this.flag)
      // } else {
      //   this.flag = setTimeout(() => {
      //     const res = await getImgList(this.newType, this.currentPage * 18)
      //     this.imgList = res.data.result.list
      //     // console.log(res.data)
      //   }, 1000)
      // }
      window.scroll(0, 0)
      const res = await getImgList(this.newType, this.currentPage * 18)
      this.imgList = res.data.result.list
    },
    // 点击图片，前往图片详情
    goImgAbout (obj) {
      obj.imgType = this.imgType
      this.getImgAbout(obj)
      // console.log(obj)
      this.$router.push('/imgelement')
    },
    // 点击标签，返回首页
    goIndex () {
      this.$router.push('/')
    }
  },
  created () {
    this.getinitImg()
  }
}
</script>

<style lang="less" scoped>
  .homeContainer{
    background-color: #eee;
    padding-bottom: 20px;
    .heardr{
      margin-bottom: 20px;
      width: 100%;
      // transform: translateX(-50%);
      height: 80px;
      background-color: #1B1B1B;
      .headerTitle{
        height: 80px;
        line-height: 80px;
        width: 1200px;
        margin: auto;
        color: #fff;
        font-size: 46px;
        letter-spacing: 15px;
        cursor: pointer;
      }
    }
    .imgClassification{
      margin: 0 auto 20px;
      width: 1200px;
      height: 60px;
      display: flex;
      overflow: hidden;
      background-color: #fff;
      border-radius: 20px;
      .navStyle{
        flex: 1;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
      }
      .checkedNav{
        background-color: #00BFFF;
        color: #fff;
      }
      >span:hover {
        background-color: #00BFFF;
        color: #fff;
        transition: 0.5s;
      }
    }
    .imglist{
      width: 1200px;
      overflow: hidden;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .imgStyle{
        position: relative;
        width: 390px;
        height: 250px;
        line-height: 250px;
        text-align: center;
        font-size: 32px;
        background-color: #fff;
        margin-bottom: 15px;
        cursor: pointer;
        > img{
          width: 100%;
          height: 100%;
          color: #666;
          text-align: center;
        }
      }
      .imgTitle{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 40px;
        width: 100%;
        background-color: rgba(0,0,0,0.2);
        color: #fff;
        box-sizing: border-box;
        line-height: 40px;
        padding-left: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 16px;
        // transition: 1s;
        // display: none;
      }
    }
    .imgNum{
      width: 600px;
      margin: auto;
      height: 40px;
    }
    /deep/.van-pagination__item{
      color: #333;
      background-color: #fff;
    }
    /deep/.van-pagination__item--active{
      background-color: #00BFFF;
      color: #fff;
    }
  }
</style>
