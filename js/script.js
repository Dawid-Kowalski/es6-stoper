class Timer {
	constructor(display) {
		this.running = false;
		this.display = display;
		this.reset();
		this.print(this.time);
	}

	reset() {
		this.times = {
			minutes: 0,
			seconds: 0,
			miliseconds: 0
		};
	}

	print() {
		this.display.innerText = this.format(this.times);
	}

	format(times) {
		return `${add0(times.minutes)}:${add0(times.seconds)}:${add0(times.miliseconds)}`
	}
}

function add0(value) {
	let result = value.toString();
	if(result.length <2) {
		result = "0" + result;
	}
	return result;
}

const timer = new Timer (document.querySelector(".timer"));

let startButton = document.getElementById("start");
startButton.addEventListener("click", () => Timer.start());

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => Timer.stop());

