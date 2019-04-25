const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl: '',
    leftList: [{
      "name": "经济学",
      "checked": false
    }, {
      "name": "法学",
      "checked": false
    }, {
      "name": "理学",
      "checked": false
    }, {
      "name": "工学",
      "checked": false
    }, {
      "name": "管理学",
      "checked": false
    }, {
      "name": "艺术学",
      "checked": false
    }, {
      "name": "哲学",
      "checked": false
    }, {
      "name": "历史学",
      "checked": false
    }, {
      "name": "基地班实验班",
      "checked": false
    }, {
      "name": "文学",
      "checked": false
    }, {
      "name": "教育类",
      "checked": false
    }],
    rightList: [{
      "list": [{
        "name": "金融学类",
        "checked": false
      }, {
        "name": "经济与贸易类",
        "checked": false
      }, {
        "name": "经济学类",
        "checked": false
      }, {
        "name": "财政学类",
        "checked": false
      }],
      "key": "经济学"
    }, {
      "list": [{
        "name": "法学类",
        "checked": false
      }, {
        "name": "社会学类",
        "checked": false
      }, {
        "name": "政治学类",
        "checked": false
      }, {
        "name": "民族学类",
        "checked": false
      }, {
        "name": "马克思主义理论类",
        "checked": false
      }],
      "key": "法学"
    }, {
      "list": [],
      "key": null
    }, {
      "list": [{
        "name": "物理学类",
        "checked": false
      }, {
        "name": "化学类",
        "checked": false
      }, {
        "name": "数学类",
        "checked": false
      }, {
        "name": "统计学类",
        "checked": false
      }, {
        "name": "天文学类",
        "checked": false
      }, {
        "name": "地质学类",
        "checked": false
      }, {
        "name": "地理科学类",
        "checked": false
      }, {
        "name": "大气科学类",
        "checked": false
      }, {
        "name": "心理学类",
        "checked": false
      }, {
        "name": "生物科学类",
        "checked": false
      }, {
        "name": "海洋科学类",
        "checked": false
      }],
      "key": "理学"
    }, {
      "list": [{
        "name": "材料类",
        "checked": false
      }, {
        "name": "自动化类",
        "checked": false
      }, {
        "name": "土木类",
        "checked": false
      }, {
        "name": "机械类",
        "checked": false
      }, {
        "name": "电子信息类",
        "checked": false
      }, {
        "name": "建筑类",
        "checked": false
      }, {
        "name": "仪器类",
        "checked": false
      }, {
        "name": "计算机类",
        "checked": false
      }, {
        "name": "能源动力类",
        "checked": false
      }, {
        "name": "环境科学与工程类",
        "checked": false
      }, {
        "name": "生物医学工程类",
        "checked": false
      }, {
        "name": "力学类",
        "checked": false
      }, {
        "name": "药学类",
        "checked": false
      }, {
        "name": "基础医学类",
        "checked": false
      }, {
        "name": "临床医学类",
        "checked": false
      }, {
        "name": "护理学类",
        "checked": false
      }, {
        "name": "口腔医学类",
        "checked": false
      }, {
        "name": "交通运输类",
        "checked": false
      }, {
        "name": "电气类",
        "checked": false
      }, {
        "name": "海洋工程类",
        "checked": false
      }, {
        "name": "食品科学与工程类",
        "checked": false
      }, {
        "name": "生物工程类",
        "checked": false
      }, {
        "name": "测绘类",
        "checked": false
      }, {
        "name": "地质类",
        "checked": false
      }, {
        "name": "水利类",
        "checked": false
      }, {
        "name": "核工程类",
        "checked": false
      }, {
        "name": "林学类",
        "checked": false
      }, {
        "name": "林业工程类",
        "checked": false
      }, {
        "name": "中医学类",
        "checked": false
      }, {
        "name": "纺织类",
        "checked": false
      }, {
        "name": "水产类",
        "checked": false
      }, {
        "name": "动物医学类",
        "checked": false
      }, {
        "name": "化工与制药类",
        "checked": false
      }, {
        "name": "安全科学与工程类",
        "checked": false
      }, {
        "name": "航空工程类",
        "checked": false
      }, {
        "name": "医学技术类",
        "checked": false
      }, {
        "name": "法医学类",
        "checked": false
      }, {
        "name": "轻工类",
        "checked": false
      }, {
        "name": "动物生产类",
        "checked": false
      }, {
        "name": "植物生产类",
        "checked": false
      }, {
        "name": "中西医结合类",
        "checked": false
      }, {
        "name": "农业工程类",
        "checked": false
      }, {
        "name": "兵器类",
        "checked": false
      }, {
        "name": "矿业类",
        "checked": false
      }],
      "key": "工学"
    }, {
      "list": [{
        "name": "工商管理类",
        "checked": false
      }, {
        "name": "旅游管理类",
        "checked": false
      }, {
        "name": "电子商务类",
        "checked": false
      }, {
        "name": "工业工程类",
        "checked": false
      }, {
        "name": "管理科学与工程类",
        "checked": false
      }, {
        "name": "公共管理类",
        "checked": false
      }, {
        "name": "物流管理与工程类",
        "checked": false
      }, {
        "name": "农业经济管理类",
        "checked": false
      }],
      "key": "管理学"
    }, {
      "list": [{
        "name": "设计学类",
        "checked": false
      }, {
        "name": "美术学类",
        "checked": false
      }, {
        "name": "音乐与舞蹈学类",
        "checked": false
      }, {
        "name": "戏剧与影视学类",
        "checked": false
      }],
      "key": "艺术学"
    }, {
      "list": [{
        "name": "哲学类",
        "checked": false
      }],
      "key": "哲学"
    }, {
      "list": [{
        "name": "历史学类",
        "checked": false
      }],
      "key": "历史学"
    }, {
      "list": [{
        "name": "工科试验班类",
        "checked": false
      }, {
        "name": "人文科学试验班类",
        "checked": false
      }],
      "key": "基地班实验班"
    }, {
      "list": [{
        "name": "中国语言文学类",
        "checked": false
      }, {
        "name": "新闻传播学类",
        "checked": false
      }, {
        "name": "外国语言文学类",
        "checked": false
      }],
      "key": "文学"
    }, {
      "list": [{
        "name": "教育学类",
        "checked": false
      }, {
        "name": "体育学类",
        "checked": false
      }],
      "key": "教育类"
    }],
    leftList2: [{
      "name": "东北",
      "checked": false
    }, {
      "name": "华北",
      "checked": false
    }, {
      "name": "华中",
      "checked": false
    }, {
      "name": "华东",
      "checked": false
    }, {
      "name": "华南",
      "checked": false
    }, {
      "name": "西北",
      "checked": false
    }],
    rightList2: [{
      "list": [{
        "name": "黑龙江",
        "checked": false
      }, {
        "name": "吉林",
        "checked": false
      }, {
        "name": "辽宁",
        "checked": false
      }],
      "key": "东北"
    }, {
      "list": [{
        "name": "北京",
        "checked": false
      }, {
        "name": "天津",
        "checked": false
      }, {
        "name": "河北",
        "checked": false
      }, {
        "name": "山西",
        "checked": false
      }, {
        "name": "内蒙古",
        "checked": false
      }],
      "key": "华北"
    }, {
      "list": [{
        "name": "河南",
        "checked": false
      }, {
        "name": "湖北",
        "checked": false
      }, {
        "name": "湖南",
        "checked": false
      }, {
        "name": "江西",
        "checked": false
      }],
      "key": "华中"
    }, {
      "list": [{
        "name": "上海",
        "checked": false
      }, {
        "name": "江苏",
        "checked": false
      }, {
        "name": "浙江",
        "checked": false
      }, {
        "name": "山东",
        "checked": false
      }, {
        "name": "安徽",
        "checked": false
      }],
      "key": "华东"
    }, {
      "list": [{
        "name": "广东",
        "checked": false
      }, {
        "name": "广西",
        "checked": false
      }, {
        "name": "海南",
        "checked": false
      }, {
        "name": "福建",
        "checked": false
      }],
      "key": "华南"
    }, {
      "list": [{
        "name": "四川",
        "checked": false
      }, {
        "name": "重庆",
        "checked": false
      }, {
        "name": "贵州",
        "checked": false
      }, {
        "name": "云南",
        "checked": false
      }, {
        "name": "西藏",
        "checked": false
      }],
      "key": "西南"
    }, {
      "list": [{
        "name": "陕西",
        "checked": false
      }, {
        "name": "甘肃",
        "checked": false
      }, {
        "name": "新疆",
        "checked": false
      }, {
        "name": "青海",
        "checked": false
      }, {
        "name": "宁夏",
        "checked": false
      }],
      "key": "西北"
    }],
    list2: [],
    flag2: '',
    list: [],
    flag: '',
    showData: [],
    ProvinceList: [],
    socres: ['600以上','500~600', '400~500', '300~400', '200~300', '100~200'],
    zhuanye: 'none',
    shengfen: 'none',
    province: "",
    major: '',
    score: '分数范围',
    index: 'block',
    year: "2017", //年份
  },
  //选择年份
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      year: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    console.log('分数范围选择', this.data.socres[e.detail.value])
    this.setData({
      score: this.data.socres[e.detail.value],
    })
  },
  selectProvince: function() {
    this.setData({
      index: 'none',
      shengfen: 'block'
    })
  },
  selectMajor:function(){
    this.setData({
      index: 'none',
      zhuanye: 'block'
    })
  },
  return1:function(e){
    console.log(this.data.showData)
    let major = this.data.showData.join(",");
    
    this.setData({
      major: major,
     
      index: 'block',
      zhuanye: 'none'
    })

  },
  return2: function (e) {
    let province = this.data.ProvinceList.join(",");
    this.setData({
      province: province,
      index: 'block',
      shengfen: 'none'
    })

  },
  serachResults:function(e){
   let that=this;
   let major=that.data.major;
    let province=that.data.province;
    let score=that.data.score;
    let ScoreGreater='';
    let ScoreLess='';
    if (score =='600以上'){
      ScoreGreater='600';
      ScoreLess='750';
    }
    if (score == '500~600') {
      ScoreGreater='500';
      ScoreLess='600';
    }
    if (score =='400~500'){
      ScoreGreater = '400';
      ScoreLess = '500';
    }
    if (score =='300~400') {
      ScoreGreater = '300';
      ScoreLess = '400';
    }
    if (score =='200~300') {
      ScoreGreater = '200';
      ScoreLess = '300';
    }
    if (score =='100~200') {
      ScoreGreater = '100';
      ScoreLess = '200';
    }
    wx.request({
      url: 'http://qq.zhitonggaokao.cn/collage/CollageMobile/score',
      data:{
        major: major,
        province: province,      
        ScoreGreater: ScoreGreater,
        ScoreLess: ScoreLess,
        EnrollProvince: '安徽'
      },
      method:"GET",
      success(res){
        console.log(res.data.rows);
        that.setData({
          schoolList: res.data.rows
        })
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://139.198.17.207:8092/collage/e6f3ad53011a2f852cf41d3d246d45a1/2bfc4090465fe95f867b2011b5a32f61/1d8f636b03480e902afc4866f5eb8879/AllCeshi',
    //   method:'GET',
    //   success(res){
    //     console.log(res)
    //   }
    // })
    // this.setData({
    //   nickName: app.globalData.userInfo.nickName,
    //   avatarUrl: app.globalData.userInfo.avatarUrl
    // })
  },
  show: function(e) {
    var leftName = this.data.leftList[e.currentTarget.id].name;
    for (var i = 0; i < this.data.rightList.length; i++) {
      if (leftName == this.data.rightList[i].key) {
        this.setData({
          list: this.data.rightList[i].list,
          flag: leftName
        })
        break;
      }
    }
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var values = e.detail.value;
    var l = this.data.rightList;
    var s = e.detail.value;
    var show = this.data.showData;
    if ((parseInt(show.length) + 1) <= 4) {
      console.log("长度" + (parseInt(show.length) + 1))
      show = [];
      for (var i = 0, lenI = l.length; i < lenI; ++i) {
        if (l[i].key == this.data.flag) {
          var lists = l[i].list;
          for (var j = 0; j < lists.length; j++) {
            lists[j].checked = false;
            for (var k = 0, lenJ = values.length; k < lenJ; ++k) {
              if (lists[j].name == values[k]) {
                lists[j].checked = true;
                break;
              }
            }
          }
          break;
        }
      }
      for (var i = 0; i < l.length; i++) {
        for (var j = 0; j < l[i].list.length; j++) {
          if (l[i].list[j].checked == true) {
            show.push(l[i].list[j].name)
          }
        }
      }
      this.setData({
        showData: show
      })


    } else {
      wx.showToast({
        title: '最多选四个',
        icon: 'none',
        duration: 3000
      });
      this.setData({
        showData: []
      })
    }
  },
  show2: function(e) {
    console.log(e.currentTarget.id)
    console.log(this.data.leftList2[e.currentTarget.id].name)
    var leftName = this.data.leftList2[e.currentTarget.id].name;
    for (var i = 0; i < this.data.rightList2.length; i++) {
      if (leftName == this.data.rightList2[i].key) {
        this.setData({
          list2: this.data.rightList2[i].list,
          flag2: leftName
        })
        break;
      }
    }
  },
  checkboxChange2: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var values = e.detail.value;
    var l = this.data.rightList2;
    var s = e.detail.value;
    var show = this.data.ProvinceList;
    if ((parseInt(show.length) + 1) <= 4) {
      console.log("长度" + (parseInt(show.length) + 1))
      show = [];
      for (var i = 0, lenI = l.length; i < lenI; ++i) {
        if (l[i].key == this.data.flag2) {
          var lists = l[i].list;
          for (var j = 0; j < lists.length; j++) {
            lists[j].checked = false;
            for (var k = 0, lenJ = values.length; k < lenJ; ++k) {
              if (lists[j].name == values[k]) {
                lists[j].checked = true;
                break;
              }
            }
          }
          break;
        }
      }
      for (var i = 0; i < l.length; i++) {
        for (var j = 0; j < l[i].list.length; j++) {
          if (l[i].list[j].checked == true) {
            show.push(l[i].list[j].name)
          }
        }
      }
      this.setData({
        ProvinceList: show
      })


    } else {
      wx.showToast({
        title: '最多选四个',
        icon: 'none',
        duration: 3000
      });
      this.setData({
        ProvinceList: []
      })
    }

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