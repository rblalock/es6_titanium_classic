# ES6 and Titanium Classic

This repo provides a simple [Babel](https://babeljs.io) plugin for Titanium apps.

- - -
:v: Do you want to see ES2015 (aka ES6) natively supported by Titanium?

:punch: **Then share your thoughts on [the relative Ti.Forward discussion](https://github.com/TiForward/discuss/issues/8)!**
- - -

## Setup
To get started in your own app:

1.  Install babel: `npm install babel -g`
2.  Put the babel plugin (from the plugins folder), in to your Ti project's `plugins` folder
3.  Add the plugin to your `tiapp.xml`:

```
<plugins>
	<plugin version="1.0.0">babel</plugin>
</plugins>
```

4.  Put all your app code in the `src` folder.  The babel plugin will take your code in `src`, compile it, and put it in the `Resources` folder.

Now you can use ES6 code inside of your Titanium app.  For example, put this in `/src/app.js` and run your project to see it work:

```javascript
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

	start() {
		this.win.add(this.label);
		this.win.open();
	};
}

var app = new Test();
app.start();

```

## Important Notes
If you run in to problems or babel isn't compiling your code over to the `Resources` directory, try manually compiling first to see if there are any issues (currently the plugin doesn't output any errors from Babel).  You can do this by running:

	babel src --out-dir Resources -D

This will show you any compile time errors that are occuring on Babel's side of things.

There are a few other efforts to add ES6 support in the Titanium community, most notably [Titaniumifier](https://github.com/smclab/titaniumifier) in [Host-mode with Babel.js enabled](https://github.com/smclab/titaniumifier/wiki/Host-mode).  This repo is just an attempt to do a basic Babel compile of Titanium classic code.

## Tweaking
If you want to tweak the babel plugin, open `plugins/babel/1.0.0/hooks/babel.js`.  In here you can tweak where the code is placed, add more babel options during compilations, etc.
