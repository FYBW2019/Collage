
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    vip: '',
    provinceList: app.globalData.provinceList,
    SchoolProvince:'选择省份' 
  },
  //省份选择
  bindPickerChange3: function (e) {
    let that = this;
    let userProvince = that.data.userProvince;
    that.setData({
      SchoolProvince: that.data.provinceList[e.detail.value]
    })
  },
  modifyProvince:function(e){
    let that=this;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/WEIXIN_UpdateProvince',
      data:{
        province: that.data.SchoolProvince,
        UserId: app.globalData.userId
      },
      success(res){
        console.log(res)
        if (res.data==true){
          wx.reLaunch({
            url: '/pages/vipIndex/vipIndex',
          })
        }else{
          wx.showToast({
            title: '修改失败',
            duration:2000,
            icon:'none'
          })
        }

      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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