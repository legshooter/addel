;(function ($) {

    'use strict';

    var pluginName = 'addel';

    var formElements = 'input, select, textarea';

    function Plugin(element, options) {

        // vars
        var container = $(element);

        var settings = $.extend(true, {}, $.fn[pluginName].defaults, options);

        var targetClass = '.' + settings.classes.target;
        var addButtonClass = '.' + settings.classes.add;
        var deleteButtonClass = '.' + settings.classes.delete;

        var animation = {};
        animation.duration = settings.animation.duration;
        animation.easing = settings.animation.easing;

        // hide feature
        if (settings.hide) {
            container.find(targetClass).hide().find(formElements).prop('disabled', true);
        }

        // add
        container.on('click', addButtonClass, function () {

            var target = container.find(targetClass).last();

            // addel:add event
            var addEvent = $.Event('addel:add', {target: target});
            container.trigger(addEvent);
            if (addEvent.isDefaultPrevented()) {
                return
            }

            // no visible targets
            if (target.filter(':visible').length === 0) {
                target.fadeIn(animation).find(formElements).prop('disabled', false);

            // visible target/s
            } else {
                target.clone().insertAfter(target).hide().fadeIn(animation).find(formElements).val(null);
            }

            container.find(targetClass).last().find(':input:enabled:visible:first').focus();

            // addel:added event
            container.trigger($.Event('addel:added', {target: target}));

        });

        // del
        container.on('click', deleteButtonClass, function () {

            var target = $(this).closest(targetClass);
            var prevTarget = target.prev(targetClass);
            var nextTarget = target.next(targetClass);

            // addel:delete event
            var deleteEvent = $.Event('addel:delete', {target: target});
            container.trigger(deleteEvent);
            if (deleteEvent.isDefaultPrevented()) {
                return
            }

            // 1 target exists
            if (container.find(targetClass).length === 1) {

                target.fadeOut(animation).find(formElements).prop('disabled', true);
                container.find(addButtonClass).focus();

                // >1 targets exist
            } else {

                target.fadeOut(animation.duration, animation.easing, function () {
                    $(this).remove();
                });

                if (prevTarget.length === 1) {
                    prevTarget.find(deleteButtonClass).focus();
                } else {
                    nextTarget.find(deleteButtonClass).focus();
                }

            }

            // addel:deleted event
            container.trigger($.Event('addel:deleted', {target: target}));

        });


    }

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };

    $.fn[pluginName].defaults = {
        hide: false,
        classes: {
            target: 'addel-target',
            add: 'addel-add',
            delete: 'addel-delete'
        },
        animation: {
            duration: 0,
            easing: 'swing'
        }
    };

})(jQuery);