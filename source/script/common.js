$(document).ready(function(){
    $('.vk').hover(function(){
        $(this).find('img').attr('src', './images/icon/vk-hover.svg');
    }, function(){
        $(this).find('img').attr('src', './images/icon/vk.svg');
    });

    $('.ok').hover(function(){
        $(this).find('img').attr('src', './images/icon/ok-hover.svg');
    }, function(){
        $(this).find('img').attr('src', './images/icon/ok.svg');
    });

    $('.instagram').hover(function(){
        $(this).find('img').attr('src', './images/icon/instagram-hover.svg');
    }, function(){
        $(this).find('img').attr('src', './images/icon/instagram.svg');
    });

    $('.youtube').hover(function(){
        $(this).find('img').attr('src', './images/icon/youtube-hover.svg');
    }, function(){
        $(this).find('img').attr('src', './images/icon/youtube.svg');
    });

    $('.footer__link img, .header__link img, .city img, .btn-up img').each(function() {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
      
        $.get(imgURL, function(data) {
          var $svg = jQuery(data).find('svg');
      
          if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
      
          $svg = $svg.removeAttr('xmlns:a');
      
          $img.replaceWith($svg);
        }, 'xml');
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('.header').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('.header').removeClass('fixed');
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });

    $('.btn-up').click(function(){$('html,body').animate({scrollTop:0}, 800)});

    $('.header__mobile input').click(function(){
        $('.header__menu').toggleClass('is-open');
    });

    $('.license__wrap').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1284,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1012,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.brands__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1284,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1012,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 745,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});