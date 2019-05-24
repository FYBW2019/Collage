// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    vip: '',
    hidden: 'none'
  },
  myCollection: function(e) {
    wx.navigateTo({
      url: '/pages/user/MyCollection/MyCollection',
    })
  },
  myTest: function(e) {
    wx.navigateTo({
      url: '/pages/user/MyTest/MyTest',
    })
  },
  modifyProvince:function(){
    wx.navigateTo({
      url: "/pages/user/InfoModifyProvince/InfoModifyProvince",
    })
  },
  NoService: function(e) {
    wx.showModal({
      title: '升级提示',
      content: '前往恰好志愿公众号进行升级，升级后解锁V2功能',
      showCancel: false,
      confirmText: '确认',
      confirmColor: '#72B9C3',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.vip == 6) {
      this.setData({
        hidden: 'block',
        hidden2: 'none'
      })
    }
    this.setData({
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
      vip: app.globalData.vip,
      userProvince: app.globalData.userProvince,
      userType: app.globalData.userType
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