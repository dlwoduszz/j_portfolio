$(document).ready(function(){
    $('.pf_list li').hover(function(){
        var list_i=$(this).index()
        $('.pf_prev img').eq(list_i).stop().fadeIn(500).siblings().stop().fadeOut(300);
    })
})
