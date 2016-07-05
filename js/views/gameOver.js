
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
    let container = document.querySelector('.gameOver');
    let gameO = document.createElement('div');
      let that = this.model.highscores
    console.log('trigger')

    for(x = 0; x < 5; x++){
      let score = {
        name: that.models[x].attributes.name,
        score: that.models[x].attributes.score,
        type: that.models[x].attributes.playerType,
      }
      gameO.textContent = `Name: ${score.name}
                           Score: ${score.score}
                           type: ${score.type}`;
      container.appendChild(gameO);
    }


  },

});
