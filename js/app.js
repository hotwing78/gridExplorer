let gridControlModel = require('./models/gridControl.js')
let gridControlView = require('./views/gridControl.js')

window.addEventListener('load', function(){

  let grpModel = new gridControlModel();

  let grpView = new gridControlView({
      model: grpModel,
      el: document.getElementById('main')
  });
});
