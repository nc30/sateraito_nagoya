import SmoothScroll from 'smooth-scroll'

const smooth = new SmoothScroll('a[href*="#"]')
export default smooth

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
