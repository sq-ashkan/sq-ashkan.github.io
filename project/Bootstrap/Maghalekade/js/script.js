// just any other than Jquery Script!
$(function() {
    $(".logo-style-top-site").hide();
    $(".logo-style-top-site").fadeIn(900);
    $(".logo-style-top-site").fadeIn(900);
})

$(function() {
    $("#fading-sider-box-1 ").hide();
    $("#fading-sider-box-1").fadeIn(3000);
    $("#fading-sider-box-4").hide();
    $("#fading-sider-box-4").fadeIn(6000);
    $("#fading-sider-box-3").hide();
    $("#fading-sider-box-3").fadeIn(9000);
    $("#fading-sider-box-2").hide();
    $("#fading-sider-box-2").fadeIn(12000);
});

$(function() {
    $(".gallery-box").find("img").addClass( "sliderImageover" );
    var galleryImage = $(".gallery-box").find("img");
    var images = [
        "Images/pic/1s.jpg",
        "Images/pic/2s.jpg",
        "Images/pic/3s.jpg",
        "Images/pic/4s.jpg",
        "Images/pic/5s.jpg",
        "Images/pic/6s.jpg"
    ];

    var i = 0;
    myslider = setInterval(function() {
        galleryImage.fadeOut(1000, function() {
            if (i == 6) {
                i = 0;
            }
            $(".gallery-box").find("img").attr("src", images[i]).fadeIn(1000);
            $(".right-boxes-slider").find("div").removeClass("rslider-moving").eq(i).addClass("rslider-moving");
        });
        i = i + 1;
    }, 3500);
});







myflowbox1 = setInterval(function() { 
    $(".flow-1").fadeOut(2400).fadeIn(4300); 
}, 1000);
$(".flow-1").mouseover(function() {clearInterval(myflowbox1); });





myflowbox2 = setInterval(function() {
    $(".flow-2").fadeOut(1000).fadeIn(1500);
}, 2500);

myflowbox3 = setInterval(function() {
    $(".flow-3").fadeOut(3000).fadeIn(4700);
}, 7500);

myflowbox4 = setInterval(function() {
    $(".flow-4").fadeOut(4000).fadeIn(3800);
}, 7800);
myflowbox5 = setInterval(function() {
    $(".flow-5").fadeOut(5000).fadeIn(5600);
}, 10000);
myflowbox6 = setInterval(function() {
    $(".flow-6").fadeOut(6000).fadeIn(4900);
}, 3400);
myflowbox7 = setInterval(function() {
    $(".flow-7").fadeOut(1500).fadeIn(6100);
}, 4000);
myflowbox8 = setInterval(function() {
    $(".flow-8").fadeOut(2500).fadeIn(9900);
}, 5000);
myflowbox9 = setInterval(function() {
    $(".flow-9").fadeOut(3500).fadeIn(1000);
}, 1000);
myflowbox10 = setInterval(function() {
    $(".flow-10").fadeOut(4500).fadeIn(7700);
}, 2000);
myflowbox11 = setInterval(function() {
    $(".flow-11").fadeOut(5500).fadeIn(5600);
}, 4000);
myflowbox12 = setInterval(function() {
    $(".flow-12").fadeOut(4600).fadeIn(6700);
}, 3000);