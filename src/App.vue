<template>
  <div id="app">
    <Navbar />
    
    <Service />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
// import Footbar from './components/Footbar.vue'
import Service from './pages/Service.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    // Footbar,
    Service
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px; */
}


#footer {
  text-align: left;
}
</style>
