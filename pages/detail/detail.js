// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shop:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.request({
      url: 'https://locally.uieee.com/shops/'+options.item,
      success:res=>{
        this.setData({
          shop:res.data
        })

        //跳转后，要设置标题
        wx.setNavigationBarTitle({
          title: res.data.name
        }) 
      }
    })
  }
})