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
        total_pages: 0
      }
    },
    methods: {
      getPosts() {
        this.loading = true
        api.get('/posts', {
          params: {
            _embed: 'yes',
            page: this.page,
            per_page: this.per_page,
          }
        })
          .then((r) => {
            this.total_pages = Number(r.headers['x-wp-totalpages'])
            this.posts = r.data
            this.loading = false
          })
          .catch((r) => {
            if(r.response.status == 400) {
              this.$router.replace('/404')
            }
            this.loading = false
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
        return this.total_pages > this.page && this.navigation
      },
      isBefore() {
        return this.page > 1 && this.navigation
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
</template>isBefore
