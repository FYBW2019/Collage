const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    year: '2018',
    SchoolList: [],//学校列表
    majorList: [],//专业列表
    SchoolName: '大学名称',
    majorName: '专业名称',
    chooseList: [],
    multiple: true,
    results: [],//选中的专业列表
    show:'none',
    isShow:false,
    userProvince: app.globalData.userProvince//用户所在省份
  },
  // 点击确定事件
  choose(e) {
    let s = e.detail.chooseArray.join(',')
    this.setData({
      majorName: s
      
    })
  },

  //专业介绍
  majorInfo:function(e){
    let that=this;
    let majorName = that.data.results[e.currentTarget.id].major;
    let collageName=that.data.SchoolName;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/majorInfo',
      data:{
        collage: collageName,
        major: majorName
      },
      method:'GET',
      success(res){
       
        if (res.data==''){
          wx.showToast({
            title: '该专业无介绍',
            icon:'none',
            duration:3000
          })
        }else{
          wx.navigateTo({
            url: '/pages/vipIndex/selectInfo/index/SelectFour/majorInfo/majorInfo?txt=' + res.data,
          })
        }
        
      }
    })

  },
  //查询结果
  selectResult: function() {
    wx.showLoading({
      title: '数据加载中',
    })
    let that = this;
    let major = that.data.majorName;
    let year = that.data.year;
    let collage = that.data.SchoolName;
    let province = that.data.userProvince;
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/IndexSelect',
      data: {
        province: province,
        year: year,
        collage: collage,
        major: major,
        type: app.globalData.userType
      },
      method: "GET",
      success(res) {
       
        if (res.data == '' || res.data==undefined){
          wx.hideLoading();
          wx.showToast({
            title: '暂无数据',
            icon:'none',
            duration:3000
          })
        }else{
          wx.hideLoading();
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
    this.setData({
      year: e.detail.value
    })
  },
  //选择学校
  bindPickerChange2: function(e) {
    let that = this;
    let province= that.data.userProvince;
    let SchoolName = that.data.SchoolList[e.detail.value];
    that.setData({
      SchoolName: SchoolName
    })
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/IndexFindMajor', 
      data: {
        year: '2017',
        province: province,
        collage: SchoolName
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        let list = [];
        for (var i = 0; i < res.data.results.length; i++) {
          list.push(res.data.results[i].name)
        }
        that.setData({
          chooseList: res.data.results,
          majorName: list[0]
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that=this;
    let year = that.data.year;
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/IndexShow', // 仅为示例，并非真实的接口地址
      data: {
        year: '2018',
        province: app.globalData.userProvince,
        S985OR211: '全部'
      },
      method: 'GET',
      success(res) {
        let list = [];
        let list2 = [];
        for (var i = 0; i < res.data.collages.length; i++) {
          list.push(res.data.collages[i].name)
        }
       
        wx.hideLoading()
        that.setData({
          SchoolList: list,
          chooseList: res.data.majors,
          SchoolName: list[0]
        })
        let year = that.data.year;
        let collage = that.data.SchoolName;
        let province = that.data.userProvince;
        let majorList=[];
        majorList.push(res.data.majors[0].name);
        majorList.push(res.data.majors[1].name);
        majorList.push(res.data.majors[2].name);
        majorList.push(res.data.majors[3].name);
        console.log(majorList)
        wx.request({
          url: 'https://sz.zhitonggaokao.cn/collage/CollageMobile/IndexSelect',
          data: {
            province: province,
            year: year,
            collage: collage,
            major: majorList.join(','),
            type:app.globalData.userType
          },
          method: "GET",
          success(res) {
            if (res.data == '' || res.data == undefined) {
              wx.showToast({
                title: '暂无数据',
                icon: 'none',
                duration: 3000
              })
            } else {
              that.setData({
                results: res.data,
                show: 'block'
              })
            }

          }
        })
      }
    });
    that.setData({
      nickName: app.globalData.userInfo.nickName,
      avatarUrl: app.globalData.userInfo.avatarUrl,
      vip: app.globalData.vip,
      userProvince: app.globalData.userProvince,
      userType: app.globalData.userType
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