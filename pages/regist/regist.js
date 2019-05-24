// pages/regist/regist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showModal({
      title: '未注册用户',
      content: '请关注公众号“恰好志愿”进行注册',
      showCancel: false,
      success(res) {

      }
    })
    wx.login({
      success: loginRes => {
        let code = loginRes.code;
        wx.request({
          url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/weixinLogin2',
          method: "GET",
          data: {
            CODE: code
          },
          success(res) {
            if (res.data.user != null) {
              wx.redirectTo({
                url: '/pages/vipIndex/vipIndex',
              })
            }
          }
        })
      }
    })
  },

  previewImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: [current]
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