// miniprogram/pages/portal/index.js
Page({
  data: {
    status: 0
  },
  portal() {
    console.log('portal loding...');
    const self = this
    wx.cloud.callFunction({
      name: 'user'
    }).then(res => {
      const status = res.result
      self.setData({ status })
      if (status === 1)
        wx.redirectTo({
          url: '/pages/index/index',
          fail: console.error
        })
      else if (status === 2)
        wx.redirectTo({
          url: '/pages/login/index',
          fail: console.error
        })
    })
  },
  onLoad: async function () {
    await setTimeout(console.log, 500);
    this.portal()
  },
  onshow() {
    this.data.status !== 0 && this.portal()
    try{
    wx.hideHomeButton()
    }catch(e){}
  },
  onShareAppMessage: function () {

  }
})