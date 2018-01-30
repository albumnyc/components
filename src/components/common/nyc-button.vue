<template>
    <div>
        <button :type="type" :class="caltype">
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
  name : 'nyc-button',
  computed:{
        caltype(){
            if(this.disabled!=null){
                var arr = ['select0',"sure",'store'];
                if(arr.includes(this.type)){
                return "not"
                }
                return "not1"
            }else{
                switch(this.type){
                    case "output" : return "output";
                    case "select0" : return "select0";
                    case "select1" : return "select1";
                    case "allchoose" : return "allchoose";
                    case "new" : return "new";
                    case "sure" : return "sure";
                    case "cancel" : return "cancel";
                    case "choose" : return "choose";
                    case "not" : return "not";
                    case "not1" : return "not1";
                    case "store": return "store";
                    case "store1" : return "store1"
                }
             }
        }
  },
  props:{
      type:{
          required: true
      },
      disabled:{
          required:false
      }
  }
}
</script>
<style lang="scss" scoped>
*{
    font-size:14px;
}
@mixin btn($background,$color,$width,$height,$hoverbg){
    background-color: $background;
    color: $color;
    width: $width;
    height: $height;
    cursor: pointer;
    &:hover{
        background-color: $hoverbg;
    }
}
.output{
    background:#7266BA;
    width:60px;
    height: 30px;
    color: #ffffff;
    &:hover{
        background: #6254B2;
    }
}
.select0,.select1{
    width:50px;
    height: 30px;
    color: #ffffff;
}
.select0{
    background: #FE6F3D;
    color: #ffffff;
    &:hover{
        background:#FF6600
    }
}
.select1{
        cursor: pointer;
        background: #ffffff;
        color: #FE6F3D;
        border: 1px solid #FE6F3D;
    &:hover{
        color:#FF6600;
        border:1px solid  #FF6600;
    }
}
.allchoose{
    width: 103px;
    height: 30px;
        background: #ff9900;
    color: #ffffff;
    &:hover{
        background:#EB8601;
    }
}
.new{
    width: 80px;
    height: 30px;
    color: #ffffff;
    background: #27C24C;
    &:hover{
        background: #24AD43;
    }
}
.sure,.cancel{
        width: 80px;
        height: 30px;
}
.sure{
     background: #ffffff;
     border: 1px solid #FE6F3D;
    color: #FE6F3D;
    &:hover{
        color:#FF6600;
     border: 1px solid #FF6600;        
    }
}
.cancel{
        background: #FE6F3D;
    color: #ffffff;
    &:hover{
        background:#FF6600
    }
}
.choose{
 @include btn(#00ABEF,#ffffff,80px,30px,#18A9D5);    
}
.not{
    @include btn(#ffffff,#BCBCBC,80px,30px,#ffffff);
    cursor: not-allowed;
    border: 1px solid #BCBCBC;
}
.not1{
    @include btn(#BCBCBC,#ffffff,80px,30px,#BCBCBC);    
    cursor: not-allowed;
}
.store{
    @include btn (#ffffff,#EF5050,80px,30px,#EE3939)
}
.store1{
    @include btn (#EF5050,#ffffff,80px,30px,#ffffff)
}
button{
    outline: none;
    border: none;
    box-shadow: unset;
    border-radius: 2px;
    box-sizing: border-box;
    cursor: pointer;
}
</style>

