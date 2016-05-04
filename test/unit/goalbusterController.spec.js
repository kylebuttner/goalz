"use strict"

describe('GoalbusterController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl, httpBackend, GoalService, GoalFactory, testObject;

  beforeEach(inject(function($controller, _GoalFactory_, _GoalService_, $httpBackend) {
    GoalFactory = _GoalFactory_;
    GoalService = _GoalService_;
    testObject = [{name: "learn piano"}];
    ctrl = $controller('GoalbusterController');
  }));



  it('when initializing it gets all goals from API', function() {
    expect(ctrl.goals).toEqual([]);
  });

  it('can add a new goal', function() {
    ctrl.addNewGoal('NewGoal');
    var goal = new GoalFactory('NewGoal');
    expect(ctrl.goals.pop()).toEqual(goal);
  });
});