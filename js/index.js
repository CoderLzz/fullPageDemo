$(function () {
    $('#container').fullpage({
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        scrollingSpeed:1000,
        afterLoad:function(link,index){
            $('.section').eq(index.index).addClass('lzz')
        },
        afterRender:function(){
            $('.down').on('click',function(){
                $.fn.fullpage.moveSectionDown()
            })
        },
        onLeave:function(index,nextIndex){
            if(index.index==1&&nextIndex.index==2){
                $('.section').eq(index.index).addClass('oym')
                $('.section').eq(nextIndex.index).css({zIndex:-1})
            }else if(index.index==2&&nextIndex.index==3){
                $('.section').eq(index.index).addClass('oym')
                $('.section').eq(nextIndex.index).css({zIndex:-2})
            }else if(index.index==3&&nextIndex.index==4){
                $('.section').eq(index.index).addClass('oym')
                $('.section').eq(nextIndex.index).css({zIndex:-3})
            }else if(index.index==4&&nextIndex.index==5){
                $('.section').eq(index.index).addClass('oym')
                $('.section').eq(nextIndex.index).css({zIndex:-4})
            }
        }
    }); 
});
