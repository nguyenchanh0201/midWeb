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

// Select the button
var showMoreBtn = document.querySelector('.showMoreBtn1');

// Add click event listener to the button
showMoreBtn.addEventListener('click', function() {
  // Select the table container
  var tableContainer = document.querySelector('.table-responsive');

  // Toggle the display of the table container and change button text accordingly
  if (tableContainer.style.display === 'none' || tableContainer.style.display === '') {
    tableContainer.style.display = 'block';
    showMoreBtn.textContent = 'SHOW LESS';
  } else {
    tableContainer.style.display = 'none';
    showMoreBtn.textContent = 'SHOW MORE';
  }
});

