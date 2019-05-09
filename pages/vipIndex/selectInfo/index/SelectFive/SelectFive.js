const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    year:'2015',
    list:[],
    show:'none'
  },
  //选择年份
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
      vip: app.globalData.vip
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let that=this;
    if (e.detail.value.collageName==''){
      wx.showToast({
        title: '请填写大学名称',
        icon:'none',
        duration:3000
      })
    }else{
      wx.showLoading({
        title: '数据加载中',
      })
      let year=that.data.year;
      let collageName=e.detail.value.collageName;
      let majorName=e.detail.value.majorName;
      wx.request({
        url: 'https://mini.zhitonggaokao.cn/CollageMobile/directionData',
        data: {
          year: year,
          collageName: collageName,
          major: majorName
        },
        method: 'GET',
        success(res) {
          console.log(res.data.rows)
          if (res.data.rows == '' || res.data.rows==undefined){
            wx.showToast({
              title: '暂无数据',
              icon:'none',
              duration:2000
            });
            wx.hideLoading();
          }else{
            wx.hideLoading();
            that.setData({
              list: res.data.rows,
              show:'block'
            })
          }
          
        }
      })
    }
    
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