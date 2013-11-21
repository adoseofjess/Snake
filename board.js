(function() {
	var boardLib = window.boardLib = (window.boardLib || {});

	var Board = boardLib.Board = function() {
		this.snake = new snakeLib.Snake();
		this.apples = [];
		this.createApples();
		this.dimension = 50;
	};

	Board.prototype.createApples = function() {
		for (var i = 0; i < 10; i++) {
			this.apples.push(this.generateRandomApple());
		}
	};

	Board.prototype.generateRandomApple = function() {
		var x = Math.floor((Math.random()*50)+1);
		var y = Math.floor((Math.random()*50)+1);
		return [x,y];
	};

	Board.prototype.renderBoard = function() {
		for (var i = 0; i < this.dimension; i++) {
			for (var j = 0; j < this.dimension; j++) {
				var idName = 'row'+i+'col'+(this.dimension-1-j);
				$(".board").prepend("<div id="+idName+" class='tile'></div>");
			}
		}
	};

	Board.prototype.renderSnake = function() {
		var snakeLocation = this.snake.coordinates; //[10,10]
		var snakeDiv = "#row" + snakeLocation[1] + "col" + snakeLocation[0];
		$(snakeDiv).addClass("snake");
	};

	Board.prototype.renderSegments = function() {
		pathCoords = this.snake.segmentsPath;

		$(pathCoords).each(function(){
			var segmentLocation = "#row" + this[1] + "col" + this[0];
			$(segmentLocation).addClass("segment");
		});

	};

	Board.prototype.renderApples = function() {
		$(this.apples).each(function() {
			var appleLocation = "#row" + this[1] + "col" + this[0];
			$(appleLocation).addClass("apple");
		});
	};

	Board.prototype.render = function() {
		$(".board").html("")

		this.renderBoard();
		this.renderSnake();
		this.renderApples();
		this.renderSegments();

	};

	Board.prototype.move = function() {
		this.snake.move();
	};

	Board.prototype.checkForSnakeEatsApple = function() {
		var snakeLocation = this.snake.coordinates;
		//check if snake overlaps with any apples
		for (var i = 0; i < this.apples.length; i++) {
			if (snakeLocation[0] == this.apples[i][0]
				&& snakeLocation[1] == this.apples[i][1]) {
				this.apples.splice(i, i);
				this.snake.segments += 1;
			}
		}
	};

})(this);