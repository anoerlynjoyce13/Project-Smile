var modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function submitAnswer() {
  var answer = document.getElementById("answer").value;
  console.log("Answer: " + answer);
  openSecondModal(); 
}

var secondModal = document.getElementById("secondModal");

function openSecondModal() {
  secondModal.style.display = "block";
}

function closeSecondModal() {
  secondModal.style.display = "none";
}

function goBack() {
  window.history.back();
}