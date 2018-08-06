<script>
  export default{
    components: {
    },
    props: [

    ],
    data() {
      return {
        posts: [],
        loading: false
      }
    }
  }
</script>

<template>
  <article class="onebox">
    <slot />
  </article>
</template>

<style lang="scss">
  .onebox {
    padding: 2em 1em;
    margin-bottom: 20em;
    color: #fff;
    background-color: #111;
    font-family: 'Ubuntu';
    img {
      width: 100%;
    }
  }
</style>
