
function GFG_click(clicked){

  var currentpic = clicked
  var modal = document.getElementById("myModal");
  var img = document.getElementById(currentpic);
  var modalImg = document.getElementById("img01");
  
  modal.style.display = "block";
  modalImg.src = img.src;
  
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
}


/*const thepics = document.getElementsByClassName("slide");
var imgageindex = thepics.findIndex(obj => obj.id === img.id);
var modalImg = document.getElementById("img01");

console.log(Array.isArray("thepics"));

var a = document.getElementsByClassName("prev");
  function plusSlides() {
    modalImg.src = thepics[1].src;
  }

console.log(pic1d);
slideid = pic1d;
var thepics = document.getElementsByClassName("slide");
var theelement = document.getElementById(slideid);
var imgageindex = thepics.indexOf(theelement);

function plusSlides(){
  alert(thepics[imgageindex += 1])
  modalImg.src = thepics[imgageindex += 1].src
}

function minusSlides(){
  modalImg.src = thepics[imgageindex -= 1].src
}*/
