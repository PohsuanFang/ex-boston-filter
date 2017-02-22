var expect = require('chai').expect;
var ex = require('./ex.js').load('./exercise.js');
var boston = require('./bostonEmployeeSalaries.json');

var answer = [{"job":"Teacher","salary":342249.43},{"job":"Police Lieutenant","salary":325943.63},{"job":"Police Captain/DDC","salary":415709.53},{"job":"Police Captain","salary":317181.55},{"job":"Police Captain/DDC","salary":325578.99},{"job":"Police Lieutenant/Hdq Dispatch","salary":350510.53},{"job":"Capt.D.D.C-pd Details Section","salary":361025.03},{"job":"Police Lieutenant/Hdq Dispatch","salary":300065.62}];


describe('Salaries larger than given salary', function() {
	it('Match Point Array of Objects', function() {
		ex.load(300000, boston);

		var points = ex.generatePoints();
	    expect(points).to.eql(answer);
	});
});



