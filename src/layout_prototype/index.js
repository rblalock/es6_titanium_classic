var BaseController = require('./baseController');
var View = require('./views/example');
var Model = require('./models/example');

/**
* Example controller
*/
class ExampleController extends BaseController {
	constructor() {
		super();

		/**
		* The model for this controller instance
		* @type {Model}
		*/
		this.Model = new Model();

		/**
		* The view class for this controller instance
		* @type {View}
		*/
		this.View = new View();

		// Get data for this controller and set it on the view
		this.Model.query({ first_name: 'Rick' }, results => {
			this.View.data = results;
		});
	}

	/**
	 * Render this controller's layout
	 */
	renderLayout() {
		this.View.parent.open();
	}
}

module.exports = new ExampleController();
