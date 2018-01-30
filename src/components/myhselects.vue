<template>
    <div>
  <nyc-hselects :lis='li' :tas='tags'/>
  <nyc-hselects :lis='list'/>
    </div>
</template>
<script>
let list = [{
          "item":'选项0',
          "flag":false
      },{
          "flag":true,          
          "item":'选项1',          
      },{
          "item":'选项2',   
          "flag":true                 
      },{
          "item":'选项3',          
          "flag":true      
      },{
          "item":'选项4',    
          "flag":true                      
      },{
          "flag":true      ,
          "item":'选项5',          
      },{
          "flag":true      ,          
          "item":'选项6',          
      },{
          "flag":false      ,          
          "item":'选项7',          
      },{
          "flag":true      ,          
          "item":'选项8',          
      }];
      let li = [{
          "item":'选项0',
          "flag":false
      },{
          "flag":true,          
          "item":'选项1',          
      },{
          "item":'选项2',   
          "flag":true                 
      },{
          "item":'选项3',          
          "flag":true      
      },{
          "item":'选项4',    
          "flag":true                      
      },{
          "flag":true      ,
          "item":'选项5',          
      },{
          "flag":true      ,          
          "item":'选项6',          
      },{
          "flag":false      ,          
          "item":'选项7',          
      },{
          "flag":true      ,          
          "item":'选项8',          
      }];
  var tags=  [{ name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ];
import nycHselects from './common/nyc-hselects'
export default {
  name: 'myhselects',
  components:{
      nycHselects
  },
  data(){
      return{
            li,
            list,
            tags,
      }
  }
}
</script>
