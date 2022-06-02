$(function(){
    var loc=[];
    var con=0;
    var now=0;
    var flag=true;
    var posX = 0, posY=0;
    
    // 새로고침 리로드
    $('html').animate({
        scrollTop:0
    },1000);
    

    // 풀페이지이벤트
    for(i=0; i<$('.wrap>div').length; i++){
        loc[i]=$('.wrap>div').eq(i).offset().top;
    }
    $(window).on('mousewheel',function(eve){
        console.log(eve.originalEvent.wheelDelta);
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
        }
    })


    // F5 이벤트
    // $(document).keydown(function(reload){
    //     if (reload.keyCode == 116 || reload.which == 116){
    //         $('html').scrollTop(loc[0]);
    //     }
    // });


    // 로딩
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
                console.log(num);
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


    // nav
    $('.navIcon').click(function(){
        $('nav').toggleClass('navon');
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

    // cnt02
    $('.cnt02 .profile .image.i2').click(function(){
        $(this).animate({
            opacity:'1'
        },200,function(){
            $('.tagi1').animate({
                opacity :'1'
        },400,function(){
            $('.tagi2').animate({
                opacity :'1'
            },400,function(){
                $('.tagi3').animate({
                    opacity :'1'
                },400,function(){
                    $('.tagi4').animate({
                        opacity :'1' 
                    },400,function(){
                        $('.tagi5').animate({
                            opacity :'1'
                        });
                    });
                });
            });
        });
    });
    });

});