$(document).ready(function () {

    //메인-기본 젤리
    var main_jelly=function(){
    $('.jelly').animate({ width: '100%', height: '100%' }).children('img').eq(0).stop().animate({ top: '-100%', left: '100%'}).end()
        .eq(1).stop().animate({ top: '-100%', left: '-100%'}).end()
        .eq(2).stop().animate({ top: '100%', left: '-100%'}).end()
        .eq(3).stop().animate({ top: '100%', left: '100%'}).end()

    
 
    $('.jelly').children('img').eq(0).stop().css({rotate:'-40deg', width:'40%' }).animate({ top: '-5%', left: '69%'}).animate({ top: '-5%', left: '71.5%'}).animate({ top: '-5%', left: '70%'}).end()
        .eq(1).stop().css({rotate:'-60deg', width:'15%' }).animate({ top: '-28.5%', left: '1.5%'}).animate({ top: '-31%', left: '-1%'}).animate({ top: '-30%', left: '0%'}).end()
        .eq(2).stop().css({rotate:'-130deg', width:'40%' }).animate({ top: '63.5%', left: '3.5%'}).animate({ top: '66%', left: '1%'}).animate({ top: '65%', left: '2%'}).end()
        .eq(3).stop().css({rotate:'0', width:'20%' }).animate({ top: '74%', left: '79%'}).animate({ top: '76.5%', left: '81.5%'}).animate({ top: '75%', left: '80%'}).end()

    }

    main_jelly();
    // 메인-마우스 따라 젤리 움직음
    $("section").mousemove(function (e) {
        let screenWidth=$(window).width();
        let screenHeight=$(window).height();
        $(".jelly").css({transform:"translate(" + e.pageX/screenWidth * -1 + "%, " + e.pageY/screenHeight * -2 + "%)"});
    });

    
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
        if ($('.menu_list').css('display') == 'none') {
            $('.menu_list').show().find('span').stop().animate({ top: '0px' }, function () {
                menu_x();
                $('.menu_icon').animate({ rotate: '45deg' }).children('p').eq(0).css({ transform: 'translateY(-10px)' }).end()
                    .siblings('p').eq(2).css({ transform: 'translateY(-10px)' }).end()
                    .siblings('p').eq(6).css({ transform: 'translateY(10px)' }).end()
                    .siblings('p').eq(8).css({ transform: 'translateY(10px)' }).end()
            });
            $('.jelly').animate({ width: '20%', height: '100%' }).children('img').eq(0).stop().animate({ top: '35%', left: '5%', rotate:'0deg'}).end()
                .eq(1).stop().animate({ top: '38%', left: '32%', rotate:'0deg', scale:'100%'}).end()
                .eq(2).stop().animate({ top: '50%', left: '5%', rotate:'0deg'}).end()
                .eq(3).stop().animate({ top: '50%', left: '50%', rotate:'0deg'}).end();

        } else if ($('.menu_list').css('display') == 'block') {
            $('.menu_list').find('span').stop().animate({ top: '-110px' }, function () {
                menu_o();
                $('.menu_list').hide();
                $('.menu_icon').stop().animate({ rotate: '0deg' }).children('p').eq(0).css({ transform: 'translateY(0)' }).end()
                    .siblings('p').eq(2).css({ transform: 'translateY(0)' }).end()
                    .siblings('p').eq(6).css({ transform: 'translateY(0)' }).end()
                    .siblings('p').eq(8).css({ transform: 'translateY(0)' }).end()
            });
            // $('.jelly').animate({ width: '100%', height: '100%' }).children('img').eq(0).stop().animate({ top: '-5%', left: '70%', rotate:'-40deg', width:'40%' }).end()
            //     .eq(1).stop().animate({ top: '-30%', left: '0%',rotate:'-60deg', width:'15%' }).end()
            //     .eq(2).stop().animate({ top: '65%', left: '2%', rotate:'-130deg', width:'40%' }).end()
            //     .eq(3).stop().animate({ top: '75%', left: '80%', rotate:'0', width:'20%' }).end()
            
            main_jelly();
        }
    })



})
