var utils = require('./utils');

/**
* Base screen super class
*/
class BaseScreen {
	/**
	* Constructor for this class
	* @property {Object}
	*/
	constructor(params) {
		/**
		* Ref. params passed to class
		* @type {Object}
		*/
		this.params = params || {};

		/**
		* The screen's window
		* @type {Object}
		*/
		this.window = Ti.UI.createWindow({
			backgroundColor: '#fff',
			title: this.params.title || ''
		});

		/**
		 * Screen title
		 * @type {String}
		 */
		this.title = this.params.title || '';

		// We'll use a navigationWindow on iOS
		if(this.params.createNavigationWindow && utils.platform === 'iphone') {
			this.navigationWindow = Ti.UI.iOS.createNavigationWindow({ window: this.window });
		}

		// If any child classes have this method, fire it to setup the UI for the screen
		if(this.initScreen) {
			this.initScreen();
		}
	}

	/**
	 * Setter for title property
	 */
	set title(title) {
		this.window.title = title;
	}

	/**
	* Open the screen's window
	* @param {Object} TiUINavigationWindow object for iOS (optional)
	*/
	open(navigationWindow) {
		if(navigationWindow) {
			navigationWindow.openWindow(this.window);
		} else {
			this.window.open();
		}
	}
}

module.exports = BaseScreen;
