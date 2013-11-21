(function() {
	var UI = window.UI = (window.UI || {});

	var View = UI.View = function(element) {
		this.element = element;
	};

	View.prototype.start = function() {
		this.board = new boardLib.Board();
		this.bindKeys();
		var that = this;
		window.setInterval(function() {
			that.step();
		}, 50);
	};

	View.prototype.handleKeyEvent = function(key) {
		if (key == "38") {
			this.board.snake.turn("N");
		}
		else if (key == "40") {
			this.board.snake.turn("S");
		}
		else if (key == "37") {
			this.board.snake.turn("W");
		}
		else if (key == "39") {
			this.board.snake.turn("E");
		}
	};

	View.prototype.bindKeys = function() {
		var that = this;
		$("body").on("keydown", function(event) {
			var key = event.which;
			that.handleKeyEvent(key);

		});
	};

	View.prototype.step = function() {

		this.board.move();
		this.board.checkForSnakeEatsApple();
		this.board.render();
		console.log(this.board.snake.coordinates);
		console.log(this.board.snake.segmentsPath[0]);

	};

})(this);