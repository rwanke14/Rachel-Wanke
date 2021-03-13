
$(document).ready(function () {

    var contactForm = $('contactForm');
    var submitBtn = $('button');
    var emailInput = document.getElementById('email')
    var nameInput = document.getElementById('name')
    var subjectInput = document.getElementById('subject')
    var messageInput = document.getElementById('message')

    submitBtn.on("click", function (e) {
        e.preventDefault();

        console.log('clicked')

        let formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            subject: subjectInput.value.trim(),
            message: messageInput.value.trim()
        }

        console.log(formData)

        // let xhr = new XMLHttpRequest();
        // xhr.open('POST', '/public/contact.html')
        // xhr.setRequestHeader('content-type', 'application/json');

    

        sendEmail(formData);

    });




    const sendEmail = (formData) => {
        fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(() => {
        
                window.location.href = '/contact';

                console.log('success')
            })
            .catch((err) => console.error(err));
    };








});