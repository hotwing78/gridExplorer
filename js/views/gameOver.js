
module.exports = Backbone.View.extend({
  initialize: function(){
    this.model.on('gameOver',this.render, this)
    this.model.highscores.on('scores',this.postScores,this)
  },

  render: function(){
    let container = document.querySelector('.gameOver');
    let gameO = document.createElement('div');
    gameO.textContent = ` Name: ${this.model.get('name')}
                          Score: ${this.model.get('moves')}`
    container.appendChild(gameO);
  },

  postScores: function(){
    // let container = document.querySelector('.gameOver');
    // let gameO = document.createElement('div');
    console.log('trigger')
    this.model.highscores.forEach(function(model){
      console.log(model);
    });
  },

});
