let sizes = require('./sizes.js')
let collection = require('./sizesCollections')
    // Purpose: Keep track of DATA related to column controller
module.exports = Backbone.Model.extend({
    initialize: function() {
        this.newCollection = new collection();
        let that = this
        this.newCollection.fetch({
            success: function() {
                console.log(that.newCollection);
            },
            error: function() {
                console.log("didn't work.")
            }
        });

    },
    //'Construtor' function  - what I want it to do
    defaults: {
        name: '',
        size: '',
        energy: '',
        energyPerMove: '',
        moves: 0,
        x_axis: Math.floor((Math.random() * 10) + 1),
        y_axis: Math.floor((Math.random() * 10) + 1)
    },

    setName: function(name) {
        this.set('name', name);

        console.log(name);
    },

    recordScore: function() {
            this.get('name')
            this.get('size')
            this.get('moves')
        },
        //Moves Data-------------
    north: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('y_axis') < 10) {
            this.set('y_axis', this.get('y_axis') + 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (energy <= 0) {
            this.trigger('gameOver', this)
        }
    },

    east: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('x_axis') < 10) {
            this.set('x_axis', this.get('x_axis') + 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (energy <= 0) {
            this.trigger('gameOver', this)
        }

    },

    south: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('y_axis') >= 1) {
            this.set('y_axis', this.get('y_axis') - 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (energy <= 0) {
            this.trigger('gameOver', this)
        }
    },

    west: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('x_axis') >= 1) {
            this.set('x_axis', this.get('x_axis') - 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (energy <= 0) {
            this.trigger('gameOver', this)
        }
    },

    small: function() {
        let search = this.newCollection.find(function(what) {
            return what.get('name') === 'Small'
        });
        this.set('size', 'Small');
        this.set('energy', search.get('startingEnergy'));
        this.set('energyPerMove', search.get('energyPerMove'));
        console.log(search.get('startingEnergy'));

    },
    large: function() {
        let search = this.newCollection.find(function(what) {
            return what.get('name') === 'Large'
        });
        this.set('size', 'Large');
        this.set('energy', search.get('startingEnergy'));
        this.set('energyPerMove', search.get('energyPerMove'));
        console.log(search.get('startingEnergy'));

    },
    gargantuan: function() {
        let search = this.newCollection.find(function(what) {
            return what.get('name') === 'Gargantuan'
        });
        this.set('size', 'Gargantuan');
        this.set('energy', search.get('startingEnergy'));
        this.set('energyPerMove', search.get('energyPerMove'));
        console.log(search.get('startingEnergy'));

    },

});
