
module.exports = Backbone.Model.extend({
  url: 'http://grid.queencityiron.com/api/highscore',

  defaults:{
    "name": "Damon",
    "score": 1,
    "playerType": 20
  },

})
