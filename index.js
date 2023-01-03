console.log("linked")

const form = document.querySelector("#card-form")


const input = document.querySelectorAll('input')


input.forEach(input =>  {
    if (input.checked) {
        console.log(input.value)
    } else {
        input.classList.add('inputcolor')
    }
    
})

console.log(input)


form.addEventListener("submit", (e) => {
    e.preventDefault()

    renderCard()
   renderSuccessMessage()

})


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




// render on card onsumbit

function renderCard (){
    const cardName = document.getElementsByTagName("input")[0].value
    console.log(cardName)
    const cardname = document.querySelector(".card-name")
    console.log(cardname)
    cardname.innerHTML = cardName.toUpperCase()

    const cardNumber =  document.getElementsByTagName("input")[1].value
    console.log(cardNumber)
    const cardnumber = document.querySelector(".card-number")
    cardnumber.innerHTML = cardNumber
    cardnumber.classList.add(".spanNum")

    const cardExpiryMonth = document.getElementsByTagName("input")[2].value
    const cardexpirymonth = document.querySelector("#exp-month")
    cardexpirymonth.innerHTML = cardExpiryMonth

    const cardExpiryYear = document.getElementsByTagName("input")[3].value
    const cardexpiryyear = document.querySelector("#exp-year")
    cardexpiryyear.innerHTML = cardExpiryYear

    const cardCVC = document.getElementsByTagName("input")[4].value
    const cardcvc = document.querySelector("#cvc-num")
    cardcvc.innerHTML = cardCVC
} 