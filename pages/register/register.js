// pages/register/register.js
const app = getApp();
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    phoneNumber: ""
  },
  getPhoneNumber: function (e) {
    const that=this;
    wx.request({
      url: 'http://192.168.60.7:8080/collage/getPhoneNumber',
      data:{
        encrypDatas: e.detail.encryptedData,
        ivDatas: e.detail.iv,
        sessionKeys:app.globalData.session_key
      },
      success(res){
        console.log("电话号码:" + res.data.phoneNumber)
        that.setData({
          phoneNumber: res.data.phoneNumber
        })

      }
    })
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  } ,
  //动态改变市区选择
  bindRegionChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  getUserInfo: function (e) { 
    if (e.detail.userInfo){
      console.log(e.detail.userInfo)
      app.globalData.userInfo = e.detail.userInfo
      wx.navigateBack({
        
      })
    }   
  },
  //表单提交
  formSubmit: function(e) {
    var provinceName = e.detail.value.picker[0];
    var cityName = e.detail.value.picker[1];
    var openid = app.globalData.openid
    var phoneNumber = e.detail.value.phoneNumber
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: 'http://192.168.60.7:8080/collage/weixinRegister',
      data: {
        provinceName: provinceName,
        cityName: cityName,
        phoneNumber: phoneNumber,
        openid: openid
      },
      success(res) {
        if (res.data == true) {
          wx.showToast({
            title: '已完成',
            icon: 'success',
            duration: 2000
          });
         
        } else {
          wx.showToast({
            title: '失败',
            icon: 'cancel',
            duration: 2000
          });
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    qqmapsdk = new QQMapWX({
      key: 'VACBZ-OXXCO-E2YWW-S4ZF4-J7KS5-MOBOK' //这里自己的key秘钥进行填充
    });
    this.getLocation();



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

  },
   //获取经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {
        console.log('fail' + JSON.stringify(res))
      }
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        //console.log(JSON.stringify(res));
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        let district = res.result.ad_info.district
        let address = [province,city,district];
        vm.setData({
          region: address
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        // console.log(res);
      }
    });
  },
})