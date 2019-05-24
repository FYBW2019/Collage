const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    encryptedData:'',
    iv:''
  },
  getUserInfo: function(e) {
    let that = this;
    wx.getUserInfo({
      lang: "zh_CN",
      success(res) {
        app.globalData.userInfo = res.userInfo;
        that.setData({
          encryptedData: res.encryptedData,
          iv: res.iv
        })
      }
    })  
    wx.login({
      success: loginRes => {     
        let code = loginRes.code;
        wx.request({
          url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/weixinLogin2',
          method:"GET",
          data: {
            CODE: code
          },
          success(res) {
            console.log("这是user" + res.data.user)
            wx.getSetting({
              success(r) {
                if (r.authSetting['scope.userInfo']) {
                  if (res.data.user != null) {
                    let userId = res.data.user[0];
                    let vip = res.data.user[14];
                    app.globalData.userId = userId;
                    app.globalData.vip = vip;
                    wx.redirectTo({
                      url: '/pages/vipIndex/vipIndex',
                    })
                  } else {
                    wx.redirectTo({
                      url: '/pages/regist/regist',
                    })
                  }
                 
                } else {
                  wx.showModal({
                    title: '提示',
                    content: '授权后可以享受更多功能',
                    showCancel:false,
                    success(res) {
                      if (res.confirm) {
                        console.log('用户点击确定')
                      } else if (res.cancel) {
                        console.log('用户点击取消')
                      }
                    }
                  })
                }
              }
            })  
            console.log(res);
           
              
          }
        })
      }
    })

   
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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