// pages/vipIndex/selectInfo/index/SelectTwo/SelectTwo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
onShareAppMessage:function(){
let users=wx.getStorageSync('user');
if(res.from==='button'){

}
return{
  title:'转发',
  path:'/pages/index/index',
  success:function(res){}
}
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
let that=this;
console.log('options',options)
let id=options.jsonStr
console.log('id'+id)
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