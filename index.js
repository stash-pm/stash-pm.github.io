var post_email = function() {
    var email = $('#email_address').val();
    console.log("email: "+ email);
    window.jQuery.post('https://api-test.stash.pm/mailing/', {email:email}, function () {
        $('#email_container').replaceWith("<div id='email_sent'><h2>Thank you !</h2></div>")
    });
};
