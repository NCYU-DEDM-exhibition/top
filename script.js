/*-----錨點-----*/
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top
                    },
                    1000
                );
                return false;
            }
        }
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('#bar_bg').fadeIn();
    } else {
        $('#bar_bg').fadeOut();
    }
});

/*-----loading-----*/

window.onload = function() { 
    $(".loading_wrapper").fadeOut(3000);
};
