<template>
  <div>
  <div class="layout_doc">
    <!--API管理-->
    <div class="page_uc user-main">
      <div class="crumbs"><a href="#/apiManage" class="">{{$t('common.apiManage')}}</a><i>&gt;</i>{{$t('apiManage.createApi')}}</div>

      <div class="mod api_con">
        <div class="mod_bd">
          <el-form :model="apiManageForm" :rules="apiManageRules" ref="apiManageForm" label-position="left" class="form_set" autocomplete="on">
            <div class="group">
              <el-form-item prop="remark" :label="$t('common.remark')">
                <el-input  v-model="apiManageForm.remark" name="remark" v-bind:maxlength="128"></el-input>
              </el-form-item>
            </div>
            <div class="group">
              <el-form-item prop="bindaddress" :label="$t('apiManage.bindIp')">
                <el-input  v-model="apiManageForm.bindaddress" name="bindAddress" v-bind:maxlength="100"></el-input>
              </el-form-item>
            </div>
            <div class="submit">
              <el-button @click="apiCreate" name="apiManage" :disabled="issubmit">{{$t('common.submit')}}</el-button>
            </div>
          </el-form>
        </div>

      <div class="api-info">
        <h5>{{$t('apiManage.tip')}}</h5>
        <p>{{$t('apiManage.tip1')}} <a class="set"><router-link to="apiDocument">{{$t('apiManage.tip2')}}</router-link></a> {{$t('apiManage.tip3')}}</p>
        <p>{{$t('apiManage.tip4')}}</p>
        <p>{{$t('apiManage.tip5')}}</p>
      </div>
       <!--API List-->
      <div class="api-list">
        <h4>{{$t('apiManage.myApiKey')}}</h4>
        <el-table  :empty-text="$t('common.nodata')" :data="apiKeyList" style="width: 100%">
          <el-table-column prop="createTime" :label="$t('apiManage.createTime')" width="180"> </el-table-column>
          <el-table-column prop="remark" :label="$t('common.remark')"> </el-table-column>
          <el-table-column prop="accessKey" :label="$t('apiManage.accessKey')"></el-table-column>
          <el-table-column  prop="bindaddress" :label="$t('apiManage.bindIp')"> </el-table-column>
          <el-table-column width="180" prop="remainDays" :label="$t('apiManage.remainDay')"> </el-table-column>
          <el-table-column width="180" :label="$t('common.status')">
            <template slot-scope="scope">
              <el-tag size="medium" v-if="scope.row.status===1">{{$t('apiManage.normal')}}</el-tag>
              <el-tag size="medium" v-else-if="scope.row.status===0">{{$t('apiManage.Invalid')}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column width="180" :label="$t('common.operation')">
            <template slot-scope="scope">
              <el-button @click="editViewShow=true,apiManageEditForm.id=scope.row.id,apiManageEditForm.remark=scope.row.remark,apiManageEditForm.bindaddress=scope.row.bindaddress" type="text" size="small">{{$t('common.edit')}}</el-button>
              <el-button @click="deleteViewShow=true,deleteId=scope.row.id" type="text" size="small">{{$t('common.delete')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!--API管理 END-->
  </div>
      <!--创建成功-->
      <div class="dialog_wrap api-suc" style="display: block;" v-show="creatSuccessShow">
        <div class="dialog" style="width:600px;">
          <div class="dia_tit">
            <div><b>{{$t('apiManage.createSuccess')}}</b>
              <div class="float-r"><span class="close" id="dia_close" @click="creatSuccessShow=false">×</span></div>
            </div>
          </div>
          <div class="dia_content" style="max-height:400px;">
            <form class="el-form form_set el-form--label-left" autocomplete="on">
              <div class="group">
                <label for="textword" class="">Access Key</label>
                <div aria-haspopup="listbox" role="combobox" aria-owns="el-autocomplete-1618" class="el-autocomplete">
                  <div class="el-input el-input--suffix">
                    <input type="text" readonly autocomplete="off" v-model="this.accessKey" class="el-input__inner">
                    <span class="el-input__suffix">
                      <span class="el-input__suffix-inner"><a href="javascript:;" class="link-copy copyBtn" @click="handleCopy(accessKey,$event)">{{$t('assets.copy')}}</a></span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="group">
                <label for="textword" class=" flex-space-t">Secret Key<span class="red">{{$t('apiManage.secretKeyTip')}}</span></label>
                <div aria-haspopup="listbox" role="combobox" aria-owns="el-autocomplete-1618" class="el-autocomplete">
                  <div class="el-input el-input--suffix">
                      <input type="text" readonly autocomplete="off" v-model="this.secretKey" class="el-input__inner">
                      <span class="el-input__suffix">
                        <span class="el-input__suffix-inner"><a href="javascript:;" class="link-copy copyBtn" @click="handleCopy(secretKey,$event)">{{$t('assets.copy')}}</a></span>
                      </span>
                  </div>
                </div>
              </div>
              <div class="group">
                <label for="textword" class=" flex-space-t">{{$t('apiManage.bindIp2')}}</label>
                <div class="el-input"><input type="text" readonly v-model="this.bindIp" autocomplete="off" placeholder="" class="el-input__inner"></div>
              </div>
              <div class="api-info">
                <h5>{{$t('apiManage.tip')}}</h5>
                <p>{{$t('apiManage.tip6')}}</p>
                <p>{{$t('apiManage.tip7')}}</p>
              </div>
              <div class="submit"><button type="button" class="el-button el-button--default el-button--medium" @click="creatSuccessShow=false"><span>{{$t('common.confirm')}}</span></button></div>
            </form>
          </div>
        </div>
        <div class="dialog_extra"></div>
      </div>
    </div> <!--创建成功弹框结束-->

      <!--编辑弹框开始-->
      <div class="dialog_wrap mod_bd" style="display: block;" v-show="editViewShow">
        <div class="dialog" style="width:600px;">
          <div class="dia_tit">
            <div><b>{{$t('apiManage.editApi')}}</b>
              <div class="float-r"><span class="close" id="dia_close" @click="editViewShow=false">×</span></div>
            </div>
          </div>
          <div class="dia_content" style="max-height:400px;padding-top:20px;">
            <el-form :model="apiManageEditForm" :rules="apiManageRules" ref="apiManageEditForm" label-position="left" class="form_set" autocomplete="on">
              <div class="group">
                <el-form-item prop="remark" :label="$t('common.remark')">
                  <el-input  v-model="apiManageEditForm.remark" name="remark" v-bind:maxlength="128"></el-input>
                </el-form-item>
              </div>
              <div class="group">
                <el-form-item prop="bindaddress" :label="$t('apiManage.bindIp3')">
                  <el-input  v-model="apiManageEditForm.bindaddress" name="bindaddress" v-bind:maxlength="100"></el-input>
                </el-form-item>
              </div>
              <div class="submit">
                <el-button @click="handleEdit()" name="apiManage" :disabled="issubmit">{{$t('common.save')}}</el-button>
              </div>
            </el-form>
          </div>
        </div>
        <div class="dialog_extra"></div>
      </div> <!--编辑弹框结束-->

    <!--删除 Begin-->
    <div class="dialog_wrap otc-tips" style="display: block;" v-show="deleteViewShow">
      <div class="dialog" style="width:524px;">
        <!-- <div class="dia_tit">
          <div><b>{{$t('otc.cancelAppeal')}}</b>
            <div class="float-r"><span class="close" id="dia_close" @click="deleteViewShow=false">×</span></div>
          </div>
        </div> -->
        <div class="dia_content tips-removal">
          <div class="text">{{$t('apiManage.confirmDelete')}}</div>
          <div class="icon-btn"><i class="iconfont icon-close" @click="deleteViewShow=false"></i><i
            class="iconfont icon-done"  @click="deleteApiClick"></i></div>
        </div>

      </div>
      <div class="dialog_extra"></div>
    </div>
    <!--删除 End-->


  <el-form autoComplete="on" :model="apiManageForm" :rules="VerificationCodeRules" ref="VerificationCodeForm" class="form_set"
             label-position="left">
  <!--弹出窗口开始-->
  <div class="dialog_wrap" style="display: block;" v-show="showDialog">
    <div class="dialog">
      <div class="dia_tit">
        <div><b>{{$t('common.smsCode')}}</b><span class="close" @click="showDialog=false;buttonStatus=false;">×</span></div>
        <p data="dia_title" class="dia_tit_more"></p>
      </div>
      <div class="dia_content">
        <!--手机验证-->
        <div class="group reg_phone_show" v-show="showDialogMobile">
            <el-form-item prop="mobileCode" :label="user.mobile?substrCard:''">
              <div class="group">
                <send-sms-code   :phone="user.mobile"  :send-msg-type="21"  :send-type="'1'" v-model="apiManageForm.mobileCode"></send-sms-code>
              </div>
            </el-form-item>
        </div>
        <!--邮箱验证-->
        <div class="group reg_mail_show" v-show="showDialogEmail">
          <el-form-item prop="emailCode" :label="$t('common.emailCode')">
            <div class="group">
              <send-sms-code   :phone="user.email"  :send-msg-type="21"  :send-type="'2'" v-model="apiManageForm.emailCode"></send-sms-code>
            </div>
          </el-form-item>
        </div>

        </div>
        <div class="dia_submit"><span class="error_notice"></span>
          <el-button @click="apiManageRequest" :disabled="buttonStatus">{{$t('register.sendSms')}}</el-button>
        </div>
      </div>
    <div class="dialog_extra"></div>
      </div>

<!--弹出窗口结束-->
 </el-form>
 </div>
</template>

<script>
  import {getApiKeyList,createNewApi,deleteApi} from '@/api/user'
  import clip from '../../utils/clipboard'
  import {mapGetters} from 'vuex';
  import SendSmsCode from "../common/sendSmsCode";
  import {strString} from "@/utils/stringUtil";

  export default {
    components: {SendSmsCode},
    name: "apiManage",
    computed: {
      ...mapGetters(['user', 'token']),
      substrCard: function () {
        if (this.user.mobile) {
          return strString(this.user.mobile);
        }
      }
    },
    data() {
      const validMobileCode= (rule, value, callback) => {
          if(this.user.openPhoneValid===1){
            if (value.length!==6) {
              callback(new Error( this.$i18n.t('valid.msgcode')))
            }else if(!/^[0-9]*[1-9][0-9]*$/g.test(value)){
              callback(new Error( this.$i18n.t('valid.msgcode')))
            } else {
              callback()
            }
          }else{
            callback()
          }
      }
      const validEmailCode= (rule, value, callback) => {
          if(this.user.openEmailValid===1){
            if (value.length!==6) {
              callback(new Error( this.$i18n.t('valid.msgcode')))
            }else if(!/^[0-9]*[1-9][0-9]*$/g.test(value)){
              callback(new Error( this.$i18n.t('valid.msgcode')))
            } else {
              callback()
            }
          }else{
            callback()
          }
      }
      return {
        activeName: 'apiManage',
        creatSuccessShow: false,
        editViewShow: false,
        deleteViewShow: false,
        accessKey: null,
        secretKey: null,
        bindIp: null,
        apiKeyList: [],
        apiManageForm: {
          remark:'',
          bindaddress:'',
          mobileCode:'',
          emailCode:''
        },
        apiManageEditForm: {
          id: '',
          remark:'',
          bindaddress:'',
          mobileCode:'',
          emailCode:''
        },
        apiManageRules:{
          remark: [{required: true,message: this.$i18n.t('apiManage.requireRemark'),trigger: 'blur'}],
        },
        VerificationCodeRules: {
          mobileCode: [{validator:validMobileCode}],
          emailCode: [{validator:validEmailCode}]
        },
        mobile:null,
        email:null,
        operateFlag:null,//操作标识 是创建还是编辑
        showDialog:false,
        showDialogMobile:false,
        showDialogEmail:false,
        buttonStatus:false,
        issubmit:false,  //是否已提交表单
        deleteId:'',//删除Id
      }
    },
    created(){
      this.getApiKeyList();
    },
    methods:{
      getApiKeyList(){
        getApiKeyList().then((response)=>{
          if(response.code === 200){
            this.apiKeyList = response.rows;
          }
        });
      },
      handleCopy(text, event) {
        clip(text, event)
      },
      apiCreate(){
        let $this=this;
        this.$refs.apiManageForm.validate(valid => {
          if (!valid) return
          if($this.apiKeyList.length>4){
            $this.$message({
              message:  $this.$i18n.t('apiManage.fiveApiKey'),
              type: 'error',
              center: true
            })
            return;
          }
          if($this.apiManageForm.bindaddress){
            if($this.apiManageForm.bindaddress.split(",").length>3){
              $this.$message({
                message:  $this.$i18n.t('apiManage.fourIpAddress'),
                type: 'error',
                center: true
              })
              return;
            }
          }
          this.showDialog = true;
          this.operateFlag = 'create';
          if(this.user.openPhoneValid===1){
            this.showDialogMobile = true;
          }
          if(this.user.openEmailValid===1){
            this.showDialogEmail = true;
          }
        });
      },
      handleEdit(){
        let $this=this;
        this.$refs.apiManageEditForm.validate(valid => {
          if (!valid) return
          if($this.apiManageEditForm.bindaddress){
            if($this.apiManageEditForm.bindaddress.split(",").length>3){
              $this.$message({
                message:  $this.$i18n.t('apiManage.fourIpAddress'),
                type: 'error',
                center: true
              })
              return;
            }
          }
          this.showDialog = true;
          this.operateFlag = 'edit';
          if(this.user.openPhoneValid===1){
            this.showDialogMobile = true;
          }
          if(this.user.openEmailValid===1){
            this.showDialogEmail = true;
          }
        });
      },
      apiManageRequest(){
         let $this = this;
         this.$refs.VerificationCodeForm.validate(isValid => {
         if (isValid) {
            if($this.operateFlag === 'create'){
              $this.createApi();
            }else if($this.operateFlag === 'edit'){
              $this.editApi();
            }
          }
        })
      },
      createApi(){
        let $this = this;
        var param = {remark:this.apiManageForm.remark,bindaddress:this.apiManageForm.bindaddress,mobileCode:this.apiManageForm.mobileCode,
        emailCode:this.apiManageForm.emailCode};
        this.buttonStatus = true;
        createNewApi(param).then((response)=>{
          this.buttonStatus = false;
          if(response.code===200){
            this.showDialog=false;
            this.creatSuccessShow = true;
            this.accessKey = response.data.accessKey;
            this.secretKey = response.data.secretKey;
            this.bindIp = response.data.bindIp?response.data.bindIp:'--';
            this.getApiKeyList();
            $this.$message({
              message: $this.$i18n.t('apiManage.createSuccess'),
              type: 'success',
              center: true,
            })
          }
        });
      },
      editApi(){
        let $this = this;
        var param = {id:this.apiManageEditForm.id,remark:this.apiManageEditForm.remark,bindaddress:this.apiManageEditForm.bindaddress,mobileCode:this.apiManageForm.mobileCode,
        emailCode:this.apiManageForm.emailCode};
        this.buttonStatus = true;
        createNewApi(param).then((response)=>{
          this.buttonStatus = false;
          if(response.code===200){
            this.showDialog=false;
            this.editViewShow = false;
            this.getApiKeyList();
            $this.$message({
              message: $this.$i18n.t('apiManage.editSuccess'),
              type: 'success',
              center: true,
            })
          }
        });
      },
      deleteApiClick(){
        let $this = this;
        deleteApi(this.deleteId).then((response)=>{
          if(response.code===200){
            this.deleteViewShow=false;
            this.getApiKeyList();
            $this.$message({
              message: $this.$i18n.t('common.deleteSuccess'),
              type: 'success',
              center: true,
            })
          }
        });

      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/user.scss";
</style>
