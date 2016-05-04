goalbusterApp.service('GoalService', ['$http', 'GoalFactory', function($http, GoalFactory) {
  var self = this;

  self.getAll = function() {
    return $http.get('http://goalbuster-api.herokuapp.com/goals.json')
      .then(_handleResponseFromApi);
  }

  function _handleResponseFromApi (response)  {
    return response.data.map(function(goalsData){
      return new GoalFactory(goalsData.name);
    });
  }

}]);
