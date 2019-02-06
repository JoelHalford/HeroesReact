import Cookies from 'universal-cookie';
class Auth {

	constructor(){
		const cookies = new Cookies();

		console.log(cookies.get('username'));

		if (cookies.get('username') === undefined)	{
			this.authenticated = false;
		}
		else {
			this.authenticated = true;
		}
	}

	login(cb) {
		console.log("Hello");
		this.authenticated = true;
		window.history.back();
		setTimeout(function(){ 
			window.location.reload()}, 200);
		cb();
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