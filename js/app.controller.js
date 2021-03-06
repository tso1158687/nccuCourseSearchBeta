(function() {
    "use strict";

    angular.module("NccuCourseSearch")
        .controller("CourseSearchController", CourseSearchController)


    CourseSearchController.$inject = ["CourseSearchService"];

    function CourseSearchController(CourseSearchService) {
        var search = this;
        search.inputex = "";
        search.inputex2 = "";
        search.input = "";
        search.input2 = "";
        search.input3 = "";
        search.input4 = "";
        search.input5 = "";
        search.input6 = ""
        search.detail = "";
        search.courses = CourseSearchService.getCourses();
        search.click = function() {
            search.inputex2 = search.inputex.split(" ");
            search.input = search.inputex2[0];
            search.input2 = search.inputex2[1];
            search.input3 = search.inputex2[2];
            search.input4 = search.inputex2[3];
            search.input5 = search.inputex2[4];
            search.input6 = search.inputex2[5]
        }
        search.delete = function() {
            search.inputex = "";
            search.input = "";
            search.input2 = "";
            search.input3 = "";
            search.input4 = "";
            search.input5 = "";
        }
        search.index = function($index) {            
            if ($index < 750) {
                search.detail = search.courses[$index];
            } else if ($index > 751) {
                search.detail = search.courses[$index - 3];
            }
            angular.element(document).find('#courseDetail').fadeIn(500);

        }


    }



})();