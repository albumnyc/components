<template>    
  <div>
      <span>sdasda</span>
    <button @click="showhandle">show modal</button>
    <nyc-vedux :show.sync="showModal">
      <h3 :slot="activeslot">heaaaaaader</h3>  
    </nyc-vedux>
    <button @click="handle1">header</button>
    <button @click= "handle2">body</button>
    <button @click= "handle3"> footer</button>
  </div>
</template>
<script>
import nycVedux from './common/nyc-vedux.vue'
export default {
        name : 'vedux',
        components: {
            nycVedux
        },
        data(){
            return{
            showModal: false,
            activeslot: 'header'
            }
        },
        watch:{

        },
        methods:{
            showhandle(){
                // console.log(this.showModal);
                this.showModal=true;
            },
            handle1(){
                this.activeslot = 'header'
            },
            handle2(){
                this.activeslot = 'body'
            },
            handle3(){
                this.activeslot = 'footer'
            }
        },
}

</script>
