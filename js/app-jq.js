$(document).ready(function() {
    var $input = $("#searchInput").find("input");
    $input.focus(function() {
        $input.parent().parent().parent().parent()
            .removeClass("main")
            .addClass("main2")
    })
    var $courseMask = $("#courseDetail").find(".mask");
    var $courseContent = $("#courseDetail").find(".content").find("button")
    var $course = $("#courseDetail");
    $courseMask.click(function() {
        $course.fadeOut(500);
    });
    $courseContent.click(function() {
        $course.fadeOut(500);
    })
});
