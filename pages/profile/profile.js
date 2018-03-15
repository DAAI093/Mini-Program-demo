// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "This is page data.",
    array: [1, 2, 3, 4, 5],
    msg: 'Hello World',
    condition: false,
    flag: true,
    a: 1,
    b: 2,
    c: 3,
    hero: [
      { id: 1, name: '李元霸', age: 18 },
      { id: 2, name: '宇文成都', age: 18 },
      { id: 3, name: '裴元庆', age: 18 },
      { id: 4, name: '雄阔海', age: 18 },
      { id: 5, name: '伍云召', age: 18 },
      { id: 6, name: '伍天锡', age: 18 },
      { id: 7, name: '罗成', age: 18 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log("profile加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("profile初次")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("profile显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("profile隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("profile页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onTabItemTap(item) {
    // tab页面需要先设置
    console.log("profile点击")
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 事件处理
  viewTap: function () {
    console.log('view tap')
    this.setData({
      text: 'Set some data for updating view.'
    }, function () {
      // this is setData callback
    })
  },
  customData: {
    hi: 'MINA'
  },
    btnHandler(){
    // console.log(123)
    const arr1 =[{
      id:Math.random(),name:"杨林"+Math.random(),age:30
    }]

    this.setData({
      // hero: this.data.hero.concat(arr1)
      hero:arr1.concat(this.data.hero)
    })
  }

})