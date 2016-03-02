var post_email = function() {
    var email = $('#email_adress').value;
    console.log("email: "+ email);
    jQuery.post('http://localhost:8000/mailing/', {email:email});
};