$(function () {
    $('#container').fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function (link, index) {
            $('.section').eq(index.index).addClass('lzz')
        },
        afterRender: function () {
            $('.down').on('click', function () {
                $.fn.fullpage.moveSectionDown()
            })
            var hand = document.querySelector('.page8 .hand')
            document.onmousemove = function (e) {
                hand.style.top = e.clientY+30 + 'px'
                hand.style.left = e.clientX - 50 + 'px'
            }
            $('.page8 .again').on('click', function () {
                $('.lzz,.oym').removeClass('lzz').removeClass('oym')
                $.fn.fullpage.moveTo(1)
            })
        },
        onLeave: function (index, nextIndex) {
            if (index.index == 1 && nextIndex.index == 2) {
                $('.section').eq(index.index).addClass('oym')
            } else if (index.index == 2 && nextIndex.index == 3) {
                $('.section').eq(index.index).addClass('oym')
            } else if (index.index == 3 && nextIndex.index == 4) {
                $('.section').eq(index.index).addClass('oym')
            } else if (index.index == 4 && nextIndex.index == 5) {
                $('.section').eq(index.index).addClass('oym')
            }
        }
    });
});