
(function() {

    /**
     * Opens and closes all entitiy sidebars
     */

    var initRightHandSideColumn = function() {
        $('#oae-close-sidebar-button').on('click', function() {
            $('#oae-sidebar-open').animate({'width': 30}, 500);
            $('#oae-sidebar-open > div:last-child').animate({'opacity': 'toggle'}, 250, function() {
                $('#oae-close-sidebar-button').hide();
                setTimeout(function() {
                    $('#oae-main-column-wide').addClass('oae-sidebar-collapsed');
                    $('#oae-open-sidebar-button').show();
                }, 400);
            });
        });

        $('#oae-open-sidebar-button').on('click', function() {
            $('#oae-main-column-wide').removeClass('oae-sidebar-collapsed');
            $('#oae-sidebar-column-wide').animate({'width': '17%'}, 500);
            $('#oae-open-sidebar-button').hide();
            $('#oae-close-sidebar-button').show();
            $('#oae-sidebar-open > div:last-child').animate({'opacity': 'toggle'}, 500);
        });


        var adjustRHColumnSize = function() {
            $('#oae-sidebar-open').css('height', $('#oae-container').height() + 12);
        };

        adjustRHColumnSize();

        $(document).scroll(function() {
            adjustRHColumnSize();
        });
    }

    var init = function() {
        initRightHandSideColumn();
    };

$(document).ready(init);
})();