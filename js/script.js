const sumField = document.querySelector("#sum");
const rateField = document.querySelector("#rate");
const totalField = document.querySelector("#total");
const commission = 5;
const MAX_COUNT = 1500;
const regExp = /^\d+(\.?\d*)?$/;

sumField.onkeyup = main;
rateField.onkeyup = main;

function main(){
  resetTotalField();
  
  if(!checkInputValue(this.value)){    
    this.value = doCorrectValue(this.value);  
    processOverflow(0); 
    return false;
  }
  
  if(!isEmpty(sumField.value) && !isEmpty(rateField.value)) {
    let sum = parseFloat(sumField.value);
    let rate = parseFloat(rateField.value);
    let total = calculateTotal(sum, rate, commission);

    totalField.value = total;  

    processOverflow(total); 
  } 
}

function checkInputValue(value){
  return regExp.test(value);
}

function isEmpty(value) {
  return value === "";
}

function doCorrectValue(value){
  return parseFloat(value) ? parseFloat(value) : "";
}

function calculateTotal(sum, rate, commission){
  return sum * rate - ((sum * rate * commission) / 100);  
}

function processOverflow(total){
  if(total > MAX_COUNT)
    addClass(totalField, "form-group__input-text_warning");
  else
    removeClass(totalField, "form-group__input-text_warning");
}

function addClass(element, className){
  element.classList.add(className);
}

function removeClass(element, className){
  element.classList.remove(className);
}

function resetTotalField() {
  totalField.value = "";
  processOverflow(0);
}
