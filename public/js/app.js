(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let gridControlModel = require('./models/gridControl.js')
let gridControlView = require('./views/gridControl.js')

window.addEventListener('load', function(){

  let grpModel = new gridControlModel();

  let grpView = new gridControlView({
      model: grpModel,
      el: document.getElementById('main')
  });
});

},{"./models/gridControl.js":2,"./views/gridControl.js":3}],2:[function(require,module,exports){
// Purpose: Keep track of DATA related to colume controller
module.exports = Backbone.Model.extend({
    //'Construtor' function  - what I want it to do
    defaults: {
        x_axis: Math.floor((Math.random() * 10) + 1),
        y_axis: Math.floor((Math.random() * 10) + 1)
    },

    north: function() {
      console.log('clicked!')
        if (this.get('y_axis') < 10) {
            this.set('y_axis', this.get('y_axis') + 1)

        }
    },

    east: function() {
        if (this.get('x_axis') < 10) {
            this.set('x_axis', this.get('x_axis') + 1)

        }

    },

    south: function() {
        if (this.get('y_axis') >= 1) {
            this.set('y_axis', this.get('y_axis') - 1)

        }
    },

    west: function() {
        if (this.get('x_axis') >= 1) {
            this.set('x_axis', this.get('x_axis') - 1)

        }
    }



});

},{}],3:[function(require,module,exports){
module.exports = Backbone.View.extend({
    initialize: function() {
        console.log(this);
        this.model.on('change', this.render, this);
    },

    events: {
        'click .north': 'clickNorth',
        'click .east': 'clickEast',
        'click .south': 'clickSouth',
        'click .west': 'clickWest',
    },


    clickNorth: function() {
      
        this.model.north();
    },

    clickEast: function() {
      this.model.east();
    },

    clickSouth: function() {
      this.model.south();
    },

    clickWest: function() {
      this.model.west();
    },

    render: function(){
      let coordinates = this.el.querySelector('.coordinates');
      coordinates.textContent = `x: ${this.model.get('x_axis')}, y: ${this.model.get('y_axis')}`
    }
});

},{}]},{},[1])