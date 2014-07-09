(function(){



  xtag.register('x-amazing-rainbow-widget', {
    content: '<h1>An amazing widget</h1>',
    lifecycle: {
  		created: function(){
        this.locals = {
          count: 0,
          colors: ['red', 'green', 'blue', 'yellow'],
        };
        var inner = this.innerHTML.replace(/\W/g, "");
        if (inner.length <= 0) {
          this.innerHTML = "I am the default text";
        }
  		}
  	},
  	events: {
      'click:delegate(x-amazing-rainbow-widget)': function(){
        if (this.locals.count >= this.locals.colors.length) {
          this.locals.count = 0;
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
