$(".screen").hide();

$("#thumb-1").addClass("thumb-active");
$("#screen-1").show().addClass("screen-active");

$().ready(function(){
    $(".thumb").click(function(){
        var id = $(this).attr("id").split("-").slice(-1)[0];
        $(".thumb").removeClass("screen-active");
        $("#thumb-"+id).addClass("screen-active");
        $(".screen").hide();
        $("#screen-"+id).show();
    })
});