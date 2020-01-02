//cuando el documento ha cargado
$(document).ready(function () {

    function navMenu() {
        var navMenuItem = $('.navMenu');
        navMenuItem.on('click', function (e) {
            e.preventDefault();

            var href = $(this).attr('href');
            var seccionOffsetTop = $(href).offset().top - 100;

            $('html, body').stop().animate({ scrollTop: seccionOffsetTop }, 1000);
        });

    };

    navMenu();

    function activeMenuLink() {
        $(window).on('scroll', function () {
            var scrollPos = $(window).scrollTop();
            var navMenuItem = $('.navMenu');

            navMenuItem.each(function () {
                var href = $(this).attr('href');
                var refElement = $(href);
                var beOnSection = refElement.offset().top - 100 <= scrollPos && refElement.offset().top - 100 + refElement.outerHeight() > scrollPos;

                if (beOnSection) {
                    $(this).closest('li').siblings().removeClass('active');
                    $(this).closest('li').addClass('active');
                }
            });

        });
    }

    activeMenuLink();
});