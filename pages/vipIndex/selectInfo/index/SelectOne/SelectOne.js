// pages/vipIndex/selectInfo/index/SelectOne/SelectOne.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    batchList: app.globalData.batchList, //批次列表
    provinceList: app.globalData.provinceList, //省份列表
    accountList: app.globalData.accountList, //科目列表
    batch: "批次",
    year: "2015",
    account: "理科",
    SchoolProvince: "大学省份", //大学省份
    schoolList: [],
    schoolName: '大学名称',
    nickName: '',
    avatarUrl: '',
    list: [],
    hideModal: true, //模态框的状态  true-隐藏  false-显示
    animationData: {}, //


  },
  //查询结果
  serachResult: function(e) {
    let that = this;
    let batch = that.data.batch;
    let SchoolProvince = that.data.SchoolProvince;
    let collageName = that.data.schoolName;
    let year = that.data.year;
    let type = that.data.account;
    if (batch == "全部") {
      batch = '';
      console.log(batch)
    }
    if (batch == '批次') {
      wx.showToast({
        title: '请选择批次',
        icon: 'none',
        duration: 2000
      })
    } else {


      wx.showLoading({
        title: '数据加载中',
      })
      wx.request({
        url: 'https://mini.zhitonggaokao.cn/CollageMobile/collageDeliverFileAnalysis',
        data: {
          batch: batch,
          SchoolProvince: SchoolProvince,
          year: year,
          type: type,
          CollageName: collageName,
          enroll_province: '安徽'
        },
        method: "GET",
        success(res) {
          console.log(res.data)
          if (res.data == '') {
            wx.showToast({
              title: '暂无数据',
              icon: 'none',
              duration: 3000
            });
            wx.hideLoading();
          } else {
            //that.showModal();
            that.setData({
              list: res.data,
             // showModal: true
            });
            wx.hideLoading();
          }

        }
      })
    }
  },
  //大学名称选择
  bindPickerChange4: function(e) {
    let that = this;
    console.log('学校选择', that.data.schoolList[e.detail.value])
    that.setData({
      schoolName: that.data.schoolList[e.detail.value]
    })
  },
  //大学省份选择
  bindPickerChange3: function(e) {
    let that = this;
    console.log('批次选择', that.data.provinceList[e.detail.value])
    that.setData({
      SchoolProvince: that.data.provinceList[e.detail.value]
    })
    wx.request({
      url: 'https://mini.zhitonggaokao.cn/CollageMobile/WEIXINcollageDeliverFileAnalysisCollageProvince',
      data: {
        enrollProvince: '安徽',
        province: that.data.provinceList[e.detail.value]
      },
      method: "GET",
      success(res) {
        let list = [];
        for (var i = 0; i < res.data.length; i++) {
          list.push(res.data[i].name)
        }
        console.log(res.data);
        that.setData({
          schoolList: list,
          schoolName: list[0]
        })
      }
    })
  },
  //批次选择
  bindPickerChange: function(e) {
    console.log('批次选择', this.data.batchList[e.detail.value])
    this.setData({
      batch: this.data.batchList[e.detail.value]
    })
  },
  //文理选择
  bindPickerChange2: function(e) {
    console.log('批次选择', this.data.accountList[e.detail.value])

    this.setData({
      account: this.data.accountList[e.detail.value]
    })
  },
  //选择年份
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      batchList: app.globalData.batchList,
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
      vip: app.globalData.vip
    })

  },
  // 显示遮罩层
  showModal: function() {
    var that = this;
    that.setData({
      hideModal: false
    })
    var animation = wx.createAnimation({
      duration: 600, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    setTimeout(function() {
      that.fadeIn(); //调用显示动画
    }, 200)
  },

  // 隐藏遮罩层
  hideModal: function() {
    var that = this;
    var animation = wx.createAnimation({
      duration: 800, //动画的持续时间 默认400ms   数值越大，动画越慢   数值越小，动画越快
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    that.fadeDown(); //调用隐藏动画   
    setTimeout(function() {
      that.setData({
        hideModal: true
      })
    }, 720) //先执行下滑动画，再隐藏模块

  },

  //动画集
  fadeIn: function() {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export() //动画实例的export方法导出动画数据传递给组件的animation属性
    })
  },
  fadeDown: function() {
    this.animation.translateY(300).step()
    this.setData({
      animationData: this.animation.export(),
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