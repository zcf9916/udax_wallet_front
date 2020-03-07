<template>
  <div>
    <div class="index_top">
      <div class="header">
        <top-header></top-header>
      </div>
      <div>
        <el-carousel trigger="click" interval="5000" :autoplay="true" v-if="adviceList && adviceList.length > 0">
          <el-carousel-item v-for="item in adviceList" :key="item.id">
            <img :src="item.url"/>
          </el-carousel-item>
        </el-carousel>
        <div class="loader box box-item" v-else>
          <rotate-square2/>
        </div>
      </div>
    </div>
    <!--行情-->
    <div class="market" :style="getUrlImage('market-bg.jpg','center top no-repeat #1b1f37')">
      <div class="market-top">{{$t('index.tradetip')}}</div>
      <div class="market_main">
          <ul class="left_nav">
              <li v-for="(value,key,index) in symbolMap" :key="key" :class="key===sellteMarket?'on':''" :id="'menu_'+key" @click="changeMarket(key)" :style="getUrlImage(key===sellteMarket?'market-li-bgon.png':'market-li-bg.png','center')">
                <img :src="getImg(key)"/>{{key}}
              </li>
          </ul>
        <div  class="container">
          <div class="el-tabs__content">
            <div v-for="(value,key,index) in symbolMap" :id ="'market_'+key" :style="key===sellteMarket?'display: block;':'display: none;'"  class="el-tab-pane">
              <div class="coin_table">
                <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table--medium"
                     style="width: 100%;">

                  <div class="el-table__body-wrapper is-scrolling-none">
                    <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" width="100%">
                      <thead class="has-gutter">
                      <tr class="">
                        <th width="12%" colspan="1" rowspan="1" class="el-table_10_column_41  is-leaf is-sortable"><div class="cell">{{$t('assets.coin')}}<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div></th>
                        <th width="20%" colspan="1" rowspan="1" class="el-table_10_column_42  is-leaf is-sortable"><div class="cell">{{$t('common.lastPrice')}}<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div></th>
                        <th width="12%" colspan="1" rowspan="1" class="el-table_10_column_43  is-leaf is-sortable"><div class="cell">{{$t('common.rose')}}<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div></th>
                        <th width="20%" colspan="1" rowspan="1" class="el-table_10_column_43  is-leaf is-sortable"><div class="cell">{{$t('common.highPrice')}}<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div></th>
                        <th width="20%" colspan="1" rowspan="1" class="el-table_10_column_43  is-leaf is-sortable"><div class="cell">{{$t('common.lowPrice')}}<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div></th>
                        <th width="20%" colspan="1" rowspan="1" class="el-table_10_column_43  is-leaf is-sortable"><div class="cell">{{$t('common.tradeVolume')}}<span class="caret-wrapper"><i class="sort-caret ascending"></i><i class="sort-caret descending"></i></span></div></th>
                        <th width="20%"></th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr class="el-table__row" v-for="item in value" @click="goTrade(item.targetDcCode,item.basicDcCode)">
                        <td><div class="cell"><img class="moneyImage" :src="getImg(item.targetDcCode)">{{item.targetDcCode}}</div></td>
                        <td><div class="cell">{{item.lastPrice}}≈{{formatAmount(Number.parseFloat(item.lastPrice*changeRate))}} {{currencyRate}}</div></td>
                        <td><div class="cell"><span :class="item.rose?item.rose>=0?color_buy:color_sell:''">{{item.rose?item.rose:0}}%<i :class="item.rose?item.rose>=0?'hb_icon_up':'hb_icon_down':''"></i></span></div></td>
                        <td><div class="cell">{{item.highestPrice?item.highestPrice:0}}≈{{formatAmount(Number.parseFloat(item.highestPrice?item.highestPrice*changeRate:0))}} {{currencyRate}}</div></td>
                        <td><div class="cell">{{item.lowestPrice?item.lowestPrice:0}}≈{{formatAmount(Number.parseFloat(item.lowestPrice?item.lowestPrice*changeRate:0))}} {{currencyRate}}</div></td>
                        <td><div class="cell">{{item.totolVolume?item.totolVolume:0}}</div></td>
                        <td :style="getUrlImage('market-tdbg.png','-10px no-repeat #1a1f38')"><div class="cell"><a href="javascript:;" @click="goTrade(item.targetDcCode,item.basicDcCode)">{{$t('common.goTrade')}}</a></div></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--平台优势-->
    <div class="youshi" :style="getUrlImage('index-ys.jpg','center no-repeat')">
      <h2>{{$t('index.tradePlatform')}}</h2>
      <ul>
        <li class="bg-01">
          <div class="bg-02">
            <div class="bg-03">
              <div class="title flex-space">
                <img src="@/assets/images/index-ys-icon.png">
              </div>
              <div class="title-con">
                <h3>{{$t('index.security')}}</h3>
                <p v-html="$t('index.securityDesp')"></p>
              </div>
            </div>
          </div>
          </li>

        <li class="bg-01">
          <div class="bg-02">
            <div class="bg-03">
              <div class="title flex-space">
                <img src="@/assets/images/index-ys-icon02.png">
              </div>
              <div class="title-con">
                <h3>{{$t('index.soonTrade')}}</h3>
                <p v-html="$t('index.soonTradeDesp')"></p>
              </div>
            </div>
          </div>
        </li>
      </ul><ul>
        <li class="bg-01">
          <div class="bg-02">
            <div class="bg-03">
              <div class="title flex-space">
                <img src="@/assets/images/index-ys-icon03.png">
              </div>
              <div class="title-con">
                <h3>{{$t('index.excellentTerm')}}</h3>
                <p v-html="$t('index.excellentDesp')"></p>
              </div>
            </div>
          </div>
        </li>
        <li class="bg-01">
          <div class="bg-02">
            <div class="bg-03">
              <div class="title flex-space">
                <img src="@/assets/images/index-ys-icon04.png">
              </div>
              <div class="title-con">
                <h3>{{$t('index.multilingual')}}</h3>
                <p>{{$t('index.multilinguaDesp')}}</p>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>
    <div class="down-box" :style="getUrlImage('index-down-bg.jpg','no-repeat center top')">
      <div class="con">
        <div class="txt">
          <div class="t1"> <h3>UDAX {{$t('common.downapp')}}</h3><br/>{{$t('common.platform')}}</div>
          <div class="download-btn"><ul>
            <li><a href="https://fir.im/udaxpro"><i class="el-icon-iphone" ></i><p><b>iPhone</b>{{$t('common.downios')}}</p></a><div class="sm"><img src="@/assets/images/2wm-ios.png"></div></li>
            <li><a href="https://admin.udax.kr/upload/app-pro-release.apk"><i class="el-icon-android" ></i><p><b>Android</b>{{$t('common.downadnroid')}}</p></a><div class="sm"><img src="@/assets/images/2wm.png"></div></li>
            <li><a href="https://admin.udax.kr/upload/udax-win.exe"><i class="el-icon-windows" ></i><p><b>Windows</b>{{$t('common.downwindow')}}</p></a></li>
            <li><a href="https://admin.udax.kr/upload/udax-mac.dmg"><i class="el-icon-imac" ></i><p><b>Mac</b>{{$t('common.downmac')}}</p></a></li>
          </ul></div>
        </div>
      </div>
    </div>
    <!--平台优势END-->
    <indax-footer></indax-footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {reloadQuotation,reloadRate,onAction,removeListenRuner} from '@/utils/quotation'
  import {initQuotation} from "../../api/index";
  import IndaxFooter from "../layout/components/Footer";
  import TopHeader from "../layout/components/TopHeader"
  import {RotateSquare2} from 'vue-loading-spinner'
  import PreLoad from '@/utils/preload'

  export default {
    name: "index",
    components: {
      IndaxFooter,
      TopHeader,
      RotateSquare2
    },
    data() {
      let locale=this.$cookies.get('language')||this.getBrowseLang();
      return {
        // note: {
        //   background: 'url(' + require('@/assets/images/index-ad01.jpg') + ') no-repeat center'
        // },
        exchangeRate: 1, //实时汇率
        changeRate:1,//基于基础市场换算后的汇率
        lastPrices: [],//缓存中的最新价集合
        symbolMap:{},//市场代币集合
        quetaObj: {}, //最新行情
        adviceList:[] ,//首页广告图
        currencyRate:'',//货币代码
        sellteMarket:'',//基础交易市场
        basicSymbol:'',//当前选择的基础市场信息
        rateList:[],//汇率集合
        currentMarket:'',//当前选择的市场
        color_buy:locale?locale==='ko'?"kr-span-money-down":"span-money-down":"span-money-down",//买颜色值根据语言判断
        color_sell:locale?locale==='ko'?"kr-span-money-up":"span-money-up":"span-money-up",//卖颜色值
        notice:null,
      }
    },
    created() {
      this.initQuotation();
      // this.connect();
      let $this =this
      removeListenRuner('reloadSymbolKline')
      removeListenRuner('reloadOrders')
      removeListenRuner('fbOrders')
      removeListenRuner('reloadGearQuotation')
      reloadQuotation()
      reloadRate()
      onAction('reloadQuotation',(rsp)=>{
        let quotation=rsp.list
        let market=quotation.symbol.split('/')[1]
        if($this.symbolMap[market]){
          for (let i = 0; i < $this.symbolMap[market].length; i++) {
            var symbolObj = $this.symbolMap[market][i];
            if (quotation.symbol === symbolObj.symbol) {
              var roseNum = 0;
              if (quotation.lastPrice > 0) {
                roseNum = new Number((((quotation.lastPrice - quotation.openPrice) / quotation.openPrice) * 100));
              }
              symbolObj.lastPrice = quotation.lastPrice.toFixed(symbolObj.tradePriceDigit);
              symbolObj.rose = roseNum.toFixed(2) ;
              symbolObj.totolVolume = quotation.totolVolume.toFixed(symbolObj.minTradeDigit);
              symbolObj.highestPrice=quotation.highestPrice.toFixed(symbolObj.tradePriceDigit);
              symbolObj.lowestPrice=quotation.lowestPrice.toFixed(symbolObj.tradePriceDigit);
            }
          }
        }
      })
      onAction('reloadRate',(rsp)=>{
        $this.rateList=rsp.list;
        $this.calChangeRate();
      })
    },
    methods: {
      initQuotation() {
        let $this = this;
        initQuotation().then((response) => {
          if (response.code === 200) {
            var data = response.data;
            $this.symbolMap = data.symbolMap;
            $this.lastPrices = data.lastPrices;
            $this.adviceList = data.adviceList;
            $this.currencyRate = data.currencyRate;
            $this.sellteMarket = data.sellteMarket;
            $this.currentMarket = data.sellteMarket;//当前市场默认是基准市场
            $this.rateList = data.rateList;
            $this.notice=data.notice;
            let noticeId=$this.$cookies.get('noticeId');
            if(data.notice){
              $this.$cookies.set('noticeId',data.notice.id,-1);
              if(!noticeId){
                $this.$notify({
                  title: data.notice.noticeTitle,
                  message: data.notice.remark,
                  duration: 0,
                  dangerouslyUseHTMLString:true
                });
              }else{
                if(data.notice.id>noticeId){
                  $this.$notify({
                    title: data.notice.noticeTitle,
                    message: data.notice.remark,
                    duration: 0,
                    dangerouslyUseHTMLString:true
                  });
                }
              }
            }
            new PreLoad(data.adviceList.map(({ url }) => url)).init().then(
              () => {
                $this.adviceList = data.adviceList
              },
            )
            var cachePrices = data.lastPrices
            if (cachePrices) {
              for (let key in $this.symbolMap) {  //市场交易对 最新行情和涨幅
                for (let i = 0; i < $this.symbolMap[key].length; i++) {
                  var symbolObj = $this.symbolMap[key][i];
                  var cacheSymbol = cachePrices[symbolObj.symbol];
                  if (cacheSymbol) {
                    var roseNum = 0;
                    if (cacheSymbol.lastPrice > 0) {
                      roseNum = new Number((((cacheSymbol.lastPrice - cacheSymbol.openPrice) / cacheSymbol.openPrice) * 100));
                    }
                    symbolObj.lastPrice = cacheSymbol.lastPrice.toFixed(symbolObj.tradePriceDigit);
                    symbolObj.rose = roseNum.toFixed(2);
                    symbolObj.totolVolume = cacheSymbol.totolVolume.toFixed(symbolObj.minTradeDigit);
                    symbolObj.highestPrice=cacheSymbol.highestPrice.toFixed(symbolObj.tradePriceDigit);
                    symbolObj.lowestPrice=cacheSymbol.lowestPrice.toFixed(symbolObj.tradePriceDigit);
                  }
                }
              }
            }
            $this.calChangeRate();

          }
        })
      },
      calChangeRate(){
        let rateList = this.rateList;
        for(let i=0;i<rateList.length;i++){
          //当前货币种类相等
          if(rateList[i].currencyName==='USD'+this.currencyRate){
            let rateMap = rateList[i].rateMap;//包含usdt,goldt对currencyRate的汇率
            this.exchangeRate=rateMap[this.sellteMarket];//基准市场汇率;如果当前是人民币,基准市场是goldt,这个就是goldt/人民币的汇率
            this.changeRate=this.exchangeRate;
            //当点击按钮切换市场的时候,当前市场就会变化
           // if(this.currentMarket!==this.sellteMarket){ //设置汇率
               //symbolMap 一个key  对应valuelist    key代表市场   valuelist代表市场下的交易对,以及对应的最新转换价格
              for (let i = 0; i < this.symbolMap[this.sellteMarket].length; i++) {
                var curPrice=this.symbolMap[this.sellteMarket][i];
               // console.log(curPrice.targetDcCode+" -"+this.currentMarket);
                if(curPrice.targetDcCode===this.currentMarket){
                  this.changeRate=this.exchangeRate*curPrice.lastPrice;//需要根据基础市场下交易对行情最新价换算折合的法币价值
                }
              }
          //  }
          }
        }
      },
      changeMarket(basicKey){
        var menuKey="menu_"+basicKey;
        var curDoc=document.querySelector("#"+menuKey);
        var curList=curDoc.parentNode.children;
        for(var i=0;i<curList.length;i++){
          if(curList[i].id!=menuKey){
            curList[i].setAttribute("class","");
            curList[i].setAttribute("style","background:"+this.getUrlImage('market-li-bg.png','center').background);
          }
        }
        curDoc.setAttribute("class","on");
        curDoc.setAttribute("style","background:"+this.getUrlImage('market-li-bgon.png','center').background);
        var marketKey="market_"+basicKey;
        var currentDom=document.querySelector("#" + marketKey);
        var domParent=currentDom.parentNode;
        var childList=domParent.children;
        for(var i=0;i<childList.length;i++){
          if(childList[i].id!=marketKey){
            childList[i].setAttribute("style","display:none;");
          }
        }
        currentDom.setAttribute("style","display:block;");
        this.currentMarket=basicKey;
        this.changeRate=this.exchangeRate;
        if(basicKey!==this.sellteMarket){ //设置汇率
          for (let i = 0; i < this.symbolMap[this.sellteMarket].length; i++) {
            var curPrice=this.symbolMap[this.sellteMarket][i];
            if(curPrice.targetDcCode===basicKey){
              this.changeRate=this.exchangeRate*curPrice.lastPrice;//需要根据基础市场下交易对行情最新价换算折合的法币价值
            }
          }
        }
      },
      getImg(srcImage) {
        return require('@/assets/images/icon_b/'+srcImage+'.png');
      },
      getUrlImage(imageName,styleParams,joinstyle){
        if(styleParams){
          if(joinstyle){
            joinstyle.background= 'url(' + require('@/assets/images/'+imageName+'') + ') '+styleParams;
            return joinstyle;
          }else{
            return {background: 'url(' + require('@/assets/images/'+imageName+'') + ') '+styleParams}
          }
        }
        return {background: 'url(' + require('@/assets/images/'+imageName+'') + ') no-repeat center '}
      },
      goTrade(tradeSymbol,basicSymbol){
        this.$router.push({name: 'trader', params: {basicSymbol: basicSymbol, tradeSymbol: tradeSymbol}})
      },
      //websocket 连接
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/nc.scss";
  .box {
    display: -webkit-box;
    /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;
    /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;
    /* 混合版本语法: IE 10 */
    display: -webkit-flex;
    /* 新版本语法: Chrome 21+ */
    display: flex;
    /* 新版本语法: Opera 12.1, Firefox 22+ */

    // 默认水平布局
    -moz-box-orient: horizontal; /*Firefox*/
    -webkit-box-orient: horizontal; /*Safari,Opera,Chrome*/
    box-orient: horizontal;
    flex-direction:row;
    -webkit-flex-direction:row;
  }

  .box-item {
    -webkit-box-pack: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-flex: 1.0;
    -moz-flex-shrink: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -moz-box-orient: horizontal; /*Firefox*/
    -webkit-box-orient: horizontal; /*Safari,Opera,Chrome*/
    box-orient: horizontal;
    flex-direction:row;
    -webkit-flex-direction:row;
  }


</style>
