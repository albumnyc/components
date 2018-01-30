<template>
    <div>
        <nyc-inputnumber v-model="num1" direction="right"/>
        <nyc-inputnumber v-model="num1" direction="right"/>
        <nyc-inputnumber v-model="num4" :step ='2' style="marginTop:10px"/>
        <nyc-inputnumber v-model="num3" :step ='2' :maxvalue ="10"/>
        <nyc-inputnumber v-model="num4" :step ='2' :minvalue ="11"/>
        <button></button>
    </div>
</template>
<script>
import nycInputnumber from './common/nyc-inputnumber'
export default {
  name :'myinputnumber',
    components:{
        nycInputnumber
    },
    data(){
        return {
            num1 :0,
            num2:2,
            num3:1,
            num4:20
        }
    },
}

</script>
