let elementPhoneInput = document.getElementById("phoneInput");
let maskOptionPhone = {
    mask: '+{7}(000)000-00-00',
    lazy: true
}
let maskPhone = new IMask(elementPhoneInput,maskOptionPhone);
