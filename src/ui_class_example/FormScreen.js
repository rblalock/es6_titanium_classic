var BaseScreen = require('./baseScreen');

/**
* Form screen class
*/
class FormScreen extends BaseScreen {
	constructor() {
		super();

		// Example of setting the title of the screen using the custom setter
		this.title = 'Form Example';
	}
	/**
	* initScreen will get fired by the parent class if it exists.
	* Use this to setup the UI for the screen when necessary.
	*/
	initScreen() {
		this.wrapper = Ti.UI.createView({
			backgroundColor: '#eee',
			layout: 'vertical'
		});

		this.username = Ti.UI.createTextField({
			hintText: 'username',
			top: 10,
			left: 10,
			right: 10,
			height: 50,
			borderColor: '#ccc'
		});

		this.password = Ti.UI.createTextField({
			hintText: 'password',
			top: 10,
			left: 10,
			right: 10,
			height: 50,
			borderColor: '#ccc'
		});

		this.button = Ti.UI.createButton({
			title: 'Login',
			top: 10,
			left: 10,
			right: 10,
			height: 50
		});

		this.wrapper.add(this.username);
		this.wrapper.add(this.password);
		this.wrapper.add(this.button);
		this.window.add(this.wrapper);

		this.button.addEventListener('click', () => { this.login(); });
	}

	login() {
		alert('Login with ' + this.username.value + ' and ' + this.password.value);
	}
}

module.exports = FormScreen;
