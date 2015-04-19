let ListScreenClass = require('./ListScreen');

let listScreen = new ListScreenClass({
	createNavigationWindow: true,
	title: 'Examples'
});

// Example using custom setter
listScreen.data = [
	{ title: 'Simple form class example', example: 'FormScreen', hasChild: true }
];

// Example using custom getter
console.log(listScreen.data)

listScreen.wrapper.addEventListener('click', event => {
	console.log('Loading class example: ' + event.row.example);

	let classFile = event.row.example;
	let exampleClass = require('/ui_class_example/' + classFile);
	let example = new exampleClass();

	example.open(listScreen.navigationWindow);
});

listScreen.navigationWindow.open();
