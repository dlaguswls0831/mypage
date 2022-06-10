$(function(){
    var loc=[];
    var con=0;
    var now=0;
    var num=0;
    var flag=true;
    var posX = 0, posY=0;

    var brow = navigator.userAgent;
      if(brow.match('ios | Android | Symbian | Apple | Samsung | LG | Blackberry | iPhone | Gallaxy')){
          /*조건이 참이면 실행하게됨*/
          window.location.href = './tab_1024.html'
        }
      else if(brow.match('iPad')){
          window.location.href = './tab_1024.html'
        }
  
    // 새로고침 리로드
    $('html').animate({
        scrollTop:0
    },1000);
    $( window ).resize(function(){
        location.reload();
    });
        
    
    // 풀페이지이벤트
    for(i=0; i<$('.wrap>div').length; i++){
        loc[i]=$('.wrap>div').eq(i).offset().top;
    }
    $(window).on('mousewheel',function(eve){
        now= eve.originalEvent.wheelDelta;
        
        if(flag){
            if(now<0){
                con++;
                flag=false;
                if(con>=4) con=4;
            }else{
                con--;
                flag=false;
                if(con<=0) con=0;
            }
            $('html').animate({
                scrollTop:loc[con]
            },500,'easeInSine',function(){
                flag=true;
            });

            if(con==4){
                $('footer .icon').animate({
                    fontSize:'0'
                },500,function(){
                    $(this).addClass('btmov');
                });
            }else{
                $('footer .icon').removeClass('btmov');
            }
        }
    });
    
    // nav
    $('.navIcon').click(function(){
        $('nav').toggleClass('navon');
    });
    $('.hdrWrap h4').click(function(){
        num=$(this).attr('data-num');
        $('html').animate({scrollTop:loc[num]},1000,function(){
            if(num==4){
                $('footer .icon').addClass('btmov');
            }else{
                $('footer .icon').removeClass('btmov');
            }
        });
    });

    // F5 이벤트
    // $(document).keydown(function(reload){
    //     if (reload.keyCode == 116 || reload.which == 116){
    //         $('html').scrollTop(loc[0]);
    //     }
    // });


    // 로딩시 이벤트
    $('main>.imgTop>.imgRight>.images').animate({
        opacity:'1'
    },1000,function(){
            var ann = $('main h2>span').text();
            var num = 0;
            var t = 0;
            
            for(var u = 0; u<3; u++){
                setTimeout(tt,u*500);
            }
            
            function tt(tt){
                t++;
                num = ann[t-1]
                $('main h2>span').eq(t-1).css('opacity','1');
            };

        });

        
    // 커서이벤트
    $(window).mousemove(function(a){
        posX = a.clientX;
        posY = a.clientY;
        $('.curimg').css({
            top: posY,
            left: posX,
        });
    });


    
    // main
    var clickimg = true;
    $('main>.imgTop>.imgLeft .image.i2').click(function(){
        if(clickimg){
            $(this).css('opacity','0');
            $('main>.imgTop>.imgLeft .image.i1').css('opacity','1');
            clickimg=false;
        }else if(!clickimg){
            $(this).css('opacity','1');
            $('main>.imgTop>.imgLeft .image.i1').css('opacity','0');
            clickimg=true ;
        }
    });

    var tag = $('.tag');
    var proclick = true;
    var truetime = 300;
    var flasetime = 200;
    // cnt02
    $('.cnt02 .profile .image.i2').click(function(){
        if(proclick){
            $(this).animate({
                opacity:'1'
            },truetime,function(){
                tag.eq(0).animate({
                    opacity :'1'
            },truetime,function(){
                tag.eq(1).animate({
                    opacity :'1'
                },truetime,function(){
                    tag.eq(2).animate({
                        opacity :'1'
                    },truetime,function(){
                        tag.eq(3).animate({
                            opacity :'1' 
                        },truetime,function(){
                            tag.eq(4).animate({
                                opacity :'1'
                                });
                            });
                        });
                    });
                });
            });
            proclick = false;
        }else if(!proclick){
            $(this).animate({
                opacity:'0'
            },flasetime,function(){
                tag.eq(4).animate({
                    opacity :'0'
            },flasetime,function(){
                tag.eq(3).animate({
                    opacity :'0'
                },flasetime,function(){
                    tag.eq(2).animate({
                        opacity :'0'
                    },flasetime,function(){
                        tag.eq(1).animate({
                            opacity :'0' 
                        },flasetime,function(){
                            tag.eq(0).animate({
                                opacity :'0'
                                });
                            });
                        });
                    });
                });
            });
            proclick = true;
        }
    });

    
    $('.cnt02 .artGroup').find('article:last').prependTo('.cnt02 .artGroup');
    $('.cnt02 .artGroup').css('margin-left','-100%');
    // skill slide
    $('.cnt02 .artBtm .btn>.image').click(function(){
        $('.cnt02 .artGroup').stop().animate({
            marginLeft : 2*-100+'%'
        },500,function(){
            $('.cnt02 .artGroup').find('article:first').appendTo('.cnt02 .artGroup');
            $('.cnt02 .artGroup').css('margin-left','-100%');
        });
    });

    $('.cntWrap .content.cnt03 section .artBtm .btm article .images').click(function(){
        alert('준비중입니다!');
    });

});
