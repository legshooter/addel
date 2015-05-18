(function ($) {

    $.fn.addel = function (options) {

        'use strict';

        // options/defaults/settings
        var defaults = {
            target: 'addel-target',
            add: 'addel-add',
            del: 'addel-del',
            delAlert: 'למחוק?'
        };

        var settings = $.extend({}, defaults, options);

        var target = '.' + settings.target;
        var add = '.' + settings.add;
        var del = '.' + settings.del;
        var delAlert = settings.delAlert;

        var formElements = 'input, select, textarea';

        //core
        return this.each(function () {

            // init
            var container = $(this);

            container.find(target).hide().find(formElements).prop('disabled', true);

            // add
            container.on('click', add, function () {

                var targetToAdd = container.find(target).last();

                // no visible targets
                if (targetToAdd.filter(':visible').length === 0) {
                    targetToAdd.fadeIn().find(formElements).prop('disabled', false);

                // visible target/s
                } else {
                    targetToAdd.clone(true).insertAfter(targetToAdd).hide().fadeIn();
                }

                container.find(target).last().find(':input:enabled:visible:first').focus();

            });

            // del
            container.on('click', del, function () {

                if (confirm(delAlert)) {

                    var targetToDel = $(this).closest(target);
                    var targetToDelPrev = targetToDel.prev(target);
                    var targetToDelNext = targetToDel.next(target);

                    // 1 target exists
                    if (container.find(target).length === 1) {

                        targetToDel.fadeOut().find(formElements).prop('disabled', true);
                        container.find(add).focus();

                    // >1 targets exist
                    } else {

                        targetToDel.fadeOut(function () {
                            $(this).remove();
                        });

                        if (targetToDelPrev.length === 1) {
                            targetToDelPrev.find(del).focus();
                        } else {
                            targetToDelNext.find(del).focus();
                        }

                    }

                }

            });

        });

    };

}(jQuery));
