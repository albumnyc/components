<template>
    <div class ="radio-box">
        <input type="radio" id="shit" :name ="name" :checked ="checked!=null">
         <i @click ="clickhandle" :class="['icon','iconfont',disabled!=null?'dis': 'i']">&#xe62b;</i>
        <span><slot></slot></span> 
    </div>
</template>
<script>
export default {
  name : 'nyc-radio',
  props:{
      disabled:{
          required:false,
        defult: null
      },
      checked:{
          required:false,
          default: null
      },
      name:{
          required:false,
          defult:'a'
      }
  },
  data(){
      return{
       checkflag :false
      }
  },
  methods:{
      clickhandle(e){
          if(this.disabled==null){
            let ele =e.target.previousElementSibling;
            ele.click();
          }
      }
  }
}
</script>
<style lang="scss" scoped>
*{
    font-size: 14px;
    user-select: none;
}
 @font-face {
     font-family: "iconfont";
          src: url('../../fonts/iconfont.eot'); /* IE9*/
          src: url('../../fonts/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('../../fonts/iconfont.woff') format('woff'), /* chrome, firefox */
          url('../../fonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
          url('../../fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
        }

        .iconfont {
          font-family:"iconfont" !important;
          font-size:16px;
          font-style:normal;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: 0.2px;
          -moz-osx-font-smoothing: grayscale;
        }
.radio-box {
    position: relative;
    display: inline-block;
    height: 21px;
    // width: 100px;
    input{
        display: none;
        box-sizing: border-box;
        position: absolute;
        left: 0px;
        z-index: 1000;
    }
    input:checked+.i{
        color: #ffffff;
        border: none;
        background:  #FE6F3D;
        line-height: 12px;        
    }
    input:checked+.dis{
        color: #5E5E5E;
        line-height: 12px;        
    }
    i{
        margin-top: 3px;
        vertical-align: bottom;
        display: inline-block;
        box-sizing: border-box;
        width: 13px;
        height: 13px;
        line-height: 12px;
        cursor: pointer;
        font-size: xx-small;
        left: 0px;
        position: absolute;
        color: #ffffff;
        border: 1px solid #BCBCBC;        
 
    }
    .i{
       &:hover{
        border: 1px solid #FE6F3D;
        }
    }
    .dis{
        background-color :#999999;
        border: 1px solid #5E5E5E;
        color: transparent;
        &:hover{
            cursor: not-allowed;
        }
    }
    span{
        margin-top: -3px;
        margin-left: 15px;
        vertical-align: middle;
    }
}
</style>

