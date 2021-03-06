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
    userProvince: app.globalData.userProvince,//用户所在省份
    batch: "批次",
    year: "2018",
    account: "理科",
    SchoolProvince: '', //大学省份
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
    let userProvince=that.data.userProvince
    if (batch == "全部" || batch == '批次') {
      batch = '';
      console.log(batch)
    }

      wx.showLoading({
        title: '数据加载中',
      })
      wx.request({
        url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/collageDeliverFileAnalysis',
        data: {
          batch: batch,
          SchoolProvince: SchoolProvince,
          year: year,
          type: type,
          CollageName: collageName,
          enroll_province: userProvince
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
    let userProvince = that.data.userProvince;
    console.log('批次选择', that.data.provinceList[e.detail.value])
    that.setData({
      SchoolProvince: that.data.provinceList[e.detail.value]
    })
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/WEIXINcollageDeliverFileAnalysisCollageProvince',
      data: {
        enrollProvince: userProvince,
        province: that.data.provinceList[e.detail.value]
      },
      method: "GET",
      success(res) {
        if(res.data.length<1){
          wx.showToast({
            title: '暂无该省份对生源地招生数据',
            icon:'',
            duration:2000
          })
        }else{
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
    let that=this;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/WEIXINcollageDeliverFileAnalysisCollageProvince',
      data: {
        enrollProvince: app.globalData.userProvince,
        province: app.globalData.userProvince
      },
      method: "GET",
      success(res) {
        if (res.data.length < 1) {
          wx.showToast({
            title: '暂无该省份对生源地招生数据',
            icon: '',
            duration: 2000
          })
        } else {
          let list = [];
          for (var i = 0; i < res.data.length; i++) {
            list.push(res.data[i].name)
          }
          console.log(res.data);
          that.setData({
            schoolList: list,
            schoolName: list[0]
          })
          that.serachResult();
        }

      }
    })
    this.setData({
      batchList: app.globalData.batchList,
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
      vip: app.globalData.vip,
      userProvince: app.globalData.userProvince,
      userType: app.globalData.userType,
      SchoolProvince: app.globalData.userProvince
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