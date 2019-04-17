const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    year: '2017',
    SchoolList: [],
    majorList: [],
    SchoolName: '大学名称',
    majorName: '专业名称',
    chooseList: [],
    multiple: true,
    results: [],
    show:'none'
  },
  // 点击确定事件
  choose(e) {
    let s = e.detail.chooseArray.join(',')
    this.setData({
      majorName: s
    })
    console.log(e.detail.chooseArray);
    console.log(s);
  },
  //查询结果
  selectResult: function() {
    let that = this;
    let major = that.data.majorName;
    let year = that.data.year;
    let collage = that.data.SchoolName;
    let province = '安徽';
    wx.request({
      url: 'http://192.168.60.7:8080/collage/CollageMobile/IndexSelect',
      data: {
        province: province,
        year: year,
        collage: collage,
        major: major
      },
      method: "GET",
      success(res) {
        console.log(res.data)
        if (res.data==''){
          wx.showToast({
            title: '暂无数据',
            icon:'none',
            duration:3000
          })
        }else{
          that.setData({
            results: res.data,
            show:'block'
          })
        }
        
      }
    })

  },
  //选择年份
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  //选择学校
  bindPickerChange2: function(e) {
    let that = this;
    console.log("学校选择" + that.data.SchoolList[e.detail.value])
    let SchoolName = that.data.SchoolList[e.detail.value];
    that.setData({
      SchoolName: SchoolName
    })
    wx.request({
      url: 'http://192.168.60.7:8080/collage/CollageMobile/IndexFindMajor', // 仅为示例，并非真实的接口地址
      data: {
        year: '2017',
        province: '安徽',
        collage: SchoolName
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.results)
        let list = [];
        for (var i = 0; i < res.data.results.length; i++) {
          list.push(res.data.results[i].name)
        }
        that.setData({
          majorList: list,
          majorName: list[0]
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let year = that.data.year;

    wx.request({
      url: 'http://192.168.60.7:8080/collage/CollageMobile/IndexShow', // 仅为示例，并非真实的接口地址
      data: {
        year: '2017',
        province: '安徽',
        S985OR211: ''
      },
      method: 'GET',
      success(res) {
        console.log(res.data.majors)

        let list = [];
        let list2 = [];
        for (var i = 0; i < res.data.collages.length; i++) {
          list.push(res.data.collages[i].name)
        }
        that.setData({
          SchoolList: list,
          chooseList: res.data.majors,
          SchoolName: list[0],
          // majorName: list2[0],
        })


      }
    });
    // this.setData({
    //   nickName: app.globalData.userInfo.nickName,
    //   avatarUrl: app.globalData.userInfo.avatarUrl
    // })
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