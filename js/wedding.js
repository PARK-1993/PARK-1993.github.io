// Get that hamburger menu cookin' //


document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
      e.preventDefault();
      var data = $(this).serialize();

      //$('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

      
  $.post('https://script.google.com/macros/s/AKfycbxgYC8b-OdFjux-du-pJWdO0HyfVPnVczT-FAKf0Xz5yxw491s1YV3ZSeAFAtU9A75U/exec', data)
    .done(function (data) {
      console.log(data);
      if (data.result === "error") {
        // window.alert("転送に失敗しました。¥nしばらくしてからもう一度試してください。");
        window.alert("Transfer failed. Please try again a few moments later.");
      } else {
        // $('#alert-wrapper').html('');
        // $('#alert-wrapper').html(alert_markup('success', '<strong>Thank you!</strong> Your information has been sent to the couple.'));
        // window.alert("回答が送信されました。¥n¥nこの度はご回答いただき誠にありがとうございます。¥n当日はぜひ楽しいお時間をお過ごしくださいませ。¥nお会いできることを楽しみにしております。");
        window.alert("Your response has been submitted.¥n¥nThank you so much for your response.¥nWe hope you have a fantastic time at our wedding.¥nWe can’t wait to see you there!");
      }
    })
    .fail(function (data) {
      console.log(data);
      // $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server.'));
      // window.alert("転送に失敗しました。¥nしばらくしてからもう一度試してください。");
      window.alert("Transfer failed. Please try again a few moments later.");
    });
  });
});

document.getElementById('attendance').addEventListener('change', function() {
  var shuttleBusSelect = document.getElementById('shuttle-bus');
  var dinnerAttendanceSelect = document.getElementById('dinnerAttendance');
  var isAbsent = this.value === 'no';

  if (isAbsent) {
      shuttleBusSelect.value = 'one'; // "利用しない" option value
      dinnerAttendanceSelect.value = 'no'; // "不参加" option value
  }

  shuttleBusSelect.disabled = isAbsent;
  dinnerAttendanceSelect.disabled = isAbsent;
});

$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});

// alert_markup
function alert_markup(alert_type, msg) {
  return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
