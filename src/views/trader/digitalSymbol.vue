<template>
  <div class="coin_detail">
    <div class="mod" :class="parentClass">
      <div class="mod_hd" ><span class="mod_show_btn">
      <button @click="isActive=!isActive"><i></i></button>
      <span>{{$t('trade.coinInfo')}}</span></span> <router-link to="intro" class="f_l">{{$t('trade.aboutmore')}}</router-link></div>
      <CollapseTransition ref="CollapseTransition">
        <div class="mod_bd" id="coin_detail_in"  v-show="isActive">
          <div class="left">
            <h3><span class="uppercase">{{digitalSymbol.dcName}}</span> {{digitalSymbol.dcName}}</h3>
            <div class="in"><span>{{$t('trade.intro')}}</span>
              <!--<pre v-html="digitalSymbol.summary"></pre>-->
              <p v-html="digitalSymbol.summary"></p>
            </div>
          </div>
          <div class="right">
            <ul>
              <li><span>{{$t('trade.issueTime')}}</span>
                <p>{{digitalSymbol.issueTime}}</p>
              </li>
              <li><span>{{$t('trade.issueVolume')}}</span>
                <p>{{digitalSymbol.issueNum}}{{$t('trade.tenthousand')}}</p>
              </li>
              <li><span>{{$t('trade.circulationVolume')}}</span>
                <p>{{digitalSymbol.circulationNum}}{{$t('trade.tenthousand')}}</p>
              </li>
              <!--<li><span>{{$t('trade.crowdPrice')}}</span>-->
              <!--<p>&#45;&#45;</p>-->
              <!--</li>-->
              <li><span>{{$t('trade.whitePage')}}</span>
                <p><a :href="digitalSymbol.whitePaperUrl" target="_blank">{{digitalSymbol.whitePaperUrl}}</a></p>
              </li>
              <li><span>{{$t('trade.website')}}</span>
                <p><a :href="digitalSymbol.basicUrl" target="_blank">{{digitalSymbol.basicUrl}}</a></p>
              </li>
              <li><span>{{$t('trade.blockquery')}}</span>
                <p><a :href="digitalSymbol.blockUrl" target="_blank">{{digitalSymbol.blockUrl}}</a></p>
              </li>
            </ul>
          </div>
        </div>
      </CollapseTransition>
    </div>
  </div>
  <!---登录后-委托历史END-->
</template>
<script>
  import {symbolIntro } from "../../api/common";
  import {escape2Html} from "../../utils/stringUtil";
  import CollapseTransition from "../../components/animate-contract";
  export default {
    computed: {
      parentClass(){
        return this.isActive?"":" hide";
      }

    },
    components:{CollapseTransition},
    name: "digitalSymbol",
    data(){
      return {
        isActive:true,
        digitalSymbol : '',
      }
    },
    methods:{
      //设置简介信息
      symbolIntro(symbol){
        //当前交易币种
        let $this = this;
        let param = "/"+symbol;
        symbolIntro(param).then((response) => {
          if (response.code === 200) {
            var data = response.data;
            $this.digitalSymbol = data.intro;
            if($this.digitalSymbol.summary){
              $this.digitalSymbol.summary = escape2Html($this.digitalSymbol.summary);
            }
          }
        })
      },
    }
  }
</script>
