// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfe45dCRYOowxnKUyL4yzt8KiepSSXHanzEUwkamgA8c7KAcrWg7PM8o9itqyGw-t5xA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => Swal.fire({
  position: "center",
  icon: "success",
  title: "Thankyou for getting in touch",
  showConfirmButton: false,
  timer: 3000
}))
 .then(() => { window.location.reload(); })
 .catch(error => Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
}))
})



