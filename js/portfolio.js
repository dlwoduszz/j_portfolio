
$(document).ready(function(){
    $('.pf_list li').hover(function(){
        var list_i=$(this).index()
        $('.pf_prev img').eq(list_i).stop().fadeIn(500).siblings().stop().fadeOut(300);
    })


    var prev_scroll=function(){
        $('.prev').animate({scrollTop:'200'},800).animate({scrollTop:'100'},500).animate({scrollTop:'150'}).animate({scrollTop:'130'},500)
    }
       

   if($('.prev').scrollTop()<100){
        setInterval(prev_scroll)
   }else if($('.prev').hover){
        clearInterval()
   }

})
