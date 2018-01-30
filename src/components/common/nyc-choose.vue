<template>
    <ul>
        <li v-for= "(node,key,index) in tree">
            <div v-if= "key!= selected">
 <div @click="nodeClick(node, index)" :class="[node.selected == null ? 'tree-select-null' : (node.selected == 'half' ? 
 'tree-select-half' : 'tree-select-full'), 'tree-select', 'inline-block']">
    <div class="inline-block">{{ key }}</div>
          <div v-if="key != ''">
            <nyc-choose :tree="node" :isroot="false"></nyc-choose>
          </div>
 </div>
          <div class="inline-block">{{ key }}</div>
            </div>
        </li>
    </ul>
</template>
<script>
import Vue from'Vue'
export default {
  name : 'nyc-choose',
  props: ['tree', 'isroot'],
 created: function() {
    var realTree = Object.assign({}, this.tree);
    delete realTree.selected;
    if (Object.keys(realTree).length === 0) { // 判断最低级，再刷新父级
      this.refreshAllParentNodes(this.$parent);
    }
  },
  methods: {
    nodeClick: function(node, index) {
      if (node.selected === 'full' || node.selected === 'half') {
        Vue.set(node, 'selected', null);
      } else {
        Vue.set(node, 'selected', 'full');
      }
      this.refreshAllParentNodes(self.$parent);
      this.refreshAllParentNodes(this);
      this.refreshAllSonNodes(this.$children[index], node.selected);
    },
    refreshAllSonNodes: function(node, status) {
      if (node instanceof Vue && node.$children.length) {
        for (index in node.$children) {
          Vue.set(node.$children[index].tree, 'selected', status);
          // 递归计算子级
          this.refreshAllSonNodes(node.$children[index], status);
        }
      }
    },
    refreshAllParentNodes: function(node) {
      if (node instanceof Vue) {
        var status = null;
        var nullCount = 0;
        var halfCount = 0;
        var fullCount = 0;
        for (index in node.$children) {
          if (typeof node.$children[index].tree.selected === 'undefined') {
            nullCount++;
          } else if (node.$children[index].tree.selected === null) {
            nullCount++;
          } else if (node.$children[index].tree.selected === 'half') {
            halfCount++;
          } else if (node.$children[index].tree.selected === 'full') {
            fullCount++;
          }
        }
        if (fullCount === node.$children.length) {
          status = 'full';
        } else if (nullCount === node.$children.length) {
          status = null;
        } else {
          status = 'half';
        }
        Vue.set(node.tree, 'selected', status);
        // 递归计算父级
        this.refreshAllParentNodes(node.$parent);
      }
    },
    log: function(o) {
      console.log(o);
    }
  }
}
</script>
<style <style lang="scss" scoped>
#tree {
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
}
li {
  list-style: none;
  line-height: 25px;
}
.inline-block {
  display: inline-block;
}
.tree-select {
  width: 13px;
  height: 13px;
  line-height: 16px;
  margin: 3px;
  display: inline-block;
  vertical-align: middle;
  border: 0 none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
//   background-image: url('selects.png');
}
.tree-select-null {
  background-position: 0 0;
}
.tree-select-full {
  background-position: -14px 0;
}
.tree-select-half {
  background-position: -14px -28px;
}
</style>