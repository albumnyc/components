<template>
<div>
    <div class= "box">
 <label for="nyc">
    <p name="nyc" readonly @click="focushandle" ref="p">
               <nyc-tag class="tagger"
            v-for="(tag,tagindex) in tags"
            :key="tagindex"
            tagindex = "tagindex"
            closable
            @close = "closehandle($event,tagindex)"
            :type="tag.type">
            {{tag.name}}
        </nyc-tag>    
    </p>
</label>
    <ul v-show="flag">
        <li v-for="(item, index) in list" :key="item.item" 
       :class="{forfide:!item.flag}" @click="addhandle(item,index)">{{item.item}}</li>
    </ul>
</div>
    </div>
</template>
<script>
import nycTag from './nyc-tag'
export default {
  name : 'nyc-hselects',
  components:{
      nycTag
  },
  props:{
      lis:{
          require:true
      },
      tas:{
          required:false,
          default(){return []},
          type: Array
      }
  },
  data(){
      return{
        //   tags:this.tas,
              //代表标签的集合
          flag:false,
          list:this.lis
      }
  },
  computed:{
        tags(){
            return this.tas;
        }
  },
  methods:{
      focushandle(){
         this.flag = !this.flag;
      },
        closehandle(e,i){    //addtag需要这个method
          let str= this.tags[i].name;
          let queue = null;
            this.list.forEach(function(item,index){
                    if(item.item==str){
                        queue = index;
                    }
            })
            this.list[queue].flag =true;
        // console.log(e.target.parentNode.innerText)
    //    let str= e.target.parentNode.innerText.slice(0,-2);
    //    str= str.slice(2)
        // this.list.forEach(function(item,index){
        //     // console.log('|'+str +'|');
        //     // console.log('|'+item.item +'|')
        //     if(item.item !== str){
        //         console.log( typeof item.item)
        //     //     console.log('|'+str+'|')
        //     // console.log('|'+item.item +'|')                
        //         // console.log(index)
        //         return item.index;
        //     }
        // })
        // for(var i=0;i<this.list.length;i++){
        //     if(this.list[i].item==str){
        //         console.log('hahhah')
        //     }
        // }
        this.tags.splice(i,1);
        },
        addhandle(val){     //  addtag的method
        //   console.log(val);
          if(val.flag){
             this.tags.push({name:val.item})
                val.flag=false;  
          }   
     }
  },
  watch:{
      tags(){
          if(this.tags.length>5){
              this.$refs.p.style.height =(this.tags.length-this.tags.length%5+5)/5 *28+'px';
          }else{
              this.$refs.p.style.height ='30px'
          }
      }
  }
}
</script>
<style lang="scss" scoped>
*{
    list-style:none;
    user-select: none;
}
.box{
    width: 360px;
    float: left;
    p{
        margin: 0px;
        padding: 0px;
        border: 1px solid #BCBCBC;
        box-sizing: border-box;
    width: 100%;
    height: 30px;
    outline: unset;
    .tagger{
        margin-top: 3px;
    }
}
ul{
    margin: 0;
    padding: 0px;
    width: 100%;
    height: 170px;
    overflow-y: scroll;
    border: 1px solid #BCBCBC;
    border-top: none;
    box-sizing: border-box;
    li{
        width: 100%;
        cursor: pointer;
        border-radius: 2px;
        color: #5e5e5e;
        &:hover{
            background: rgba(242, 245, 245, 1);
            border-color: rgba(228, 228, 228, 1);
        }

    }
        .forfide{
            cursor: not-allowed;
        color: #BCBCBC;
        }
}
}

</style>

