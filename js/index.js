new WOW().init();
$(document).ready(function () {
    $("a[href='#top']").click(function () {
        $("html, body").animate({ scrollTop: 400 }, "slow");
        return false;
    });
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            if ($(".page-mark").hasClass('d-none'))
                $(".page-mark").removeClass('d-none');
        } else {
            $(".page-mark").addClass('d-none');
        }
    }
});