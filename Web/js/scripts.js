
$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.nav').addClass("sticky");
        }
        else {
            $('.nav').removeClass("sticky");
        }
    });

    $('.nav .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menuButton').click(function() {
        $('.nav .menu').toggleClass('active');
        $('.menuButton img').toggleClass('active');
    });

}  );