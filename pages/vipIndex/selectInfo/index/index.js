const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: ''
  },
SelectOne:function(){
wx.navigateTo({
  url: '/pages/vipIndex/selectInfo/index/SelectOne/SelectOne'

})
},
  SelectTwo:function(){
    wx.navigateTo({
      url: '/pages/vipIndex/selectInfo/index/SelectTwo/SelectTwo'

    })
  },
  SelectThree:function(){
    wx.navigateTo({
    url: '/pages/vipIndex/selectInfo/index/SelectThree/SelectThree'
    })
  },
  SelectFour:function(){
    wx.navigateTo({
    url: '/pages/vipIndex/selectInfo/index/SelectFour/SelectFour'
  })
  },
  SelectFive: function () {
    wx.navigateTo({
    url: '/pages/vipIndex/selectInfo/index/SelectFive/SelectFive'
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
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