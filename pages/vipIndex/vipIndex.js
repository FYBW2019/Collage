const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    power: '',
  },
  selectInfo: function() {
    wx.navigateTo({
      url: '/pages/vipIndex/selectInfo/index/index',
    })
  },
  characterTest: function() {
    if (app.globalData.vip == 1) {
      wx.showModal({
        title: '升级提示',
        content: '前往恰好志愿公众号进行升级，升级后解锁V2功能',
        showCancel: false,
        confirmText: '确认',
        confirmColor: '#72B9C3',
        success: function (res) {
          if (res.confirm) {
            
          }
        }
      })
    }else{
      wx.navigateTo({
        url: '/pages/vipIndex/characterTest/index/index',
      })
    }    
  },
  volunteerChoice: function() {
    if (app.globalData.vip == 1) {
      wx.showModal({
        title: '升级提示',
        content: '前往恰好志愿公众号进行升级，升级后解锁V2功能',
        showCancel: false,
        confirmText: '确认',
        confirmColor: '#72B9C3',
        success: function (res) {
          if (res.confirm) {

          }
        }
      })
    }else{
      wx.navigateTo({
        url: '/pages/vipIndex/volunteerChoice/index/index',
      })
    }  
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
    wx.showLoading();
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo != null) {
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        vip: app.globalData.vip
      })
    }
    let that = this;
    wx.getSetting({
      success(res) {
        
        if (!res.authSetting['scope.userInfo']) {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        } else {
          wx.getUserInfo({
            lang: "zh_CN",
            success(res) {
              wx.login({
                success: loginRes => {
                  wx.request({
                    url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/weixinLogin2',
                    data: {
                      CODE: loginRes.code
                    },
                    success(res) {
                      console.log(res.data.user)
                      wx.setStorageSync("user", res.data.user);
                      wx.setStorageSync("session", res.data.sessionkey);
                      if (res.data.user != null) {
                        let userId = res.data.user[0];
                        let userProvince = res.data.user[33];
                        let vip = res.data.user[2];
                        let userType = res.data.user[34];
                        app.globalData.userId = userId;
                        app.globalData.vip = vip;
                        app.globalData.userProvince = userProvince;
                        app.globalData.userType = userType
                        that.setData({
                          vip: vip,
                          userType: userType,
                          userProvince: userProvince
                        })
                        console.log(app.globalData.vip)
                        if (vip ==1) {
                          that.setData({
                            power: 'ban'
                          })
                          
                        }else{
                          that.setData({
                            power: ''
                          })
                        }
                        //查找该用户收藏的学校
                        wx.request({
                          url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/AllMyCollection',
                          data: {
                            UserId: userId
                          },
                          success(res) {
                            wx.hideLoading();
                            if (res.data.results == null) {

                            } else {
                              app.globalData.collects = res.data.results
                            }

                          }
                        })
                      } else {
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