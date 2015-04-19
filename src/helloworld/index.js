const greeting = "Hello World!";

class Test {
	constructor(_title) {
		this.win = Ti.UI.createWindow({
		    backgroundColor: '#fff'
		});

		this.label = Ti.UI.createLabel({
		    color: '#222',
		    text: greeting,
		    width: Ti.UI.FILL,
		    textAlign: 'center'
		});
	}

	init() {
		this.win.add(this.label);
		this.win.open();
	};
}

var app = new Test();
app.init();
