// pages/vipIndex/characterTest/MBTI/MBTI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      'Title': '1.当你要外出一整天，你会',
      'answer': [{
        'Name': 'A.计划你要做什么和在什么时候做',
        'value': 'A',
        'checked': false
      }, {
        'Name': 'B.说去就去',
        'value': 'B'
      }]
    }, {
      'Title': '2.你认为自己是一个',
      'answer': [{
        'Name': 'A.较为随性所至的人',
        'value': 'A',
        'checked': false
      }, {
        'Name': 'B.较为有条理的人',
        'value': 'B'
      }]
    }]

  },
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
  show: function() {

    var answerList = this.data.list;
    for (var i = 0; i < answerList.length; i++) {
      console.log(answerList[i])
      for (var j = 0; j < answerList[i].answer.length; j++) {
        if (answerList[i].answer[j].checked == true) {
          console.log(answerList[i].answer[j].Name)
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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