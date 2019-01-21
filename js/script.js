class Timer {
	constructor(display, list) {
		this.running = false;
		this.display = display;
		this.list = list;
		this.reset();
		this.print(this.time);
	}

	reset() {
		this.stop();
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0,
		};
		this.print();
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	addTime() {
		this.list.innerText += this.format(this.times) + '\n';
	}

	resetList() {
		this.list.innerText = '';
	}

	format(times) {
		return `${add0(times.minutes)}:${add0(times.seconds)}:${add0(times.miliseconds)}`
	}

	start() {
		if(!this.running) {
			this.running = true;
			this.watch = setInterval(() => this.step(), 10);
		}
	}

	step() {
		if(!this.running) return;
		this.calculate();
		this.print();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.times.miliseconds >= 100) {
	        this.times.seconds += 1;
	        this.times.miliseconds = 0;
	    }
	    if (this.times.seconds >= 60) {
	        this.times.minutes += 1;
	        this.times.seconds = 0;
	    }
	}

	stop() {
    	this.running = false;
    	clearInterval(this.watch);
	}
}

function add0(value) {
	let result = value.toString();
	if(result.length <2) {
		result = "0" + result;
	}
	return result;
}

const timer = new Timer (document.querySelector(".timer"), document.querySelector(".list"),);

let startButton = document.getElementById("start");
startButton.addEventListener("click", () => timer.start());

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => timer.stop());

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => timer.reset());

let addTimeButton = document.getElementById("addtime");
addTimeButton.addEventListener("click", () => timer.addTime());

let resetListButton = document.getElementById("resetlist");
resetListButton.addEventListener("click", () => timer.resetList());
