/**
 * Created by Scott on 1/11/16.
 */
var app = angular.module('twitterHandleGen', []);
var ARRAYMIN = 0;
var ARRAYMAX = 9;

app.controller('mainController', ['$scope', '$http', function($scope, $http){
    //$scope.message = "Twitter handles go here.";
    var randNumber = function randomNumber(min,max){
        return Math.floor(Math.random() * (1 + max -min) + min);
    };

    //$scope.adjectives = [];
    //$scope.nouns = [];
    //$scope.twitterHandle = "";
    //$scope.adjPosition = 0;
    //$scope.nounPosition = 0;
    //$scope.twitterNouns = [];
    //$scope.twitterAdjectives = [];


        //$http.get('/getThings')

        //$http.post('/postURL', data)

    $http({
        method: 'GET',
        url: '/twitterAdj'
    }).then(function(response){
        $scope.adjectives = response.data;
        //$scope.twitterAdjectives = response.data.twitterAdj;
        //$scope.ADJLISTLENGTH = $scope.twitterAdjectives.length - 1;
        //$scope.adjPosition = randNumber(0, $scope.ADJLISTLENGTH);
        //console.log('Random number on adjective list: ', $scope.adjPosition);
        //$scope.adjective = $scope.twitterAdjectives[$scope.adjPosition];
        makeSecondCall();
    });

    function makeSecondCall(){
        $http({
            method: 'GET',
            url: '/twitterNoun'
        }).then(function(response){
            $scope.nouns = response.data;
            //$scope.twitterNouns = response.data.twitterNoun;
            //$scope.NOUNLISTLENGTH = $scope.twitterNouns.length - 1;
            //$scope.nounPosition = randNumber(0, $scope.NOUNLISTLENGTH);
            //console.log('Random number on noun list: ', $scope.nounPosition);
            //$scope.noun = $scope.twitterNouns[$scope.nounPosition];

            generateHandles();
        });
    }

    function generateHandles(){
        //see board
        console.log('Twitter adjectives: ', $scope.adjectives);
        console.log('Twitter nouns: ', $scope.nouns);
        var list = [];
        for (var i=1; i <= 10; i++){
            var tempAdj = $scope.adjectives.twitterAdj[randNumber(ARRAYMIN, ARRAYMAX)];
            var tempNoun = $scope.nouns.twitterNoun[randNumber(ARRAYMIN, ARRAYMAX)];
            //console.log('Random Handle: ', '@' + $scope.adjectives.twitterAdj[randNumber(ARRAYMIN, ARRAYMAX)] + $scope.nouns.twitterNoun[randNumber(ARRAYMIN, ARRAYMAX)]);
            list.push(tempAdj + tempNoun);
        }
        $scope.handles = list;
    }

    $scope.loadTwitterHandles = function(){
        //$scope.twitterHandle = '@' + $scope.adjective + $scope.noun;
    };
}]);