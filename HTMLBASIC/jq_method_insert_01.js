var totalNum = $(" .vis > div ").length // 4
var currentNum = 1;

$(".page_n > span:first").text(currentNum)
$(".page_n > span:last").text(totalNum)

$(".next_b").click(function(){
    currentNum++
    if(currentNum > totalNum){
        currentNum = 1
    }
    $(".page_n > span:first").text(currentNum)
    $(" .vis div:first").insertAfter(".vis div:last")
})

$(".prev_b").click(function(){
    currentNum--
    if(currentNum < 1){
        currentNum = totalNum
    }
    $(".page_n > span:first").text(currentNum)
    $(".vis div:last").insertBefore(".vis div:first")
})