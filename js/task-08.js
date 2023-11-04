const form = document.querySelector('.login-form')
const emailForm = form.elements.email
const passwordForm = form.elements.password
const submitBtn = document.querySelector('button')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault()
  if (emailForm.value == '' || passwordForm.value == '') {
    alert('Всі поля повинні бути заповнені!')
  } else {
    const user = {
      email: emailForm.value,
      password: passwordForm.value
    }
    console.log(user)
  }
  form.reset()
}

