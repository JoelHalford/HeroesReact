import Cookies from 'universal-cookie';

class Auth {

	constructor(){
		const cookies = new Cookies();

		console.log(cookies.get('username'));

		if (cookies.get('username') == undefined)	{
			this.authenticated = false;
		}
		else {
			this.authenticated = true;
		}		
	}

	login(cb) {
		this.authenticated = true;
		window.location.reload();
		cb();
	}

	logout(cb) {
		const cookies = new Cookies();

		cookies.remove('username');
		this.authenticated = false;
		window.location.reload();
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Auth();