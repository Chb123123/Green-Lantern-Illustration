import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgAbout: {}
  },
  getters: {
  },
  mutations: {
    // 点击获取图片信息
    getImgAbout (state, obj) {
      state.imgAbout = obj
    }
  },
  actions: {
  },
  modules: {
  }
})
