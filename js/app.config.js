(function() {
    "use strict";

    angular.module("NccuCourseSearch", ["ui.router"])
    angular.module("NccuCourseSearch")
    .config(NccuCourseSearchConfig)
    NccuCourseSearchConfig.$inject=["$stateProvider", "$urlRouterProvider"];

    function NccuCourseSearchConfig($stateProvider, $urlRouterProvider){
    	$urlRouterProvider.otherwise("/course");
    	$stateProvider
    	.state("course",{
    		url:"/course",
    		templateUrl:"js/template/course.html"
    	})
    	.state("howToUse",{
    		url:"/howToUse",
    		templateUrl:"js/template/howtouse.html"
    	})
    	.state("about",{
    		url:"/about",
    		templateUrl:"js/template/about.html"
    	})

    }
           

})();
