const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:'none',
    hidden2: 'none',
    show:'block',
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
      url: 'https://qq.zhitonggaokao.cn/collage/CollageMobile/ALLMBTI',
      data: {
        UserId: app.globalData.userId
      },
      success(res) {
        console.log("测试"+res.data.list)
        if (res.data.list==''){
          wx.showModal({
            title: '恰好志愿提示您',
            content: '您还没未测评过',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                wx.navigateBack({
                })
              }
            }
          })
        }
        
        that.setData({
          list: res.data.list
        })
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
  selectTest:function(e){
    let that=this;
    wx.request({
      url: 'https://qq.zhitonggaokao.cn/collage/CollageMobile/MBTIView',
      method: 'GET',
      data: {
        id: e.currentTarget.id
      },
      success(res) {
        if (res.data.type =='MBTI'){
          that.setData({
            code: res.data.results.code,
            answer: res.data.results.answer,
            show: 'none',
            hidden: 'block'
          });
        }
        if (res.data.type == 'SDS'){
          console.log("结果" + res.data.code);
          console.log("结果" + res.data.types[0].nameCn + res.data.types[0].code + res.data.types[0].answer);
          console.log("结果" + res.data.answers[0].answer);
          wx.hideLoading();
          that.setData({
            reault1: res.data.types,
            code: res.data.code,
            answer: res.data.answers[0].answer,
            show: 'none',
            hidden2: 'block'
          })
        }
        
        

      }
    })
  },
  cancel2: function (e) {
    this.setData({
      show: 'block',
      hidden2: 'none'
    })
  },
  cancel:function(e){
this.setData({
  show: 'block',
  hidden: 'none'
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