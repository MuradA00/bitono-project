const acc = document.querySelectorAll(".faq-list__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    this.classList.toggle("collapse");
    var panel = this;
  });
}


