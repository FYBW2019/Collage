//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    provinceList: [], //省份列表
    natureList: ['全部', '985', '211'], //性质列表
    province: "安徽", //省份
    nature: "大学性质",
    schoolList: [],
    majorList: [],
    SchoolProvince: "大学省份", //大学省份
    year: "2015", //年份
    schoolName: '选择学校',
    majorName: '选择专业',
    userInfo: {},
    result: [],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //省份选择
  bindPickerChange: function(e) {
    console.log('省份选择', this.data.provinceList[e.detail.value])
    this.setData({
      province: this.data.provinceList[e.detail.value],
      year: "2015",
      nature: "大学性质",
      SchoolProvince: "大学省份",
      province: "安徽",
      schoolName: '',
      majorName: ''
    })

  },
  //大学省份选择
  bindPickerChange2: function(e) {
    let that = this;
    console.log('大学省份选择', that.data.provinceList[e.detail.value])
    var province = that.data.provinceList[e.detail.value];
    var year = that.data.year;
    that.setData({
      SchoolProvince: that.data.provinceList[e.detail.value]
    })
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/CollageMobile/IndexShow', // 仅为示例，并非真实的接口地址
      data: {
        year: year,
        province: province,
        S985OR211: null
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.majors)
        let list = [];
        let list2 = [];
        if (res.data.collages == null) {
          wx.showToast({
            title: '该省份暂无数据',
            icon: 'none',
            duration: 3000,
            success(res) {
              that.setData({
                schoolName: '选择学校',
                majorName: '选择专业',
                nature: "大学性质",
                schoolList: [],
                majorList: []
              })
            }
          })
        } else {
          for (var i = 0; i < res.data.collages.length; i++) {
            list.push(res.data.collages[i].name)
          }
          for (var i = 0; i < res.data.majors.length; i++) {
            list2.push(res.data.majors[i].name)
          }
          that.setData({
            schoolList: list,
            majorList: list2,
            schoolName: list[0],
            majorName: list2[0],
          })
        }
      }
    });
  },
  //大学性质选择
  bindPickerChange3: function(e) {
    let that = this;
    let year = that.data.year;
    let province = that.data.SchoolProvince;
    let S985OR211 = that.data.natureList[e.detail.value];
    console.log('大学性质选择', that.data.natureList[e.detail.value])
    that.setData({
      nature: that.data.natureList[e.detail.value]
    })
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/CollageMobile/IndexShow', // 仅为示例，并非真实的接口地址
      data: {
        year: year,
        province: province,
        S985OR211: S985OR211
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.majors)
        if (res.data.collages==null){
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 3000,
            success(res) {
              that.setData({
                schoolName: '选择学校',
                majorName: '选择专业',
                nature: "大学性质",
                schoolList: [],
                majorList: []

              })
            }
          })
        }else{
          let list = [];
          let list2 = [];
          for (var i = 0; i < res.data.collages.length; i++) {
            list.push(res.data.collages[i].name)
          }
          for (var i = 0; i < res.data.majors.length; i++) {
            list2.push(res.data.majors[i].name)
          }
          that.setData({
            schoolList: list,
            majorList: list2,
            schoolName: list[0],
            majorName: list2[0],
          })
        }
        
      }
    });
  },
  //大学选择
  bindPickerChange4: function(e) {
    let that = this;
    let collage = that.data.schoolList[e.detail.value];
    let year = that.data.year;
    let province = that.data.SchoolProvince;

    console.log('大学选择', that.data.schoolList[e.detail.value])
    that.setData({
      schoolName: that.data.schoolList[e.detail.value]
    })
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/CollageMobile/IndexFindMajor', // 仅为示例，并非真实的接口地址
      data: {
        year: year,
        province: province,
        collage: collage
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
  //专业选择
  bindPickerChange5: function(e) {
    let that = this;
    console.log('专业选择', that.data.majorList[e.detail.value])
    that.setData({
      majorName: that.data.majorList[e.detail.value]
    })
  },
  login: function() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  //选择年份
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  findSchoolInfo: function() {
    wx.navigateTo({
      url: '/pages/schoolInfo/schoolInfo',
      success: function(res) {

      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  //查询2015年学校专业对生源地数据
  indexSelect: function() {
    let that = this;
    let province = that.data.province;
    let major = that.data.majorName;
    let collage = that.data.schoolName;
    
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/CollageMobile/IndexSelect',
      data: {
        province: province,
        year:2015,
        collage: collage,
        major: major
      },
      method: "GET",
      success(res) {
        console.log(res.data)
        if (res.data==''){
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 2000
            
          })
        }else{
          
          that.setData({
            showModal: true
          })
          that.setData({
            result: res.data
          })
        }
       
      }
    })

  },
  onLoad: function() {

    this.setData({
      provinceList: app.globalData.provinceList
    })
    console.log(app.globalData.provinceList)
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },
  onShareAppMessage: function() {

  }
})