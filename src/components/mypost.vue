<template>
    <div>
        <nyc-post :showmethod="showmethod" :maxsize="213124214" @imgajax="imghandle"
          :imgnum ="10" :fomatarr="fomatarr" :repeat="repeat"/>
            <nyc-post showmethod="name" :maxsize="213124214" @imgajax="imghandle"
          :imgnum ="10" :fomatarr="fomatarr" :repeat="repeat"/>
             <nyc-post showmethod="name" :maxsize="21" @imgajax="imghandle"
          :imgnum ="10" :fomatarr="fomatarr" :repeat="repeat"/>
         <nyc-post showmethod="name" :maxsize="215465464" @imgajax="imghandle"
          :imgnum ="10" :fomatarr="fomatarr" repeat="true"/>
    </div>
</template>
<script>
import nycPost from './common/nyc-post'
export default {
  name :'mypost',
  data(){
    return{
      imgs:null
    }
  },
  components:{
    nycPost,
  },
  data(){
    return{
      fomatarr:['image/jpeg','image/png'],
      showmethod:'image',
      repeat : false
    }
  },
  computed:{
  },
  methods:{
    imghandle(arr){
        this.imgs = arr;
        // console.log(this.imgs);
    }
  }
}
//上传文件规则为不允许重   repeat控制是否允许重复
// 说明：maxsize   限制了最大的传输量     
//      showmethod   image/name     
// @imgajax   用来获取到img的src数组。可以自行处理，
//   fromdataname   是用来处理formdata进行交互的情况，可以自行加入name属性
</script>
<style <style lang="scss" scoped>
</style>
