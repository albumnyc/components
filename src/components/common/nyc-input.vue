<template>
   <div>
       <div>{{title}}   
            <input @input="check(reg)" type="text" class="inp-box" v-model="val" 
            :readonly="onlyread" ref='input' :class="{errclass: !status}">                  
            <div :style="{fontSize: '14px', color: activeColor}" >{{activeInfo}}</div>
            <div v-if="a === 'Infinity'" :style="{color: 'green', fontSize: '14px'}">还可以输入{{a-val.length}}字</div>
       </div>    
    </div>
</template>

<script>
//  使用说明，reg：匹配的正则，length：’允许输入的字节的长度‘，’defaultinfo‘,'activeinfo'都是正常的提示信息
//  wronginfo:错误提示信息, correactinfo正确的提示信息
export default {
  name:"nycInput",
          data(){
                return {
                  status:true,
                  a: this.len,
                   activeInfo: this.activeinfo,
                    val: '',                                                 //val就是input的value
                    activeColor: '#BCBCBC'                                      //border的color
                }
            },
            // props: ['reg','len','onlyread',"defaultinfo","activeinfo","wronginfo","correctinfo"],
           props:{
               title:{
                   default : '邮箱'
               },
             reg:{
               type : RegExp,
               required : true,
               default:null
             },
             len:{
                type: [Number,String],
                required : false,
                default: Infinity
             },
             onlyread :{
               type: Boolean,
               required: false,
               default : false
             },
             defaultinfo: {
               type: String,
               required: false,
               default: ''
             },
             activeinfo:{
              type: String,
               required: false,
               default: ''
             },
             wronginfo:{
              type: String,
               required: false,
               default: ''
             },
             correctinfo:{
              type: String,
               required: false,
               default: ''
             }
           },
           methods: {
                check(reg) {       
             console.log(typeof this.a)                  
                    var str = this.val,                     //str获取的是this.value
                        status = reg.test(str),            //srelen是value长度
                        strLen = str.length;         
                        this.status = status;
                    if(strLen<1) {
                        this.activeColor = '#BCBCBC';
                        this.activeInfo = this.defaultinfo;
                    }
                  else  if(status) {
                        this.activeInfo = this.correctinfo;
                        this.activeColor = 'green';
                    } else {
                        this.activeInfo =this.wronginfo;
                        this.activeColor = 'rgba(236, 88, 81, 1)';
                    }
                    for(var i = 0; i < strLen; i ++) {
                        var charCode = str.charCodeAt(i);
                        if(charCode > 128) {
                            strLen += 1;
                        }
                    }
                    if(strLen <= this.len) {
                    } else {
                        this.val = this.val.slice(0, this.len);
                    }
                }
            },
            watch:{
                readonly(){
                        if(this.readonly){
                            this.$ref.input.style.backgroundColor = 'rgba(238, 238, 238, 1)'
                        }
                }
            }
}
</script>


<style <style lang="scss" scoped>
input{
  outline: none;
  height: 32px;
  width: 360px;
  border: 1px solid #BCBCBC;
  padding-left: 5px;
  &:focus{
      border: 1px solid rgba(0, 171, 239, 1);
  }
  &:read-only{
      cursor: not-allowed;
  }
}
.errclass{
    border: 1px solid red;
}
</style>