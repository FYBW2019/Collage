const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolList: [],
    first: 'show',
    info1: 'block',
    info2: 'none',
    id: '',
    MobileCollectionId: '',
    src: '/image/star1.png'
    //collectList:app.globalData.collects

  },
  select1: function() {
    this.setData({
      first: 'show',
      second: '',
      info1: 'block',
      info2: 'none'
    })
  },
  select2: function() {
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
  collect: function() {
    console.log("Id值" + this.data.id)
    let collageId = this.data.id;
    if (this.data.src == '/image/star1.png') {
      let that = this;
      //app.globalData.collects.push(this.data.id)
      this.setData({
        src: '/image/star2.png'
      })
      wx.request({
        url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/MyCollectionSave',
        data: {
          UserId: app.globalData.userId,
          collageId: collageId
        },
        success(res) {
          console.log(res.data.result.id);
          wx.showToast({
            title: '收藏成功',
          })
          that.setData({
            MobileCollectionId: res.data.result.id
          })
          wx.request({
            url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/AllMyCollection',
            data: {
              UserId: app.globalData.userId
            },
            success(res) {
              app.globalData.collects = res.data.results
            }
          })
        }
      })
    } else {
      let that = this;
      that.setData({
        src: '/image/star1.png'
      })
      wx.request({
        url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/MyCollectionDelect',
        data: {
          id: that.data.MobileCollectionId
        },
        success: function(res) {
          wx.showToast({
            title: '取消收藏',
          })
          wx.request({
            url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/AllMyCollection',
            data: {
              UserId: app.globalData.userId
            },
            success(res) {
              app.globalData.collects = res.data.results
            }
          })
        }
      })
    }



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    if (app.globalData.collects != ''){
      for (var i = 0; i < app.globalData.collects.length; i++) {
        if (app.globalData.collects[i].collageId == options.id) {
          that.setData({
            src: '/image/star2.png',
            MobileCollectionId: app.globalData.collects[i].id
          })
          break;
        }
      }
    }
    
    that.setData({
      id: options.id
    })
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/assembleQuery',
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