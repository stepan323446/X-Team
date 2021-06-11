$(function () {
    $('.burger-menu').click(function (e) {
        $('.burger-menu span, .nav-inner > ul').toggleClass('active');
        $('html').toggleClass('lock');
    })
    $('.nav-sect').click(function (e) {
        let isThis = $(this).children('.subnav-sect').hasClass('active');
        if (isThis) {
            $(this).children('.subnav-sect').toggleClass('active');
        }
        else {
            $('.subnav-sect').removeClass('active');
            $(this).children('.subnav-sect').toggleClass('active');
        }

    });

    // Видео
    var videoURL = $("#video342562342").attr("src");
    $("#video342562342").attr("src","");

    $('#video').click(function(e)
    {
        $('.video-start').removeClass('closed');
        $("#video342562342").attr("src", videoURL);
    });
    $('.close-btn').click(function(e)
    {
        $("#video342562342").attr("src","");
        $('.video-start').addClass('closed');
    });

    // Input для отправки заявки
    var sented = false;

    var correctInputImg = "images/correct-field.svg";
    var ErrorInputImg = "images/error-field.svg";

    $('input').on("change keyup paste", function(e)
    {
        if($(this).is(':invalid'))
        {
            InputError(this, 'Поле введено неверно');
        }
        if($(this).is(':valid'))
        {
            InputSuccessful(this);
        }
        if($(this).val() == "")
        {
            InputNoneImg(this);
        }
    });
    $('#btn-send').click(function(e)
    {
        var numBool = $('#number input').is(':valid');
        var emailBool = $('#email input').is(':valid');
        var nameBool = $('#name input').is(':valid');

        if(numBool && emailBool && nameBool)
        {
            if($('#number input').val() == "" || $('#email input').val() == "" || $('#name input').val() == "")
            {
                AlertNotice('You have not completed the entire form', true);
                return;
            }
            if(sented == false)
            {
                AlertNotice('Your form has been submitted', false);
                sented = true;
            }
            else
            {
                AlertNotice('You have already submitted the form', false);
            }
        }
        else
        {
            AlertNotice('ERROR: You filled in the fields incorrectly', true);
        }
    });

    function InputNoneImg(obj)
    {
        GetNotice(obj).hide();
    }
    function InputSuccessful(obj)
    {
        GetNotice(obj).show();
        GetNotice(obj).children('img').attr('src', correctInputImg);
    }
    function InputError(obj, message)
    {
        GetNotice(obj).show();
        GetNotice(obj).children('img').attr('src', ErrorInputImg);
    }
    function GetNotice(obj)
    {
        return $(obj).parent().children('.message-correct');
    }

    function AlertNotice(message, error)
    {
        var noticeObj = $('#notice');
        if(error)
            $(noticeObj).addClass('error');
        else
            $(noticeObj).removeClass('error');

        $(noticeObj).text(message);
        $(noticeObj).fadeIn(500).delay(3000).fadeOut(500);

    }

    // Брэнд слайдер при мобильных скринах
    sliderBrand();

    $(window).resize(function () {
        size();
    });
    // Смена аттрибутов при разном разрешении
    function size() {
        var w = $(window).width();
        if (w <= 500) {
            $("#video > img").attr('src', 'images/video-mobile.png');
        }
        else {
            $("#video > img").attr('src', 'images/video.png');
        }
    };

    //Slick
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">→</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">→</button>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ] 
    });

    

    $('.collectionSlider').slick(
        {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,

            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">→</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">→</button>',
            responsive: [
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    );
    $('.item').click(function(e)
    {
        $('.item').removeClass('active');
        $(this).addClass('active');    
    });

    
    
    function sliderBrand()
    {
        if ($(window).width() <= 1000) {
            $('.slider-brands').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                
                prevArrow: '<button class="slick-prev slick-arrow-black" aria-label="Previous" type="button">→</button>',
                nextArrow: '<button class="slick-next slick-arrow-black" aria-label="Next" type="button">→</button>',
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        },
                    },
                    {
                        breakpoint: 780,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    } 
    
    

});