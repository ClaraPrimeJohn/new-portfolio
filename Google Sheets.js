// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfe45dCRYOowxnKUyL4yzt8KiepSSXHanzEUwkamgA8c7KAcrWg7PM8o9itqyGw-t5xA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you for getting in touch." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})



