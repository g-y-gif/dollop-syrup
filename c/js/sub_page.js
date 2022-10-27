

AOS.init();

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
        $(this).text(function(e, text) {
            return text === '기종' ? 'Model' : '기종'
        });
        $("ul.nav_model").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_print").click(function(){
        $(this).text(function(e, text) {
            return text === '시그니처 프린트' ? 'Signature Print' : '시그니처 프린트'
        });
        $("ul.nav_print").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_Lab").click(function(){
        $("ul.nav_Lab").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_custom").click(function(){
        $(this).text(function(e, text) {
            return text === '커스텀 케이스' ? 'Custom Case' : '커스텀 케이스'
        });
        $("ul.nav_custom").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_Accessory").click(function(){
        $(this).text(function(e, text) {
            return text === '액세서리' ? 'Accessory' : '액세서리'
        });
        $("ul.nav_Accessory").slideToggle(350, "linear");
    });
    $("div.side_inner li > a.nav_trending").click(function(){
        $(this).text(function(e, text) {
            return text === '최신 & 트렌딩' ? 'The Latest & Trending' : '최신 & 트렌딩'
        });
        $("ul.nav_trending").slideToggle(350, "linear");
    });
});


// sec03 contentBox02 steps
$(function(){
    if ($(window).width() > 640) {
        $(".contentBox02 .steps > div").hover(function(){
            $(this).toggleClass("on");
    
            var stepindex = $(this).index();
            $(".contentBox02 .stepsTxt > div").eq(stepindex).stop(true).fadeIn(300).siblings().fadeOut(200);
        });
    }
});




// footer li slidToggle
$(function(){
    if ($(window).width() < 641) {
        $("ul.hide_ul > li h4").click(function(){
            $(this).next("ul").stop().slideToggle(350, "linear")
            $(this).parent().siblings().children("ul").slidUp();
        });
    }
});
