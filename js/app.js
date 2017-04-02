(function() {
    "use strict";

    angular.module("NccuCourseSearch", [])
        .controller("CourseSearchController", CourseSearchController)
        .service("CourseSearchService", CourseSearchService)
    //     .directive("courseResult", CourseResult)

    // function CourseResult() {
    //     var ddo = {
    //         templateUrl: 'courseresult.html'
    //     };

    //     return ddo;

    // }

    CourseSearchController.$inject = ["CourseSearchService"];

    function CourseSearchController(CourseSearchService) {
        var search = this;
        search.courses = CourseSearchService.getCourses();
        search.input = "";
        search.showcase = true;
    }

    function CourseSearchService() {
        var service = this;
        var courses = [{
            name: "知識論",
            teacher: "鄭光明",
            day: "五",
            time: "234",
            place: "道藩224"
        }, {
            name: "邏輯",
            teacher: "王華",
            day: "四",
            time: "234",
            place: "舜文大講堂"
        }, {
            name: "梵文(二)",
            teacher: "耿晴",
            day: "二",
            time: "234",
            place: "百年108"
        }, {
            name: "中國哲學史(二)",
            teacher: "耿晴",
            day: "二",
            time: "234",
            place: "百年012"
        }, {
            name: "應用倫理學",
            teacher: "鄭光明",
            day: "五",
            time: "D56",
            place: "道藩224"
        }, {
            name: "西洋哲學史(二)",
            teacher: "張國賢",
            day: "四",
            time: "D56",
            place: "季陶107"
        }, {
            name: "宋明理學",
            teacher: "馬愷之",
            day: "一",
            time: "78E",
            place: "商館312"
        }, {
            name: "莎士比亞哲學",
            teacher: "詹康",
            day: "四",
            time: "D56",
            place: "道藩316"
        }, {
            name: "柏拉圖:Crito導讀",
            teacher: "何淑靜",
            day: "二",
            time: "234",
            place: "研究102"
        }, {
            name: "當代政治哲學發展",
            teacher: "何信全",
            day: "二",
            time: "34",
            place: "資訊205"
        }, {
            name: "海德格哲學導論",
            teacher: "汪文聖",
            day: "二",
            time: "78E",
            place: "研究202"
        }, {
            name: "康德《純粹理性批判》",
            teacher: "林遠澤",
            day: "一",
            time: "D56",
            place: "道藩316"
        }, {
            name: "佛教哲學:實在論與反實在論",
            teacher: "林鎮國",
            day: "二",
            time: "D56",
            place: "百年222"
        }, {
            name: "西洋近代政治哲學",
            teacher: "詹康",
            day: "五",
            time: "234",
            place: "百年406"
        }, {
            name: "奧古斯丁哲學",
            teacher: "羅麗君",
            day: "二",
            time: "D56",
            place: "資訊207"
        }, {
            name: "先秦儒家哲學",
            teacher: "何淑靜",
            day: "三",
            time: "234",
            place: "研究102"
        }, {
            name: "哲學經典導讀",
            teacher: "何淑靜",
            day: "二",
            time: "234",
            place: "研究102"
        }, {
            name: "哲學經典導讀",
            teacher: "李政國",
            day: "四",
            time: "34",
            place: "百年304"
        }, {
            name: "哲學經典導讀",
            teacher: "郭大維",
            day: "五",
            time: "56",
            place: "百年304"
        }, , {
            name: "隋唐佛學",
            teacher: "涂艷秋 ",
            day: "三",
            time: "D56",
            place: "學思208"
        }, , {
            name: "中世紀基督宗教史",
            teacher: "崔國瑜",
            day: "一",
            time: "D56",
            place: "季陶402"
        }];
        service.getCourses = function() {
            return courses;
        };

    }

})();
