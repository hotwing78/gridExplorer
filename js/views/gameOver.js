
module.exports = Backbone.View.extend({
  initialize: function(){
    this.model.on('gameOver',this.render, this)
  },

  render: function(){
    let container = document.querySelector('.gameOver');
    let gameO = document.createElement('div');
    container.appendChild(gameO);

  }
});
