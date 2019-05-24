const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    nickName: '',
    avatarUrl: '',
    vip: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/AllMyCollection',
      data: {
        UserId: app.globalData.userId
      },
      success(res) {
        console.log(res.data.collageSchoolModels);
        if (res.data.collageSchoolModels==''){
          wx.showModal({
            title: '恰好志愿提示您',
            content: '您还没未收藏一所大学',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                wx.navigateBack({
                })
              }
            }
          })
        }else{
          that.setData({
            list: res.data.collageSchoolModels
          })
        }
        
      }
    })
    that.setData({
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