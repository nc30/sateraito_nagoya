<script>
  // import {showAt, hideAt} from 'vue-breakpoints'
  // import Page from '@/components/Page'
  // import smooth from '@/smooth'

  import TopContents from '@/components/MainPage/TopContents'
  import TopPosts from '@/components/MainPage/TopPosts'

  import MainWrap from '@/components/MainWrap'

  export default{
    components: {
      MainWrap,
      TopPosts,
      TopContents
    },
  }
</script>

<template>
  <div>
    <MainWrap>
      <TopContents>
        <TopPosts :navigation="true" />
      </TopContents>
    </MainWrap>
  </div>
</template>

<style lang="scss">
</style>
