

function GFG_click(clicked){

  var modal = document.getElementById("myModal");

  var img = document.getElementById(clicked);
  var modalImg = document.getElementById("img01");

  img.innerHTML.src
  
  modal.style.display = "block";
  modalImg.src = img.src;
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
}





