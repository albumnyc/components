<template>
    <div>
        <!-- <span>sfdsada</span> -->
        <slot name ="one" :title="rend.title" :text="rend.text" :info ="rend.info">
        </slot>
        <!-- <slot name ="two" :title = 'rend.title' :text="rend.text">
        </slot> -->
    </div>
</template>
<script>
export default {
  name: "nyc-collapse",
  props:{
      rend:{
        require :true,
        type: Object
      }
  },
//   mounted(){
//       console.log(1)
//   }
}
</script>
<style lang="scss" scoped>
// div{
//     width: 100px;
//     height: 100px;
// }
</style>
