//app.js
App({
  onLaunch: function() {
    let that = this;  
    that.globalData.provinceList = ['安徽', '北京', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '上海', '四川', '台湾', '天津', '西藏', '香港', '新疆', '云南', '浙江', '重庆'];
    that.globalData.natureList = ['全部', '公办', '民办'];
    that.globalData.batchList=['全部','一本','二本'];  
   
  },
  onLoad: function (options) {
   
  },
  //全局变量
  globalData: {
    provinceList: [],//省份列表
    natureList: [],//性质列表
    batchList:[],//批次列表 
    accountList:['文科','理科'],//科目列表
    userInfo: null,
    openid: '',
    session_key: '',
    appid: "wxc1b97848ca5de519", //小程序的标识
    secret: "4d09d4a84275ee48c17df07dda9fd873", //小程序密钥（小程序管理后台获得）
    map: "VACBZ-OXXCO-E2YWW-S4ZF4-J7KS5-MOBOK",//微信小程序获取地理位置需要的密钥
    collects:[],//收藏列表
    userId:'',
    vip:''

  }
})