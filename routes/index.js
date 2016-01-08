function index (req, res) {
	res.render('index', { title: 'Index' });
}
function login (req, res) {
	res.render('login', { title: 'Login' });
}

function loginProcess(req, res) {
	console.log('req.body:', req.body);
	res.redirect('/');
}

function chat(req, res) {
	res.send('chat', { title: 'Chat' });
}

module.exports = {
	index: index,
	login: login,
	loginProcess: loginProcess,
	chat: chat
};
