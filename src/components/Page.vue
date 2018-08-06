<script>
  import api from '@/api'
  import loader from '@/components/common/loader'

  export default{
    components: {
      loader
    },
    props: [
      'slug'
    ],
    data() {
      return {
        loading: true,
        failled: false,
        pages: [],
      }
    },
    methods: {
      getPost() {
        api.get('/pages',{
          params: {
            _embed: 'yes',
            slug: this.slug
          }
        })
          .then((r) => {
            this.pages = r.data
            this.loading = false
            this.failled = false
          })
          .catch((r) => {
            this.loading = false
            this.failled = true
          })
      }
    },
    created() {
      this.getPost()
    }
  }
</script>

<template>
  <div>
    <loader v-if="loading" />
    <div v-if="failled" >
      oops! load fail! :(
      <span @click="getPost" class="_retry">retry it</span>
    </div>
    <div :id="'post-' + post.id" v-for="post in pages">
      <div v-html="post.content.rendered" />
    </div>
  </div>
</template>

<style lang="scss">
._retry {
  cursor: pointer;
  display: block;
  text-decoration: underline;;
}

</style>
