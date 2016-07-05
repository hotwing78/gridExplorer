module.exports = Backbone.View.extend({
    initialize: function() {
        console.log(this);
        this.model.on('change', this.render, this);
    },

    events: {
        'click #start': 'start',
        'click .north': 'clickNorth',
        'click .east': 'clickEast',
        'click .south': 'clickSouth',
        'click .west': 'clickWest',
    },

    start: function(){
      this.model.start();
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
