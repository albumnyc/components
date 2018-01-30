<template>
<span>
<nyc-select :selections="buyTypes"></nyc-select>
</span>
</template>

<script>
import  nycSelect  from "./common/nyc-select.vue";
  export default {
  name : 'myselect', 
  data(){
      return{
        buyTypes: [
            {
            label: '入门版',
            value: 0,
            allow : true
            },
            {
            label: '中级版',
            value: 1,
            allow : false
            }, {
            label: 'dadq',
            value: 0,
            allow : true
            },
            {
            label: '中级werwer版',
            value: 1,
            allow : false
            },
        ]
      }
  },     
    components:{
        nycSelect
    }
}
</script>