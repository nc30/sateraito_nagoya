<script>
export default {
  computed: {
    documentHeight() {
      return document.documentElement.clientHeight
    }
  }
}
</script>

<template>
  <div class="row" v-bind:style="{'height': documentHeight + 'px' }">
    <h1>404 NotFound</h1><br/>
    <p>cannot access {{ $route.path }}: No such file or directory<br/>
    hirose@ryujo:&nbsp&nbsp~&nbsp&nbsp$&nbsp&nbsp<router-link to="/">go root</router-link>
  </p>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .row {
    h1 {
      display: block;
      padding-right:1em
    }

    font-size: 1.2em;
    color: #fff;
    font-family: 'Ubuntu', 'ariel';
    text-align: left;
    padding: 5em;
    background-color: #111;
    height: 100%;
  }
</style>
