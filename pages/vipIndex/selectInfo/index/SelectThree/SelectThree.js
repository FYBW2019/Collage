const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    provinceList: [], //省份列表
    natureList: ['全部', '公办', '民办'], //性质列表
    S985OR211List: ['全部', '985', '211'], //985/211
    typeList: ['全部', '综合类', '理工类', '财经类', '医药类', '军事类', '农林类', '师范类', '政法类', '民族类', '艺术类', '语言类', '体育类', '其它'],
    nickName: '',
    avatarUrl: '',
    S985OR211: '985or211',
    province: '大学省份',
    nature: '大学性质',
    type: '类别',
    list: []
  },
  //省份选择
  bindPickerChange: function(e) {
    console.log('省份选择', this.data.provinceList[e.detail.value])
    this.setData({
      province: this.data.provinceList[e.detail.value],
    })
  },
  //大学性质选择
  bindPickerChange2: function(e) {
    console.log('大学性质选择', this.data.natureList[e.detail.value])
    this.setData({
      nature: this.data.natureList[e.detail.value],
    })
  },
  //类别
  bindPickerChange3: function(e) {
    console.log('类别选择', this.data.typeList[e.detail.value])
    this.setData({
      type: this.data.typeList[e.detail.value],
    })
  },
  //985or211
  bindPickerChange4: function(e) {
    console.log('985or211选择', this.data.S985OR211List[e.detail.value])
    this.setData({
      S985OR211: this.data.S985OR211List[e.detail.value],
    })
  },
  //结果查询
  serachSchoolInfo: function(e) {
    let that = this;
    let S985OR211 = that.data.S985OR211;
    let province = that.data.province;
    let nature = that.data.nature;
    let type = that.data.type;
    if (S985OR211 == "全部" || S985OR211 == "985or211") {
      S985OR211 = ''
    }
    if (province == '大学省份') {
      province = '安徽'
    }
    if (nature == '大学性质' || nature == '全部') {
      nature = ''
    }
    if (type == '类别' || type == '全部') {
      type = ''
    }
    wx.request({
      url: 'http://192.168.60.7:8080/collage/CollageMobile/universityInfo',
      data: {
        S985OR211: S985OR211,
        province: province,
        nature: nature,
        type: type
      },
      method: 'GET',
      success(res) {
        console.log(res.data.results)
        if (res.data.results=='') {
          console.log(res.data.results)
          wx.showToast({
            title: '无符合该条件的数据',
            icon: 'none',
            duration: 3000
          })
        }else{
          that.setData({
            list: res.data.results
          })
        }

      }

    })

  },
  selectSchool:function(e){
    console.log("这是id" + e.currentTarget.id);
    
   wx.navigateTo({
     url: '/pages/vipIndex/selectInfo/index/SelectThree/collageInfo/collageInfo?id=' + e.currentTarget.id+'',
   })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log("ss" + app.globalData.provinceList)
    this.setData({
      provinceList: app.globalData.provinceList,
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl

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