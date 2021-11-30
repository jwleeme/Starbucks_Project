const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 서브메뉴 - 검색영역 input창 클릭이벤트 추가
searchEl.addEventListener('click', function () {
    // Logic...
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 사이드 배지 스크롤 이벤트
const badgeEl = document.querySelector('header .sidebadges');
const toTopEl = document.querySelector('#to-top'); //선택자를 여러번찾지않도록 아래 선택자 선언부분을 여기로옮겼다.

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 사이드 배지 숨기기
        // badgeEl.style.display = 'none';
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 상단으로 이동 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0 // 요소의 원래위치
        });

    } else {
        // 사이드 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        // 상단 이동 버튼 숨기기. (요소를 직접 명시하지않고 여기서는 문자데이터인 선택자로 써보겠다. #to-top)
        gsap.to(toTopEl, .2, {
            x: 100 // x축으로 100px만큼 이동함(오른쪽으로 가겠죠?)
        });
    }
}, 300));

// 화면 최상단으로 이동하는 버튼 기능 만들기
// 위로 이동시킴
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
})

// 순차적으로 요소 보이기 (컵1,2와 텍스트, 스푼)
const fadeEls = document.querySelectorAll('.visual .fade-in');
// fade-in갯수만큼 forEach 함수 실행됨.
fadeEls.forEach(function (fadeEl, index) { //매개변수
    // gsap.to(요소,지속시간,옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //1번째요소는 0.7초, 2번째요소는 1.4초..
        opacity: 1
    });
});

// SWIPER 라이브러리 (공지사항 수직슬라이드)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

// PROMOTION 슬라이더 영역
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal',  /* 수평이 기본값이지만 명시함.*/
    slidesPerView: 3, // 한번에 보여줄 슬라이드의 개수
    spaceBetween: 10, // 슬라이드 사이의 여백 (10px지정)
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    // 객체 데이터로 옵션을 줄수있다.
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
// 하단 다중 요소 슬라이드
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView : 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});



// 스타벅스 프로모션 토글 이벤트(클릭시 위로닫혔다열리는 형식)
const promotionEl = document.querySelector('.promotion');
const proToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

proToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // true = 숨김 처리!
        promotionEl.classList.add('hide');
    } else {
        //false = 보임 처리!
        promotionEl.classList.remove('hide');
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) { /*최소값과 최대값 지정 가능 */
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

// 유튜브 영역 floating Icon 3개 애니메이션 처리
function floatingObject(selector, delay, size) {
    // gsap.to(요소,시간,옵션);
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), // random 함수를 통해 반환된값으로 지속시간 지정.(앞서 1초지정했었음.) <- 애니메이션 동작시간
        {  // 옵션 
        y: size ,  /* 지정한 px만큼 매개변수로 받아준다. (앞서 20px지정)*/
        repeat: -1, /*무한반복 */
        yoyo: true, /* 위에서 아래로 통통 튀는느낌 */
        ease: Power1.easeInOut,
        delay: random(0, delay) /* 최소값 0초~ 아래 지정한 1초, 0.5초, 1.5초를 최대값으로 받아서 내부에서 랜덤하게 delay를 실행할수있도록 정의.*/
    });
}
// 1초에 걸쳐 15px만큼 플로팅 요소를 움직인다.
floatingObject('.floating1',1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3',1.5, 20);



// 섹션 감지를 위한 ScrollMagic 라이브러리 를 사용한 이벤트
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (secEl) {
    new ScrollMagic
    .Scene({
        triggerElement: secEl, //보여짐 여부를 감시할 요소들을 지정
        triggerHook: .8
    })
    .setClassToggle(secEl,'show')
    .addTo(new ScrollMagic.Controller());
});

// 올해가 몇년도인지 자동계산 해주는 기능
const thisYear = document.querySelector('.this-year');
//textContent 속성 -> 그 요소가 가지고 있는 글자 내용들을 알아내거나 값을 지정하는 경우 사용.
thisYear.textContent = new Date().getFullYear(); // 현재 년도 숫자데이터로 반환하는 내장함수사용
