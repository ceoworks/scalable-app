exports.notFound = function notFound(req, res) {
	res.send(404, 'You seem lost. You probably have taken a wrong turn back there.');
};

exports.error = function (err, req, res) {
	console.log('ERROR: ', err);
	res.send(500, 'Something broke. What did you do?');
};
