// Appointment form handling
document.addEventListener('DOMContentLoaded', function() {
    let appointmentForm = document.getElementById('appointmentForm');
    let appointmentSentMessage = document.querySelector('.appointment-sent-message');
    let appointmentErrorMessage = document.querySelector('.appointment-error-message');
  
    appointmentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      let formData = new FormData(appointmentForm);
  
      // Construct mailto URL with form data (example)
      let mailtoUrl = 'mailto:info@drgebril.com' +
                      '?subject=' + encodeURIComponent('New Appointment Request') +
                      '&body=' + encodeURIComponent(
                        'Name: ' + formData.get('name') + '\n' +
                        'Email: ' + formData.get('email') + '\n' +
                        'Phone: ' + formData.get('phone') + '\n' +
                        'Reason: ' + formData.get('reason') + '\n' +
                        'Best Time: ' + formData.get('bestTime') + '\n' +
                        'Message: ' + formData.get('message')
                      );
  
      // Open mailto URL
      window.open(mailtoUrl);
  
      // Show success message
      appointmentSentMessage.style.display = 'block';
      appointmentErrorMessage.style.display = 'none';
  
      // Optionally reset form fields after submission
      appointmentForm.reset();
    });
});


