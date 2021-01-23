const formCheckout = document.getElementById("checkout-form")
const selectModel = document.getElementById('bikes');
const selectComment = document.getElementById('comment');

const selectBillFname = document.getElementById('fname-billing');
const selectBillLname = document.getElementById('lname-billing');
const selectBillStreet = document.getElementById('street-billing');
const selectBillCity = document.getElementById('city-billing');
const selectBillState = document.getElementById('state-billing');
const selectBillZip = document.getElementById('zip-billing');
const selectBillTel = document.getElementById('telephone-billing');

const selectDelFname = document.getElementById('fname-delivery');
const selectDelLname = document.getElementById('lname-delivery');
const selectDelStreet = document.getElementById('street-delivery');
const selectDelCity = document.getElementById('city-delivery');
const selectDelState = document.getElementById('state-delivery');
const selectDelZip = document.getElementById('zip-delivery');
const selectDelTel = document.getElementById('telephone-delivery');

const cardNumberInput = document.getElementById('card-number');
const cardExpInput = document.getElementById('expirationdate');
const cardCodeInput = document.getElementById('securitycode');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const qntYears = 4;
const selectYear = document.getElementById('year');
const selectMonth  = document.getElementById("month");
const selectDays = document.getElementById('day');

let currentYear = new Date().getFullYear();
for(let i = 0; i < qntYears; i++){
    let date = new Date(currentYear);
    let yearElem = document.createElement('option');
    yearElem.value = currentYear;
    yearElem.textContent = currentYear;

    selectYear.append(yearElem);
    currentYear++;
}

for(let m = 0; m < 12; m++ ){
    let monthNum = new Date(2019, m).getMonth();
    let month = monthNames[monthNum];
    
    let monthElem = document.createElement('option');
    monthElem.value = monthNum;
    monthElem.textContent = month;

    selectMonth.appendChild(monthElem);
}
let d = new Date();
let year = d.getFullYear();
let month = d.getMonth();
let day = d.getDate();

selectYear.value = year;
selectYear.addEventListener("change", AdjustDays);

selectMonth.value = month;
selectMonth.addEventListener('change', AdjustDays);

AdjustDays();
selectDays.value = day;

function AdjustDays(){
    let year = selectYear.value;
    let month = parseInt(selectMonth.value) + 1;
    selectDays.innerHTML = '';

    let days = new Date(year, month, 0).getDate();

    for(let d = 0; d <= days; d++){
        let dayElem = document.createElement('option');
        dayElem.value = d;
        dayElem.textContent = d;
        selectDays.appendChild(dayElem);
    }
}

function validateModel(){
    let valid = false;
    let modelValue = selectModel.value;
    let commentValue = selectComment.value;
    if(modelValue === '' || !isRequired(commentValue)){
        setErrorMessage(selectComment, "Choose model and fill out filed*")
    }else{
        setSuccessFor(selectComment);
        valid = true;
    }
    return valid;
}

function validateBillingName() { 
    let valid = false;
    const min = 2;
    const max = 20;

    const billFnameVal = selectBillFname.value.trim();
    const billLnameVal = selectBillLname.value.trim();

    if(!isRequired(billFnameVal)){
        setErrorMessage(selectBillFname, 'First Name cannot be blank');
    }else if(!isBetween(billFnameVal.length, min, max) ){
        setErrorMessage(selectBillFname, `First name must be between ${min} and ${max}`)
    }else{
        setSuccessFor(selectBillFname);
        valid = true;
    }

    if(!isRequired(billLnameVal)){
        setErrorMessage(selectBillLname, 'Last name cannot be blank');
    }else if(!isBetween(billLnameVal.length, min, max)){
        setErrorMessage(selectBillLname, `Last name must be between ${min} and ${max}`)
    }else{
        setSuccessFor(selectBillLname);
        valid = true;
    }
    return valid;
}
function valBillingAddress(){
    let valid = false;
    const billStreetVal = selectBillStreet.value.trim();
    const billCityVal = selectBillCity.value.trim();
    const billStateVal = selectBillState.value.trim();
    const billZipVal = selectBillZip.value.trim();
    const billPhoneVal = selectBillTel.value.trim();

    if(!isRequired(billStreetVal)){
        setErrorMessage(selectBillStreet, 'Street cannot be blank');
    }else{
        setSuccessFor(selectBillStreet);
        valid = true;
    }

    if(!isRequired(billCityVal)){
        setErrorMessage(selectBillCity, 'City cannot be blank');
    }else{
        setSuccessFor(selectBillCity);
        valid = true;
    }

    if(!isRequired(billStateVal)){
        setErrorMessage(selectBillState, 'Required*')
    }else{
        setSuccessFor(selectBillState);
        valid = true;
    }

    const zipRegex = /\b\d{2}\-\d{3}\b/;
    
    if(!isRequired(billZipVal)){
        setErrorMessage(selectBillZip, 'Zip cannot be blank');
    }else if(!zipRegex.test(billZipVal)){
        setErrorMessage(selectBillZip, 'Zip code must in format XX-XXX');
    }else{
        setSuccessFor(selectBillZip);
        valid = true;
    }

    const phoneRgex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if(!isRequired(billPhoneVal)){
        setErrorMessage(selectBillTel, 'Phone cannot be blank');
    }else if(!phoneRgex.test(billPhoneVal)){
        setErrorMessage(selectBillTel, 'Phone must be in format +XX-XXX-XXX-XXXX');
    }else{
        setSuccessFor(selectBillTel);
        valid = true;
    }

    return valid;
}

//hide delivery block when checkbox checked
const delCheck = document.getElementById('delivery-checkbox');
const deliveryAddress = document.getElementById('delivery-address');

delCheck.onchange = () =>{
    selectDelFname.value = selectBillFname.value;
    selectDelLname.value = selectBillLname.value;
    selectDelStreet.value = selectBillStreet.value;
    selectDelCity.value = selectBillCity.value;
    selectDelState.value = selectBillState.value;
    selectDelZip.value = selectBillZip.value;
    selectDelTel.value = selectBillTel.value;
}


function valDeliveryName() { 
    let valid = false;
    const min = 2;
    const max = 20;

    const delFnameVal = selectDelFname.value.trim();
    const delLnameVal = selectDelLname.value.trim();

    if(!isRequired(delFnameVal)){
        setErrorMessage(selectDelFname, 'First Name cannot be blank');
    }else if(!isBetween(delFnameVal.length, min, max) ){
        setErrorMessage(selectDelFname, `First name must be between ${min} and ${max}`)
    }else{
        setSuccessFor(selectDelFname);
        valid = true;
    }

    if(!isRequired(delLnameVal)){
        setErrorMessage(selectDelLname, 'Last name cannot be blank');
    }else if(!isBetween(delLnameVal.length, min, max)){
        setErrorMessage(selectDelLname, `Last name must be between ${min} and ${max}`)
    }else{
        setSuccessFor(selectDelLname);
        valid = true;
    }
    return valid;
}
function valDeliveryAddress(){
    let valid = false;
    const delCityVal = selectDelCity.value.trim();
    const delStreetVal = selectDelStreet.value.trim();
    const delStateVal = selectDelState.value.trim();
    const delZipVal = selectDelZip.value.trim();
    const delPhoneVal = selectDelTel.value.trim();
    
    if(!isRequired(delStreetVal)){
        setErrorMessage(selectDelStreet, 'Street cannot be blank');
    }else{
        setSuccessFor(selectDelStreet);
        valid = true;
    }

    if(!isRequired(delCityVal)){
        setErrorMessage(selectDelCity, 'City cannot be blank');
    }else{
        setSuccessFor(selectDelCity);
        valid = true;
    }

    if(!isRequired(delStateVal)){
        setErrorMessage(selectDelState, 'Required*')
    }else{
        setSuccessFor(selectDelState);
        valid = true;
    }

    const zipRegex = /\b\d{2}\-\d{3}\b/;
    
    if(!isRequired(delZipVal)){
        setErrorMessage(selectDelZip, 'Zip cannot be blank');
    }else if(!zipRegex.test(delZipVal)){
        setErrorMessage(selectDelZip, 'Zip code must in format XX-XXX');
    }else{
        setSuccessFor(selectDelZip);
        valid = true;
    }

    const phoneRgex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if(!isRequired(delPhoneVal)){
        setErrorMessage(selectDelTel, 'Phone cannot be blank');
    }else if(!phoneRgex.test(delPhoneVal)){
        setErrorMessage(selectDelTel, 'Phone must be in format +XX-XXX-XXX-XXXX');
    }else{
        setSuccessFor(selectDelTel);
        valid = true;
    }

    return valid;

}

function validatePayment(){
    let valid = false;
    const payment =  document.querySelectorAll('input[name="card-type"]');
    const error = document.getElementById('error-payment');
    let selectedValue = '';

    if(!(payment[0].checked || payment[1].checked || payment[2].checked)){
        selectedValue = "Required*" ;
    }
    error.textContent=selectedValue;
    valid = true;
    return valid;
}

function validateCardNumber () { 
    let valid = false;
    
    const cardNumberVal = cardNumberInput.value.trim();

    if(!isRequired(cardNumberVal)){
        setErrorMessage(cardNumberInput, 'Required');
    }else if(cardNumberVal.length < 16){
        setErrorMessage(cardNumberInput, 'Invalid credit card')
    }else{
        setSuccessFor(cardNumberInput);
        valid = true;
    }
    return true;
}
function validateExpDate () {
    let valid = false;
    const expDateVal = cardExpInput.value.trim();
    const expDateRegex = /\d{2}\/\d{2}/;

    if(!isRequired(expDateVal)){
        setErrorMessage(cardExpInput, "Required");
    }else if(!expDateRegex.test(expDateVal)){
        setErrorMessage(cardExpInput, 'Expiration date must be in format MM/YY');
    }else{
        setSuccessFor(cardExpInput);
        valid = true;
    }
    return valid;
}
function validateSecCode() {
    let valid = false;
    const secCodeValue = cardCodeInput.value.trim();

    if(!isRequired(secCodeValue)){
        setErrorMessage(cardCodeInput, 'Required');
    }else if(secCodeValue.length < 3 || secCodeValue.length > 3){
        setErrorMessage(cardCodeInput, 'Security code must include 3 numbers')
    }else{
        setSuccessFor(cardCodeInput);
        valid =  true;
    }
    return valid;
}


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


function setSuccessFor(input){
    const formGroup = input.parentElement;
  
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
  
    const error = formGroup.querySelector("small");
  
    error.textContent = '';
}
  
function setErrorMessage(input,message){
    const formGroup = input.parentElement;
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
  
    const error = formGroup.querySelector("small");
  
    error.innerText = message;
}

function validateForm () {
    

    let isModelValid =  validateModel(),
        isBillNameValid = validateBillingName(),
        isBillAddressValid = valBillingAddress(),
        isDelNameValid = valDeliveryName(),
        isPaymentValid = validatePayment(),
        isCardNumValid = validateCardNumber(),
        isExpValid = validateExpDate (),
        isSecCodeValid = validateSecCode(),
        isDelAddressVal = valDeliveryAddress();
     
    let isFormValid;
    if(delCheck.checked){
        isFormValid = isModelValid && isBillNameValid &&
                    isBillAddressValid && isPaymentValid &&
                    isCardNumValid && isExpValid && isSecCodeValid;
    }else{
        isFormValid = isModelValid && isBillNameValid &&
                        isBillAddressValid && isDelNameValid &&
                        isDelAddressVal && isPaymentValid &&
                        isCardNumValid && isExpValid && isSecCodeValid;
    }

    if(!isFormValid){      
            return false;
    }else{
        formCheckout.submit();
    }
 }

