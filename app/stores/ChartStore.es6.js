// Models (Stores in Flux terminology)
var BaseStore = require('./BaseStore');
var ExampleConstants = require('constants/ExampleConstants');

var storeInstance;

var _data = [1,2,3,4,5,6,7];
var _sum  = 0;

var message = "";

class ChartStore extends BaseStore {
  //constructor(data) {
    //this.data = data
  //}

  get message() {
    return message;
  }

  get sum() {
    return _sum;
  }

  get data() {
    return _data;
  }
}

var actions = {};

actions[ExampleConstants.CHART_TEST] = action => {
  console.log(action);
  _data.pop();
  storeInstance.emitChange();
};

storeInstance = new ChartStore(actions);

module.exports = storeInstance;

  function updateData() {
    _data = randomize();
    _sum = 0;
  }

  function updateSum(extent, x) {
    _sum = _data.filter(function(d) {
      return extent[0] <= x(d.x) && x(d.x) + x.rangeBand() <= extent[1];
    })
    .reduce(function(a, b) {
      return a + b.y;
    }, 0);
  }
