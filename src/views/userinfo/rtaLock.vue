<template>
  <div>
  <!--保险仓-->
  <div class="privilege-content insur-box">
    <div class="path">{{$t('rta.tip')}}</div>

    <div class="pri-box">
      <div class="top flex-space">
        <div class="left">
          <!--<h2 class="vip-text">-->
            <!--{{$t('rta.locktip',{ num: needCcash})}}-->
          <!--</h2>-->
          <em>{{$t('rta.available')}}:{{availableAmount}} CCASH ≈ {{Number.parseFloat(availableAmount*ccashQuota*exchangeRate).toFixed(2)}} {{currency}}</em>
        </div>

      </div>
      <div class="pri-con">
        <!--申请中-->
        <div class="insur-apply">
        <ul class="select-li flex-c">
          <li @click="changeItem(item.lockAmount)"  v-for="(item,itemKey) in lockAmountList" :key="itemKey" :value="item.id">
            <i></i>
            <p>
              <span>{{item.depositAmount}}
                <el-popover
                  placement="top-start"
                  width="200"
                  trigger="hover"
                  offset="6"
                  :content="$t('rta.depositTip')">
    <i slot="reference" class="el-icon-info"></i>
  </el-popover>
              </span>
              <span>{{item.lockAmount}} CCASH
                <el-popover
                  placement="top-start"
                  width="200"
                  trigger="hover"
                  offset="6"
                  :content="$t('rta.lockTip')">
    <i slot="reference" class="el-icon-info"></i>
  </el-popover>
              </span>
            </p>
          </li>
        </ul>
        <div class="apply-from">
        <div class="insur-apply">
          <div class="el-form-item is-required el-form-item--medium">
            <label for="mt4Account" class="el-form-item__label">{{$t('rta.mt4')}}</label>
            <div class="el-form-item__content">
              <div class="el-input el-input--medium">
                <input autocomplete="off" name="mt4account"  v-model="rta.mt4Account" maxlength="6"  type="text" rows="2" class="el-input__inner" style="width:300px">
              </div>
            </div>
            <label class="clause"><span class="checkbox">
              <input type="checkbox" name="protocol" v-model="protocol">
              <b></b> </span><a href="#rta">{{$t('rta.protocol')}}</a>
            </label>
          </div>
          <div class="submit"><button type="button" @click="showPwdDialog" class="el-button el-button--primary el-button--medium" style="margin-bottom: 10px;"><span>{{$t('rta.apply')}}
                </span></button></div>
        </div>
        </div>
          <div class="rtc-table">
            <h4>{{$t('rta.lockrecord')}}</h4>
          <el-table :empty-text="$t('common.nodata')"
                    :data="rtaList"
                    style="width: 100%" row-class-name="align_center">
            <el-table-column
              header-align="center"
              prop="mt4Account"
              :label="$t('rta.mt4title')"
              width="150" />
            <el-table-column
              header-align="center"
              prop="symbol"
              :label="$t('rta.symbol')"
              width="150" />
            <el-table-column
              header-align="center"
              :label="$t('rta.lockAmount')"
              width="200" >
              <template slot-scope="scope">
                <span>{{scope.row.lockAmount}} ≈ {{Number.parseFloat(scope.row.lockCurrentAmount).toFixed(2)}} {{scope.row.currency}}</span>
              </template>
            </el-table-column>
            <el-table-column
              header-align="center"
              :label="$t('rta.lockPeriod')"
              width="150" >
              <template slot-scope="scope">
                <span>{{ scope.row.lockPeriod }} {{$t('rta.month')}}</span>
              </template>
            </el-table-column>
            <el-table-column
              header-align="center"
              :label="$t('rta.createTime')">
              <template slot-scope="scope">
                <span>{{ formatDate(scope.row.createTime) }}</span>
              </template>
            </el-table-column>
          </el-table>
          </div>
        </div>
        <!--申请中 END-->
        <!--申请成功-->
        <!--<div class="insur-suc" v-show="rtaStatus">-->
          <!--<div class=" flex-x-start" ><i class="iconfont icon-finish"></i>{{$t('rta.succ')}}</div>-->
          <!--<p>{{$t('rta.you_account')}}：{{rta.mt4Account}}</p>-->
          <!--<p>{{$t('rta.lockyouccash')}}：{{rta.isLockAmount}}</p>-->
        <!--</div>-->
        <!--申请成功 END-->
      </div>
      <!--说明-->
      <div class="explain" id="rta">
        <p>{{$t('rta.pri_descri')}}<br>
          {{$t('rta.tip1')}}<br/>
          {{$t('rta.tip2')}}<br/>
          {{$t('rta.tip3')}}</p>
      </div>
      <!--说明END-->
    </div>


  </div>
  <!--保险仓END-->
  <!--输入交易密码-->
  <div class="dialog_wrap" v-show="showPwd">
    <div class="dialog">
      <div class="dia_tit">

        <div><b>{{$t('rta.comfirmcontent')}}</b> <div class="float-r" @click="disablePwdDialog"><span id="dia_close" class="close">×</span></div></div>


      </div>
      <div class="dia_content" style="padding-top:10px;padding-bottom:10px">
        <p style="text-align: center">{{$t('rta.lockAmount')}} : {{showAmount}}</p>
        <!--<p style="text-align: center">RTA入金:100 个</p>-->
        <p style="text-align: center">{{$t('rta.mt4title')}} : {{rta.mt4Account}}</p>
        <!--<div class="el-form-item is-required el-form-item&#45;&#45;medium">-->

          <!--<div class="el-form-item__content">-->
            <!--<div class="el-input el-input&#45;&#45;medium">-->
              <!--<input autocomplete="off" name="tradePwd" v-model="rta.tradePwd" type="password" maxlength="6" rows="2" class="el-input__inner">-->
              <!--<div style="float:right;" ><router-link to="addTradePwd" >{{  this.user.isExitTradePwd === 0?$t('fund.no_pay_password'):$t('login.forgetpwd')}}</router-link></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </div>
      <div class="dia_submit flex-box">
        <button class="btn btn_submit btn-primary" style="margin-right:10px" pro_name="btn_submit" @click="disablePwdDialog">{{$t('rta.cancel')}} </button>
        <button class="btn btn_submit btn-primary" pro_name="btn_submit" @click="submitRtalock" :disabled="sumlock">{{$t('rta.ok')}} </button>
      </div>
    </div>
    <div class="dialog_extra"></div>
  </div>
  <!--输入交易密码END-->
  </div>
</template>

<script>
  import {reloadQuotation,onAction,removeListenRuner} from '@/utils/quotation'
  import {rtalock, rtaStatus} from '@/api/rta'
  import {formatDate} from "../../utils/stringUtil";
  import {mapGetters} from 'vuex'
    export default {
        name: "rta-lock",
      computed: {
        ...mapGetters(['user']),
        // needCcash(){
        //   this.rta.lockAmount=(Number.parseFloat(this.lockusd)/Number.parseFloat(this.ccashQuota)).toFixed(2)
        //   return this.rta.lockAmount;
        // }
      },
      data () {
        return {
          // lockusd:0,
          protocol:false,//是否已同意协议
          currency:'USD',
          ccashQuota:0,
          // rtaStatus:false,
          showPwd:false,
          lockAmountList:[],//获取会员等级集合
          rtaList:[],//获取当前用户已申请的会员列表
          availableAmount:0,//可用余额
          exchangeRate: 1, //实时汇率
          sellteMarket: '', // 基准市场
          showAmount:0,
          sumlock:false,
          // listLoading: true,
          // listQuery: {
          //   page: 1,
          //   limit: 10,
          // },
          rta:{
            mt4Account:'',
            lockAmountId:null,
            symbol:'CCASH',
            tradePwd:'',
          }
        }
      },
      created () {
        removeListenRuner('reloadSymbolKline')
        removeListenRuner('reloadOrders')
        removeListenRuner('fbOrders')
        removeListenRuner('reloadGearQuotation')
        reloadQuotation()
        onAction('reloadQuotation',(rsp)=>{
          let quotation=rsp.list
          if(quotation.symbol==='CCASH/'+this.sellteMarket){
            this.ccashQuota = quotation.lastPrice
          }
        })
        onAction('reloadRate',(rsp)=> {  //实时行情
          let rateList=rsp.list
          this.calExchangeRate(rateList);
        })
        this.initStatus()
      },
      methods:{
          initStatus(){
            rtaStatus()
              .then(response => {
                if (response.code === 200) {
                  this.rtaList=response.data.rtaList;
                  this.currency=response.data.currency;
                  this.ccashQuota=response.data.ccashQuota;
                  this.lockAmountList=response.data.lockAmountList;
                  this.availableAmount=response.data.availableAmount;
                  this.sellteMarket = response.data.sellteMarket;
                  let rateList=response.data.rateList;
                  if(rateList){
                    this.calExchangeRate(rateList);
                  }
                }
              })
          },
        calExchangeRate(rateList){
          for(let i=0;i<rateList.length;i++){
            if(rateList[i].currencyName==='USD'+this.currency){
              let rateMap = rateList[i].rateMap;//包含usdt,goldt对currencyRate的汇率
              this.exchangeRate=rateMap[this.sellteMarket];//基准市场汇率;如果当前是人民币,基准市场是goldt,这个就是goldt/人民币的汇率
            }
          }
        },
        showPwdDialog(){
          if(!this.protocol){
            this.$message({
              message: this.$i18n.t('rta.agree'),
              type: 'error',
              center: true
            })
            return
          }
          if(this.rta.mt4Account===''){
            this.$message({
              message: this.$i18n.t('rta.err_account'),
              type: 'error',
              center: true
            })
            return
          }
            this.rta.tradePwd='';
          this.showPwd=true;
        },
        disablePwdDialog(){
          this.showPwd=false;
        },
        submitRtalock(){
          // if(this.rta.tradePwd===''){
          //   this.$message({
          //     message: this.$i18n.t('rta.err_tradepwd'),
          //     type: 'error',
          //     center: true
          //   })
          //   return;
          // }else
          if(!this.rta.lockAmountId){
            this.$message({
              message: this.$i18n.t('rta.locklevel'),
              type: 'error',
              center: true
            })
            return;
          }
          this.sumlock=true
          let $this=this;
          rtalock(this.rta).then(response => {
            if (response.code === 200) {
              this.showPwd=false
              this.$message({
                message: $this.$i18n.t('rta.succtip'),
                type: 'success',
                duration: 5000,
                onClose:function(){
                  $this.showPwd=false
                  $this.rta.mt4Account=''
                    $this.initStatus()
                  },
                  center: true
                })
                // setTimeout(function () {
              //   $this.showPwd=false
              //   $this.rta.mt4Account=''
              //   $this.initStatus()
              // }, 1000)
            }
            this.sumlock=false
          })
        },
        changeItem(amount) {
          let el = event.currentTarget
          let childs = el.parentNode.childNodes
          childs.forEach(v => {
            if (v === el) {
              v.firstChild.setAttribute('class','el-icon-success')
              v.setAttribute('class', 'active')
            } else {
              v.firstChild.setAttribute('class','')
              v.setAttribute('class', '')
            }
          })
          this.rta.lockAmountId=el.value;
          this.showAmount=amount;
        },
        formatDate(dateTime){
          var clientTime=new Date(dateTime);
          return formatDate(clientTime,'yyyy-MM-dd hh:mm:ss')
        }
      }
    }
</script>


<style rel='stylesheet/scss' lang='scss'>
  @import 'src/styles/nc.scss';
</style>
