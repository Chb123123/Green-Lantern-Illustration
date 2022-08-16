<template>
  <div class="imgElementContainer">
    <div class="heardr">
      <div class="headerTitle" @click="goIndex" title="返回首页">青灯看图</div>
    </div>
    <div class="imgElementBox">
      <div class="imgstyle">
        <div class="imgtitle">{{ imgAbout.title }}</div>
        <div class="img">
          <img :src="imgAbout.url" alt="" ondragstart="return false;">
        </div>
      </div>
      <!-- <div class="download">
        <div class="downloadBtn" @click="downloadBtn"><van-icon name="down" />下载原图</div>
        <div class="imgIllustrate">
          <p>图片类型：{{ imgAbout.type |  Classification }}</p>
        </div>
      </div> -->
    </div>
    <div class="recommend">
      <p>相关图片推荐</p>
      <div class="imglist">
        <div v-for="item in imgList" :key="item.id" class="imgStyle" @click="goImgAbout(item)">
          <img :src="item.url" alt="" :title="item.title" ondragstart="return false;">
          <div class="imgTitle">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getImgList } from '@/api/getImgList'
// import { request } from 'http'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      imgList: [],
      // 需要下载的图片
      downloadImg: ''
    }
  },
  computed: {
    ...mapState(['imgAbout'])
  },
  watch: {
    imgAbout () {
      this.getinitImg()
      console.log('切换了图片')
    }
  },
  filters: {
    // 过率图片类别
    Classification (type) {
      if (type === '') {
        return '全部'
      } if (type === 'animal') {
        return '动物'
      } if (type === 'beauty') {
        return '美'
      } if (type === 'car') {
        return '汽车'
      } if (type === 'comic') {
        return '漫画'
      } if (type === 'food') {
        return '食物'
      } if (type === 'game') {
        return '游戏'
      } if (type === 'movie') {
        return '电影'
      } if (type === 'person') {
        return '人物'
      } if (type === 'phone') {
        return '壁纸'
      } else {
        return '风景'
      }
    }
  },
  methods: {
    ...mapMutations(['getImgAbout']),
    async getinitImg () {
      const res = await getImgList(this.imgAbout.type)
      this.imgList = res.data.result.list
      console.log(res)
    },
    goImgAbout (obj) {
      this.getImgAbout(obj)
      window.scroll(0, 0)
    },
    goIndex () {
      this.$router.push('/')
    },
    downloadBtn () {
      console.log('点击下载图片')
      // 下载资料的文件名称
      // const fileName = this.imgAbout.title
      // const fileUrl = this.imgAbout.url
      // const link = document.createElement('a')
      // link.href = fileUrl
      // link.download = fileName
      // link.target = '_blank'
      // link.style.display = 'none'
      // document.body.appendChild(link)
      // link.click()
      axios({
        method: 'get',
        url: this.imgAbout.url,
        responseType: 'arraybuffer'
      }).then((res) => {
        console.log(res)
        // eslint-disable-next-line no-undef
        const blob = new Blob(response)
        const blobUrl = window.URL.createObjectURL(blob)
        const tmplink = document.createElement('a')
        tmplink.style.display = 'none'
        tmplink.href = blobUrl
        tmplink.setAttribute(
          'download',
          'https://pic.netbian.com/uploads/allimg/220605/235509-1654444509b06d.jpg'
        )
        document.body.appendChild(tmplink)
        tmplink.click()
      })
      // eslint-disable-next-line no-undef
      download(this.imgAbout.url)
      // 下载完成时删除创建的节点
      // document.body.removeChild(link)
      // request({
      //   url: this.imgAbout.url,
      //   method: 'get'
      // }).then((res) => {
      //   console.log(res)
      // })
    }
  },
  created () {
    this.getinitImg()
    this.downloadImg = this.imgAbout.url
  }
}
</script>

<style lang="less" scoped>
  .imgElementContainer{
    padding-bottom: 30px;
    background-color: #eee;
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
    .imgElementBox{
      margin: auto;
      width: 1200px;
      display: flex;
      overflow: hidden;
      margin-bottom: 20px;
      // background-color: green;
      justify-content: space-between;
      .imgstyle{
        width: 850px;
        height: 664px;
        .imgtitle{
          height: 64px;
          background-color: #fff;
          line-height: 64px;
          width: 1200px;
          font-size: 24px;
          color: #777;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .img{
          height: 800px;
          width: 1200px;
          background-color: #fff;
          > img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .download{
        width: 320px;
        // background-color: red;
        .downloadBtn{
          width: 320px;
          height: 60px;
          background-color: #63B504;
          color: #fff;
          font-size: 28px;
          line-height: 60px;
          text-align: center;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .imgIllustrate{
          padding: 10px 25px;
          background-color: #fff;
          > p {
            height: 28px;
            line-height: 28px;
            font-size: 16px;
          }
        }
      }
    }
    .recommend{
      margin:auto;
      width: 1200px;
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
    }
  }
</style>
