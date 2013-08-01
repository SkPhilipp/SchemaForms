SchemaForms
===========

Generates Bootstrap 3 compatible forms from schemas, the from's submit will send out JSON.

Schema
------
The schema format is quite simple, it may remind you a bit of JSON schema (draft), however less complex and more
focused on being able to create forms with.

For really good examples, look under [app](/app). Here's a quick sample:


	{ type: 'array', title: 'Inner Array', min: 2, max: 4, kids:
		{ type: 'object', fields: [
			{ type: 'string', name: 'x' },
			{ type: 'string', name: 'y' },
			{ type: 'string', name: 'z' }
		]}
	}


This is what it'll look like as a form:

![Sample schema rendered as a form](http://i.imgur.com/UXW6lsI.png)

Testing
-------
	cd SchemaForms/config
	karma start

