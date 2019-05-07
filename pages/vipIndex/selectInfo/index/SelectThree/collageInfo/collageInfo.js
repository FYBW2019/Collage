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
    id:'',
    collect:'点击加入收藏',
    collectList:app.globalData.collects

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
    console.log("Id值" + this.data.id)
    if(this.data.collect=='点击加入收藏'){       
      app.globalData.collects.push(this.data.id)
      this.setData({
        collect:'已收藏'
      })
      console.log("加入收藏夹" + app.globalData.collects)
    }else{
      for (var i = 0; i < app.globalData.collects.length;i++){
        if (app.globalData.collects[i] == this.data.id){
          app.globalData.collects.splice(i, 1);
          break;
        }
      }
      this.setData({
        collect: '点击加入收藏'
      })
      console.log("删除收藏夹" + app.globalData.collects)
    }
 


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    console.log("ssssssssssss"+options.id)
    for(var i=0;i<app.globalData.collects.length;i++){
      if (app.globalData.collects[i] == options.id){
        that.setData({
          collect:'已收藏'
        })
      }
    }
    that.setData({
      id: options.id
    })
    wx.request({
      url: 'https://mini.zhitonggaokao.cn/CollageMobile/assembleQuery',
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