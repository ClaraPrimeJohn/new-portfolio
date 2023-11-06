// form

const form = document.querySelector('#form');
const submitButton = document.querySelector('#submit');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfe45dCRYOowxnKUyL4yzt8KiepSSXHanzEUwkamgA8c7KAcrWg7PM8o9itqyGw-t5xA/exec'


form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Message Successfully Sent",
          showConfirmButton: false,
          timer: 1500
        });
        form.reset(); 
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    });
});
