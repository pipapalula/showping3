$(".m_menu").hide();
$(".m_btn").click(function(){
  $(".m_menu").slideToggle()
})
$(".list>li>a img:nth-child(2)").hide()
setInterval (imgjs)
function imgjs(){
  $(".list>li>a img").delay(2000)
  $(".list>li>a img:nth-child(2)").fadeIn()
  $(".list>li>a img").delay(2000)
  $(".list>li>a img:nth-child(2)").fadeOut()
}

setInterval (slide)
function slide(){
  $(".main>.slide").delay(5000).animate({marginLeft:"-100%"},1000)
  $(".main>.slide").delay(5000).animate({marginLeft:"0"},1000)
}

setInterval (slide_m)
function slide_m(){
  $(".m_main>.slide").delay(5000).animate({marginLeft:"-100%"},1000)
  $(".m_main>.slide").delay(5000).animate({marginLeft:"-200%"},1000)
  $(".m_main>.slide").delay(5000).animate({marginLeft:"0"},1000)
}