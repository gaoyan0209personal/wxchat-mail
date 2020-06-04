// components/account/account.js
const app = getApp()

Component({
  properties: {
  },
  data: {
    account:null
  },
  lifetimes:{
    attached(){
      this.setData({account:app.globalData.account})
    }
  },
  methods: {
    select(e) {
      const index=e.currentTarget.dataset.index
      const now=this.data.account[index]
      this.triggerEvent('account',{addr:now.addr})
    },
    back(){
      this.triggerEvent('account',{})
    }
  }
})
