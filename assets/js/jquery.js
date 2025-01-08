$(document).ready(function() {
    $(".message-button").click(function() {
      $(".confirmation-message")
        .stop()
        .slideDown(300)
        .animate({ top: "50px" }, 500)
        .delay(2000)
        .fadeOut(500)
        .slideUp(300);
    });
  });