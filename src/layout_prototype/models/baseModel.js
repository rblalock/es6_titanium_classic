/**
* Base model
*/
class BaseModel {
	constructor() {
		/**
		* The schema for this model
		* @type {Object}
		*/
		this.schema = {};

		/**
		* Stub data for this example
		* @type {Array}
		*/
		this._data = [];
	}

	/**
	* Getter for model's current data payload
	*/
	get data() {
		return this._data
	}

	/**
	* Setter for model's current data payload
	*/
	set data(arr) {
		this._data = arr;
	}


	/**
	* Query on model data
	* @param {Function} callback
	*/
	query(params, callback) {
		this.data.forEach(row => {
			for(prop in params) {
				if(row[prop] && row[prop] === params[prop]) {
					callback(row);
					return;
				}
			}
		});
	}
}

module.exports = BaseModel;
