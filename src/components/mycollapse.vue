<template>
<div>
    <h1>写成了模板。。。</h1>
 <nyc-collapse :rend='rend'>
        <template slot="one" slot-scope="props">
            <div @click ="changeflag" class ="title title1">
                {{props.title}}
            </div>
            <transition name ="show">
                <div v-show="flag" class= "text">
                {{props.text}}
            </div>
            </transition>
             <transition name ="info-show">
                <div v-show="flag" class= "text">
                {{props.info}}
            </div>
            </transition>
        </template>
    </nyc-collapse>
     <nyc-collapse :rend='rend'>
        <template slot="one" slot-scope="props">
            <div @click ="changeflag1" class ="title">
                {{props.title}}
            </div>
            <transition name ="show">
                <div v-show="flag1" class= "text">
                {{props.text}}
            </div>
            </transition>
             <transition name ="info-show">
                <div v-show="flag1" class= "text">
                {{props.info}}
            </div>
            </transition>
        </template>
    </nyc-collapse>
</div>
</template>
<script>
import nycCollapse from './common/nyc-collapse'
export default {
    data(){
        return {
          rend:{
              title: '一致性',
             text:`与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。`,
            info:`页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。`
          },
          flag :false,
          flag1:false,
          control:true
        }
    },
  name :'mycollapse',
  components:{
      nycCollapse
  },
  methods:{
      changeflag(){
          this.flag = !this.flag;
        this.flag1 = false;          
      },
      changeflag1(){
        this.flag1 = !this.flag1;
        this.flag = false;
      }
  }
}
</script>
<style lang="scss" scoped>
.title:not(.title1){
    cursor: pointer;
    width: 820px;
    height: 49px;
    color: #5E5E5E;
    font-size: 14px;
    line-height: 49px;
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
    &:hover{
        color: #EC5851;
    }
}
.title1{
        cursor: pointer;
    width: 820px;
    height: 49px;
    color: #5E5E5E;
    font-size: 14px;
    line-height: 49px;
    border-top: 1px solid #999999;
        &:hover{
        color: #EC5851;
    }
    // border-bottom: 1px solid #999999;
}
.text{
    width: 820px;
    font-size: 14px;
    color: #5E5E5E;
    line-height: 21px;
    border-bottom: 1px solid #999999;
}
.show-enter{
        opacity: 0;
        transform: translateY(-51px)
}
.show-enter-to{
    opacity: 1;
        transform: translateY(0px)    
}
.show-enter-active{
    transition: 1s ease-in all; 
}
.show-leave{
    opacity: 1;
        transform: translateY(0px)        
}
.show-leave-to{
    opacity: 0;
        transform: translateY(-51px)    
}
.show-leave-active{
    transition: 0.5s ease-out all; 
}

.info-show-enter{
        opacity: 0;
        transform: translateY(-73px)
}
.info-show-enter-to{
    opacity: 1;
        transform: translateY(0px)    
}
.info-show-enter-active{
    transition-delay: 1s;
    transition: 0.5s ease-in all 0.5s; 
}
.info-show-leave{
    opacity: 1;
        transform: translateY(0px)        
}
.info-show-leave-to{
    opacity: 0;
        transform: translateY(-73px)    
}
.info-show-leave-active{
    transition: 1s ease-out all; 
}
</style>

