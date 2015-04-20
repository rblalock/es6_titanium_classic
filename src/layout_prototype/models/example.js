var BaseModel = require('./baseModel');

/**
* Example model
*/
class ExampleModel extends BaseModel {
	constructor() {
		super();

		/**
		* The schema for this model
		* @type {Object}
		*/
		this.schema = {
			first_name: { type: String },
			last_name: { type: String },
			email: { type: String }
		};

		/**
		* Stub data for this example
		* @type {Array}
		*/
		this.data = [
			{
				first_name: 'Rick',
				last_name: 'Blalock',
				email: 'shhh@itsasecret.com'
			},
			{
				first_name: 'John',
				last_name: 'Doe',
				email: 'jd@email.com'
			},
			{
				first_name: 'Jane',
				last_name: 'Doe',
				email: 'jane@email.com'
			}
		];
	}
}

module.exports = ExampleModel;
