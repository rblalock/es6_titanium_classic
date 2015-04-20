/**
 * Super controller
 */
class BaseController {
	constructor() {

	}

	/**
	 * Getter for model on controller
	 */
	get Model() {
		return this.modelClass;
	}

	/**
	 * Setter for the model class
	 */
	set Model(modelClass) {
		this.modelClass = modelClass;
	}

	/**
	 * Getter for the view class
	 */
	get View() {
		return this.viewClass;
	}

	/**
	 * Setter for the view class.  Will also call renderLayout() on the child controller
	 * or render() on the view class
	 */
	set View(viewClass) {
		this.viewClass = viewClass;

		if (this.renderLayout) {
			this.renderLayout();
		} else if (this.viewClass.render) {
			this.viewClass.render();
		} else {
			throw new Error('In order to set a View class on the controller, the controller must have a renderLayout method or the view class must have a render method.');
		}
	}
}

module.exports = BaseController;
