import Cookies from 'universal-cookie';
class Auth {

	constructor(){
		const cookies = new Cookies();

		if (cookies.get('username') === undefined)	{
			this.authenticated = false;
		}
		else {
			this.authenticated = true;
		}
	}

	login(cb) {
    setTimeout(function(){
			this.authenticated = true;
			window.history.back();
			setTimeout(function(){ 
				window.location.reload()}, 200);
			cb();
    }, 2000);
	}

	logout(cb) {
		const cookies = new Cookies();

		cookies.remove('username');
		this.authenticated = false;
		window.location.reload();
		cb();
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();