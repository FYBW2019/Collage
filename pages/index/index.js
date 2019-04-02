//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    provinceList:[],//省份列表
    natureList:[],//性质列表
    province: "省份",//省份
    nature:"大学性质",

    SchoolProvince: "大学省份",//大学省份
    year: "年份",//年份
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //省份选择
  bindPickerChange: function(e) {
    console.log('省份选择', this.data.provinceList[e.detail.value])

    this.setData({
      province: this.data.provinceList[e.detail.value]
    })
  },
  //大学省份选择
  bindPickerChange2: function (e) {
    console.log('大学省份选择', this.data.provinceList[e.detail.value])

    this.setData({
      SchoolProvince: this.data.provinceList[e.detail.value]
    })
  },
  //大学性质选择
  bindPickerChange3: function (e) {
    console.log('大学性质选择', this.data.natureList[e.detail.value])

    this.setData({
      nature: this.data.natureList[e.detail.value]
    })
  },
  login: function() {

    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  //选择年份
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  findSchoolInfo: function() {
    wx.navigateTo({
      url: '/pages/schoolInfo/schoolInfo',
      success: function(res) {

      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  onLoad: function() {
    this.setData({
      provinceList: app.globalData.provinceList,
      natureList:app.globalData.natureList
    })
    console.log(app.globalData.provinceList)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})