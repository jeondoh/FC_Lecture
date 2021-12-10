const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// lodash 사용
window.addEventListener('scroll', _.throttle(function() {
  // 현재 스크롤 위치(윈도우 기준)
  if(window.scrollY > 500){
    // 배치 숨기기 (gasp 사용)
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display : 'none'
    });
  } else {
    // 배치 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display : 'block'
    });
  }
}, 300));
//_.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// 공지사항 Swiper
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

// 프로모션 슬라이드
new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이게
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


// 프로모션 보이기&숨기기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else{
    // 보이기 처리
    promotionEl.classList.remove('hide');
  }
});