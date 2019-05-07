// pages/vipIndex/characterTest/Test/Test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:'block',
    hidden:'none'

  },
  /**
    * 选择的答案
    */
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    console.log('Id值：', e.currentTarget.id);
    let answer = e.detail.value;
    let index = e.currentTarget.id;
    let answerList = this.data.list;
    for (var i = 0; i < answerList[index].answer.length; i++) {
      answerList[index].answer[i].checked = false
      if (answerList[index].answer[i].value == answer) {
        answerList[index].answer[i].checked = true
      }
    }
    this.setData({
      list: answerList
    })
  },
  /**
  * 选中提交的答案
  */
  show: function () {
    wx.showLoading({
      title: '答案揭晓中',
    })
    let that = this;
    let answerList = that.data.list;
    let list = [];
    for (var i = 0; i < answerList.length; i++) {
      console.log(answerList[i])
      for (var j = 0; j < answerList[i].answer.length; j++) {
        if (answerList[i].answer[j].checked == true) {
          console.log(answerList[i].answer[j].value);
          list.push(answerList[i].answer[j].value)
        }
      }
    }
    let result = list.join(",");
    console.log("结果" + list.join(","));
    wx.request({
      url: 'https://mini.zhitonggaokao.cn/CollageMobile/TestSave2',
      data:{
        result: result
      },
      method:"GET",
      success(res){
        console.log("结果" + res.data.code);
        console.log("结果" + res.data.types[0].nameCn + res.data.types[0].code + res.data.types[0].answer);
        console.log("结果" + res.data.answers[0].answer);
        wx.hideLoading();
        that.setData({
          reault1: res.data.types,
          code: res.data.code,
          answer: res.data.answers[0].answer,
          show:'none',
          hidden:'block'
        })


      }
    })
  },
  cancel:function(){
 wx.redirectTo({
   url: '/pages/vipIndex/characterTest/index/index',
 })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://mini.zhitonggaokao.cn/CollageMobile/Test2',
      method: 'GET',
      success(res) {
        console.log(res.data);
        that.setData({
          list: res.data
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