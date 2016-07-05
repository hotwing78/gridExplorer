let scoreModel = require('./scores');
module.exports = Backbone.Collection.extend({
    url: 'http://grid.queencityiron.com/api/highscore',
    model: scoreModel,
});
