/* Star animation */
const ratingItemsList = document.querySelectorAll(".skills-rating-item");
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach((item) =>
  item.addEventListener("click", () => {
    const {
      itemValue
    } = item.dataset;
    item.parentNode.dataset.totalValue = itemValue;
    console.log(item.dataset);
    // request
  })
);

/* Slider initialization */

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
  autoHeight: true,
});

/* Block skills */
const skillsBtnWrapper = document.querySelector(".skills-btn-wrapper");
const skillsWrapper = document.querySelector(".skills-wrapper");

const toggleBtnWrapper = (e) => {
  e.preventDefault();
  console.log();
  if (skillsWrapper.offsetHeight === 440 || skillsWrapper.offsetHeight === 2390) {
    skillsBtnWrapper.classList.toggle("skills-btn-active");
    skillsWrapper.classList.toggle("skills-wrapper-mobile-active");
  } else {
    skillsBtnWrapper.classList.toggle("skills-btn-active");
    skillsWrapper.classList.toggle("skills-wrapper-active");
  }
};
skillsBtnWrapper.addEventListener("click", toggleBtnWrapper);
const tripHouse = document.querySelector('.tripHouse');
const resume = document.querySelector('.resume');
const mobileScreen = window.matchMedia('(max-width: 768px)');
const changeText = (e) => {
  if (e.matches) {
    tripHouse.textContent = 'Triphouse – Github';
    resume.textContent = 'Landing CV – Github';
  } else {
    tripHouse.textContent = 'Seen on GitHub';
    resume.textContent = 'Seen on GitHub';
  }
}
if (mobileScreen.matches) {
  tripHouse.textContent = 'Triphouse – Github';
  resume.textContent = 'Landing CV – Github';
} 
mobileScreen.addEventListener('change', changeText);
