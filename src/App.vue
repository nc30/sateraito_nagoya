<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      document.body.classList.add('run')
    },
  }
</script>

<style>
  #app {
    font-family: 'Ubuntu', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  li {
    list-style: none;
  }
</style>
