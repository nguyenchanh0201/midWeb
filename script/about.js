window.addEventListener("beforeunload", function(event) {
    // Cancel the event
    event.preventDefault();
    // Chrome requires returnValue to be set
    event.returnValue = "";

    // Display the confirmation dialog
    var confirmationMessage = "Are you sure you want to leave this page?";
    event.returnValue = confirmationMessage; // For Chrome
    return confirmationMessage; // For other browsers
  });
