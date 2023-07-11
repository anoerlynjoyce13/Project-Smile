 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the checkbox
 var checkbox = document.getElementById("remember");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the checkbox, open the modal
 checkbox.addEventListener('change', function() {
   if (this.checked) {
     modal.style.display = "block";
   } else {
     modal.style.display = "none";
   }
 });

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 };

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };