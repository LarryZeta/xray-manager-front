<template>
  <div id="app">
    <Navbar />
    
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="container">

<!-- TODO 内容 -->

      <Footbar />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footbar from './components/Footbar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
    Footbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#footer {
  text-align: left;
}
</style>
