module.exports = function (req, res, next) {
	if (req.session.pageCount) {
		req.session.pageCount++;
	} else {
		req.session.pageCount = 1;
	}
	next();
};
