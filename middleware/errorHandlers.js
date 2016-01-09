exports.notFound = function notFound(req, res) {
	res.send(404, 'You seem lost. You probably have taken a wrong turn back there.');
};

exports.error = function (err, req, res, next) { //eslint-disable-line no-unused-vars
	console.log('ERROR: ', err.raw);
	res.send(500, 'Something broke. What did you do?');
};
