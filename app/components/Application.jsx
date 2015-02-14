var React = require('react');

var ExampleStore = require('stores/ExampleStore');
var ExampleActions = require('actions/ExampleActions');

var ChartStore = require('stores/ChartStore');
var ChartActions = require('actions/ChartActions');

var SubComponent = require('./SubComponent');

var getState = function() {
  return {
    message  : ChartStore.data
  };
};

var counter = 0;

var Application = React.createClass({

  _onChange : function() {
    this.setState(getState());
  },

  getInitialState : function() {
    return getState();
  },

  componentDidMount : function() {
    ChartStore.addChangeListener(this._onChange);
  },

  componentWillUnmount : function() {
    ChartStore.removeChangeListener(this._onChange);
  },

  //_sendMessage : function() {
    //ExampleActions.sendMessage('ssssx' + counter++);
  //},

  _chartTest : function() {
    ChartActions.chart('ssssx' + counter++);
    console.log("trigger", counter);
  },

  render : function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>You can edit stuff in here and it will hot update</h2>
        <button onClick={this._chartTest}>Send Message</button>

        <SubComponent message={this.state.message} />
      </div>
    );
  }

});

React.renderComponent(Application(), document.body);
