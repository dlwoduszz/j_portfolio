$(document).ready(function(){
    $('.skill').find('img').wrap('<div></div>')
    
    for(var dv_i=0; dv_i<$('.development img').length; dv_i++){
        $('.development img').eq(dv_i).stop(true,false).delay(dv_i*150).animate({bottom:'10px'}).animate({bottom:'0px'});
    }

    for(var ds_i=0; ds_i<$('.design img').length; ds_i++){
        $('.design img').eq(ds_i).stop(true,false).animate({bottom:'10px'}).animate({bottom:'0px'});
    }


    $('.skill img').parent().hover(function(){
       $(this).stop(true,false).animate({bottom:'10px'}).animate({bottom:'0px'});
    })
})