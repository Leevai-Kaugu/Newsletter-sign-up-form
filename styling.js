const mailInputForm = document.getElementById('email');
const userEmail = document.getElementById('baruaPepe');
const pageUno = document.querySelector('.infomation');
const pageDos = document.querySelector('.subMessage');
const imgUno = document. querySelector('.mainImg');
const thanksTxt =document.querySelector('.thanksText')


mailInputForm.addEventListener('submit', e=>{
  e.preventDefault();


validateMail()

const emailValue = userEmail.value.trim()

thanksTxt.innerText =
f`A confirmation email has been sent to 
${emailValue}. Please open it and click
the button inside to confirm your subscriptions`

function f(strings, mailValues){
  return strings[0] + mailValues + strings[1]
}

})


const isMailVerified = email =>{
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const setError = (element,message) =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = message;
  inputControl.classList.add ('error');
  inputControl.classList.add('errorBoxx');
}
const setSuccess = () =>{
  pageUno.style.display = 'none';
  imgUno.style.display = 'none';
  pageDos.style.display = 'flex';
}

const validateMail = () =>{
  const emailValue = userEmail.value.trim()
  let valid

  if(emailValue === ''){
    valid = false;
    setError(userEmail, 'Valid email required')
  } else if(!isMailVerified(emailValue)){
    valid = false;
    setError(userEmail, 'Valid email required')
  } else{
    valid = true;
    setSuccess();
  }
}