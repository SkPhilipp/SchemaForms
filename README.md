HSF : Hileco Schema Forms
=========================

GENERATES BOOTSTRAP COMPATIBLE FORMS FROM SCHEMAS, THE FORM SENDS JSON MATCHING THE SCHEMA

Testing
-------
	cd SchemaForms/config
	karma start

Schema
------
The schema format is very simple, much like the JSON schema draft, however not equal, the schema
used here is more readable and easier to maintain, and most important of all; easier to make forms with.

For really good examples, look under [app](/app). Here's a quick sample:


	{ type: 'array', title: 'Inner Array', min: 2, max: 4, kids:
		{ type: 'object', fields: [
			{ type: 'string', name: 'x' },
			{ type: 'string', name: 'y' },
			{ type: 'string', name: 'z' }
		]}
	}
