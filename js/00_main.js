$(function () {

  var scrollpos;

  $("#toggle").on("click", function () {
    $(this).toggleClass("active");

    $("#overlay").toggleClass("open");

    $("body").toggleClass("bodyFix");
    if ($("body").hasClass("bodyFix")) {
      scrollpos = $(window).scrollTop();
      $("body").addClass("fixed").css({ top: -scrollpos });
    } else {
      $("body").removeClass("fixed").css({ top: 0 });
      window.scrollTo(0, scrollpos);
    }
  });
});
