// document.querySelector('.img__btn').addEventListener('click', function () {
//     document.querySelector('.cont').classList.toggle('s--signup');
// });


// fade fade out

// function fadeOut(el) {
//     el.style.opacity = 1;

//     (function fade() {
//         if ((el.style.opacity -= .1) < 0) {
//             el.style.display = "none";
//         } else {
//             requestAnimationFrame(fade);
//         }
//     })();
// }

// // fade in

// function fadeIn(el, display) {
//     el.style.opacity = 0;
//     el.style.display = display || "block";

//     (function fade() {
//         var val = parseFloat(el.style.opacity);
//         if (!((val += .1) > 1)) {
//             el.style.opacity = val;
//             requestAnimationFrame(fade);
//         }
//     })();
// }

// var el = document.querySelector('.js-fade');

// fadeOut(el);
// fadeIn(el);
// fadeIn(el, "inline-block");
//add textarea autoresize
$(document).ready(function () {
    // fade animation
    $('textarea').autoResize({
        animate: {
            enabled: true,
            duration: 'fast',
            complete: function () {
                // Do something
            },
            step: function (now, fx) {
                // Do something else
            }
        },
        maxHeight: '500px'
    });
    $('div.hidden').fadeIn(1000).removeClass('hidden');

    // START CUSTOM COPIED CODE 


    // var steps = ["#step-one", "#step-two"]
    // var currentStep = 0
    // $("#signup").click(() => {
    //     if (currentStep == steps.length - 1) {
    //         $(steps[currentStep]).fadeOut()
    //         $(steps[currentStep + 1]).fadeIn()
    //         currentStep++
    //     } else {}
    // })

    // $(".singup-form").on("submit", function (e) {
    //     e.preventDefault();
    //     $('#step-one').fadeOut();
    //     $('.fade-btn').toggleClass('')
    //     debugger
    //     var $this = $(this);
    //     console.log($this)

    //     var data = {
    //         username: $(".username").val(),
    //         email: $(".username").val(),
    //         password: $(".password").val(),
    //         firstName: $(".firstName").val(),
    //         lastName: $(".lastName").val(),
    //         dateOfBirth: $(".dateOfBirth").val(),
    //         role: $(".role").val()

    //     }
    //     console.log(data)

    //     $.post("/signup", data, function (response) {
    //         console.log(response)
    //     })
    // })
});