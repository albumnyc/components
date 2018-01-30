<template>
<div>
    <div id="tree">
    <nyc-choose :isroot="true" :tree="tree"></nyc-choose>
  </div>
  <textarea id="treeDataJSON" style="display: none;">
{
  "客户管理": {
    "我的客户": {
      "新分配": {},
      "跟进中": {},
      "签单客户": {},
      "长期客户": {}
    },
    "长期客户权限": {
      "设为长期客户": {},
      "还原长期客户": {}
    }
  },
  "采购列表": {
    "添加异常客情": {},
    "添加采购单": {},
    "采购退货单列表": {},
    "供应商管理": {},
    "供应商联系人": {},
    "品牌列表": {
      "宝洁": {},
      "乐视": {
        "乐视网": {},
        "乐视手机": {
          "乐视手机 1": {},
          "乐视手机 2": {},
          "乐视手机 3": {},
          "乐视手机 4": {},
          "乐视手机 5": {
            "体验超深层级": {
              "继续体验超深层级": {
                "依然体验超深层级": {},
                "依然体验超深层级 2": {}
              }
            }
          }
        },
        "乐视电视": {}
      },
      "可口可乐": {},
      "圣象": {}
    }
  }
}
</textarea>
</div>
</template>

<script>
var treeData = '';
import nycChoose from './common/nyc-choose'
export default {
  name :'mychoose',
  components:{
      nycChoose
  },
  data(){
      return{
    tree: treeData
      }
  },
  methods: {
    // 返回最终数据
    getResult: function() {
      return Object.assign({}, this.tree);
    }
  },
  mounted(){
var treeDataJSON = document.getElementById("treeDataJSON").value;
var treeData = JSON.parse(treeDataJSON);
this.tree=treeData;
  }
}
</script>
