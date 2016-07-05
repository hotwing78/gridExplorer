let playerModel = require('./models/player')
let newPlayerView = require('./views/newPlayer');
let gameView = require('./views/gameView');
let gameOver = require('./views/gameOver');

module.exports = Backbone.Router.extend({
    // creates our player for the game
    initialize: function() {
        let player = new playerModel();

        //My start screen views
        this.aNewPlayer = new newPlayerView({
            model: player,
            el: document.querySelector('.signIn'),
        }); //end start instance

        //My game view
        this.newGame = new gameView({
            model: player,
            el: document.querySelector('.game')
        }); //end game view

        //My game over view
        this.itsOver = new gameOver({
            model: player,
            el: document.querySelector('.gameOver')
        }); //end of game over view

        this.newGame.on('gameOver', function(model) {
            this.navigate('gameOver', {
                trigger: true
            })
        }, this);

    }, //End of initialize

    routes: {
        // URL   FUNCTION
        'start': 'newChar',
        'gameOver': 'itsOver',
    },

    newChar: function() {
        console.log('start a new game')
            // I am hiding the start screen
        this.aNewPlayer.el.classList.add('hidden');
        //I am displaying the game screen
        this.newGame.el.classList.remove('hidden');
        this.itsOver.el.classList.add('hidden');
    },

    itsOver: function() {
        console.log('game is over')
            //I am hiding the game screen
        this.newGame.el.classList.add('hidden');
        // I am displaying the game over screen
        this.itsOver.el.classList.remove('hidden');
        this.aNewPlayer.el.classList.add('hidden');
    },
}); // end of Router.extend
