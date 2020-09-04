var BASE_URL = "https://api.whatsapp.com/send"
var $sendForm = document.getElementById('sendForm');
var $phoneNumber = document.getElementById('phoneNumber');
var $message = document.getElementById('message');
var $link = document.createElement('a')

var onSubmit = e => {
  e.preventDefault()
  console.log($message)
  var WHATSAPP_MESSAGE = $message.value
  var PHONE_NUMBER = $phoneNumber.value
  if (!(/55/gi.test(PHONE_NUMBER))) {
    PHONE_NUMBER = '55' + PHONE_NUMBER
  }
  var WHATSAPP_LINK = `${BASE_URL}?phone=${PHONE_NUMBER}&text=${encodeURIComponent(
  `${WHATSAPP_MESSAGE}`.trim()
)}`
  
  $link.target = '_blank'
  $link.href = WHATSAPP_LINK.replace('+', '').replace('-', '').replace(/\s/g, '')
  $link.click()
  alert('Preguiçoso!')
}

$sendForm.addEventListener('submit', onSubmit)
