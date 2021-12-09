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
