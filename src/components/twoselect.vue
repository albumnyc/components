<template>
    <div>
      <nyc-twoselect :Parts='parts' :FirstPart="firstPart"/>
    </div>
</template>
<script>
import nycTwoselect from './common/nyc-twoselect.vue'
export default {
  name : "twoselect",
    components:{
        nycTwoselect,
    },
    data(){
        return{
        parts: [
            {name: 'Dpt 1', followPart: ['m1', 'm2', 'm3']},
            {name: 'Dpt 2', followPart: ['m4', 'm5', 'm6']}
        ],
        firstPart: 'Dpt 1'
        }
    }

}
</script>
