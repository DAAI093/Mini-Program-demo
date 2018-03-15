//index.js
//获取应用实例
const app = getApp()
const fetch = require("../../utils/fetch.js")
//页面初始化数据
Page({
  data: {
    slides:[],
    categories:[]
  },
  // 生命周期函数-监听页面加载
  onLoad: function () { //先不在括号里面写上options
  // 轮播图数据请求
    // wx.request({
    //   url:'https://locally.uieee.com/slides',
    //   success:res=>{
    //     this.setData({
    //       slides:res.data
    //     })
    //   }
    // }),
    // 九宫格数据
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success:res=>{
        this.setData({
          categories:res.data
        })
      }
    })
    ,
      // 轮播图的数据请求
      fetch('slides').then(res => {
        this.setData({
          slides: res.data
        })
      })
  },
  // 监听页面初次渲染完成
  onReady: function(){
    console.log("页面渲染完成")
  },
  // 监听页面显示
  onShow: function(){
    console.log("页面显示")
  },
  // 页面隐藏
  onHide:function(){
    console.log("页面隐藏")
  },
  // 页面卸载
  onUnload:function(){
    console.log("页面卸载")
  },
  onShareAppMessage: function () {
    console.log("上啦")
  },
})
