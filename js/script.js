const ratingItemsList = document.querySelectorAll(".skills-rating-item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) =>
  item.addEventListener("click", () => {
    const {
      itemValue
    } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;

    //request
  })
);

/*Slider initialization*/

new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enable: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".project-slider",
  },
});

/*Block skills*/
const skillsBtnWrapper = document.querySelector(".skills-btn-wrapper");
const skillsWrapper = document.querySelector(".skills-wrapper");

const toggleBtnWrapper = (e) => {
  e.preventDefault();
  skillsBtnWrapper.classList.toggle("skills-btn-active");
  skillsWrapper.classList.toggle("skills-wrapper-active");
};
skillsBtnWrapper.addEventListener("click", toggleBtnWrapper);