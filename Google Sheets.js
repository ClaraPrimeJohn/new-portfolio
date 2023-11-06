// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfe45dCRYOowxnKUyL4yzt8KiepSSXHanzEUwkamgA8c7KAcrWg7PM8o9itqyGw-t5xA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Thankyou for getting in touch with me!",
  showConfirmButton: false,
  timer: 1500
}))
 .then(() => { window.location.reload(); })
 .catch(error => Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
}))
})


