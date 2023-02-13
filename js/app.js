'use strict';

$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#27ae60', '#f1c40f', '#e67e22', '#e74c3c'], // 섹션별 배경색 지정 ,css에 배경색이 지정되어 있으면 적용 안됨
    scrollingSpeed: 700, // 스크롤링 속도
    navigation: true, // 네비게이션 추가
    anchors: ['home', 'about', 'portfolio1', 'portfolio2', 'contact'],
  });
});