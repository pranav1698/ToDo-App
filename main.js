angular.module('toDoApp', []) /* created a angular module with name toDoApp, the empty array used as the second argument for the module method is a list of dependencies that this module relies on; It is a list of strings that are names of other Angular modules */
    .controller('toDoController',['$scope', function($scope) { /**Creates our controller, chaining it to the angular.module(), We put all the angular services in the controller as strings and the function where we will put our controller logic */
        $scope.name = 'Pranav'

        $scope.alertMe = () => {
            alert('Alert Me');
        }
    }]);

/**Services in Angular are objects used as tools, they start with a $ and inject them to a controller, It is used to store data within the controller and can be automatically accesed in the View
 * $scope is the Angular Model object,   
 */