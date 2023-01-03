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

  renderOnCard(cardName, cardNumber, cardExpiryMonth, cardExpiryYear, cardCVC)
})

function validateCardholder(cardName){
    const errorMessage = document.querySelector('.cardNameerror');
    if (cardName == ''){
        errorMessage.textContent = "Error: name cannot be empty";
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