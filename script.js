

	let button = document.querySelector('.button')
let headline = document.querySelector('.header')

button.onclick = function validateForm() {
   let passwordInput = document.form.password.value;
   let usernameInput = document.form.username.value;
    let integerValidation = new RegExp('([0-9])')

    if(!integerValidation.test(usernameInput)) {
      alert('incorrect')
      return false;
    }
    if(passwordInput !== '12345678') {
      alert('incorrect');
      return false;
    }
    headline.innerText = 'The information in the form is correct';
}
