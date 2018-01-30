<template>
<div class= "tag-box">
<nyc-tag
  v-for="(tag,tagindex) in tags"
  :key="tagindex"
  tagindex = "tagindex"
  closable
  @close = "closehandle($event,tagindex)"
  :type="tag.type">
  {{tag.name}}
</nyc-tag>
<addtag @addtag='addhandle(val)' :val.sync ='val'/>  
</div>
</template>
<script>
import nycTag from './common/nyc-tag'
import addtag from './common/nyc-addtag.vue'
// addtag是添加标签
//tag是标签
  export default {
    name : 'mytag',
    components:{
      nycTag,
      addtag
    },
    
    data() {
      return {
        tags: [//代表标签的集合
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ],
        val:''  //addtag的默认值
      };
    },
      methods:{
        closehandle(e,i){    //addtag需要这个method
        this.tags.splice(i,1);
        },
        addhandle(val){     //  addtag的method
          console.log(val);
          if(val!=''){
          let count = 0;
          this.tags.forEach((tag)=>{   //
            // console.log(this)
              if(tag["name"]!==val){
                    count++;
              }
              if(count==this.tags.length){
                this.tags.push({"name":this.val})
              }
          })   
          }     
        }
       }
  }
</script>
<style lang="scss" scoped>
</style>
