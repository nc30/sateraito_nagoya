
<template>
  <footer class="footer">
    <div class="listInline respects">
      <ul>
        <li><a target="_blank" href="https://www.archlinux.jp/"><i class="icon-archlinux"></i></a></li>
        <li><a target="_blank" href="https://www.debian.or.jp/"><i class="icon-debian"></i></a></li>
        <li><a target="_blank" href="https://www.python.org/"><i class="icon-python"></i></a></li>
        <li><a target="_blank" href="https://nginx.org/"><i class="icon-nginx"></i></a></li>
        <li><a target="_blank" href="https://golang.org/"><i class="icon-go"></i></a></li>
        <li><a target="_blank" href="http://zsh.sourceforge.net/"><i class="icon-shell"></i></a></li>
      </ul>
    </div>
    <p>伸びる時には必ず抵抗がある</p>
  <span>(c) 2018 SateraitoNagoya</span>
  <span class="built">built:[AIV]{date}[/AIV]</span>
  </footer>
</template>

<style lang="scss">
  .footer {
    text-align: center;
    background-color: #fc7100;
    padding-bottom: 2.8em;
    padding-top: .8em;

    .built {
      font-size: 0.8em;
    }
  }
  .respects {
    li {
      padding-left: 0.8em;
      a {
        font-size: 1.9em;
        color: #171a2b;
      }
    }
  }
</style>
