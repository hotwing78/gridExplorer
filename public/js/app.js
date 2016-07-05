(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let AppRouter = require('./router');

window.addEventListener('load', function(){
    let router = new AppRouter();
    Backbone.history.start();
})

},{"./router":7}],2:[function(require,module,exports){
let sizes = require('./sizes.js')
let collection = require('./sizesCollections')
let scores = require('./scores')
let highScores = require('./scoreCollections')
    // Purpose: Keep track of DATA related to column controller
module.exports = Backbone.Model.extend({
    initialize: function() {
        this.newCollection = new collection();
        this.newScores = new scores();
        this.highscores = new highScores();

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

    //PUT DUPLICATE CODE IN A FUNCTION!!!!!!!!!!!!!!!!!!
    north: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('y_axis') < 10 && energy > 0) {
            this.set('y_axis', this.get('y_axis') + 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (this.get('energy') <= 0) {
            console.log('energy depleted')
            this.postScore();
            this.trigger('gameOver', this)
        }
    },

    east: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('x_axis') < 10 && energy > 0) {
            this.set('x_axis', this.get('x_axis') + 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (this.get('energy') <= 0) {
            console.log('energy depleted')
            this.postScore();
            this.trigger('gameOver', this)
        }

    },

    south: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('y_axis') >= 1 && energy > 0) {
            this.set('y_axis', this.get('y_axis') - 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (this.get('energy') <= 0) {
            console.log('energy depleted')
            this.postScore();
            this.trigger('gameOver', this)
        }
    },

    west: function() {
        let moves = this.get('moves');
        let energy = this.get('energy');
        let perMove = this.get('energyPerMove');
        if (this.get('x_axis') >= 1 && energy > 0) {
            this.set('x_axis', this.get('x_axis') - 1);
            this.set('moves', moves + 1);
            this.set('energy', energy - perMove);
            console.log(energy);
        }
        if (this.get('energy') <= 0) {
            console.log('energy depleted')
            this.postScore();
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

    postScore: function() {
        // this.newScores.save({
        //     "name": this.get('name'),
        //     "score": this.get('moves'),
        //     "playerType": this.get('size'),
        // });
         this.getScores();
    },

    getScores: function() {
      let that = this.highscores;
        this.highscores.fetch({
            success: function() {
            that.trigger('scores')
            console.log('trigger successful');
            console.log(that);
            },
            error: function() {
                console.log('dont work');
            }

        });


        return that;
    },

});

},{"./scoreCollections":3,"./scores":4,"./sizes.js":5,"./sizesCollections":6}],3:[function(require,module,exports){
let scoreModel = require('./scores');
module.exports = Backbone.Collection.extend({
    url: 'http://grid.queencityiron.com/api/highscore',
    model: scoreModel,
});

},{"./scores":4}],4:[function(require,module,exports){

module.exports = Backbone.Model.extend({
  url: 'http://grid.queencityiron.com/api/highscore',

  defaults:{
    "name": "Damon",
    "score": 1,
    "playerType": 20
  },

})

},{}],5:[function(require,module,exports){
module.exports = Backbone.Model.extend({
  defaults:{
    "name": "Small",
    "energyPerMove": 1,
    "startingEnergy": 20
  },
})

},{}],6:[function(require,module,exports){
let sizes = require('./sizes.js');
module.exports = Backbone.Collection.extend({
  url: 'http://grid.queencityiron.com/api/players/3',
  model: sizes,
})

},{"./sizes.js":5}],7:[function(require,module,exports){
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

          player.on('gameOver', function() {
            this.navigate('gameOver', {
                trigger: true
            });
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

},{"./models/player":2,"./views/gameOver":8,"./views/gameView":9,"./views/newPlayer":10}],8:[function(require,module,exports){

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

},{}],9:[function(require,module,exports){
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



    grid.innerHTML = '';
    for (let x = 0; x < gridSize; x++) {
      let row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (var y = 0; y < gridSize; y++) {      
          let column = document.createElement('div');
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

},{}],10:[function(require,module,exports){
module.exports = Backbone.View.extend({
   events:{
     'click button': 'gameStart',
     'click #small': 'small',
     'click #large': 'large',
     'click #gargantuan': 'gargantuan',
   },

   gameStart: function(){
     let name = document.querySelector('#name').value;
     console.log(name);
     this.model.setName(name);
   },

   render: function(){
     let coordinates = document.querySelector('.coordinates');
     coordinates.textContent = `x: ${this.model.get('x_axis')}, y: ${this.model.get('y_axis')}`
   },

   small: function(){
     this.model.small();
   },
   large: function(){
      this.model.large();
   },
   gargantuan: function(){
      this.model.gargantuan();
   },
});

},{}]},{},[1])