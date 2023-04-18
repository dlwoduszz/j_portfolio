$(document).ready(function () {

//메인
    var main_jelly=function(){
        // 젤리 숨어있기
    $('.jelly').animate({ width: '100%', height: '100%' }).children('img').eq(0).stop().animate({ top: '-100%', left: '100%'}).end()
        .eq(1).stop().animate({ top: '-100%', left: '-100%'}).end()
        .eq(2).stop().animate({ top: '100%', left: '-100%'}).end()
        .eq(3).stop().animate({ top: '100%', left: '100%'}).end()

        //젤리 나타나기
    $('.jelly').children('img').eq(0).stop().css({rotate:'-40deg', width:'40%' }).animate({ top: '-5%', left: '69%'}).animate({ top: '-5%', left: '71.5%'}).animate({ top: '-5%', left: '70%'}).end()
        .eq(1).stop().css({rotate:'-70deg', width:'15%' }).animate({ top: '-34.5%', left: '1.5%'}).animate({ top: '-36%', left: '-1%'}).animate({ top: '-35%', left: '0%'}).end()
        .eq(2).stop().css({rotate:'-130deg', width:'40%' }).animate({ top: '63.5%', left: '3.5%'}).animate({ top: '66%', left: '1%'}).animate({ top: '65%', left: '2%'}).end()
        .eq(3).stop().css({rotate:'0', width:'20%' }).animate({ top: '74%', left: '79%'}).animate({ top: '76.5%', left: '81.5%'}).animate({ top: '75%', left: '80%'}).end()
    }
    main_jelly();

        //마우스 따라 젤리 움직음
    $("section").mousemove(function (e) {
        let screenWidth=$(window).width();
        let screenHeight=$(window).height();
        $(".jelly").css({transform:"translate(" + e.pageX/screenWidth * -1 + "%, " + e.pageY/screenHeight * -2 + "%)"});
    });

        //인삿말 나타남
    var text_hi=function(){
        $('.intro_box').children().eq(0).animate({top:'0px', opacity:'100%'},850)
        .end().delay(1200).siblings().eq(1).animate({bottom:'0px', opacity:'100%'},850)
    }
    text_hi();

        //인삿말 사라짐
    var text_by=function(){
        $('.intro_box').children().eq(0).animate({top:'-200px', opacity:'0%'},500)
        .end().siblings().eq(1).animate({bottom:'-200px', opacity:'0%'})
    }


// 헤더
    // 밝기전환 아이콘
    $('.moon').click(function () {
        if ($('body').css({ background }) == '#FFF3FE') {
            $('body').css({ background: '#222' });
        }
    })
    //메뉴버튼 모양 변환
    var menu_x = function () {
        $('.menu_icon').children('p').eq(0).css({ transform: 'translateY(-10px)' }).end()
            .siblings('p').eq(1).css({ transform: 'translateY(-10px)' }).end()
            .siblings('p').eq(2).css({ transform: 'translateY(-10px)' }).end()
            .siblings('p').eq(3).css({ transform: 'translateX(-10px)' }).end()
            .siblings('p').eq(4).css({ opacity: '0%' }).end()
            .siblings('p').eq(5).css({ transform: 'translateX(10px)' }).end()
            .siblings('p').eq(6).css({ transform: 'translateY(10px)' }).end()
            .siblings('p').eq(7).css({ transform: 'translateY(10px)' }).end()
            .siblings('p').eq(8).css({ transform: 'translateY(10px)' }).end()
            .siblings('span').css({ opacity: '100%', borderRadius: '10px' })
            .siblings('span').eq(0).css({ top: '0', height: '88%' }).end()
            .siblings('span').eq(1).css({ left: '0', width: '88%' }).end();
    }
    var menu_o = function () {
        $('.menu_icon').children('p').eq(1).css({ transform: 'translateY(0)' }).end()
            .siblings('p').eq(3).css({ transform: 'translateX(0)' }).end()
            .siblings('p').eq(4).css({ opacity: '100%' }).end()
            .siblings('p').eq(5).css({ transform: 'translateX(0)' }).end()
            .siblings('p').eq(7).css({ transform: 'translateY(0)' }).end()
            .siblings('span').css({ opacity: '0', borderRadius: '100%' })
            .siblings('p').eq(0).css({ transform: 'translateY(0)' }).end()
            .siblings('p').eq(2).css({ transform: 'translateY(0)' }).end()
            .siblings('p').eq(6).css({ transform: 'translateY(0)' }).end()
            .siblings('p').eq(8).css({ transform: 'translateY(0)' }).end();
    }
    // 메뉴아이콘
    $('.menu_icon').mouseenter(function () {
        if ($('.menu_list').css('display') == 'none') {
            menu_x();
        } else {
            menu_o();
        }
    })
    $('.menu_icon').mouseleave(function () {
        if ($('.menu_list').css('display') == 'none') {
            menu_o();
        } else {
            menu_x();
        }
    })
    $('.menu_icon').click(function () {
        // 메뉴리스트 안보이면
        if ($('.menu_list').css('display') == 'none') {

            //인삿말 없애기
            text_by();
            
            // 메뉴아이콘 x모양으로
            $('.menu_list').show().find('span').stop().animate({ top: '0px' }, function () {
                menu_x();
                $('.menu_icon').animate({ rotate: '45deg' }).children('p').eq(0).css({ transform: 'translateY(-10px)' }).end()
                    .siblings('p').eq(2).css({ transform: 'translateY(-10px)' }).end()
                    .siblings('p').eq(6).css({ transform: 'translateY(10px)' }).end()
                    .siblings('p').eq(8).css({ transform: 'translateY(10px)' }).end()
            });
            // J모양으로 변환
            $('.jelly').animate({ width: '20%', height: '100%' }).children('img').eq(0).stop().animate({ top: '35%', left: '5%', rotate:'0deg'}).end()
                .eq(1).stop().animate({ top: '38%', left: '32%', rotate:'0deg', scale:'100%'}).end()
                .eq(2).stop().animate({ top: '50%', left: '5%', rotate:'0deg'}).end()
                .eq(3).stop().animate({ top: '50%', left: '50%', rotate:'0deg'}).end();



        // 메뉴리스트 보이면
        } else if ($('.menu_list').css('display') == 'block') {
            // 메뉴 아이콘 원래모양으로
            $('.menu_list').find('span').stop().animate({ top: '-110px' }, function () {
                menu_o();
                $('.menu_list').hide();
                $('.menu_icon').stop().animate({ rotate: '0deg' }).children('p').eq(0).css({ transform: 'translateY(0)' }).end()
                    .siblings('p').eq(2).css({ transform: 'translateY(0)' }).end()
                    .siblings('p').eq(6).css({ transform: 'translateY(0)' }).end()
                    .siblings('p').eq(8).css({ transform: 'translateY(0)' }).end()
            });
            // 젤리 나타나기
            main_jelly();
            // 인삿말 보이기
            text_hi();
        }
    })



})
