$(document).ready(function() {
    // 處理畫面
    var $input = $("#searchInput").find("input");
    $input.focus(function() {
            $input.parent().parent().parent().parent()
                .removeClass("main")
                .addClass("main2")
                

        })


        // 處理mask
    var $courseMask = $("#courseDetail").find(".mask");
    var $courseContent = $("#courseDetail").find(".content").find("button")
    var $course = $("#courseDetail");
    $courseMask.click(function() {
        $course.fadeOut(500);
    });
    $courseContent.click(function() {
        $course.fadeOut(500);
    });
    // 處理巡覽列
    var $nav = $("nav").find("li")
    $nav.click(function() {
        $nav.removeClass("active"),
            $(this).addClass("active"),
            $input.parent().parent().parent().parent()
            .removeClass("main")
            .addClass("main2")
    });
});
