

// sec02 trending case 이미지 전환
$(function(){
    $("#case > div:last").show();
    $("#tabPreview .circle").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var imgindex = $(this).index();
        $("#case > div").eq(imgindex).stop(true).fadeIn(500).siblings().fadeOut(200);
    });
});