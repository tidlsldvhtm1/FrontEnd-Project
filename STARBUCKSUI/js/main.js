// console.log("Hello Star")
const searchEl = document.querySelector('.search')
const searchInputEl = document.querySelector('input')

const toTopEl = document.querySelector("#to-top")

searchEl.addEventListener('click', function(){
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder','통합검색')
})

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder','')
})

// 화면 스크롤이 일정길이 이상 길어지면 Badge가  Scroll되도록 : GSAP 애니메이션 효과
const badgeEl = document.querySelector("header .badges")

// window.addEventListener('scroll', function(){
//     console.log('Scroll')
// })
// 외부에서 가져오는 함수량을 제어 lodash 사용 throttle 기능
window.addEventListener('scroll', _.throttle(function(){
    // console.log(scrollY)
    if(scrollY>500){
        gsap.to(badgeEl, 0.6,{
            opacity: 0,
            display : 'none'
        })
        //home버튼 보여지기
        gsap.to(toTopEl, 0.2,{
            x:0
        })
    }else{
        //배지 보여주기
        gsap.to(badgeEl, 0.6,{
            opacity: 1,
            display : 'block'
        })
        //home버튼 숨기기
        gsap.to(toTopEl, 0.2,{
            x:100
        })
    }
}, 300)) //300ms

// TO TOP 

toTopEl.addEventListener('click',()=>{
    gsap.to(window,0.7,{
        scrollTo:0
    });
})
// GSAP ScrolltoPlugin 사용
// 커피이미지가 시간차를 두고 화면에 순차적으로 표현되도록 하는 애니메이션 효과
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
// GSAP.to(요소명, 지속시간(초), 옵션)
    gsap.to(fadeEl, 1, {
        delay : (index+1)*.7,
        opacity : 1
    })
})

// 공지사항 슬라이더 --> Swiper Slide 사용
// 사용법 : new Swiper(요소, 옵션)
new Swiper('.notice-line .swiper-container', {
    // Optional parameters
    direction: "vertical",
    autoplay : true,
    loop: true
  });

// promotion 슬라이더 작업 --> Swiper Slide 사용
new Swiper('.promotion .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: {
        delay:5000 // 5초마다
    },
    loop: true, // 반복재생
    slidesPerView : 3, //한번에 보여질 슬라이드 수
    spaceBetween : 10, //슬라이더 사이 여백
    centeredSlides : true, // 1번 슬라이더가 가운데 배치
    // If we need pagination
    pagination: { //페이지 사용여부
      el: '.promotion .swiper-pagination',
      clickable : true //제어가능여부
    },
  
    // Navigation arrows
    navigation: { //슬라이더 이전/이후 버튼 사용여부
      nextEl: '.promotion .swiper-next',
      prevEl: '.promotion .swiper-prev'
    }
  });

new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  })

// toggle-promotion 선택처리
const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김처리
        promotionEl.classList.add("hide")
    }
    else{
        //보임처리
        promotionEl.classList.remove("hide")
    }
})



// Scroll Magic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({ //감시하게될 장면(scene)을 추가
      triggerElement: spyEl, // 감시할 요소 (target)
      triggerHook: .8, // 화면의 80퍼센트 지점에서 보여짐
    })
      .setClassToggle(spyEl, "show")
      .addTo(new ScrollMagic.Controller()); // 컨트롤러 장면 할당
  });
// var controller = new ScrollMagic.Controller();

// new ScrollMagic.Scene({
//     duration : 100,
//     offset : 50,
// })
//     .setPin('#my-sticky-element')
//     .addTo(controller);

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()