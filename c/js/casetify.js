
// 메뉴 클릭 메서드
$(function(){
    $("header .menu").click(function(){
        $("#side_nav").addClass(".is-open")
    });
    $(".menuclose > img").click(function(){
        $("#side_nav").removeClass(".is-open")
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

