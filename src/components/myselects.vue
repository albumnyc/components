<template>
<div>
    <ul >
    <nyc-selects v-for = "(item,index) in date" :data="item" :key="item.label" class="child"/>        
    </ul>
    </div>
</template>
<script>
 let date = [
            {
            label: '入门版',
            value: 0,
            allow : true
            },
            {
            label: '中级版',
            value: 1,
            allow : false,
            children:[{
                label: "中级dasafa",
                 value: 1,
                 allow : false,
                 children:[{
                        label: '大篮子',
                        allow: false
                 }]
            },{
               label: "终fafasfsgga",
                 value: 1,
                 allow : true,
            }]
            }, {
            label: 'dadq',
            value: 0,
            allow : true,
             children:[{
            label: "dasafa",
             value: 1,
             allow : true,
            }]
            },
            {
            label: 'werwer版',
            value: 1,
            allow : false
            },
        ]
import nycSelects from './common/nyc-selects.vue'
export default {
  name : 'myselects',
  data(){
      return {
          date,
      }
  },
  components:{
      nycSelects,
  },
  mounted(){
    //   console.log(1)
    //   console.log(nycSelects)
  }
}
</script>
<style <style lang="scss" scoped>
*{
    font-size: 14px;
    list-style: none;
}
ul{
    width: 360px;
    // .child{
    //     width: 100%;
    //    height: 32px;
    // }
}
</style>
