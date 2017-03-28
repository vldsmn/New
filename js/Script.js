function set_body_height() {
    var wh = $(window).height();
    $('body').attr('style', 'height:' + wh + 'px;');
}
$(document).ready(function () {
    set_body_height();
    $(window).bind('resize', function () { set_body_height(); });
});
$(function () {

    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});