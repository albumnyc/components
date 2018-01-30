<template>
  <div>
      <nyc-button type="output" disabled>士大夫</nyc-button>
      <nyc-button type="choose" disabled>士大夫</nyc-button>
      <nyc-button type="sure" disabled>地方</nyc-button>
      <nyc-button type="cancel" >随便写</nyc-button>
      <nyc-button type="store" >随便写</nyc-button>
      <nyc-button type="store1" >随便写</nyc-button>
      <nyc-button type="allchoose" >随便写</nyc-button>
      <nyc-button type="select0" >随便写</nyc-button>
      <nyc-button type="select1" >随便写</nyc-button>
  </div>
</template>
<script>
import nycButton from './common/nyc-button';
export default {
  name : 'mybutton',
  data(){
    return{
    }
  },
  components:{
    nycButton,
  }
}
// select0,1筛选按钮
// 批量操作按钮  allchoose
//新建布局 new
//确认取消  sure cancel
//选择按扭。choose
//not 不可以
//保存系列  store store1
</script>
