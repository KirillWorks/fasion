$(document).ready(function () {
    //    var left, top;
    //
    //    function mTimeOut(ms) {
    //        ms = ms || 8000;
    //        setTimeout(function () {
    //
    //            var $girl = $('.girls1');
    //            console.log('crash?');
    //            if (parseInt($girl.css('top')) < 400) {
    //                console.log('crash!', $girl.css('top'));
    //                $girl.css({
    //                    transform: "rotate(200deg)"
    //                });
    //            }
    //            setTimeout(mTimeOut, 12000);
    //        }, ms);
    //    };
    //    mTimeOut();
    //    $block = $('.girls1'),
    //        $block2 = $('.block'),
    //        w = $block2.outerWidth(true),
    //        h = $block2.outerHeight(true);
    //
    //    $(document).keydown(function (e) {
    //        switch (e.keyCode) {
    ////            case 39: // вправо
    ////                left = $block.position().left;
    ////
    ////                if (left <= 450) {
    ////                    $block.animate({
    ////                        "left": "+=100px"
    ////                    }, {
    ////                        "duration": "fast",
    ////                        "complete": function () {
    ////                            if (left <= 450) {
    ////                                $block.clearQueue();
    ////                            }
    ////                        }
    ////                    });
    ////                }
    //
    ////                break;
    ////            case 37: // влево
    ////                left = $block.position().left;
    ////
    ////                if (left >= w) {
    ////                    $block.animate({
    ////                        "left": "-=100px"
    ////                    }, {
    ////                        "duration": "fast",
    ////                        "complete": function () {
    ////                            if (left >= w) {
    ////                                $block.clearQueue();
    ////                            }
    ////                        }
    ////                    });
    ////                }
    //
    ////                break;
    //            case 40: // вниз
    //                top = $block.position().top;
    //
    //                if (top <= 600) {
    //                    $block.animate({
    //                        "top": "+=100px"
    //                    }, {
    //                        "duration": "fast",
    //                        "complete": function () {
    //                            if (top <= 600) {
    //                                $block.clearQueue();
    //                            }
    //                        }
    //                    });
    //                }
    //
    //                break;
    //            case 38: // вверх
    //                top = $block.position().top;
    //
    //                if (top >= 350) {
    //                    $block.animate({
    //                        "top": "-=100px"
    //                    }, {
    //                        "duration": "fast",
    //                        "complete": function () {
    //                            if (top >= 350) {
    //                                $block.clearQueue();
    //                            }
    //                        }
    //                    });
    //                }
    //
    //                break;
    //        }
    //    });


    $('.slick-slider-top').slick({
        //fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3500,

    });

    $('.slick-slider-photogallery').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="PrevArrow"></div>',
        nextArrow: '<div class="NextArrow"></div>'
    });

    $(function () {
        $(".breadcakes").tabs();
    });

    $(".breadcakes li").click(function (e) {
        e.preventDefault();
        $(".breadcakes li").removeClass('breadcakes-active');
        $(this).addClass('breadcakes-active');
    })

});
