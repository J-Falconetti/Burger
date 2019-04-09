$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          console.log("changed to devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".bergs").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        name: $("#berg").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(
        function() {
          console.log("created new ");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  