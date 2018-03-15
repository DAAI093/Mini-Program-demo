// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: {},
    shops: [],
    _page: 0,
    _limit: 10,
    id:0,
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(123)
    // options是获取到的传递过来的url中的参数信息
    // console.log(options)

    // 根据传递过来的参数来获取当前的分类信息 
    // 先第一次发送一个请求，获取当前的某个分类信息，用来修改上面的标题
    wx.request({
      url: "https://locally.uieee.com/categories/" + options.cat,
      success: res => {
        // 请求成功之后，会获得返回来的数据
        // 修改标题
        console.log(res)
        this.setData({
          category: res.data,
          id:options.cat
        })
        // console.log(res)
        wx.setNavigationBarTitle({
          title: res.data.name
        })
      }
    })
      // 继续发送请求，来获取当前分类下面的所有的店铺信息
      let {_page} = this.data;
      _page++;
      wx.request({
        url: 'https://locally.uieee.com/categories/' + options.cat + '/shops?_page=1&_limit=10',
        success: res => {
          this.setData({
           shops: res.data,
           _page:_page
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 为了保险起见，在上面数据请求回来的时候，可以赋值一次，在这个地方，完全渲染完毕之后，再重新赋值一次

    if (this.data.shops.name) {
      wx.setNavigationBarTitle({
        title: this.data.shops.name
      })
    }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 当用户下拉的时候，表示数据要被重新加载
    // 需要重新发送请求，来重新渲染页面
    this.setData({  //先将原来的默认的值清除
    shops:[],
    _page:0,
    _limit:10
    })
    let {id,_page,_limit} = this.data
    wx.request({
      url:'https://locally.uieee.com/categories/'+id+'/shops',
      data:{
        _page:1,
        _limit:10
      },
      success:res=>{
        this.setData({
          shops:res.data // 把请求来的数据重新给这个数据
        })
        // 需要停止默认的下拉刷新
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 判断返回的内容
    if(!this.data.hasMore) return

    let {_page,_limit,id} = this.data
    _page++
    wx.request({
      url: 'https://locally.uieee.com/categories/' + id + '/shops?_page=' + _page + '&_limit=' + _limit,
      success:res=>{
        // 判断page和limit相乘的内容和返回头数值大小对比
        const hasMore = _page * _limit < parseInt(res.header['X-Total-Count'])
        this.setData({
          shops:this.data.shops.concat(res.data),
          _page:_page,
          //赋值
          hasMore:hasMore
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})