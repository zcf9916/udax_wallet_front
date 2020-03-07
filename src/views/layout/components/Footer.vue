<template>
  <div class="layout_foot doc_foot">
    <div class="doc_foot_wrap">
      <dl>
        <dt>
          <h1><img src="@/assets/logo-foot.png" ></h1>
          <div><a href="https://coinmarketcap.com/" target="_blank"><img src="@/assets/coinmarketcap_1.png" ></a></div>
        </dt>

      </dl>
      <dl>
        <dt>
          <h2>{{$t('common.serviceSupport')}}</h2>
        </dt>
        <!--<dd><a href="#" target="_blank">{{$t('common.api')}}</a></dd>-->
        <dd><router-link to="help">{{$t('common.help')}}</router-link></dd>
        <dd><router-link to="intro">{{$t('common.coinIntro')}}</router-link></dd>
        <dd><router-link to="contactus">{{$t('common.contactus')}}</router-link></dd>
        <!--<dd><a href="#" target="_blank">交易申请及说明</a></dd>-->
      </dl>
      <dl>
        <dt>
          <h2>{{$t('common.about')}}</h2>
        </dt>
        <dd><router-link to="fees">{{$t('common.rate')}}</router-link></dd>
        <dd><router-link to="notice">{{$t('common.notice')}}</router-link></dd>
        <dd><router-link to="apiDocument">{{$t('apiManage.tip2')}}</router-link></dd>
        <!--<dd><a href="#" target="_blank">{{$t('common.aboutus')}}</a></dd>
        <dd><a href="#" target="_blank">{{$t('common.contactus')}}</a></dd>-->
      </dl>
      <dl>
        <dt>
          <h2>{{$t('common.law')}}</h2>
        </dt>
        <dd><router-link to="legal">{{$t('common.userProtocol')}}</router-link></dd>
        <dd><router-link to="privacy">{{$t('common.privacyClause')}}</router-link></dd>
        <!--<dd><a href="#" target="_blank">{{$t('common.legalDeclaration')}}</a></dd>-->
      </dl>
      <dl>
        <dt>
          <h2>{{$t('common.contactus')}}</h2>
        </dt>
        <dd class="email"><a href="mailto:">{{$t('common.connectEmail')}}</a></dd>
        
        <!--<dd class="icons">-->
          <!--<div class="icons_line"><a href="#" target="_blank"><i class="hb_icon_weibo"></i> </a><a href="javascript:void(0);" class="has_qr"><i class="hb_icon_wechat"></i>-->
            <!--<div class="qr_wechat"></div>-->
          <!--</a><a href="#" target="_blank"><i class="hb_icon_twitter"></i> </a><a href="#" target="_blank"><i class="hb_icon_telegram"></i></a></div>-->
          <!--<div><a href="#" target="_blank"><i class="hb_icon_youtube"></i> </a><a href="#" target="_blank"><i class="hb_icon_medium"></i></a></div>-->
        <!--</dd>-->
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: "indaxFooter"
  }
</script>
