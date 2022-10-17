
// 메뉴 클릭 메서드
$(function(){
    $("header div.menu").click(function(){
        $("#side_nav").addClass("is-open")
    });
    $(".menuclose > img").click(function(){
        $("#side_nav").removeClass("is-open")
    });
});

// 메뉴 > ul
$(function(){
    $("div.side_inner li > a.nav_model").click(function(){
        $(this).html("<i><b>Model</b></i>");
        $("ul.nav_model").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_print").click(function(){
        $("ul.nav_print").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_Lab").click(function(){
        $("ul.nav_Lab").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_custom").click(function(){
        $("ul.nav_custom").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_Accessory").click(function(){
        $("ul.nav_Accessory").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_trending").click(function(){
        $("ul.nav_trending").slideToggle(350, "linear");
    });
});



// sec02 trending case 이미지 전환
$(function(){
    $("#case > div:last").show();
    $("#tabPreview .circle").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var imgindex = $(this).index();
        $("#case > div").eq(imgindex).stop(true).fadeIn(500).siblings().fadeOut(200);
    });
});


// sec03 background 스크롤
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 850) {
        }
    });

});



// our mission 스크롤
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $("div.top").fadeIn();
        } else {
            $("div.top").fadeOut();
        }    
    });
});

//product features
$(function(){
    $("div.product > div.pBox").show();
    $("div.cfuntion > div.i02 > img").click(function(){
        $("div.product > div.pBox. > p02").show().siblings().hide("div.product > div.pBox. > p02");
    });
});

