$(document).ready(function() {
    var $input = $("#searchInput");
    $input.focus(function() {
        $input.parent().parent()
        .removeClass("main")
        .addClass("main2")
    })
});
