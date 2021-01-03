document.addEventListener('DOMContentLoaded', function(event) {

const ratingItemsList = document.querySelectorAll('.skills-rating-item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach (item =>
  item.addEventListener('click', () => {
    const {itemValue} = item.dataset;
  item.parentNode.dataset.totalValue = itemValue;

  //request
})
);
$('.skills-btn-wrapper').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('skills-btn-active');
    $('.skills-wrapper').toggleClass('skills-wrapper-active');
});
$(document).ready(function(){
$('.project').slick({
  arrows:false,
  dots: true,
  easing: 'ease'
  
});
});
});
