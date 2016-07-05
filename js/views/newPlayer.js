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
