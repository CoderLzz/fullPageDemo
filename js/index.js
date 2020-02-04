$(function () {
    $('#container').fullpage({
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad:function(link,index){
            console.log(index);
            $('.section').eq(index.index).addClass('lzz')
        }
    });
});
