<template>
<div class= "caonima">
  <span class = "tag">
    <div v-show="!adding" @click ="addhandle">{{addtagname}}
      </div>
      <i class="close" v-if ="!adding" @click ="addhandle">+</i>
    <!-- <nyc-simpleinput class = "simple" v-if = "adding" @add1="addhandle" @addtag="addtag"/>       -->
    <div>
        <span class = "input-box simple" v-if="adding">
                <input type="text" @keydown.enter="keyhandle(val)" @input="update($event)"
      ref= "input"  autofocus="autofocus"  @blur="blurhandle" checked>
                <i @click = "closehandle">x</i>
            </span>
    </div>
    </span>
</div>
</template>
<script>
  export default {
    name: 'addtag',
    data(){
      return {
        thisval : this.val,
        adding: false,
        focusstatus:''
      }
    },
    props:{
      val: {
        require:true
      },
        addtagname:{
            require:false,
            default :"添加标签",
            type : String
        }
    },
    methods:{
          closehandle(){
            this.addhandle();
        },
        addhandle(){     
 
          this.adding = !this.adding;
          console.log(this.adding)
                     console.log(this.$refs.input)
                     setTimeout(()=>{
          this.$refs.input.focus();
          this.$refs.input.select();          
                     },10)
        },
        blurhandle(){
          this.$refs.input.blur();
            this.adding = false;
        },
        keyhandle(val){
          console.log(val);
          this.adding =!this.adding;
          this.$emit('addtag',val)
        },
        update(e){
          this.$emit('update:val',e.target.value)
          console.log(this.val)
        }
    },
      // directives: {
      //     focus: {
      //       bind(el,binding){
      //         el.focus();
      //       }
      //     }
      // },
  };
</script>
<style lang="scss" scoped>
*{
  font-size: 12px;
  user-select: none;
}
  .tag{
    width: 72px;
    position: relative;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    border: 1px solid #424242;
    border-radius: 5px;
  padding-left: 3px;
    padding-right: 20px;    
    margin: 0 5px;
    color: #00ABEF;
    border-color: rgb(15, 124, 167);
    i{
        position: absolute;
        top: 0px;
        right: 5px;
        font-size: 16px;
      &:hover{
        font-size: 22px;
      }
    }
    // .simple{
    //   position: absolute;
    //   top: 0px;
    //   left: 0px;
    //   width: 20px;
    // }
  }


   .input-box{
     display: block;
     overflow: hidden;
    position: relative;
    width: 90px;
    // input{
    //   float: left;
    // }
    input{
      width: 80px;
      border-radius: 5px;
        width: 68px;
        border: none;
        outline: unset;
    }
    i{
      position: absolute;
      right: 0px;
      line-height: 20px;
    }
  }
  div{
    vertical-align: top;
    display: inline-block;
  }
</style>

