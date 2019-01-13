<script>
  export default{
    components: { },
    props: [
      'post'
    ],
    computed: {
      created() {
        let d = new Date(this.post.date)
        return './' + d.getDate() + '-' + d.getMonth() + '-' + (1900 + d.getYear())
      },
      thumbnail() {
        try {
          return this.post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['thumbnail']['source_url']
        }
        catch (e) {
          return null
        }
      }
    }
  }
</script>

<template>
  <div :id="'post-' + post.id">
    <span>{{ created }}</span>
    <div v-html="post.content.rendered" />
  </div>
</template>

<style scoped lang="scss">
  h4 {
    display: inline;
  }
</style>
