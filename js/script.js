document.addEventListener('DOMContentLoaded', function(event) {
let rating = document.querySelector('.skills-rating');
 let  ratingItem = document.querySelectorAll('.star');

rating.onclick = function(e){
  let target = e.target;
 
  if(target.classList.contains('star')){
    removeClass(ratingItem,'current-active')
    target.classList.add('active','current-active');
  }
}

rating.onmouseover = function(e) {
    let target = e.target;
  if(target.classList.contains('star')){
    removeClass(ratingItem,'active')
    target.classList.add('active');
    mouseOverActiveClass(ratingItem)
  }
}
rating.onmouseout = function(){
  addClass(ratingItem,'active');
  mouseOutActiveClas(ratingItem);
}

function removeClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}
function addClass(arr) {
  for(let i = 0, iLen = arr.length; i <iLen; i ++) {
    for(let j = 1; j < arguments.length; j ++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mouseOverActiveClass(arr){
  for(let i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')){
      break;
    }else {
      arr[i].classList.add('active');
    }
  }
}

function mouseOutActiveClas(arr){
  for(let i = arr.length-1; i >=1; i--) {
    if(arr[i].classList.contains('current-active')){
      break;
    }else {
      arr[i].classList.remove('active');
    }
  }
}

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
