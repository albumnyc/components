<template>
          <li>
            <div  @click="enter">
                 {{data.label}}                  
            </div>
            <ul v-show="open">
                <nyc-selects v-for="item in data.children" :data="item" class="child"/>        
            </ul>
         </li>
</template>
<script>
export default {
  name : 'nyc-selects',
  data(){
      return {
        //   show: true,
          open: false
      }
  },
    props:{
        data:{
            type: Object,
            required :true,
        },
        // index:{
        //     required: false
        // }
    },
    methods:{
        controlOpen(){
            this.open = false;
        },
         enter(){
        this.open = !this.open;
}
    },
    mounted(){
        if(!this.data.chidldren){
            console.log(this.data)
            console.log('casfdada')
        }
    }
  
}
</script>
<style lang="scss" scoped>
*{
    list-style: none;
}
ul{
    width: 360px;

}
li{
    line-height: 32px;
    // position: absolute;
    div{
        cursor: pointer;
        &:hover{
            background: rgba(242, 245, 245, 1);
           border-color:  rgba(228, 228, 228, 1)
        }
    }
}
</style>
