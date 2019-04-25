// pages/vipIndex/characterTest/MBTI/MBTI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page1: 'show',
    page2: 'hidd',
    page3: 'hidd',
    page4: 'hidd',
    navClass1: 'show2',
    navClass2: '',
    navClass3: '',
    navClass4: '',
    show:'block',
    hidden:'none'


  },
  /**
   * 第一部分
   */
  page1: function() {
    let that = this;
    that.setData({
      page1: 'show',
      page2: 'hidd',
      page3: 'hidd',
      page4: 'hidd',
      navClass1: 'show2',
      navClass2: '',
      navClass3: '',
      navClass4: ''
    })
  },
  /**
   * 第二部分
   */
  page2: function() {
    let that = this;
    that.setData({
      page1: 'hidd',
      page2: 'show',
      page3: 'hidd',
      page4: 'hidd',
      navClass1: '',
      navClass2: 'show2',
      navClass3: '',
      navClass4: ''
    })
  },
  /**
   * 第三部分
   */
  page3: function() {
    let that = this;
    that.setData({
      page1: 'hidd',
      page2: 'hidd',
      page3: 'show',
      page4: 'hidd',
      navClass1: '',
      navClass2: '',
      navClass3: 'show2',
      navClass4: ''
    })
  },
  /**
   * 第四部分
   */
  page4: function() {
    let that = this;
    that.setData({
      page1: 'hidd',
      page2: 'hidd',
      page3: 'hidd',
      page4: 'show',
      navClass1: '',
      navClass2: '',
      navClass3: '',
      navClass4: 'show2'
    })
  },
  /**
   * 选择的答案
   */
  radioChange: function(e) {
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
  show: function() {
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
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/CollageMobile/MBTISave',
      method: 'GET',
      data: {
        result: result
      },
      success(res) {
        console.log("结果》》》" + res.data.results.code);
        console.log("code" + res.data.code)
        console.log("answer" + res.data.results.answer);
        that.setData({
          code: res.data.results.code,
          answer: res.data.results.answer,
          show:'none',
          hidden:'block'
        })
      }
    })
    console.log("结果" + list.join(","));
  },
  /**
   * 返回按钮
   */
  cancel:function(){

    wx.redirectTo({
      url: '/pages/vipIndex/characterTest/index/index',
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/CollageMobile/Test1',
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