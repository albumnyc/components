<template>
<div>
   <nyc-switch
  v-model="value2"
  active-color="#FE6F3D"
  inactive-color="#ff4949">
</nyc-switch>

<nyc-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费">
</nyc-switch>

<nyc-switch
  style="display: block"
  v-model="value4"
  active-color="#FE6F3D"
  inactive-color="#ff4949"
  active-text="按月付费"
  inactive-text="按年付费">
</nyc-switch>

<nyc-switch
  v-model="value6"
  disabled>
</nyc-switch>
<nyc-switch
  v-model="value7"
  disabled>
</nyc-switch>
</div>
 
</template> 

<script>
import nycSwitch from './common/nyc-switch'
  export default {
      name :"myswitch",
      components:{
        nycSwitch
      },
    data() {
      return {
        value1: true,
        value2: true,
         value3: false,
        value4: true,
        value6 : true,
        value7 :false
      }
    },
    // watch:{
    //         value3(){
    //             console.log(this.value3);
    //         }
    // },
  };
</script>