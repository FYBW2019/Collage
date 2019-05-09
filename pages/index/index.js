const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getUserInfo: function (e) {
    wx.getUserInfo({
      lang: "zh_CN",
      success(res) {
        app.globalData.userInfo = res.userInfo;
      }
    })
    console.log("用户信息" + e.detail.userInfo)
    
let that=this;
    wx.login({
      success: loginRes => {
        console.log(loginRes.code)
        wx.request({
          url: 'https://mini.zhitonggaokao.cn/CollageMobile/weixinLogin',
          data: {
            code: loginRes.code
          },
          success(res) {

            let userId = res.data.user[0];
            let vip = res.data.user[14];
            app.globalData.userId = userId;
            app.globalData.vip = vip;
            wx.redirectTo({
              url: '/pages/vipIndex/vipIndex',
            })
          }
        })
      }
    }) 
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})