<template>
    <div>
     <select v-model="firstPart">
   <option v-for="part in parts">
        {{part.name}}
   </option>
  </select>
  <select>
    <option v-for="follow in followPart">
        {{follow}}
    </option>
  </select>
    </div>
</template>
<script>
export default {
  name : 'nyc-twoselect',
  props:{
      Parts:{
          type: Array,
          require: true
      },
      FirstPart:{
          type: String,
          require : false
      }
  },
  data() {
    return {
        parts: this.Parts,
        firstPart :this.FirstPart
    }
  },
  computed: {
    followPart() {
      var followPart = [], 
      selectedDepart = this.firstPart;
      this.parts.forEach(function(item) {
        if(item.name == selectedDepart)
          followPart = item.followPart;
      });
      return followPart;
    }
  }
}
</script>
