<template>
  <div>
    <div class="layout_doc">
      <!--账户安全-->
      <div class="page_assetintro user-main">
        <div class="crumbs"><span>{{$t('common.contactus')}}</span></div>
        <div class="mod">
          <div class="cont"><div class="l_content">
            <div class="contact-us">
              <h1>{{$t('common.customerHelp')}}</h1>
              <p>{{$t('common.helpDetail')}}</p>
              <!--<ul>-->
                <!--<ol><img src="@/assets/images/language/langue-kr.png" width="30" height="19">한국어</ol>-->
                <!--<li>-->
                  <!--<p><span><img src="@/assets/images/mail.png" width="30" height="30"><a href="mailto:">exchange@udax.kr</a></span></p>-->
                  <!--<p><span><img src="@/assets/images/phone.png" width="30" height="30">(+82)1855-3651</span></p>-->
                  <!--<p><span><img src="@/assets/images/talk.png" width="30" height="30"><em><a href="https://pf.kakao.com/_xkgiQC/chat">@udax</a></em></span></p>-->
                  <!--&lt;!&ndash;<p><i class="el-icon-wechat"></i></p>&ndash;&gt;-->
                <!--</li>-->
              <!--</ul>-->
              <!--<ul>-->
                <!--<ol><img src="@/assets/images/language/langue-hk.png" width="30" height="19">香港</ol>-->
                <!--<li>-->
                  <!--&lt;!&ndash;<p><i class="el-icon-mail"></i>400888888</p>&ndash;&gt;-->
                  <!--&lt;!&ndash;<p><i class="el-icon-whatsapp"></i>400888888</p>&ndash;&gt;-->
                  <!--&lt;!&ndash;<p><i class="el-icon-talk"></i>400888888</p>&ndash;&gt;-->
                  <!--<p><span><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3595025286&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:3595025286:51" alt="您好，请问有什么可以帮到您" title="您好，请问有什么可以帮到您"/></a></span></p>-->
                  <!--<p><span><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3212256164&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:3212256164:51" alt="您好，请问有什么可以帮到您" title="您好，请问有什么可以帮到您"/></a></span></p>-->
                  <!--<p><span><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=3358256619&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:3358256619:51" alt="您好，请问有什么可以帮到您" title="您好，请问有什么可以帮到您"/></a></span></p>-->
                  <!--<p><span><img src="@/assets/images/wechat.png" width="30" height="30">udaxhkcs1</span></p>-->
                  <!--<p><span><img src="@/assets/images/wechat.png" width="30" height="30">udaxhkcs2</span></p>-->
                <!--</li>-->
              <!--</ul>-->
              <ul>
                <ol><img src="@/assets/images/language/langue-udax.png" width="30" height="19">PRO</ol>
                <li>
                  <!--<p><span><img src="@/assets/images/wechat.png" width="30" height="30">UDAX_Pro</span></p>-->
                  <p><span><img src="@/assets/images/mail.png" width="30" height="30"><a href="mailto:">cs@udax.pro</a></span></p>
                  <!--<p><span><img src="@/assets/images/whatsapp.png" width="30" height="30">+6011-36655482</span></p>-->
                  <!--<p><span><img src="@/assets/images/whatsapp.png" width="30" height="30">+6011-36655416</span></p>-->
                  <!--<p><span><img src="@/assets/images/whatsapp.png" width="30" height="30">+6011-36655309</span></p>-->
                  <!--<p><i class="el-icon-talk"></i>400888888</p>-->
                  <!--<p><i class="el-icon-wechat"></i>400888888</p>-->
                </li>
              </ul>
              <!--<table width="80%" border="2" bordercolor="#ccc" align="center" style="display:none">-->
                <!--<tr>-->
                  <!--<td>国家</td>-->
                  <!--<td>联系电话</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td>中国</td>-->
                  <!--<td>400888888</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td><img src="@/assets/images/language/langue-kr.png" width="30" height="19">한국어</td>-->
                  <!--<td>400888888</td>-->
                <!--</tr>-->
                <!--<tr>-->
                  <!--<td>Malaysia</td>-->
                  <!--<td>400888888</td>-->
                <!--</tr>-->
              <!--</table>-->


            </div>
          </div></div>
        </div>
      </div>
      <!--账户安全 END-->
    </div>
  </div>
</template>

<script>
  import {helps} from "../../api/help";
  import {escape2Html} from "../../utils/stringUtil";

  export default {
    name: "index",
    data(){
      return{
        helpMap:{}, //帮助集合
        helpTitle:'',
        helpTxt:''
      }
    },
    created(){
      this.getHelpList();
    },
    methods: {
      getHelpList(){
        let $this=this;
        helps().then((response)=>{
          if(response.code===200){
            $this.helpMap=response.data.helpMap;
          }
        })
      },
      showTxt(title,txt){
        this.helpTitle=title;
        if(txt){
          this.helpTxt=escape2Html(txt);
        }
      },
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/nc.scss";
</style>
