$('.range').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;

  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');

var rangeSlider = document.querySelector(".range");
var rangeBullet = document.querySelector(".calc__col-input-amount");

rangeSlider.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578) + "px";
}
