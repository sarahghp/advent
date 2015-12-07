var fs = require('fs');

fs.readFile('input03.txt', 'utf8', function(err, data){

	var map		= {'0-0': 2},
			santa = { x: 0, y: 0 },
			robot	= { x: 0, y: 0 };

	function chomp(val, mover){

		switch(val) {
			case '^':
				mover.y++;
			break;

			case '>':
				mover.x++;
			break;

			case '<':
				mover.x--;
			break;

			case 'v':
				mover.y--;
			break;

			default:
				throw new Error('Something went very wrong with the input parsing.');
		}

		if (map[mover.x + '-' + mover.y]){
			map[mover.x + '-' + mover.y]++;
		} else {
			map[mover.x + '-' + mover.y] = 1;
		}

	}

	data.split('').forEach(function(val, idx){
		if (idx % 2 === 0){
			chomp(val, robot);
		} else {
			chomp(val, santa);
		}
		
	});


	console.log(map);
	console.log(Object.keys(map).length);
	

});