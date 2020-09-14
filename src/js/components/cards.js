app.controller("CardsController", function($scope, $http) {
  $scope.todos = [];

  $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos'
  }).then(function successCallback(response) {
    // 200 todos was a bit much for this example
    $scope.todos = response.data.splice(0, 20);
    console.log('test: ', $scope.todos[0]);
  }, function errorCallback(err) {
    console.log("errors: ", err);
  });

  $scope.toggleCard = (index, id = 1) => {
    console.log('id: ', index, id);
    // Call the API and only update the state if the API returns successfully
    $http({
      method: 'PUT',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`
    }).then(function successCallback() {
      // Simply toggle the boolean at the specified index
      $scope.todos[index].completed = !$scope.todos[index].completed;
    }, function errorCallback(err) {
      console.log("errors: ", err);
    });
  };

  $scope.deleteCard = (index, id = 1) => {
    // Call the API and only update the state if the API returns successfully
    $http({
      method: 'DELETE',
      url: `https://jsonplaceholder.typicode.com/todos/${id}`
    }).then(function successCallback() {
      // Simply remove at the specified index if API call goes trough
      $scope.todos.splice(index, 1);
    }, function errorCallback(err) {
      console.log("errors: ", err);
    });
  };

});
