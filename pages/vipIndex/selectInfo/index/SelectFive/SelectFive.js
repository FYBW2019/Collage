const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    socres: ['600以上', '500~600', '400~500', '300~400', '200~300', '100~200'],
    score: '分数范围',
    nickName: '',
    avatarUrl: '',
    year:'2015',
    list:[],
    show:'none'
  },
  bindPickerChange: function (e) {
    console.log('分数范围选择', this.data.socres[e.detail.value])
    this.setData({
      score: this.data.socres[e.detail.value],
    })
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
      vip: app.globalData.vip,
      userProvince: app.globalData.userProvince,
      userType: app.globalData.userType
    })
  },
  formSubmit: function (e) {
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
      let province = app.globalData.userProvince;
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
      wx.request({
        url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/directionData',
        data: {
          year: year,
          collageName: collageName,
          major: majorName,          
          province: province,
          scoreGreater: ScoreGreater,
          scoreLess: ScoreLess,
          type:'理科'
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