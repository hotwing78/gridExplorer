module.exports = Backbone.View.extend({
   initialize: function(){
     this.model.on('change', this.render,this)
   },

  events:{
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

  gridMaker: function(){


    let grid = document.querySelector('#theGrid');
    let gridSize = 10;
    let row = document.createElement('div');
    let column = document.createElement('div');


    grid.innerHTML = '';
    for (let x = 0; x < gridSize; x++) {
        row.classList.add('row');
        grid.appendChild(row);
        for (var y = 0; y < gridSize; y++) {
            column.classList.add('column');
            row.appendChild(column);

        }
      }
  },

  render: function(){
      let player = document.querySelector('#player');
      let type = document.querySelector('#type');
      let energy = document.querySelector('#energy');
      let moves = document.querySelector('#moves');
      let coordinates = document.querySelector('.coordinates');
      player.textContent = ` ${this.model.get('name')}`;
      type.textContent = ` ${this.model.get('size')}`;
      energy.textContent = ` ${this.model.get('energy')}`;
      moves.textContent =` ${this.model.get('moves')}`;
      coordinates.textContent = `x: ${this.model.get('x_axis')}, y: ${this.model.get('y_axis')}`;
      this.gridMaker();
  }

});
