var fs = require('fs');

fs.readFile('input02.txt', 'utf8', function(err, data){
  var arr = data.split('\n').map(function(el){
    return el.split('x');
  });

  var result = (function(){
    return arr.reduce(function(prev, val, idx){
      var w = val[0],
          h = val[1],
          l = val[2],
          sides = [];

      sides.push(l * w);
      sides.push(w * h);
      sides.push(l * h);

      var extra = Math.min(sides[0], sides[1], sides[2]);
      var paper = sides.reduce(function(p, v){
        return p + (2 * v);
      }, 0); 

      return prev + paper + extra;

    }, 0);
  })();

  console.log(result);
});