// Assignment code here
 
// DOM
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const handlerEl = document.getElementsByClassName('handler') 

// Object
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomupper,
  number: getRandomNumber,
  symbol: getRandomsymbol
};
// Generate event listener
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  window.prompt ("please check the box and select the length")
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

passwordEl.innerText = generatePassword( hasLower, hasUpper, hasNumber, hasSymbol, length);
});
// Generate password function 
function generatePassword(lower, upper, number, symbol, length){
  // 1. initl pw var
  // 2. filter out unchecked box
  // 3. loop over length call generatore function for each type 
  // 4. alart the final password 
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;

  // console.log('typesCount:', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  // console.log('typesArr:', typesArr);

  if(typesCount === 0){

    return alert('Please check the boxs');
  }

  for (let i = 0; i < length; i += typesCount) {

    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      // console.log('funcName:', funcName);

      generatedPassword +=randomFunc[funcName]();
    })
  }
  const finalPassword = generatedPassword.slice(0,length);
    return finalPassword;     
}

// Generator function
function getRandomLower() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
}
function getRandomupper() {
  return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
}
function getRandomNumber() {
  return String.fromCharCode((Math.floor(Math.random() * 10) + 48));
}
function getRandomsymbol() {
  const symbols =  "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomsymbols());