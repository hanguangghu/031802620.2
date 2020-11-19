// pages/1suggest/1suggest.js  
let col1H = 0;
let col2H = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
     // 导航状态
     navState: 0,
     // 今日推荐
     products: [
      {
        "product_id": "0001",
        "product_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3990884305,1603403423&fm=26&gp=0.jpg",
        "product_name": "九阳（Joyoung） 京品家电 电火锅家用多功能电热锅 麦饭石色不粘锅 6L大容量电煮锅HG60-G91 【邓伦推荐】",
        "product_price": "￥119.00",
      },
      {
        "product_id": "0002",
        "product_img": "//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/87215/34/14762/336752/5e688e45E971e3945/6f142005d5043ba1.jpg!q70.dpg.webp",
        "product_name": "  利仁 （Liven）5.5L多功能家用电火锅不粘电炒锅电煮锅 电炖锅多用途锅电煎锅电热锅电煮锅DHG-558  ",
        "product_price": "￥299.00",
      },
      {
        "product_id": "0003",
        "product_img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603878213440&di=e26910a4561bd8d1437001cb7408bd89&imgtype=0&src=http%3A%2F%2Fzkres1.myzaker.com%2F201812%2F5c1eb41e77ac640aea0dc83c_640.jpg",
        "product_name": "  米家 小米加湿器卧室家用办公室桌面 迷你静音空气加湿 银离子材料 上加水 4L大容量  ",
        "product_price": "￥99.00",
      },
      {
        "product_id": "0004",
        "product_img": "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/134749/19/13067/167435/5f8f93d7E1fd11f49/a3678d67fa3f9b25.png.webp",
        "product_name": "   美的（Midea）折叠电蒸锅多功能家用海鲜蒸箱电蒸笼料理机蒸汽笼大小容量多层台式家用ZG2626P171  ",
        "product_price": "￥779.00",
      },
      {
        "product_id": "0005",
        "product_img": "//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/127322/16/14905/161839/5f847b3bE954511a0/81e009495bb2492e.jpg!q70.dpg.webp",
        "product_name": "  美菱（MeiLing） 饮水机立式家用茶吧机智能速热开水机 【美菱秒杀狂欢】高端轻奢遥控款，限量秒杀低至3折  ",
        "product_price": "￥248.00",
      },
      {
        "product_id": "0006",
        "product_img": "//img12.360buyimg.com/mobilecms/s316x316_jfs/t1/148916/10/4530/145991/5f2a7e1bE37159999/432c127dd9bf6f11.jpg!q70.dpg.webp",
        "product_name": "  容声电热水瓶304不锈钢开水瓶七段恒温热水壶家用电水壶5L大容量开水壶办公室烧水壶保温一体烧水器 白色款  ",
        "product_price": "￥149.00",
      },
      {
        "product_id": "0007",
        "product_img": "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/142064/27/11570/205985/5f8f9d55E841612c4/fef15d19caa47bce.jpg!q70.dpg.webp",
        "product_name": "摩飞电器（Morphyrichards）MR9088网红多功能锅多用途料理锅电烧烤锅煎锅电火锅烧烤炉家用电蒸锅薄荷绿  ",
        "product_price": "￥149.00",
      },
      {
        "product_id": "0008",
        "product_img": "//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/133081/13/12895/64295/5f8ee509E43d12a9c/e59569bbf7e28d25.jpg!q70.dpg.webp",
        "product_name": "  苏泊尔 （SUPOR ）除螨仪手持床铺除螨机家用吸尘器 双拍打紫外线杀菌 VCM16A（复古绿）  ",
        "product_price": "￥189.00",
      }

    ],
    lHeight:0,
    rHeight:0,
    lList:[],
    rList:[],
     // 收藏夹
     dataList:[
       {
         goods_id:1,
         goods_title:'商品标题1',
         goods_img:'../../images/code-cloud-callback-config.png',
         goods_xiaoliang:'0',
         goods_price:'60'
       },{
         goods_id:1,
         goods_title:'商品标题2',
         goods_img:'../../images/code-db-inc-dec.png',
         goods_xiaoliang:'0',
         goods_price:'70'
       }, {
         goods_id: 1,
         goods_title: '商品标题3',
         goods_img: '../../images/code-db-onAdd.png',
         goods_xiaoliang: '0',
         goods_price: '80'
       }, {
         goods_id: 1,
         goods_title: '商品标题4',
         goods_img: '../../images/code-db-onQuery.png',
         goods_xiaoliang: '0',
         goods_price: '90'
       }, {
         goods_id: 1,
         goods_title: '商品标题5',
         goods_img: '../../images/code-db-onRemove.png',
         goods_xiaoliang: '0',
         goods_price: '110'
       }
     ],

  },
  jumppage: function () {
    wx.navigateTo({
      url: '../2.5search/2.5search'
    })
  },

   //监听滑块
   bindchange(e) {
    // console.log(e.detail.current)
    let index = e.detail.current;
    this.setData({
      navState:index
    })
  },
  //点击导航
  navSwitch:function(e) {
    // console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index;
    this.setData({
      navState:index
    })
  },
  search: function() {
    wx.navigateTo({
      url: '../2merchants/2merchants'
    })
  },
  jmp:function() {
    wx.navigateTo({
      url: '../3goods/3goods'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },
  imgLoad:function(e){
    var lList = this.data.lList;
    var rList = this.data.rList;
    var lHeight = this.data.lHeight;
    var rHeight = this.data.rHeight;
    if (lHeight == rHeight || rHeight > lHeight){
      lList.push(e.currentTarget.dataset.product);
      lHeight += e.detail.height / e.detail.width;
      this.setData({
        lList,
        lHeight
      })
    }else{
      rList.push(e.currentTarget.dataset.product);
      rHeight += e.detail.height / e.detail.width;
      this.setData({
        rList,
        rHeight
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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

  }
})