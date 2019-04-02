// pages/vipIndex/selectInfo/index/SelectOne/SelectOne.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    batchList:[],//批次列表
    provinceList: app.globalData.provinceList,//省份列表
    accountList:app.globalData.accountList,//科目列表
    batch:"批次",
    year:"年份",
    account:"文理",
    SchoolProvince: "大学省份",//大学省份

   

  },
  //大学省份选择
  bindPickerChange3: function (e) {
    console.log('批次选择', this.data.provinceList[e.detail.value])
    this.setData({
      SchoolProvince: this.data.provinceList[e.detail.value]
    })
  },
  //批次选择
  bindPickerChange: function (e) {
    console.log('批次选择', this.data.batchList[e.detail.value])
    this.setData({
      batch: this.data.batchList[e.detail.value]
    })
  },
  //文理选择
  bindPickerChange2: function (e) {
    console.log('批次选择', this.data.accountList[e.detail.value])

    this.setData({
      account: this.data.accountList[e.detail.value]
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
      batchList: app.globalData.batchList
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