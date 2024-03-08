// Add event listeners to all "Show More" buttons
document.querySelectorAll(".showMoreBtn").forEach(function(button) {
    button.addEventListener("click", function() {
      // Find the hidden content associated with this button
      var hiddenContent = this.previousElementSibling;
      
      // Toggle the display of the hidden content
      if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
        hiddenContent.style.display = "block";
        this.textContent = "SHOW LESS";
      } else {
        hiddenContent.style.display = "none";
        this.textContent = "SHOW MORE";
      }
    });
  });

