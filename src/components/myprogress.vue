<template>
<span>
    <nyc-progress :percentage="0"></nyc-progress>
    <nyc-progress :percentage="70"></nyc-progress>
    <nyc-progress :percentage="100" status="success"></nyc-progress>
    <nyc-progress :percentage="50" status="exception"></nyc-progress>
    <nyc-progress :text-inside="true" :stroke-width="18" :percentage="0"></nyc-progress>
<nyc-progress :text-inside="true" :stroke-width="18" :percentage="70"></nyc-progress>
<nyc-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></nyc-progress>
<nyc-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></nyc-progress>
    <nyc-progress type="circle" :percentage="0"></nyc-progress>
    <nyc-progress type="circle" :percentage="25"></nyc-progress>
    <nyc-progress type="circle" :percentage="100" status="success"></nyc-progress>
    <nyc-progress type="circle" :percentage="50" status="exception"></nyc-progress>
</span>
</template>
<script>
import nycProgress from './common/nyc-progress.vue'
export default {
  name : 'myprogress',
components:{
    nycProgress
}
}
</script>
<style <style lang="scss" scoped>
span{
    float: left;
}
</style>
