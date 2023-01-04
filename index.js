console.log("linked")

const form = document.querySelector("#card-form")

//  submit form
form.addEventListener("submit", (e) => {
   e.preventDefault()

// Get the credit card number, expiration date, CVC, and cardholder from the form
   const cardName = document.getElementById("cardholdername").value
   const cardNumber =  document.getElementById("cardnumber").value
   const cardExpiryMonth = document.getElementById("experationdatemonth").value
   const cardExpiryYear = document.getElementById("experationdateyear").value
   const cardCVC = document.getElementById("cvcnumber").value

   validateCardholder(cardName)
   validateCardNumber(cardNumber)
   validateCardExpiryMonth(cardExpiryMonth)
   validateCardExpiryYear(cardExpiryYear)
   validateCardCVC(cardCVC)
  renderOnCard(cardName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCVC)
})

function validateCardholder(cardName){
    const errorMessage = document.querySelector('.error');
      
    if (cardName == ''){
       errorMessage.textContent = "Error: name cannot be empty";
       const inputname = document.getElementsByTagName("input")[0]
       inputname.style.borderColor = "red"
    } 
   
  }

  function validateCardNumber(cardNumber){
    const errorMessage = document.querySelector('.errornumber');
    
    if (cardNumber == ''){
       errorMessage.textContent = "Error: cardnumber cannot be empty";
       const inputnumber = document.getElementsByTagName("input")[1]
       inputnumber.style.borderColor = "red"
    } 
      
  }

  function validateCardExpiryMonth(cardExpiryMonth){
    const errorMessage = document.querySelector('.errormonth');
    const inputmonth = document.getElementsByTagName("input")[2]
    if ( cardExpiryMonth == ''){
       errorMessage.textContent = "Error: expiry cannot be blank";
       inputmonth.style.borderColor = "red"
    } else if (cardExpiryMonth > 12 || cardExpiryMonth < 1){
        errorMessage.textContent = "Error: please enter a valid digit";
        inputmonth.style.borderColor = "red"
    } 
      
  }

  function validateCardExpiryYear(cardExpiryYear){
    const errorMessage = document.querySelector('.erroryear');
    const inputmonth = document.getElementsByTagName("input")[3]
    
    if ( cardExpiryYear == ''){
       errorMessage.textContent = "Error: expiry cannot be blank";
       inputmonth.style.borderColor = "red"
    } else if (cardExpiryYear > 23 || cardExpiryYear < 1){
        errorMessage.textContent = "Error: please enter a valid digit";
        inputmonth.style.borderColor = "red"
    } 
      
  }

  function validateCardCVC(cardCVC){
    const errorMessage = document.querySelector('.errorcvc');
    const inputcvc = document.getElementsByTagName("input")[4]
   
    if ( cardCVC == ''){
       errorMessage.textContent = "Error: expiry cannot be blank";
       inputcvc.style.borderColor = "red"
    }
      
  }


// render on card onsumbit
function renderOnCard(cardName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCVC) {
   
    const cardname = document.querySelector(".card-name")
    cardname.innerHTML = cardName.toUpperCase()
    console.log(cardname)

    const cardnumber = document.querySelector(".card-number")
    cardnumber.innerHTML = cardNumber
   

    const cardexpirymonth = document.querySelector("#exp-month")
    cardexpirymonth.innerHTML = cardExpiryMonth

    const cardexpiryyear = document.querySelector("#exp-year")
    cardexpiryyear.innerHTML = cardExpiryYear

    const cardcvc = document.querySelector("#cvc-num")
    cardcvc.innerHTML = cardCVC
} 



// show success message after submit
function renderSuccessMessage() {
    const successMessage = document.querySelector(".success-message")
    successMessage.innerHTML = `
                                 <img src="./images/icon-complete.svg" alt = "tick-icon">
                                 <p>We've added your card details
                                     <button> continue</button>
                                     </p>
                                 `
    successMessage.style.display = "block"
    successMessage.className.add(".success-message")
    form.style.display = 'none'
 }