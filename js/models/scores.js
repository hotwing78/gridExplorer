let collections = require('./scoreCollections')
module.exports = Backbone.Model.extend({
  initialize: function(){
    this.scores = new collections();
    this.scores.fetch({
      success: function() {
          console.log(that.newCollection);
      },
      error: function() {
          console.log("didn't work.")
      }
    });

  },
  defaults:{
    "name": "Damon",
    "score": 1,
    "playerType": 20
  },

  topScores: function(){
    
  }
})
