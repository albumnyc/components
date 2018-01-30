<template>
    <div>
            <nyc-timepicker :maxyear = "max"/>
    </div>
</template>
<script>
import nycTimepicker from './common/nyc-timepicker'
export default {
    name:'mytimepicker',
    components:{
            nycTimepicker
    },
    data(){
        return{
            max:  2020,
        }
    }
 
}
</script>
<style lang="scss" scoped>

</style>

