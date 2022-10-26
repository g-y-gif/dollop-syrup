
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

// our mission 스크롤
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $("div.top").fadeIn(1800);
        } else {
            $("div.top").fadeOut(1000);
        }    
    });
});

// sec02 rec03 slide
var swiper = new Swiper(".autoplay", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
            pagination: {
                el: "",
                clickable: true,
              },
        }
      },
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



$(function(){
    if ((window).innerWidth() < 640) {
        $("div.fRight ul.hide_ul > li > h4").click(function(){
            $(".fRight .hide_ul > li > ul").slideToggle(350, "linear");
        });
    }
});