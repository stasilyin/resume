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

/* $('.skills-btn-wrapper').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('skills-btn-active');
    $('.skills-wrapper').toggleClass('skills-wrapper-active');
}); */

/*Slider initialization*/
new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enable:true,
    pageUpDown:true,
  },
  mousewheel: {
    sensitivity:1,
    eventsTarget:".project-slider",
  }
});
});

document.querySelector('.skills-btn-wrapper').addEventListener('click',function(e){
  e.preventDefault();
  let currentHeight = document.querySelector('.skills-wrapper').offsetHeight;
  console.log(currentHeight);
  if (currentHeight == 213) {
    this.classList.add('skills-btn-active');
    document.querySelector('.skills-wrapper').classList.add('skills-wrapper-active');
  }
  else {
    this.classList.remove ('skills-btn-active');
    document.querySelector('.skills-wrapper').classList.remove('skills-wrapper-active');
  }

});