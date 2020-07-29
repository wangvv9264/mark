/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-04-22 12:50:27
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-04-22 13:32:45
 */
// pages/address/address.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: '陕西省西安市雁塔区丈八沟街道高新四路高新大都荟710061 刘国良 13593464918 211381198512096810',
    addressObj:{}
  },
  onShow: function (options) {
    app.getAddressData()//保险起见，手动挂载数据
  },
  subimt: function () {
    var address = app.smart(this.data.address)
    console.log(address)
    this.setData({
      addressObj: address
    })
  },
  bindName: function (e) {
    this.data.address = e.detail.value
    this.setData({
      address: this.data.address
    })
  }
})