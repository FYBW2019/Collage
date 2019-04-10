// pages/choiceprofession/choiceprofession.js
var preValue = [];
var perValue2 =[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataOne: [{
      name: "哲学",
      value: '0',
      checked: false
    }, {
      name: "经济学",
      value: '1'
    }, {
      name: "法学",
      value: '2'
    }],
    dataTwo: [
      [{
        name: "哲学类",
        value: '0',
        checked: false,
        pid:'0'
      }],
      [{
        name: "经济学类",
        value: '0',
        checked: false,
        pid: '1'
      }, {
        name: "财政学类",
          value: '1',
          pid: '1'
      }, {
        name: "金融学类",
          value: '2',
          pid: '1'
      }, {
        name: "经济与贸易类",
          value: '3',
          pid: '1'
      }],
      [{
        name: "法学类",
        value: '0',
        checked: false,
        pid: '2'
      }, {
        name: "政治学类",
          value: '1',
          pid: '2'
      }, {
        name: "社会学类",
          value: '2',
          pid: '2'
      }, {
        name: "民族学类",
          value: '3',
          pid: '2'
      }, {
        name: "马克思主义理论类",
          value: '4',
          pid: '2'
      }, {
        name: "公安学类",
          value: '5',
          pid: '2'
      }]
    ],
    dataThree: [
      [
        [{
          name: "哲学",
          value: '0',
          checked: false,
          pid: '0',
          ppid:"0"
        }, {
          name: "逻辑学",
            value: '1',
            pid: '0',
            ppid: "0"
        }, {
          name: "宗教学",
            value: '2',
            pid: '0',
            ppid: "0"
        }, {
          name: "伦理学",
            value: '3',
            pid: '0',
            ppid: "0"
        }, {
          name: "哲学类",
            value: '4',
            pid: '0',
            ppid: "0"
        }]
      ],
      [
        [{
          name: "经济学",
          value: '0',
          checked: false,
          pid: '0',
          ppid: "1"
        }, {
          name: "经济统计学",
            value: '1',
            pid: '0',
            ppid: "1"
        }, {
          name: "国民经济管理",
            value: '2',
            pid: '0',
            ppid: "1"
        }, {
          name: "资源与环境经济学",
            value: '3',
            pid: '0',
            ppid: "1"
        }, {
          name: "商务经济学",
            value: '4',
            pid: '0',
            ppid: "1"
        }, {
          name: "能源经济",
            value: '5',
            pid: '0',
            ppid: "1"
        }, {
          name: "经济学类",
            value: '6',
            pid: '0',
            ppid: "1"
        }],
        [{
          name: "财政学",
          value: '0',
          checked: false,
          pid: '1',
          ppid: "1"
        }, {
          name: "税收学",
            value: '1',
            pid: '1',
            ppid: "1"
        }, {
          name: "财政学类",
            value: '2',
            pid: '1',
            ppid: "1"
        }],
        [{
          name: "金融学",
          value: '0',
          checked: false,
          pid: '2',
          ppid: "1"
        }, {
          name: "金融工程",
            value: '1',
            pid: '2',
            ppid: "1"
        }, {
          name: "保险学",
            value: '2',
            pid: '2',
            ppid: "1"
        }, {
          name: "投资学",
            value: '3',
            pid: '2',
            ppid: "1"
        }, {
          name: "金融数学",
            value: '4',
            pid: '2',
            ppid: "1"
        }, {
          name: "信用管理",
            value: '5',
            pid: '2',
            ppid: "1"
        }, {
          name: "经济与金融",
            value: '6',
            pid: '2',
            ppid: "1"
        }, {
          name: "金融学类",
            value: '7',
            pid: '2',
            ppid: "1"
        }],
        [{
          name: "国际经济与贸易",
          value: '0',
          checked: false,
          pid: '3',
          ppid: "1"
        }, {
          name: "贸易经济",
            value: '1',
            pid: '3',
            ppid: "1"
        }, {
          name: "经济与贸易类",
            value: '2',
            pid: '3',
            ppid: "1"
        }]
      ],
      [
        [{
            name: "法学",
            value: '0',
          checked: false,
          pid: '0',
          ppid: "2"
          }, {
            name: "知识产权",
            value: '1',
            pid: '0',
            ppid: "2"
          }, {
            name: "监狱学",
            value: '2',
            pid: '0',
            ppid: "2"
          }, {
            name: "法学类",
            value: '3',
            pid: '0',
            ppid: "2"
          }

        ],
        [{
          name: "政治学与行政学",
          value: '0',
          checked: false,
          pid: '1',
          ppid: "2"
        }, {
            name: "国际政治",
            value: '1',
            pid: '1',
            ppid: "2"
          }, {
            name: "外交学",
            value: '2',
            pid: '1',
            ppid: "2"
          }, {
            name: "国际事务与国际关系",
            value: '3',
            pid: '1',
            ppid: "2"
          }, {
            name: "政治学、经济学与哲学",
            value: '4',
            pid: '1',
            ppid: "2"
          }, {
            name: "政治学类",
            value: '5',
            pid: '1',
            ppid: "2"
          }
        ],[
          {
            name: "社会学",
            value: '0',
            checked: false,
            pid: '2',
            ppid: "2"
          }, {
            name: "社会工作",
            value: '1',
            pid: '2',
            ppid: "2"
          }, {
            name: "人类学",
            value: '2',
            pid: '2',
            ppid: "2"
          }, {
            name: "女性学",
            value: '3',
            pid: '2',
            ppid: "2"
          }, {
            name: "家政学",
            value: '4',
            pid: '2',
            ppid: "2"
          }
          , {
            name: "社会学类",
            value: '5',
            pid: '2',
            ppid: "2"
          }
        ],[
          {
            name: "民族学",
            value: '0',
            checked: false,
            pid: '3',
            ppid: "2"
          }, {
            name: "民族学类",
            value: '1',
            pid: '3',
            ppid: "2"
          }
        ],[
          {
            name: "科学社会主义",
            value: '0',
            checked: false,
            pid: '4',
            ppid: "2"
          }, {
            name: "中国共产党历史",
            value: '1',
            pid: '4',
            ppid: "2"
          }, {
            name: "思想政治教育",
            value: '2',
            pid: '4',
            ppid: "2"
          }, {
            name: "马克思主义理论类",
            value: '3',
            pid: '4',
            ppid: "2"
          }
        ],[
          {
            name: "治安学",
            value: '0',
            checked: false,
            pid: '5',
            ppid: "2"
          }, {
            name: "侦查学",
            value: '1',
            pid: '5',
            ppid: "2"
          }, {
            name: "边防管理",
            value: '2',
            pid: '5',
            ppid: "2"
          }, {
            name: "禁毒学",
            value: '3',
            pid: '5',
            ppid: "2"
          }, {
            name: "警犬技术",
            value: '4',
            pid: '5',
            ppid: "2"
          }, {
            name: "经济犯罪侦查",
            value: '5',
            pid: '5',
            ppid: "2"
          }, {
            name: "边防指挥",
            value: '6',
            pid: '5',
            ppid: "2"
          }, {
            name: "消防指挥",
            value: '7',
            pid: '5',
            ppid: "2"
          }, {
            name: "警卫学",
            value: '8',
            pid: '5',
            ppid: "2"
          }, {
            name: "公安情报学",
            value: '9',
            pid: '5',
            ppid: "2"
          }, {
            name: "犯罪学",
            value: '10',
            pid: '5',
            ppid: "2"
          }
          , {
            name: "公安管理学",
            value: '11',
            pid: '5',
            ppid: "2"
          }
          , {
            name: "涉外警务",
            value: '12',
            pid: '5',
            ppid: "2"
          }
          , {
            name: "国内安全保卫",
            value: '13',
            pid: '5',
            ppid: "2"
          }
          , {
            name: "警务指挥与战术",
            value: '14',
            pid: '5',
            ppid: "2"
          }, {
            name: "公安学类",
            value: '15',
            pid: '5',
            ppid: "2"
          }
        ]
      ]
    ],
    dataTwo2: [],
    dataThree2:[],
    vauleOne:"",
    checkBoxValue:[],


  },

  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var checkboxItems = this.data.dataOne,
      checkboxItems2 = this.data.dataTwo2,
      checkboxItems3 =this.data.dataThree,
      allData=this.data.checkBoxValue,
      cc=[],
      values = e.detail.value;
      if (preValue.length < 1) {
        preValue = e.detail.value;
        console.log("未选择>>" + preValue)
        checkboxItems2 = this.data.dataTwo[preValue[0]];
        for (var j = 0; j < checkboxItems2.length; j++) {
          checkboxItems2[j].checked = true;
          cc = checkboxItems3[preValue[0]][j];
          for (var k = 0; k < cc.length; k++) {
            cc[k].checked = true;
          }
        }
      } else {
        if (preValue != values) {
          
          if (preValue.length < values.length) {
            for (var i = 0; i < values.length; i++) {
              checkboxItems2 = this.data.dataTwo[values[i]];
              console.log("长度" + checkboxItems2.length + values[i])
              for (var j = 0; j < checkboxItems2.length; j++) {
                checkboxItems2[j].checked = true;
                cc = checkboxItems3[values[i]][j];
                for (var k = 0; k < cc.length; k++) {
                  cc[k].checked = true;
                }
              }
            }
          }
          if (preValue.length > values.length) {
            var arr = [];
            for (var i = 0; i < preValue.length; i++) {
              for (var j = 0; j < values.length; j++) {
                if (preValue[i] == values[j]) {
                  preValue.splice(i, 1)
                }
              }
            }
            arr = preValue;
            console.log("》》》》》》" + arr)
            for (var i = 0; i < arr.length; i++) {
              checkboxItems2 = this.data.dataTwo[arr[i]];
              for (var j = 0; j < checkboxItems2.length; j++) {
                checkboxItems2[j].checked = false;
                cc = checkboxItems3[arr[i]][j];
                for (var k = 0; k < cc.length; k++) {
                  cc[k].checked = false;
                }
              }
            }
          }
          preValue = values
        }

      }
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (checkboxItems[i].value == values[j]) {
            checkboxItems[i].checked = true;
            break;
          }
        }
      }     
    allData.push(checkboxItems);
    allData.push(checkboxItems2);
    allData.push(cc);

    this.setData({
      dataOne: checkboxItems,
      dataTwo2: checkboxItems2,
      dataThree2: cc,
      vauleOne:values,
      checkBoxValue: allData
    });
  },
  checkboxChange2: function(e) {
    console.log('checkbox2发生change事件，携带value值为：', e.detail.value );    
    var checkboxItems = this.data.dataTwo2,//二级菜单
      checkboxItems2 = this.data.dataThree2,//三级菜单
      values = e.detail.value,
      dataOne2=this.data.dataOne;
    var pid = "";
    var lishi=[];
    var history=[];
    
    //获取当前点击的二级菜单的父级Id
    for (var i = 0; i < checkboxItems.length;i++){     
      pid = checkboxItems[i].pid;
      if (checkboxItems[i].checked==true){
        lishi.push(checkboxItems[i].value);
      }
      
    }
    //判断是否全选改变父级菜单的全选按钮
    if(this.data.dataTwo[pid].length==values.length){
      dataOne2[pid].checked = true;
    }else{
      dataOne2[pid].checked = false;
    }
    console.log("过去的长度" + lishi + "一级父级value" + pid)
    history = lishi;
    //新长度大于历史长度说明新增勾选
    if (values.length > history.length) {
      console.log("二级菜单新增全选")
      for (var i = 0; i < values.length; i++) {
        checkboxItems2 = this.data.dataThree[pid][values[i]];
        for (var j = 0; j < checkboxItems2.length; j++) {
          checkboxItems2[j].checked = true;
        }

      }
    }
    //新长度小于过去长度说明取消全选
    if (values.length < lishi.length) {
      console.log("二级菜单取消全选")
      var arr = [];
      for (var i = 0; i < lishi.length; i++) {
        for (var j = 0; j < values.length; j++) {
          if (lishi[i] == values[j]) {
            lishi.splice(i, 1)
          }
        }
      }
      arr = lishi;//被取消全选的value
      console.log("被取消全选" + arr)
      checkboxItems2 = this.data.dataThree[pid][arr[0]];
      for (var i = 0; i < checkboxItems2.length;i++){
        checkboxItems2[i].checked=false;
      }
    }
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    var allData=[];
    allData.push(dataOne2);
    allData.push(checkboxItems);
    allData.push(checkboxItems2);
    this.setData({
      dataTwo2: checkboxItems,
      dataThree2: checkboxItems2,
      dataOne: dataOne2,
      checkBoxValue: allData
    });
  },
  checkboxChange3: function (e) {
    console.log('checkbox3发生change事件，携带value值为：', e.detail.value);
    var checkboxItems2 = this.data.dataThree,//三级菜单
        checkboxItems = this.data.dataThree2,
      values = e.detail.value;
    var oneId="",twoId="";
    oneId = checkboxItems[0].ppid;
    twoId = checkboxItems[0].pid;
    // console.log("三级父id" + checkboxItems[0].pid + "一级Id" + checkboxItems[0].ppid);
    var one = this.data.dataOne;
    var two = this.data.dataTwo2;
    //判断是否全选改变父级菜单的全选按钮
    if (checkboxItems2[oneId][twoId].length == values.length) {
      one[oneId].checked=true;
      two[twoId].checked=true;    
      
    } else {
      one[oneId].checked = false;
      two[twoId].checked = false;
    }
   
    
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    var allData = [];
    allData.push(one);
    allData.push(two);
    allData.push(checkboxItems);
    this.setData({
      dataThree2: checkboxItems,
      dataOne: one,
      dataTwo2:two,
      dataThree: checkboxItems2,
      checkBoxValue: allData
    });
  },
  changeDataOne: function(e) {
    var value = e.currentTarget.id;
    var datas = this.data.dataTwo;
    this.setData({
      dataThree2:[],
      dataTwo2: datas[value],
      vauleOne:value
    })
  },
  changeDataTwo: function (e) {
    var value = e.currentTarget.id;
    var datas = this.data.dataThree;
    var arr = value.split(",");
    console.log(">>>>>" + arr[0])
    this.setData({
      dataThree2: datas[arr[0]][arr[1]]
    })
  },
  //所有选中的第三级菜单
  select:function(e){
    var allData=this.data.dataThree;
    console.log(allData.length)
    for (var i = 0; i < allData.length;i++){
      console.log("第一层的长度"+i)
      for (var j = 0; j < allData[i].length;j++){
        console.log("第二层的长度" + j)
        for (var k = 0; k < allData[i][j].length;k++){
          if (allData[i][j][k].checked==true){
            console.log(allData[i][j][k].name)
          }             
        }        
      }
    }
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onShareAppMessage: function () {

    return {
      title: '中科遥感',
      desc: '风云博维',
      imageUrl: '../../image/IMG_1644.JPG',
      path: '/pages/vipIndex/volunteerChoice/index/index',
      success(e){
        wx.showShareMenu({
          withShareTicket:true
        })
      }
      
    



    }



  }
})