<script>
  export default{
    props: [ 'color' ]
  }
</script>

<template>
  <div class="loader" v-bind:class="[color]">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>

<style>
  body.run .loader._initial {
    display: none;
  }
  .loader {
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
  }
  .loader > div {
    width: 18px;
    height: 18px;
    background-color: #eee;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }
  .loader.dark > div {
    background-color: #000052;
  }

  .loader .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .loader .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
</style>
