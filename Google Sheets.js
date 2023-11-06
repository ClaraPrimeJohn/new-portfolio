// form
const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfe45dCRYOowxnKUyL4yzt8KiepSSXHanzEUwkamgA8c7KAcrWg7PM8o9itqyGw-t5xA/exec';

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {Swal.fire({
    position: "center",
    icon: "success",
    title: "Message Succesfully Sent, Thankyou for getting in touch!",
    showConfirmButton: false,
    timer: 2500
  })
})
  .then(() => { window.location.reload(); })
  .catch(error => {Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  })})
})

