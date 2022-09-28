const seePassword = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
	if (seePassword.getAttribute('type') == 'password') {
		seePassword.setAttribute('type', 'text');
	} else {
		seePassword.setAttribute('type', 'password');
	}
});
