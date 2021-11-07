var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    // YT.Player(id이름,객체)
    new YT.Player('player',{
        videoid:'An6LvWQuj_8',
        playerVars:{
            autoplay : true,
            loop : true,
            playlist:'An6LvWQuj_8'
        },
        events:{
            'onReady': function(event){
                event.target.mute() //음소거
            }
        }
    });
}

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
      y: size, 
      repeat: -1, // 무한반복
      yoyo: true, // 요요 효과
      ease: Power1.easeInOut, // 애니메이션의 실행 느낌
      delay: random(0, delay), // 지연시간 (몇초뒤에 시작하는 가)
    });
  }

floatingObject(".floating1", 1, 15); 
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);


