$(function() {
    
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){ 
      $('.girlsBlock').attr('ontouchstart', '');    
      $(function(){
          $( '.girlsList li a')
            .bind( 'touchstart', function(){
              $(this).find('.cellData').addClass('viewOff');
              $(this).find('span').addClass('viewOff');                
          }).bind( 'touchend', function(){
              $(this).find('.cellData').removeClass('viewOff');
              $(this).find('span').removeClass('viewOff');                
          });
      });        
    
  } else {
      $(".girlsList li a").hover(
          function(){  
              $(this).find('.cellData').addClass('viewOff');
              $(this).find('span').addClass('viewOff');
          },
          function (){
              $(this).find('.cellData').removeClass('viewOff');
              $(this).find('span').removeClass('viewOff');
          }
      );
  }
});

$(function() {
  
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){ 
      $('.formBtnCell').attr('ontouchstart', '');    
      $(function(){
          $( '.formBtnCell .send')
            .bind( 'touchstart', function(){
              $(this).addClass('btnHoverOn');
          }).bind( 'touchend', function(){
              $(this).removeClass('btnHoverOn');
          });
      });        
    
  } else {
      $(".formBtnCell .send").hover(
          function(){  
              $(this).addClass('btnHoverOn');
          },
          function (){
              $(this).removeClass('btnHoverOn');
          }
      );
  }
});

$(function() {
  
  if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){ 
      $('.magazineShopIconList').attr('ontouchstart', '');    
      $(function(){
          $( '.magazineShopIconList a')
            .bind( 'touchstart', function(){
              $(this).find('img').addClass('imgHoverOn');
          }).bind( 'touchend', function(){
              $(this).find('img').removeClass('imgHoverOn');
          });
      });        
    
  } else {
      $(".magazineShopIconList a").hover(
          function(){  
              $(this).find('img').addClass('imgHoverOn');
          },
          function (){
              $(this).find('img').removeClass('imgHoverOn');
          }
      );
  }
});

$(function () {
$('.accessPanel').hide();
$('.accessPanel').eq(0).show();
$('.accessBtn').eq(0).addClass('is-active');
/*クリックイベント*/
$('.accessBtn').each(function () {
  $(this).on('click', function () {
    var index = $('.accessBtn').index(this);
    $('.accessBtn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.accessPanel').hide();
    $('.accessPanel').eq(index).show();
  });
});
});
  
$(function () {
$('.changeMapPanel1').hide();
$('.changeMapPanel1').eq(0).show();
$('.changeMapBtn1').eq(0).addClass('is-active');
/*クリックイベント*/
$('.changeMapBtn1').each(function () {
  $(this).on('click', function () {
    var index = $('.changeMapBtn1').index(this);
    $('.changeMapBtn1').removeClass('is-active');
    $(this).addClass('is-active');
    $('.changeMapPanel1').hide();
    $('.changeMapPanel1').eq(index).show();
  });
});
});
  
$(function () {
$('.changeMapPanel2').hide();
$('.changeMapPanel2').eq(0).show();
$('.changeMapBtn2').eq(0).addClass('is-active');
/*クリックイベント*/
$('.changeMapBtn2').each(function () {
  $(this).on('click', function () {
    var index = $('.changeMapBtn2').index(this);
    $('.changeMapBtn2').removeClass('is-active');
    $(this).addClass('is-active');
    $('.changeMapPanel2').hide();
    $('.changeMapPanel2').eq(index).show();
  });
});
});      
  
$(function() {

  var randomImage = [];
  $('.shopCell').each(function() {
      randomImage.push($(this).html());
  });
  randomImage.sort(function() {
      return Math.random() - Math.random();
  });
  $('.shopCell').empty();

  i = 0;
  $('.shopCell').each(function() {
      $(this).append(randomImage[i]);
      i++;
  });

});

$(function(){
 $('.pageTopbtn a[href^="#"]').click(function() {
    var speed = 400; // ミリ秒
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
 });
});


if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
$(function() {
   $('.topSlick').slick({
      infinite: true,
      dots:true,
      autoplay:true,
  lazyLoad: 'ondemand',
      slidesToShow: 4,
      slidesToScroll: 4,
      fade:false,
      swipeToSlide:true,
      centerMode: true, //センターモード
      centerPadding: '0', //前後のパディング
   });
});
}

if(navigator.userAgent.match(/(iPad)/)){
$(function() {
   $('.topSlick').slick({
      infinite: true,
      dots:true,
      autoplay:true,
  lazyLoad: 'ondemand',
      slidesToShow: 3,
      slidesToScroll: 3,
      fade:false,
      swipeToSlide:true,         
      centerPadding: '0', //前後のパディング
   });
});
}

if(navigator.userAgent.match(/(iPhone|iPod|Android)/)){
$(function() {

   $('.topSlick').slick({
      infinite: true,
      dots:true,
      autoplay:true,
  lazyLoad: 'ondemand',
      slidesToShow: 2,
      slidesToScroll: 2,
      /*fade:false,
      swipeToSlide:true,*/
      centerPadding: '0px', //前後のパディング
   });

});

}


$(function() {

var $elem = $('.floatBlock');

function fadeMoveSwitch() {
  
  var windowWidth = parseInt($(window).width());

  $elem.each(function() {
  var $this = $(this);
    
          $(window).scroll(function () {
              if ($(this).scrollTop() > 100) {
                  $this.fadeIn();
              } else {
                  $this.fadeOut();
              }
          });         

  });
}
fadeMoveSwitch();

});

$(function() {
$(".closeBtn").click(function(){;
  $(this).parent().remove();
});
});

$(function() {
var $child = $("#floatLink > div");
var $parent = $child.parent();
$("#floatLink > div a").css('height', $parent.outerWidth());
});

$(function() {
var $head = $("header");
$("#breadCrumb").css('margin-top', $head.innerHeight());
});

$(function(){
var scrollpos;

$('#toggle').on('click', function(){

  $(this).toggleClass('active');

  $('#overlay').toggleClass('open');

  $('body').toggleClass('bodyFix');
      if($('body').hasClass('bodyFix')){
          scrollpos = $(window).scrollTop();
          $('body').addClass('fixed').css({'top': -scrollpos});
      } else {
          $('body').removeClass('fixed').css({'top': 0});
          window.scrollTo( 0 , scrollpos );   
      }
});
});  


