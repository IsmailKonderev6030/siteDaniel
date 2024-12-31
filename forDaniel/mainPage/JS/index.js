// Mask for phone's input
let elementPhoneInput = document.getElementById("phoneInput");
let maskOptionPhone = {
    mask: '+{7}(000)000-00-00',
    lazy: true
}
let maskPhone = new IMask(elementPhoneInput,maskOptionPhone);

elementPhoneInput.addEventListener('keydown',function(e) {
    elementPhoneInput.style.cssText = "border-color: black";
})

elementPhoneInput.addEventListener('input',function(e) {
    elementPhoneInput.style.cssText = "border-color: black";
})

/////////////////////////////////////////////////////////////////////////

// Mask for pass's input
let elementPassInput = document.getElementById("passInput");
elementPassInput.addEventListener('keydown',function(e) {
    elementPassInput.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) &&
       !e.key.match(/[0-9]/) && !e.key.match(/[+,-,_,?,!]/)) return e.preventDefault();
})

// copy past check
elementPassInput.addEventListener('input',function(e) {
    elementPassInput.style.cssText = "border-color: black";
    elementPassInput.value = elementPassInput.value.replace(/[^\a-z\d\+\-\_\?\!]/gi,"");
})

/////////////////////////////////////////////////////////////////////////

let elementButtonLogIn  = document.getElementById("buttonLogIn");
let elementButtonSignUp = document.getElementById("buttonSignUp");

elementButtonLogIn.addEventListener('click',function(){
    let phoneLength = elementPhoneInput.value.length;
    let passLength  = elementPassInput.value.length;

    if(phoneLength != 16){
        elementPhoneInput.style.cssText = "border-color: red";
    }
    else if(passLength < 8){
        elementPassInput.style.cssText = "border-color: red";
    }
    else{
        window.location.href = "http://cofix-lk.ru/logInPage/logInPage.html";
    }
})

elementButtonSignUp.addEventListener('click',function(){
    window.location.href = "http://cofix-lk.ru/signUpPage/signUpPage.html";
})