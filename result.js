let parameters = location.search.substring(1).split('&');
  
function getParams(){
    let params = [];
        for(let i = 0; i < parameters.length; i++){
            nameVal = parameters[i].split('=');
            params[nameVal[0]] = nameVal[1]; 
        }   
     return params;   
}

params = getParams();

const bikeModel = document.getElementById('bike-model');
const comment = document.getElementById('comment');

const fNameBilling = document.getElementById('fname_billing');
const lNameBilling = document.getElementById('lname_billing');
const streetBilling = document.getElementById('street_billing');
const cityBilling = document.getElementById('city_billing');
const stateBilling = document.getElementById('state_billing');
const zipBilling = document.getElementById('zip_billing');
const telBilling = document.getElementById('tel_billing');

const fNameDelivery = document.getElementById('fname_delivery');
const lNameDelivery = document.getElementById('lname_delivery');
const streetDelivery = document.getElementById('street_delivery');
const cityDelivery = document.getElementById('city_delivery');
const stateDelivery = document.getElementById('state_delivery');
const zipDelivery = document.getElementById('zip_delivery');
const telDelivery = document.getElementById('tel_delivery');

const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');

const cardType = document.getElementById('card_type');
const cardNumber = document.getElementById('card_number');
const cardExpr = document.getElementById('exp_date');
const cardSecCode = document.getElementById('sec_code');


bikeModel.innerHTML = unescape(params['bikes']);
comment.innerHTML = unescape(params['comment']);

fNameBilling.innerHTML = unescape(params['fname-billing']);
lNameBilling.innerHTML = unescape(params['lname-billing']);
streetBilling.innerHTML = unescape(params['street-billing']);
cityBilling.innerHTML = unescape(params['city-billing']);
stateBilling.innerHTML = unescape(params['state-billing']);
zipBilling.innerHTML = unescape(params['zip-billing']);
telBilling.innerHTML = unescape(params['telephone-billing']);

fNameDelivery.innerHTML = unescape(params['fname-delivery']);
lNameDelivery.innerHTML = unescape(params['lname-delivery']);
streetDelivery.innerHTML = unescape(params['street-delivery']);
cityDelivery.innerHTML = unescape(params['city-delivery']);
stateDelivery.innerHTML = unescape(params['state-delivery']);
zipDelivery.innerHTML = unescape(params['zip-delivery']);
telDelivery.innerHTML = unescape(params['telephone-delivery']);

year.innerHTML = unescape(params['year']);
month.innerHTML = unescape(params['month']);
day.innerHTML = unescape(params['day']);

cardType.innerHTML = unescape(params['card-type']);
cardNumber.innerHTML = unescape(params['card-number']);
cardExpr.innerHTML = unescape(params['expiration-date']);
cardSecCode.innerHTML = unescape(params['security-code']);