<template>
  <el-dropdown class='international' @command="handleSetLanguage">
    <div>
      <span v-if="language==='zh'"> 中文<i class="hb_icon_caret_down"></i></span>
      <!--<span v-else-if="language==='ms'"><img src="@/assets/images/language/langue-mys.png" width="30" height="19"> Malaysia<i class="hb_icon_caret_down"></i></span>-->
      <span v-else-if="language==='ko'"> 한국어<i class="hb_icon_caret_down"></i></span>
      <span v-else-if="language==='in'"> Indonesia<i class="hb_icon_caret_down"></i></span>
      <span v-else="language==='en'"> English<i class="hb_icon_caret_down"></i></span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="en" :disabled="language==='en'"> English</el-dropdown-item>
      <el-dropdown-item command="zh" :disabled="language==='zh'"> 中文</el-dropdown-item>
      <!--<el-dropdown-item command="ms" :disabled="language==='ms'"><img src="@/assets/images/language/langue-mys.png" width="30" height="19"> Malaysia</el-dropdown-item>-->
      <el-dropdown-item command="ko" :disabled="language==='ko'"> 한국어</el-dropdown-item>
      <el-dropdown-item command="in" :disabled="language==='in'"> Indonesia</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import {changeLanguage} from "../../api/login";

  export default {
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      let $this = this;
      changeLanguage(lang).then((response) => {
        if (response.code === 200) {
          if(lang==='ms'){
            $this.$i18n.locale = 'en';
            $this.$store.dispatch('setLanguage', 'en');
          }else{
            $this.$i18n.locale = lang;
            $this.$store.dispatch('setLanguage', lang);
          }
          this.$message({
            message: this.$i18n.t('common.changeLanguage'),
            type: 'success',
            onClose: function () {
              sessionStorage.setItem("firstVisit",'false')
              window.location.reload()
            }
          })

        }
      })




    }
  }
}
</script>

<!--<style scoped>-->
<!--.international-icon {-->
  <!--font-size: 20px;-->
  <!--cursor: pointer;-->
  <!--vertical-align: -5px!important;-->
<!--}-->
<!--</style>-->


