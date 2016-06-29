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
