//app.js
App({
  onLaunch: function() {
    let that = this;    
    // 登录
    wx.login({
      success: loginRes => {
        //var d = that.globalData; //这里存储了appid、secret
        //var path = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';//微信官方地址（不可更改）返回openid和sessionKey
        console.log(loginRes.code)
        if (loginRes.code != null) {
          wx.request({
            url: "http://192.168.60.7:8080/collage/weixinLogin", //路径
            data: {
              code: loginRes.code
            }, //参数
            success(res) {
              console.log("登陆返回的标识>>>>>>>" + res.data.flag);
              that.globalData.session_key=res.data.session_key;
              //成功进首页失败进注册页
              if (res.flag == false) {
                   
              } else {
                 wx.navigateTo({
                   url: '/pages/register/register'
                 })               
              }
            }
          })
        }
      }
    })
  },
 
  //全局变量
  globalData: {
    userInfo: null,
    openid: '',
    session_key: '',
    appid: "wxd5dadfcadee6b34a", //小程序的标识
    secret: "2a27ad48ec471a44f17665f264042d49", //小程序密钥（小程序管理后台获得）
    map: "VACBZ-OXXCO-E2YWW-S4ZF4-J7KS5-MOBOK",//微信小程序获取地理位置需要的密钥

  }
})