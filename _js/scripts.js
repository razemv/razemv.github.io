$(document).ready(function() {
      var launchdate = new Date(2015, 8 - 1, 1);
      $('#counter').countdown({
          until: launchdate
      });
  })();