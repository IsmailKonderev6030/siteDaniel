// check name input size (0 < Name <= 50)
let elementNameInput = document.getElementById("nameInput");

elementNameInput.addEventListener('keydown',function(e){
    elementNameInput.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) &&
       !e.key.match(/[а-я]/) && !e.key.match(/[А-Я]/)) return e.preventDefault();
})

elementNameInput.addEventListener('input',function(e){
    elementNameInput.style.cssText = "border-color: black";
    elementNameInput.value = elementNameInput.value.replace(/[^\a-z\а-я]/gi,"");
})

////////////////////////////////////////////////////////////////////

// check secondname input size (0 < secondName <= 50)
let elementSecondNameInput = document.getElementById("secondNameInput");

elementSecondNameInput.addEventListener('keydown',function(e){
    elementSecondNameInput.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) &&
       !e.key.match(/[а-я]/) && !e.key.match(/[А-Я]/)) return e.preventDefault();
})

elementSecondNameInput.addEventListener('input',function(e){
    elementSecondNameInput.style.cssText = "border-color: black";
    elementSecondNameInput.value = elementSecondNameInput.value.replace(/[^\a-z\а-я]/gi,"");
})

////////////////////////////////////////////////////////////////////

// mask birthdayInput
let elementBirthdayInput = document.getElementById("birthdayInput");
let maskOptionBirthdayInput = {
    mask: Date,
    min: new Date(1940, 0, 1),
    max: new Date(2025, 0, 1),
    lazy: true
}
let maskBirthday = new IMask(elementBirthdayInput,maskOptionBirthdayInput);

elementBirthdayInput.addEventListener('input',function(e){
    elementBirthdayInput.style = "border-color: black";
})

////////////////////////////////////////////////////////////////////

// Mask for phone
let elementPhoneInput = document.getElementById("phoneInput");
let maskOptionPhone = {
    mask: '+{7}(000)000-00-00',
    lazy: true
}
let maskPhone = new IMask(elementPhoneInput,maskOptionPhone);

elementPhoneInput.addEventListener('input',function(e){
    elementPhoneInput.style = "border-color: black";
})

/////////////////////////////////////////////////////////////////////////

// check code sign up
let elementCodeInput = document.getElementById("codeInput");

elementCodeInput.addEventListener('keydown',function(e) {
    elementCodeInput.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[0-9]/)) return e.preventDefault();
})

elementCodeInput.addEventListener('input',function(e) {
    elementCodeInput.style.cssText = "border-color: black";
    elementCodeInput.value = elementCodeInput.value.replace(/[^\a-z\d]/gi,"");
})

/////////////////////////////////////////////////////////////////////////

// check telegramInput
let elementTelegramInput = document.getElementById("telegramInput");

elementTelegramInput.addEventListener('keydown',function(e) {
    elementTelegramInput.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) && !e.key.match(/[0-9]/)) return e.preventDefault();
})

elementTelegramInput.addEventListener('input',function(e) {
    elementTelegramInput.style.cssText = "border-color: black";
    elementTelegramInput.value = elementTelegramInput.value.replace(/[^\a-z\d]/gi,"");
})

/////////////////////////////////////////////////////////////////////////

// Mask for pass's input
let elementPassInput = document.getElementById("passInput");
let elementPassInput2 = document.getElementById("passInput2");

elementPassInput.addEventListener('keydown',function(e) {
    elementPassInput.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) &&
       !e.key.match(/[0-9]/) && !e.key.match(/[+,-,_,?,!]/)) return e.preventDefault();
})
elementPassInput2.addEventListener('keydown',function(e) {
    elementPassInput2.style.cssText = "border-color: black";
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) &&
       !e.key.match(/[0-9]/) && !e.key.match(/[+,-,_,?,!]/)) return e.preventDefault();
})

// copy past check
elementPassInput.addEventListener('input',function(e) {
    elementPassInput.style.cssText = "border-color: black";
    elementPassInput.value = elementPassInput.value.replace(/[^\a-z\d\+\-\_\?\!]/gi,"");
})
elementPassInput2.addEventListener('input',function(e) {
    elementPassInput2.style.cssText = "border-color: black";
    elementPassInput2.value = elementPassInput2.value.replace(/[^\a-z\d\+\-\_\?\!]/gi,"");
})

/////////////////////////////////////////////////////////////////////////

let elementGenderSelect = document.getElementById("genderSelect");
let elementCitizanshipSelect = document.getElementById("citizanshipSelect");

elementGenderSelect.addEventListener('input',function(e){
    elementGenderSelect.style = "border-color: black";
})

elementCitizanshipSelect.addEventListener('input',function(e){
    elementCitizanshipSelect.style = "border-color: black";
})

// button sign up
let elementButtonSignUp = document.getElementById("buttonSignUp");
elementButtonSignUp.addEventListener('click',function(){
    if(elementNameInput.value.length < 2)
        elementNameInput.style = "border-color: red";
    else if(elementSecondNameInput.value.length < 2)
        elementSecondNameInput.style = "border-color: red";
    else if(elementBirthdayInput.value.length != 10)
        elementBirthdayInput.style = "border-color: red";
    else if(elementGenderSelect.value == "")
        elementGenderSelect.style = "border-color: red";
    else if(elementCitizanshipSelect == "")
        elementCitizanshipSelect.style = "border-color: red";
    else if(elementCodeInput.value.length != 10)
        elementCodeInput.style = "border-color: red";
    else if(elementPhoneInput.value.length != 16)
        elementPhoneInput.style = "border-color: red";
    else if(elementPassInput.value.length < 6)
        elementPassInput.style = "border-color: red";
    else if(elementPassInput.value != elementPassInput2.value)
        elementPassInput2.style = "border-color: red";
    else{
        alert("all good go next");
    }
})