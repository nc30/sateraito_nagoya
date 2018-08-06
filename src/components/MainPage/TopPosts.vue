<script>
  import loader from '@/components/common/loader'
  import PostWidget from '@/components/PostWidget'
  import api from '@/api'

  export default{
    components: {
      loader,
      PostWidget
    },
    props: {
      per_page: {
        type: Number,
        default: 10
      },
      navigation: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        posts: [],
        loading: false,
        page: 1,
        next: false
      }
    },
    methods: {
      getPosts() {
        this.loading = true
        api.get('/posts', {
          params: {
            _embed: 'yes',
            page: this.page,
            per_page: this.per_page
          }
        })
          .then((r) => {
            this.posts = r.data
            this.loading = false
          })
          .catch((r) => {
            this.loading = false
          })
        if (!this.navigation) {
          return
        }
        api.get('/posts', {
          params: {
            page: this.page + 1,
            per_page: this.per_page
          }
        })
          .then((r) => {
            this.next = true
          })
          .catch((r) => {
            this.next = false
          })
      },
      goNext() {
        this.page += 1
        this.$router.push({path: '/posts/' + this.page})
      },
      goBefore() {
        this.page -= 1
        this.$router.push({path: '/posts/' + this.page})
      }
    },
    computed :{
      isNext() {
        return this.navigation && this.next
      },
      isBefore() {
        return this.navigation && this.page > 1
      },
    },
    watch: {
      page() {
        this.posts = []
        this.getPosts()
      }
    },
    created () {
      if (this.$route.name === 'posts_page') {
        this.page = Number(this.$route.params.page)
      }
      if (this.$route.name === 'posts_page') {
        this.page = Number(this.$route.params.page)
      }
      this.getPosts()
    }
  }
</script>

<template>
  <div>
    <loader v-if="loading" />
    <ul>
      <li v-for="post in posts">
        <PostWidget :post="post" />
      </li>
    </ul>
    <span v-if="isBefore" @click="goBefore">before</span>
    <span v-if="isNext" @click="goNext">next</span>
  </div>
</template>

<style>
</style>