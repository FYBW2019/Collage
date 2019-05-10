const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    power: ''
  },
  selectInfo: function() {
    wx.navigateTo({
      url: '/pages/vipIndex/selectInfo/index/index',
    })
  },
  characterTest: function() {
    wx.navigateTo({
      url: '/pages/vipIndex/characterTest/index/index',
    })
  },
  volunteerChoice: function() {
    wx.navigateTo({
      url: '/pages/vipIndex/volunteerChoice/index/index',
    })
  },
  userInfo: function() {
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo!=null){
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        vip: app.globalData.vip
      })
    }
    let that=this;
      wx.getSetting({
        success(res) {
          console.log(res)
          if (!res.authSetting['scope.userInfo']) {
            wx.redirectTo({
              url: '/pages/index/index',
            })
          }else{
            wx.getUserInfo({
              lang: "zh_CN",
              success(res) {
                wx.login({
                  success: loginRes => {
                    wx.request({
                      url: 'https://mini.zhitonggaokao.cn/CollageMobile/weixinLogin',
                      data: {
                        CODE: loginRes.code
                      },
                      success(res) {
                        if (res.data.user!=null){
                          let userId = res.data.user[0];
                          let vip = res.data.user[14];
                          app.globalData.userId = userId;
                          app.globalData.vip = vip;  
                          that.setData({
                            vip: vip
                          })
                        }else{
                          wx.redirectTo({
                            url: '/pages/regist/regist',
                          })
                        }                                                                                                         
                      }
                    })
                  }
                })


                that.setData({
                  nickName: res.userInfo.nickName,
                  avatarUrl: res.userInfo.avatarUrl,
                })
                app.globalData.userInfo = res.userInfo;
              }
            })
          }
        }
      })
   
    console.log(app.globalData.vip)
    if (app.globalData.vip == 1) {
      that.setData({
        power: true
      })
    }
    if (app.globalData.vip == 2) {
      that.setData({
        power: false
      })
    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})