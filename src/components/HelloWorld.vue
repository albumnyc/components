<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
     <router-link to="/mycircle">cilrcle</router-link>
      <router-link to="/polyline">polyline</router-link>
      <router-link to="/myselect">myselect</router-link>      
      <router-link to ="/myselects">myselects</router-link>
      <router-link to ="/twoselect">twoselect</router-link>
      <router-link to ="/mytreemenu">mytreemenu</router-link>
      <router-link to ="/myinput">myinput</router-link>
      <router-link to ="/vedux">vedux</router-link>
  <router-link to ="/mytag">mytag</router-link>
  <router-link to ="/mybutton">mybutton</router-link>
      <router-link to ="/myprogress">myprogress</router-link>    
      <router-link to = "/mytimepicker">mytimepicker</router-link>  
       <router-link to = "/myalert">myalert</router-link>  
       <router-link to ="/myswitch">myswitch</router-link>
       <router-link to = "/mypost">mypost</router-link>
       <router-link to = "/mycollapse">mycollapse</router-link>
       <router-link to="/myhselects">myhselects</router-link>
       <router-link to="/myradio">myradio</router-link>
       <router-link to="/myinputnumber">myinputnumber</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
