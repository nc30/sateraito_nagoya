<template>
  <div id="_pic">
    <div class="row" id="books">
      <a href="https://twitter.com/satellitenagoya/status/1026076947745394691" target="_blank" class="col-sm-7"><div class="_b" id="netsubou"></div></a>
      <a href="https://twitter.com/satellitenagoya/status/897491644705931264" target="_blank" class="col-sm-5"><div class="_b" id="masterplan"></div></a>
    </div>
    <a id="b_feeder" href="https://www.feederweb.com/" target="_blank"><div>FEEDER!!</div></a>
    <a href="https://twitter.com/satellitenagoya/status/1026076727703793664" target="_blank"><img src="/static/img/sat_07.jpg" /></a>
    <a href="http://www.suzukacircuit.jp/8tai/" target="_blank"><img src="/static/img/sat_09.png" /></a>
  </div>
</template>

<style scoped lang="scss">
  #_pic {
    margin-top: 2.5em;
    width: 100%;
    img {
      width: 100%;
    }
    a {
      display: grid;
    }
  }

  #books{
    & > a {
      padding:0;
    }
    ._b {
      width: 100%;
      height: 25em;
      background-size: cover;
      background-position: center;
    }
    #netsubou {
      background-image: url("/static/img/sat_03.jpg");
    }
    #masterplan {
      background-image: url("/static/img/sat_04.jpg");
    }
  }
  #b_feeder {
    text-decoration: none;
    text-align: center;

    & > div{
      background-color: #ff6c00;
      width:100%;
      color: #fff;
      font-weight: bold;
      font-size: 3em;
      text-decoration: none;

      &:hover {
        color: #db160a;
        background-color: #fff;
      }
    }
  }
</style>