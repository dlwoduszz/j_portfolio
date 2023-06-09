$(document).ready(function () {

//메인
    var main_jelly=function(){
        // 젤리 숨어있기
    $('.jelly').animate({ width: '100%', height: '100%' }).children('img').eq(0).clearQueue().animate({ top: '-100%', left: '100%'}).end()
        .eq(1).clearQueue().animate({ top: '-100%', left: '-100%'}).end()
        .eq(2).clearQueue().animate({ top: '100%', left: '-100%'}).end()
        .eq(3).clearQueue().animate({ top: '100%', left: '100%'}).end()

        //젤리 나타나기
    $('.jelly').children('img').eq(0).css({rotate:'-40deg', width:'40%' }).clearQueue().animate({ top: '-5%', left: '69%'}).animate({ top: '-5%', left: '71.5%'}).animate({ top: '-5%', left: '70%'}).end()
        .eq(1).css({rotate:'-70deg', width:'15%' }).clearQueue().animate({ top: '-34.5%', left: '1.5%'}).animate({ top: '-36%', left: '-1%'}).animate({ top: '-35%', left: '0%'}).end()
        .eq(2).css({rotate:'-130deg', width:'40%' }).clearQueue().animate({ top: '63.5%', left: '3.5%'}).animate({ top: '66%', left: '1%'}).animate({ top: '65%', left: '2%'}).end()
        .eq(3).css({rotate:'0', width:'20%' }).clearQueue().animate({ top: '74%', left: '79%'}).animate({ top: '76.5%', left: '81.5%'}).animate({ top: '75%', left: '80%'}).end()
    }
    main_jelly();

        //마우스 따라 젤리 움직임
    $("section").mousemove(function (e) {
        let screenWidth=$(window).width();
        let screenHeight=$(window).height();
        $(".jelly").css({transform:"translate(" + e.pageX/screenWidth * -1.2 + "%, " + e.pageY/screenHeight * -2.2 + "%)"});
    });

        //인삿말 나타남
        var text_hi=function(){
            $('.intro_box').children().eq(0).clearQueue().animate({top:'0px', opacity:'100%'},850)
            .end().siblings().eq(1).clearQueue().animate({bottom:'0px', opacity:'100%'},850)
            
            //젤리셔스 호버시 배경 물결 움직임
            var positionX=0;
            var move_positionX;

            function startMove(){
                move_positionX=setInterval(()=>{
                    positionX++  
                    $('.intro_box').find('.wave').css({backgroundPositionX:`${positionX}px`})
                },20)
            }

            function stopMove(){
                clearInterval(move_positionX)
            }
            
            $('.intro_box').find('.wave').stop().mouseenter(function(){
                startMove()
            })
            $('.intro_box').find('.wave').stop().mouseleave(function(){
                stopMove()
            })

            $('.intro_box').find('.name').hover(function(){
                $(this).html('젤 리재연')
            },function(){
                $(this).html('젤리 재연')
            })
        }
        text_hi();

        //인삿말 사라짐
    var text_bye=function(){
        $('.intro_box').children().eq(0).clearQueue().animate({top:'-200px', opacity:'0%'})
        .end().siblings().eq(1).clearQueue().animate({bottom:'-200px', opacity:'0%'})
    }


// 헤더

    // 밝기전환 아이콘
    var darkModeYN=localStorage["darkMode"];

    loadMode();

    function loadMode(){
        if (darkModeYN == "Y"){
            $('body, .jelly img, *, h2, .pf_list li, .menu_icon').addClass("dark");
            $('.moon').children().attr('src','img/sun.png').css({width:'70%'});
        } else {
            $('body, .jelly img, *, h2, .pf_list li, .menu_icon').removeClass("dark");
            $('.moon').children().attr('src','img/moon.png').css({width:'50%'});
        }    
    }

    $('.moon').click(function(){
        if (darkModeYN == "N"){
            localStorage["darkMode"] = 'Y'
            
        } else {
            localStorage["darkMode"] = 'N'
            
        }
        location.reload(); // 웹페이지 새로고침
    })

 

    //메뉴버튼 모양 변환
    var menu_x = function () {
        $('.menu_icon').children('p:nth-of-type(n+1):nth-of-type(-n+3)').css({ transform: 'translateY(-10px)' })

            .siblings('p').eq(3).css({ transform: 'translateX(-10px)' }).end()
            .siblings('p').eq(4).css({ opacity: '0%' }).end()
            .siblings('p').eq(5).css({ transform: 'translateX(10px)' }).end()

            .siblings('p:nth-of-type(n+7):nth-of-type(-n+9)').css({ transform: 'translateY(10px)' }).end()

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
        // 메뉴리스트 안보이면 보이게 하기
        if ($('.menu_list').css('display') == 'none') {

            //인삿말 없애기
            text_bye();
            
            // 메뉴아이콘 x모양으로
            $('.menu_list').show().find('a').stop().animate({ top: '0px' }, function () {
                menu_x();
                $('.menu_icon').animate({ rotate: '45deg' }).children('p').eq(0).css({ transform: 'translateY(-10px)' }).end()
                    .siblings('p').eq(2).css({ transform: 'translateY(-10px)' }).end()
                    .siblings('p').eq(6).css({ transform: 'translateY(10px)' }).end()
                    .siblings('p').eq(8).css({ transform: 'translateY(10px)' }).end()
            });
            // 젤리모양바뀜
            $('.jelly').animate({ width: '30%', height: '100%' }).children('img').eq(0).stop().animate({ top: '41.5%', left: '46.5%', rotate:'-280deg'}).animate({ top: '39%', left: '45%'}).animate({ top: '40%', left: '45%'}).end()
            .eq(1).stop().animate({ top: '17%', left: '31.5%', rotate:'-300deg'}).animate({ top: '14%', left: '31%'}).animate({ top: '15%', left: '30%'}).end()
            .eq(2).stop().animate({ top: '66%', left: '31.5%', rotate:'360deg'}).animate({ top: '64%', left: '31%'}).animate({ top: '65%', left: '30%'}).end()
            .eq(3).stop().animate({ top: '50%', left: '21.5%', rotate:'280deg'}).animate({ top: '47%', left: '19%'}).animate({ top: '48%', left: '20%'}).end();

            $('.menu_list').find('li').hover(function(){
                let i=$(this).index();
                let w_i=$('.jelly img').eq(i).width()
                $('.jelly img').eq(i).clearQueue().animate({opacity:'100%'},300).siblings().clearQueue().animate({opacity:'30%'},300)
            },function(){
                $('.jelly img').clearQueue().animate({opacity:'100%'},300)
            })

            
            //배경 흐리게 취소
            $('.back').css({backdropFilter:'none'})
            $('#container').children().fadeOut(300);

        // 메뉴리스트 보이면 안보이게 하기
        } else if ($('.menu_list').css('display') == 'block') {
            // 메뉴 아이콘 원래모양으로
            $('.menu_list').find('a').stop().animate({ top: '-110px' }, function () {
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

            //배경 흐리게 
            $('.back').css({backdropFilter:'blur(100px)'})
            $('#container').children().fadeIn(300);
        }
    })



})
