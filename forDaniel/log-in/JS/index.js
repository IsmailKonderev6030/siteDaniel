// Mask for phone's input
let elementPhoneInput = document.getElementById("phoneInput");
let maskOptionPhone = {
    mask: '+{7}(000)000-00-00',
    lazy: true
}
let maskPhone = new IMask(elementPhoneInput,maskOptionPhone);

// Mask for pass's input
let elementPassInput = document.getElementById("passInput");
elementPassInput.addEventListener('keydown',function(e) {
    if(!e.key.match(/[a-z]/) && !e.key.match(/[A-Z]/) &&
       !e.key.match(/[0-9]/) && !e.key.match(/[+,-,_,?,!]/)) return e.preventDefault();
})

// copy past check
elementPassInput.addEventListener('input',function(e) {
    elementPassInput.value = elementPassInput.value.replace(/[^\a-z\d\+\-\_\?\!]/gi,"");
})