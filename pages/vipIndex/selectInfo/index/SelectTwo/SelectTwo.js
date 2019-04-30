const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    year: '2018',
    type: '理科',
    typeList: ['理科', '文科'],
    list:[]

  },
  onShareAppMessage: function() {
 
  },
  //选择年份
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  //大学省份选择
  bindPickerChange2: function(e) {
    let that = this;
    console.log('文理选择', that.data.typeList[e.detail.value])
    var type = that.data.typeList[e.detail.value];
    that.setData({
      type: type
    })
  },
  //结果查询
  serachResult: function(e) {
    let that = this;
    let year = that.data.year;
    let type = that.data.type;
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://qq.zhitonggaokao.cn/CollageMobile/oneParagraph',
      data: {
        type: type,
        year: year,
        province: '安徽'
      },
      method:'GET',
      success(res){
        console.log(res.data.results);
        if (res.data.results == null || res.data.results==undefined){
          wx.showToast({
            title: '暂无数据',
            icon:'none',
            duration:2000
          });
          wx.hideLoading()
        }else{
          wx.hideLoading();
          that.setData({
            list: res.data.results
          })
        }
      
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    console.log('options', options)
    let id = options.jsonStr
    console.log('id' + id)
    this.setData({
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl
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