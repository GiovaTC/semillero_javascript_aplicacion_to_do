var modal = document.getElementById("modal");

var button = document.getElementsByTagName('button')[0];
var modalImage = document.getElementById("modal-image");
var close = document.getElementsByClassName("close")[0];

button.addEventListener('click', function() {
  modal.style.display = "block";
  modalImage.src = 'https://picsum.photos/300/200';
})

close.addEventListener('click', function() {
  modal.style.display = "none";
})