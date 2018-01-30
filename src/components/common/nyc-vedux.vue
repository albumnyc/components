<template> 
  <div v-show="show" class="modal-mask" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container" transition="modal">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>
        <div class="modal-body">
          <slot name="body">default body {{show}}</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">default footer</slot>
          <button @click="update" class="modal-default-button">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
data(){
    return{
    // childshow :this.show
    }
},
    computed:{
    }
    ,
      name : 'nycVedux',
    props: {        //子组件一定别忘了声明 props
      show: Boolean
    },
    methods: {
        update() {
            this.$emit('update:show', false)
        }
    }
  }
</script>