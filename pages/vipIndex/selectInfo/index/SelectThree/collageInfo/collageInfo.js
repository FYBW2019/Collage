const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList: [],
    first: 'show',
    info1: 'block',
    info2: 'none',
    id:''
  },
  select1: function () {
    this.setData({
      first: 'show',
      second: '',
      info1: 'block',
      info2: 'none'
    })
  },
  select2: function () {
    this.setData({
      first: '',
      second: 'show',
      info1: 'none',
      info2: 'block'
    })
  },
  /**
   * 收藏
   */
  collect:function(){
    console.log("收藏的Id值"+this.data.id)
    console.log("收藏夹" + app.globalData.collects)
    app.globalData.collects.push(this.data.id)


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("ssssssssssss"+options.id)
    let that = this;
    that.setData({
      id: options.id
    })
    wx.request({
      url: 'https://qq.zhitonggaokao.cn/CollageMobile/assembleQuery',
      data: {
        id: options.id
      },
      method: "GET",
      success(res) {
        console.log(res.data)
        that.setData({
          schoolList: res.data
        })
      }
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