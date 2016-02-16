(function() {
    'use strict';

    angular
        .module('app')
        .controller('Controller', Controller);

    Controller.$inject = [];

    /* @ngInject */
    function Controller() {
        var vm = this;
        vm.title = 'Controller';
        vm.goPage1 = goPage1;
        vm.goPage2 = goPage2;
        vm.goPage3 = goPage3;
        activate();

        ////////////////

        function activate() {

        	vm.page1=true;
        	vm.page2=false;
        	vm.page3=false;
        }

        function goPage1(){
        	console.log('1');
        	vm.page1=true;
        	vm.page2=false;
        	vm.page3=false;
        }

        function goPage2(){
        	console.log('2');
        	vm.page1=false;
        	vm.page2=true;
        	vm.page3=false;
        }

        function goPage3(){
        	console.log('3');
        	vm.page1=false;
        	vm.page2=false;
        	vm.page3=true;
        }
    }
})();