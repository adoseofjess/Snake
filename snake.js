(function(){
	var snakeLib = window.snakeLib = (window.snakeLib || {});

	var Snake = snakeLib.Snake = function() {
		this.direction = "N";

		this.segments = 2;

		this.segmentsPath = [[2,10],[3,10]];

		this.coordinates = [1, 10]; //y, x

	};

	Snake.prototype.move = function () {
		this.segmentsPath.unshift(this.coordinates.slice(0));
		if (this.segmentsPath.length > 10) {
			this.segmentsPath.pop();
		};
		var dir = this.direction;
		if (dir == "N") {
			this.coordinates[1] += 1;
		} else if (dir == "S") {
			this.coordinates[1] -= 1;
		} else if (dir == "W") {
			this.coordinates[0] -= 1;
		} else if (dir == "E") {
			this.coordinates[0] += 1;
		}
	};

	Snake.prototype.turn = function (dir) {
		this.direction = dir;
	};

})(this);