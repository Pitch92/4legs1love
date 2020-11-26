var quest = document.getElementsByClassName("question");
var i;

for (i = 0; i < quest.length; i++) {
  quest[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var questContent = this.nextElementSibling;
    if (questContent.style.maxHeight){
      questContent.style.maxHeight = null;
    } else {
      questContent.style.maxHeight = questContent.scrollHeight + "px";
    }
  });
}

//document.getElementsByClassName('material-icons').style.transform = 'rotate(90deg)';
