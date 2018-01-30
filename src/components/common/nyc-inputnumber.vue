<template>
    <div>
      <div class= 'box'>
          <div ref ="less" :class ="{not:key}" v-if="direction=='normal'"><i class="icon iconfont">&#xe679;</i>
            </div><input type="text" disabled 
            v-model="curval" ><div ref="add" :class ="{not:key1}" v-if="direction=='normal'"><i class="icon iconfont">&#xe614;</i>
            </div><span v-if="direction=='right'">
              <div ref="add" :class ="{not:key1}">
               <i class="icon iconfont">&#xe66d;</i>                
              </div>
              <div ref ="less" :class ="{not:key}">
               <i class="icon iconfont">&#xe611;</i>
              </div>
            </span>
      </div>
    </div>
</template>
<script>
export default {
  name :'nyc-inputnumber',
  data(){
    return {
    curval :this.value,
    flag :true,
    // direction :'right'
    }
  },
  computed:{
      key:{
        set(){
      return  this.curval ==this.minvalue
        },
        get(){
      return  this.curval ==this.minvalue          
        }
      },
       key1:{
        set(){
      return  this.curval ==this.maxvalue
        },
        get(){
      return  this.curval ==this.maxvalue          
        }
      }
  },
  props:{
    value: {
      type:[String,Number],
      default:1
    },
    step:{
       type:[Number],
      default:1
    },
    minvalue:{
      type:[Number],
      default:0
    },  
      maxvalue:{
      type:[Number],
      default:Infinity
    },
    direction:{
      default: 'normal'
    }
  },
  methods:{
    changeflag(){
      this.flag = false;
    }
  },
  watch:{
      curval(){
   if(this.minvalue==this.curval){
      this.key =true;
    }else if(this.maxvalue ==this.curval){
      this.key1 =true;
    }
      }
  },
  mounted(){
    // if(this.minvalue==this.curval){
    //   this.key =true;
    // }else if(this.maxvalue ==this.curval){
    //   this.key1 =true;
    // }
    var self= this;
    this.$refs.add.addEventListener('mousedown',function aa(){
              // console.log(this.value)          
      clearInterval(timer)
   let allow = true;          
            if(self.curval+self.step>self.maxvalue){
              self.curval = self.maxvalue;
                  return ;
            }else{
                  self.curval +=self.step;
            }
            var timer = setInterval(function a(){
              if(!allow){
                clearInterval(timer);
                }else{
                 if(self.curval+self.step>self.maxvalue){
              self.curval = self.maxvalue;                   
                  return ;
                }else{
                      self.curval +=self.step;
                }              
                }   
             },150)
            document.addEventListener('mouseup',function(){
              allow = false;
            },false)
      },false)
       this.$refs.less.addEventListener('mousedown',function aa(){
          clearInterval(timer)
         let allow = true;          
             if(self.curval-self.step>self.minvalue){
                 self.curval -=self.step;                
              }else{
                clearInterval(timer);
                self.curval = self.minvalue;
             }
            var timer = setInterval(function a(){
              if(!allow){
                clearInterval(timer);
                }else{
                  if(self.curval-self.step>self.minvalue){
                       self.curval -=self.step;                
                  }else{
                      clearInterval(timer);
                      self.curval = self.minvalue;
                  }
                }   
             },150)
            document.addEventListener('mouseup',function(){
              allow = false;
            },false)
          },false)
  }   
}
</script>
  <style type="text/css">

        @font-face {font-family: "iconfont";
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

    </style>
<style lang="scss" scoped>
*{
  user-select: none;
}
.box{
  height: 40px;
}
.box>div{
  vertical-align: middle;  
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #EDF1F2;
  line-height: 40px;
  box-sizing: border-box;
  margin: 0px;
  cursor: pointer;
  font-size: 20px;

}
div>span{
  display: inline-block;
    vertical-align: middle;  
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #EDF1F2;
  line-height: 40px;
  box-sizing: border-box;
  margin: 0px;
  cursor: pointer;
  font-size: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
      border-top: 1px solid #BCBCBC; 
  border-right: 1px solid #BCBCBC; 
  border-bottom: 1px solid #BCBCBC;
  div{
    width: 100%;
    box-sizing: border-box;
    height: 20px;
    line-height: 20px;
  }
  div:nth-of-type(1){
    border-bottom: 1px solid #BCBCBC;
  }
  div:nth-of-type(2){
    line-height: 16px;
  }
}
.box>div:nth-of-type(1){
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top: 1px solid #BCBCBC; 
  border-left: 1px solid #BCBCBC; 
  border-bottom: 1px solid #BCBCBC; 
}
.box>div:nth-of-type(2){
    border-top: 1px solid #BCBCBC; 
  border-right: 1px solid #BCBCBC; 
  border-bottom: 1px solid #BCBCBC;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
input{
  vertical-align: middle;
  box-shadow: none;outline: none;
  border: 1px solid #BCBCBC;
  box-sizing: border-box;  
  background-color: #ffffff;
  width: 100px;
  height: 40px;
  text-align: center;
  margin:0px;
  vertical-align: middle;
  cursor: crosshair;
}
.not{
  cursor: not-allowed !important;
  color: #BCBCBC;
}
i{
  font-size: 12px;
  line-height: 20px;
  vertical-align: middle;
}
</style>
