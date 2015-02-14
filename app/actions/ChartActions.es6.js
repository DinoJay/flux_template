var AppDispatcher = require('../AppDispatcher');
var ExampleConstants = require('constants/ExampleConstants');

var ChartActions = {

  chart: data => {
    AppDispatcher.handleViewAction({
      actionType : ExampleConstants.CHART_TEST,
      BLALdata : data
    });
  }

};

module.exports = ChartActions;
