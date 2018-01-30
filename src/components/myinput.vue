<template>
<div>
          <nyc-input :reg="reg" :len="length" :onlyread="flag" 
          :defaultinfo="defaultinfo" :activeinfo="activeinfo"  :correctinfo="correctinfo"
          :wronginfo="wronginfo" :title= "title"></nyc-input>
           <nyc-input :reg="reg" len=50 onlyread="true" 
          defaultinfo='dsf' activeinfo='activeinfo'  correctinfo="correctinfo"
          wronginfo="wronginfo" title= "Biao"></nyc-input>
            <nyc-input :reg="reg" len=50 
          defaultinfo='dsf' activeinfo='activeinfo'  correctinfo="correctinfo"
          wronginfo="wronginfo" title= "Biao"></nyc-input>
        <input type="text" :value="testkey" @input="e => testkey = e.target.value">
        {{testkey}}
        </div>
</template>
<script>
import nycInput from './common/nyc-input.vue'
// console.log(nycInput)
export default {
    name : 'input',
    components: {
        nycInput
    },
    data() {
        return {
            reg: /^([a-zA-Z0-9_-])+@qq.com$/,
            length: Infinity,
            flag: false,     
            defaultinfo: "请输入qq邮箱，以@qq.com结尾",
            activeinfo: '请输入qq邮箱，以@qq.com结尾',
            correctinfo: '正确',
            wronginfo: '格式错误，请按规则输入以qq.com结尾邮箱',
            testkey: '',
            title:'你妈逼'
        }
    }
}
</script>
