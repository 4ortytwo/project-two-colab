$(document).ready(function () {

    $(".singup-form").on("submit", function (e) {
        e.preventDefault();
        var $this = $(this);
        console.log($this)

        var data = {
            username: $(".username").val(),
            email: $(".username").val(),
            password: $(".password").val(),
            firstName: $(".firstName").val(),
            lastName: $(".lastName").val(),
            dateOfBirth: $(".dateOfBirth").val(),
            specialty: $(".specialty").val()

        }
        console.log(data)

        $.post("/signup", data, function (response) {
            console.log(response)
        })
    })
});