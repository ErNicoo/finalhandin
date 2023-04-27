function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
  var isDark = body.classList.contains('dark-mode');
  localStorage.setItem('isDark', isDark);
}

window.addEventListener('load', function () {
  var isDark = localStorage.getItem('isDark') === 'true';
  var body = document.body;
  if (isDark) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

// Dropdown menu for contact button
var dropdown = document.querySelector(".dropdown");
var dropdownBtn = document.querySelector(".dropbtn");

// Show dropdown menu on hover
dropdownBtn.addEventListener("mouseover", function() {
  dropdown.classList.add("show");
});

// Hide dropdown menu on mouseout
dropdown.addEventListener("mouseleave", function() {
  dropdown.classList.remove("show");
});

