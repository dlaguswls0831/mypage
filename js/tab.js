$(function(){
    // nav
    var num=0;
    var loc=[];
    for(i=0; i<$('.wrap>div').length; i++){
        loc[i]=$('.wrap>div').eq(i).offset().top;
    }
    $('.hdrWrap header .icon').click(function(){
        $('nav').toggleClass('navon');
    });
    $('.hdrWrap h4').click(function(){
        num=$(this).attr('data-num');
        $('html').animate({scrollTop:loc[num]},1000);
    });

    var clickimg = true;
    $('.mainTop .treeimg>.image.i2').click(function(){
        if(clickimg){
            $(this).css('opacity','0');
            $('.mainTop .treeimg>.image.i1').css('opacity','1');
            clickimg=false;
        }else if(!clickimg){
            $(this).css('opacity','1');
            $('.mainTop .treeimg>.image.i1').css('opacity','0');
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

});