describe('GoalbusterController', function() {
  beforeEach(module('goalbusterApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GoalbusterController');
  }));


  it('initializes with a goal', function() {
    expect(ctrl.goals).toEqual(["Goal 1", "Goal 2", "Goal 3"]);
  });
});
