//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    array: ['陕西', '山西', '北京', '上海','广东','河南'],
    province:"省份",
    year:"年份",
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //省份选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', this.data.array[e.detail.value] )
   
    this.setData({
      province: this.data.array[e.detail.value]
    })
  },
  login:function(){
    
wx.navigateTo({
  url: '/pages/login/login'
})
  },
  //选择年份
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  findSchoolInfo:function(){
    wx.navigateTo({
      url: '/pages/schoolInfo/schoolInfo',
      success: function(res) {

      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
