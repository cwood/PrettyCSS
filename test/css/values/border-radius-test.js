"use strict";
var util = require('./util');

exports.batch = util.makeVows('border-radius', {
	'5%': {
		'tokens': ['UNIT'],
		'toString': '5%',
		'unparsed': [],
		'warnings': ['minimum_css_version_3']
	},
	'inherit': {
		'tokens': ['IDENT'],
		'toString': 'inherit',
		'unparsed': [],
		'warnings': ['minimum_css_version_3']
	},
	'1em 1px 3mm 4% 5pt': {
		'tokens': ['UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT'],
		'toString': '1em 1px 3mm 4%',
		'unparsed': ['UNIT'],
		'warnings': ['minimum_css_version_3']
	},
	'1em / 1px 3mm 4% 5pt 6en': {
		'tokens': ['UNIT', 'S', 'OPERATOR', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT', 'S', 'UNIT'],
		'toString': '1em / 1px 3mm 4% 5pt',
		'unparsed': ['UNIT'],
		'warnings': ['minimum_css_version_3']
	},
	'1px inherit 2%': {
		'tokens': ['UNIT', 'S', 'IDENT', 'S', 'UNIT'],
		'toString': '1px',
		'unparsed': ['IDENT', 'S', 'UNIT'],
		'warnings': ['minimum_css_version_3']
	},
	'invalidValue': {
		'tokens': ['IDENT'],
		'toString': null,
		'unparsed': ['IDENT'],
		'warnings': null
	}
});
