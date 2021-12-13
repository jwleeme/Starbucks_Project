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

// 올해가 몇년도인지 자동계산 해주는 기능
const thisYear = document.querySelector('.this-year');
//textContent 속성 -> 그 요소가 가지고 있는 글자 내용들을 알아내거나 값을 지정하는 경우 사용.
thisYear.textContent = new Date().getFullYear(); // 현재 년도 숫자데이터로 반환하는 내장함수사용