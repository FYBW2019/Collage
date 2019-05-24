const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    scrollTop: 0,
    nickName: '',
    avatarUrl: '',
    year: '2018',
    type: '理科',
    typeList: ['理科', '文科'],
    list:[],
    socres: ['600以上', '500~600', '400~500', '300~400', '200~300', '100~200'],
    score: '分数范围',
    userProvince: app.globalData.userProvince

  },
  onShareAppMessage: function() {
 
  },
  bindPickerChange: function (e) {
    console.log('分数范围选择', this.data.socres[e.detail.value])
    this.setData({
      score: this.data.socres[e.detail.value],
    })
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
    let score = that.data.score;
    let ScoreGreater = '';
    let ScoreLess = '';
    if (score == '600以上') {
      ScoreGreater = '600';
      ScoreLess = '750';
    }
    if (score == '500~600') {
      ScoreGreater = '500';
      ScoreLess = '600';
    }
    if (score == '400~500') {
      ScoreGreater = '400';
      ScoreLess = '500';
    }
    if (score == '300~400') {
      ScoreGreater = '300';
      ScoreLess = '400';
    }
    if (score == '200~300') {
      ScoreGreater = '200';
      ScoreLess = '300';
    }
    if (score == '100~200') {
      ScoreGreater = '100';
      ScoreLess = '200';
    }
    console.log(ScoreGreater + ">>" + ScoreLess);
    wx.showLoading({
      title: '数据加载中',
    })
    let userProvince = this.data.userProvince;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/oneParagraph',
      data: {
        type: type,
        year: year,
        province: userProvince,
        scoreLess: ScoreLess,
        scoreGreater: ScoreGreater
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
    let year = that.data.year;
    let type = that.data.type;
    let score = that.data.score;
    let ScoreGreater = '';
    let ScoreLess = '';
    wx.showLoading({
      title: '数据加载中',
    })
    let userProvince = that.data.userProvince;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/oneParagraph',
      data: {
        type: type,
        year: year,
        province: userProvince,
        scoreLess: ScoreLess,
        scoreGreater: ScoreGreater
      },
      method: 'GET',
      success(res) {
        console.log(res.data.results);
        if (res.data.results == null || res.data.results == undefined) {
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 2000
          });
          wx.hideLoading()
        } else {
          wx.hideLoading();
          that.setData({
            list: res.data.results
          })
        }

      }
    })
    let id = options.jsonStr
    console.log('id' + id)
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