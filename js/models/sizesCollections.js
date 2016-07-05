let sizes = require('./sizes.js');
module.exports = Backbone.Collection.extend({
  url: 'http://grid.queencityiron.com/api/players/3',
  model: sizes,
})
