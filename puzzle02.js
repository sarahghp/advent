var fs = require('fs');

fs.readFile('input02.txt', 'utf8', function(err, data){
  var arr = data.split('\n').map(function(el){
    return el.split('x');
  });

  // Paper
  // var result = (function(){
  //   return arr.reduce(function(prev, val, idx){
  //     var w = +val[0],
  //         h = +val[1],
  //         l = +val[2],
  //         sides = [];

  //     sides.push(l * w);
  //     sides.push(w * h);
  //     sides.push(l * h);

  //     var extra = Math.min(sides[0], sides[1], sides[2]);
  //     var box = sides.reduce(function(p, v){
  //       return p + (2 * v);
  //     }, 0); 

  //     return prev + box + extra;

  //   }, 0);
  // })();

  // Ribbon
  var result = (function(){
    return arr.reduce(function(prev, val, idx){
      var w = +val[0],
          h = +val[1],
          l = +val[2],
          sides = [];

      sides.push(2 * (l + w));
      sides.push(2 * (w + h));
      sides.push(2 * (l + h));


      var bow = w * l * h;
      var perim = Math.min(sides[0], sides[1], sides[2]);

      console.log(val, sides, perim); 

      return prev + perim + bow;

    }, 0);
  })();


  console.log(result);
});