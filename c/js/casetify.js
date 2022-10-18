
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

// sec02 rec03 slide
$(function(){
    var swiper = new Swiper(".autoplay", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
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
        if ($(this).scrollTop() > $(".more").offset().top) {
            $(".sec04").css({
                "animation-name": "backscroll",
            });
        }
    });

});

// sec04 product features next arrow
$(function(){
    var totalNum = $("#pBox > div").length
    var currentNum = 1;
    currentNum++;

    $("#pBox").show();
    $("#arrow").click(function(){
        currentNum++;
        if (currentNum > totalNum) {
            currentNum = 1;
        }
        $("#pBox > div:first").insertAfter("#pBox > div:last"); 
    });
});










