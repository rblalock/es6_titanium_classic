var BaseView = require('./baseView');

/**
* Example view class
*/
class ExampleView extends BaseView {
	constructor() {
		super();

		this.parent = Ti.UI.createWindow({
			backgroundColor: '#eee',
			layout: 'vertical'
		});

		this.fullName = Ti.UI.createLabel({
			top: 10,
			left: 10,
			right: 10,
			width: Ti.UI.FILL,
			height: 50,
			textAlign: 'center',
			color: '#222'
		});

		this.email = Ti.UI.createLabel({
			top: 10,
			left: 10,
			right: 10,
			width: Ti.UI.FILL,
			height: 50,
			textAlign: 'center',
			color: '#222'
		});

		this.parent.add(this.fullName);
		this.parent.add(this.email);
	}

	/**
	* Set the data on this view
	* @param {Object}
	*/
	set data(obj) {
		this.fullName.text = obj.first_name + ' ' + obj.last_name;
		this.email.text = obj.email;
	}
}

module.exports= ExampleView;
