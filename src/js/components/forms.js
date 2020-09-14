app.controller("FormController", function($scope, $http) {
  $scope.task = '';

  // Because the ID returned is fake, the toggleCard functionality will error out.
  // If the API really added this entry, the toggleCard() would work on this new entry
  $scope.onSubmit = () => {
    if ($scope.task !== '') {
      $http({
        method: 'POST',
        url: `https://jsonplaceholder.typicode.com/todos`,
        data: {
          // Fake data
          userId: 1,
          completed: false,
          title: $scope.task
        }
      }).then(function successCallback(response) {
        // As this is a "child component" we can just push directly to the parent scope.
        $scope.$parent.todos.push(response.data);
      }, function errorCallback(err) {
        console.log("errors: ", err);
      });
    }
  }

});
