// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.scss'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'
import Cookies from 'vue-cookies'

import i18n from './lang'
import {getToken} from "./utils/auth"; // Internationalization
import {formatAmount, format} from "./utils/stringUtil";


Vue.use(Cookies)
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.formatAmount = formatAmount
Vue.prototype.format = format
const SUCCESS_CODE=200;
// register global progress.
const whiteList = ['/login', '/register', '/forgetpwd', '/trader', '/index', '/agreement', '/help', '/notice', '/noticedetail', '/intro', '/fees', '/legal', '/privacy', '/contactus', '/fundtrade', '/otctrade', '/autoTrade'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/trader' });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
  }
});

var type = navigator.appName;
var lang;
if (type == "Netscape"){
  lang = navigator.language;//获取浏览器配置语言，支持非IE浏览器
}else{
  lang = navigator.browserLanguage;//获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
};
lang = lang.substr(0, 2);//获取浏览器配置语言前两位

Vue.prototype.getBrowseLang=function(){
  return lang;
}
const domain=document.domain.replace("www",'cdn');
if(sessionStorage.getItem("firstVisit")!=='true'&&!(Cookies.get('language'))){
  if(domain.indexOf("udax.kr")!== -1){
    i18n.locale = 'ko';
    store.dispatch('setLanguage', 'ko');
  }else if(domain.indexOf('udax.hk')!== -1){
    i18n.locale = 'zh';
    store.dispatch('setLanguage', 'zh');
  }else if(domain.indexOf('udax-id.com')!== -1){
    i18n.locale = 'in';
    store.dispatch('setLanguage', 'in');
  }else{
    i18n.locale = 'en';
    store.dispatch('setLanguage', 'en');
  }
  sessionStorage.setItem("firstVisit",'true')
}
Vue.prototype.subcribeUrl = "https://"+domain+"/udax/quotation";

//Vue.prototype.subcribeUrl = "http://"+domain+":8080/udax/quotation";

Vue.prototype.regPass = function(str){
  var passValid = /^(?=.*[a-zA-Z])(?=.*\d)[\s\S]{8,20}$/;
  return passValid.test(str);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})

export default lang
