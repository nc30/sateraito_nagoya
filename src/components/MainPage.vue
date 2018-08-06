<script>
  import {showAt, hideAt} from 'vue-breakpoints'
  import Page from '@/components/Page'
  import smooth from '@/smooth'

  import TopContents from '@/components/MainPage/TopContents'
  import TopPosts from '@/components/MainPage/TopPosts'
  import Illusts from '@/components/MainPage/Illusts'
  import Footer from '@/components/Footer'

  // let conami=(cb)=>{let c=[38,38,40,40,37,39,37,39,66,65],p=0;document.addEventListener('keydown',(e)=>{if(e.keyCode!=c[p]){p=0;return}if(++p>=c.length){p=0;try{cb()}catch(e){};return;}});};
  // conami(()=>{console.log('conami')})

  document.addEventListener('keydown',(e)=>{
    if(e.key === 'G'){
      smooth.animateScroll(document.body.clientHeight)
      return
    }
    if(e.key === 'g'){
      smooth.animateScroll(0)
      history.replaceState('', '', '/')
      return
    }
    if(e.key === 'j'){
      window.scrollTo(0, window.pageYOffset + 80)
      return
    }
    if(e.key === 'k'){
      window.scrollTo(0, window.pageYOffset - 80)
      return
    }
    if(e.key === 'Escape'){
      smooth.animateScroll(0)
      return
    }
    if(e.key === 'f'){
      smooth.animateScroll(window.pageYOffset + document.documentElement.clientHeight)
      return
    }
    if(e.key === 'b'){
      smooth.animateScroll(window.pageYOffset - document.documentElement.clientHeight)
      return
    }
  })


  export default{
    components: {
      Footer,
      TopPosts,
      Page,
      TopContents,
      Illusts,
      hideAt, showAt
    },
    methods: {
      goTo(id) {
        let y = document.getElementById(id)
        y && smooth.animateScroll(y.getBoundingClientRect().y)
        this.$router.push({path: '/'+id})
      },
      goHead() {
        smooth.animateScroll(0)
        this.$router.push({path: '/'})
      },
      up() {
        smooth.animateScroll(document.scrollY - 30)
      },
      down() {
        smooth.animateScroll(document.scrollY + 30)
      }
    },
    computed :{
      windowHeight() {
        return window.innerHeight
      },
      titleWrap() {
        return {
          'padding-top': this.windowHeight * 0.1 + 'px',
          'padding-bottom': this.windowHeight * 0.3 + 'px'
        }
      },
      documentHeight() {
        return document.documentElement.clientHeight
      }
    },
    created () {
      if(['pic', 'buzz', 'proc'].includes(this.$route.name)){
        setTimeout(() => { this.goTo(this.$route.name) }, 1000)
      }
    }
  }
</script>

<template>
  <div id="main" class="row">
    <hide-at breakpoint="small">
      <div id="leftbox" class="col-sm-12 col-md-6 col-lg-8 left" >
      </div>
    </hide-at>

    <div id="rightbox" class="col-sm-12 col-md-6 col-lg-4 right" v-bind:style="{ 'min-height': windowHeight + 'px' }" >
      <div class="headBox">hirose@ryujo:&nbsp&nbsp~&nbsp&nbsp$&nbsp;&nbsp;/opt/sateraito/run.py<br/><h1>サテライトナゴヤ</h1></div>
      <div id="goHead">
        <nav>
          <ul>
            <li v-on:click="goHead">/</li>
            <li v-on:click="goTo('pic')">/pic</li>
            <li v-on:click="goTo('buzz')">/buzz</li>
            <li v-on:click="goTo('proc')">/proc</li>
          </ul>
        </nav>
      </div>

      <div id="titleWrap" v-bind:style="titleWrap">
        <TopContents>
          <div id="mainTitle">
            <div>
              <nav>
                <ul class="mainmenu">
                  <li><span v-on:click="goTo('pic')">/pic</span></li>
                  <li><span v-on:click="goTo('buzz')">/buzz</span></li>
                  <li><span v-on:click="goTo('proc')">/proc</span></li>
                </ul>
              </nav>
            </div>
          </div>
        </TopContents>
      </div>

      <TopContents id="pic">
        <h2>/pic</h2>
        <Illusts />
      </TopContents>

      <TopContents id="buzz">
        <h2>/buzz</h2>
        <TopPosts />
        <!-- <router-link :to="'/posts'" >show more</router-link> -->
      </TopContents>

      <TopContents id="proc">
        <h2>/proc</h2>
        <Page :slug="'about'" />
      </TopContents>
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
  #main {
    background-image: url('/static/img/anami3-compressor.jpg');
    background-color: #111;
    background-size: cover;
    background-position: top center;
    background-attachment: fixed;
  }
  h2 {
    font-size: 1.5em;
    padding-bottom:0.3em;
  }
  #goHead {
    position: fixed;
    right: 4px;
    bottom: 0;
    background-color: #fc7100;
    width: 19.5em;
    height:2.8em;
    padding: 0;
    text-align: right;
  }
  #goHead li {
    display: inline-block;
    color: #111;
    min-width:2em;
    font-weight: bold;
    font-family: 'ubuntu';
    font-size:1.2em;
    padding-right:0.7em;
    cursor: pointer;
  }
  .listInline li{
    display: inline-block;
    text-decoration: none;
  }
  #titleWrap {
    padding: 10px;
  }
  #mainTitle {
    border: solid 1px #fc7100;
    padding: 0px 10px 7px 10px;
    background-color: #111;
  }
  #mainTitle > div{
    margin:0;
    background-image: url('/static/img/toptitle.svg');
    background-repeat: no-repeat;
    background-position: left top;
    background-position-x: 10px;
    background-color: #fc7100;
    background-size: 180px;
    height: 260px;
    text-align: right;
  }
  .mainmenu {
    padding-top: .5em;

    li {
      padding-right: 1em;
      border-radius: 3px;
    }
    li span {
      font-family: 'Ubuntu', sans-serif;
      color: #111;
      font-weight: 700;
      font-size: 2em;
      cursor: pointer;
    }
  }
  .under {
    position: absolute;
    bottom: 0;
  }
  .headBox {
    padding-left: 0.5em;
    background-color: #111;
    font-family: 'Ubuntu';
    padding-bottom: 1em;

    h1 {
      color: #111;
      font-size: .5em;
      padding: 0;
      margin:0;
    }
  }
  #rightbox {
    border-left: solid 1px #fc7100;
    position: relative;
    color: #fff;
    background-image: url('/static/img/2018.svg');
    background-repeat-x: no-repeat;
    background-size: 20px;
    background-position: left;
    background-position-x: 4px;
    background-color: #111;
  }
</style>
