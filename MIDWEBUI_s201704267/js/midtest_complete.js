const word = document.querySelector("#word")
const btn = document.querySelector("#confirm")
const pattern = new RegExp("^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$")

btn.addEventListener('click',function(){
    if(pattern.test(word.value)){
        alert('검색완료')
    }else{
        alert('검색은 영문, 한글, 숫자만 가능합니다!')
        word.value=''
        word.focus()
    }
})

$(document).ready(function(){
    $('.outer-menu').hover(function(){
        $(this).find('.inner-menu').css('display','block');
    }, function(){
        $(this).find('.inner-menu').css('display','none');
    })
})

$(document).ready(function () {
    // 이미지 로드 확인
    $('#main-section').imagesLoaded(function () {
        // jQuery Masonry 플러그인 적용
        $('#main-section').masonry({
            itemSelector: '.paper',
            columnWidth: 230,
            isAnimated: true
        });
    });
});

$(document).ready(function(){
    function LightBox(){
        $('#darken-background').show();
        $('#darken-background').css('top',$(window).scrollTop());
        $('body').css('overflow','hidden');
    }
    function LightBoxHide(){
        $('#darken-background').hide();
        $('body').css('overflow','');
    }
    $('#darken-background').click(function(){
        LightBoxHide();
    })
    $('.paper').click(function(){
        LightBox();
    })
    $('#lightbox').click(function(event){
        event.stopPropagation()
    })
})


