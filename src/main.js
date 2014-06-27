(function(){



  xtag.register('x-amazing-rainbow-widget', {
    lifecycle: {
  		created: function(){
        this.locals = {
          count: 0,
          colors: ['red', 'green', 'blue', 'yellow'],
        }; 
  		}
  	},
  	events: {
      'click:delegate(x-amazing-rainbow-widget)': function(){
        if (this.locals.count >= this.locals.colors.length) {
          this.locals.count = 0
        }
        this.color = this.locals.colors[this.locals.count];
        this.locals.count++;
      }
    },
  	accessors: {
      color: {
        set: function(newColor) {
          this.style.color = newColor;
        },
        attribute: {}
      }
    },
  	methods: {}
  });



})();
