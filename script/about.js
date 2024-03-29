// Select the button
var showMoreBtn = document.querySelector('.showMoreBtn');

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



