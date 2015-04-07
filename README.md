# SchemaForms

_This project is no longer maintained and part of my source code "attic". Please use a [more mature and tested alternative](https://github.com/Textalk/angular-schema-form)._

Generates Bootstrap 3 compatible forms from schemas, the from's submit will send out JSON.

The schema format is quite simple, it may remind you a bit of JSON schema (draft), however less complex and more
focused on being able to create forms with.

For really good examples, look under [test](/test). Here's a quick sample:


	{ type: 'array', title: 'Inner Array', min: 2, max: 4, fields:
		{ type: 'object', fields: [
			{ type: 'string', name: 'x' },
			{ type: 'string', name: 'y' },
			{ type: 'string', name: 'z' }
		]}
	}


This is what it'll look like as a form:

![Sample schema rendered as a form](http://i.imgur.com/UXW6lsI.png)

Then upon submit, your handler will receive what the user entered, in this example where nothing was entered you'd get

	[{"x":"","y":"","z":""},{"x":"","y":"","z":""}]

## Usage

To begin using SchemaForms you'll need to include [hsf.js](/src/hsf.js), and the types you want to use, SchemaForms
links the custom AngularJS directives to schema type declarations; taking a look at the first example we used we have are using types: 'array', 'object' and 'string'

These types become available to use when you include [hsf-type-array.js](/src/hsf-type-array.js) [hsf-type-object.js](/src/hsf-type-object.js) and [hsf-type-string.js](/src/hsf-type-string.js).
You can add all the types, and also write your own extension to SchemaForms, a good example for that is [hsf-type-string.js](/src/hsf-type-string.js).

Again, for full examples on how to make use of SchemaForms, take a look at [test](/test).

## Type Examples

### object

Object assigns an object to the model, this new object may contain fields defined by schema declarations. *fields are mapped inside the object by their name attribute*.

	{ type: 'object', fields: [
		{ type: 'string', name: 'x' },
		{ type: 'string', name: 'y' },
		{ type: 'string', name: 'z' }
	]

- fields ( schema delcarations of the fields of the object, the reason this is a list and not a map is to enable support for types like "choice" )

### array

Array assigns an array to the model.

	{ type: 'array', title: 'Inner Array', min: 2, max: 4, fields:
		{ type: 'string' }
	}

- fields ( schema declaration of the elements of the array )
- min ( optional, default: 0 )
- max ( optional, default: Infinity )

### string

String assigns a string to the model.

	{ type: 'string', title: 'Hello' }

- title ( optional, text displayed aside the input field, default: value of optional name attribute )

### password

Password assigns a string to the model. Represented in HTML by an input[type="password"].

	{ type: 'password', title: 'Hello' }

- title ( optional, text displayed aside the input field, default: value of opional name attribute )

### text

Text assigns a string to the model. Represented in HTML by a textarea.

	{ type: 'text', title: 'Hello', rows: 12 }

- title ( optional, text displayed aside the input field, default: value of opional name attribute )
- rows ( optional, used as value for the textarea's "rows" attribute, default: 4 )

### fixed

Fixed assigns a fixed value to the model.

	{ type: 'fixed', value: 12345 }

### file

File assigns a File object to the model using input[type="file"], when the user changes the file the file is read using the standard FileReader implementation.

	{ type: 'file', title: 'Hello' }

- title ( optional, text displayed aside the input field, default: value of opional name attribute )

### choice

Choice does not assign to the model, when a choice is made that choice is passed the model. For example a choice between a type object and type array will first
set the model to nothing, when the object is chosen the model will become the object, when the array is chosen the model will become the array. You can also freely nest choices.
In the example below there is a choice between '3D' and '2D'. The resulting JSON object will be either {"x": ...,"y": ...,"z": ...} or {"x": ...,"y": ...}. The choice type
is represented in HTML as a select element.

	{ type: 'choice', choices: [
		{ type: 'object', title: '3D', fields: [
			{ type: 'string', name: 'x' },
			{ type: 'string', name: 'y' },
			{ type: 'string', name: 'z' }
		]},
		{ type: 'object', title: '2D', fields: [
			{ type: 'string', name: 'x' },
			{ type: 'string', name: 'y' }
		]}
	]}

- title ( on fields the choice wraps, optional, text displayed in the HTML option element, default: value of optional name attribute )

### checkbox

Checkbox assigns a boolean value to the model; representing the checked state of the checkbox.

	{ type: 'checkbox' title: 'Hello' }

- title ( optional, text displayed aside the checkbox, default: value of optional name attribute )
