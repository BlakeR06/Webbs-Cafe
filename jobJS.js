const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
const i5 = document.getElementById('i5');
const i6 = document.getElementById('i6');
const i7 = document.getElementById('i7');

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    if (
        i1.value.trim() !== '' &&
        i2.value.trim() !== '' &&
        i3.value.trim() !== '' &&
        i4.value.trim() !== '' &&
        i5.value.trim() !== '' &&
        i6.value.trim() !== '' &&
        i7.value.trim() !== ''
    ) {
        alert('Application Submitted! We will contact you soon to schedule an interview.');
        window.location.href = 'home.html';
    } else {
        alert('Please fill in all fields.');
    }
});