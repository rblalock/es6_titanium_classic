var BaseScreen = require('./baseScreen');

/**
 * List Screen Class
 * @description This example shows how a list screen (using a tableview) could work
 */
class ListScreen extends BaseScreen {
	/**
	 * The constructor
	 * @params {Object}
	 */
	constructor(params) {
		// Call the BaseScreen super
		super(params);
		// Set the tableData property for use internally
		this._tableData = this.params.data || [];
	}

	/**
	 * initScreen will get fired by the parent class if it exists.
	 * Use this to setup the UI for the screen when necessary.
	 */
	initScreen() {
		this.wrapper = Ti.UI.createTableView({
			data: this._tableData
		});

		this.window.add(this.wrapper);
	}

	/**
	 * Getter for the data property
	 */
	get data() {
		return this._tableData;
	}

	/**
	 * Setter for the data property (will set the data passed to the tableview)
	 */
	set data(arr) {
		this.wrapper.setData(arr);
		this._tableData = arr;
	}
}

module.exports = ListScreen;
