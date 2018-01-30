<template>
<div>
    <span class= "tag"
      :style="{backgroundColor: color}">
      <slot></slot>
      <i class="close"
        v-if="closable"
        @click.stop="handleClose">x</i>
    </span>
</div>
    
</template>
<script>
  export default {
    name: 'nyc-tag',
    props: {
      tagindex:{
        require: false
      },
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event,tagindex) {
        this.$emit('close', event,tagindex);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    }
  };
</script>
<style lang="scss" scoped>
*{
  font-size: 12px;
}
  .tag{
    position: relative;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    border: 1px solid #424242;
    border-radius: 5px;
    padding-right: 20px;    
    margin: 0 5px;
    color: #00ABEF;
   border-color: rgb(15, 124, 167);
    i{
        position: absolute;
        top: 0px;
        right: 5px;
      &:hover{
        font-size: 16px;
      }
    }
  }
  div{
  display: inline-block;
  }
</style>

