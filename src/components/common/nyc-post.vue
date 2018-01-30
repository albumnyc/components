<template>
    <div>
      <div class ="file-box">
        <span>
          上传
        </span>
        <input type="file" ref= "input" @change="postimg($refs.input)" >
      </div>
      <div class="img-box" v-for="(item,index) in imgarr"  v-if="showmethod=='image'">
      <img :src="item.imgsrc"  class= "img" ref = "img" :name="fromdataname">
      </div>
      <ul class="name-box"  v-if="showmethod=='name'">
          <li v-for= "(item,index) in imgarr" @mouseenter = "changeflag(item)" @mouseleave="changeflag">
              <i class="icon iconfont logo">&#xe612;</i>
              <span>{{item.imgname}}
                </span> 
                <i class="icon iconfont posted"  v-show="logoflag!=item">
                    &#xe72b; 
                  </i>
                  <i class="icon iconfont posted delete" v-show="logoflag==item" @click="deletehandle(index)">
                    &#xe629;
                  </i>
            </li>
      </ul>
    </div>
</template>
<script>
export default {
  name :'nyc-post',
  props:{
      showmethod:{
          type: String,
          default : "image",
          require:false
      },
      maxsize:{
          type:Number,
          default : Infinity,
          required:false
      },
      fromdataname:{
        default: '',
        type: String
      },
      imgnum:{
        default : Infinity,
        type: Number
      },
      fomatarr:{
        default:['image/jpeg','image/png'],
        type : Array
      },
      repeat:{
          default : false,
          type :Boolean
      }
  },
  data(){
    return {
    imgarr:[],
    logoflag:'',
    ajaxarr:[],
    }
  },
  watch:{
      imgarr(){
      let self = this;        
          this.ajaxarr = [];
          this.imgarr.forEach((item)=>{
                  self.ajaxarr.push(item.imgsrc)
          })
          setTimeout(() => {
             self.$emit('imgajax',self.ajaxarr);      
          }, 0);
      }
  },
  methods:{
    postimg(source){
      let self = this;
      let file = source.files[0];
        let count  =0;
        if(!this.fomatarr.includes(file.type)){
          alert('格式不对。傻逼')
          return false;
        }
        if(!this.repeat){
            this.imgarr.forEach(function(item){
            if(item.imgname ==file.name){
            count++
            }
          })
        }
      if(count==0){
          if(file.size< this.maxsize ){
          let fr  = new FileReader();
          fr.onloadend=(e)=>{
            // console.log(e)
            this.imgarr.push({"imgsrc":e.target.result,"imgname":file.name})
          }
          fr.readAsDataURL(file);
          }
          else{
            alert(`不能超过${Math.ceil(this.maxsize/1024)}kb`)
          }
      }
    },
     changeflag(item){
      this.logoflag = item;
      },
      deletehandle(index){
        this.imgarr.splice(index,1)
      },
  },
 
}
</script>
<style lang="scss" scoped>
@import '../../scss/fonts';
@font-face {
    font-family: 'iconfont';
    src: url("../../fonts/iconfont.eot");
    src: url("../../fonts/iconfont.eot?#iefix") format("embedded-opentype"),
     url("../../fonts/iconfont.woff") format("woff"), 
     url("../../fonts/iconfont.ttf") format("truetype"), 
     url("../../fonts/iconfont.svg#iconfont") format("svg");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.file-box{
  width: 116px;
  height: 40px;
  background: #FE6F3D;
  overflow: hidden;
  color: #ffffff;
  position: relative;
  border-radius: 2px;
  input{
    opacity: 0;
          position: absolute;
        left: -200%;
        width: 300%;
        height: 100%;
        &:hover{
          cursor: pointer;
        }
  }
  span{
    display: inline-block;
    margin-top: 15%;
    transform: translateY(-50%);
}
}
.img-box{
  width: 200px;
  height: 200px;
  border: 1px solid rgba(242, 242, 242, 1);  
  float: left;
  overflow: hidden;
  .img{
  width: 100%;
  height: 100%;
}
}
.name-box{
  width: 300px;
  float: left;  
  margin:5px 0px;
  overflow: hidden;
  padding: 0px;
   li{
     float: left;
     overflow: hidden;
     text-align: left;
     list-style: none;
     font-size: 12px;
     border-radius: 2px;
    width: 100%;
    height: 25px;
    .posted,span,.logo{
      line-height: 25px;
    }
    span{
      vertical-align: middle;
       display: inline-block;
      width: 180px;      
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    }
    .posted{
      margin-right: 10px;
      color: #67c23a;
      float: right;
      font-size: 12px;      
    }
    .delete{
      color: rgba(#606266,0.2);
      &:hover{
       color: rgba(#606266,1)
      }
    }
    .logo{
      font-size: 12px;
      margin-left: 10px;
    }
    &:hover{
      background: #f5f7fa;
      cursor: pointer;
    }
}
}

</style>

