$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#result').html(response).fadeIn();
            },
            error: function() {
                $('#result').html('<p style="color:red;">An error occurred. Please try again.</p>').fadeIn();
            }
        });
    });
});
