<template>
    <div>
        <nyc-radio disabled checked name ="a">dadsadsa</nyc-radio>
        <nyc-radio name ="a">dadsadsa</nyc-radio>
        <nyc-radio name="a">d的撒</nyc-radio>

        <pre>
      <nyc-radio  checked name ="b">dadsadsa</nyc-radio>
        <nyc-radio name ="b">dadsadsa</nyc-radio>
        <nyc-radio name="b">d的撒</nyc-radio>
        </pre>
    </div>
</template>
<script>
import nycRadio from './common/nyc-radio'
export default {
  name :'myradio',
  components:{
      nycRadio
  },
    data(){
        return{
            a:''
        }
    },
}
</script>
<style lang="scss" scoped>

</style>
