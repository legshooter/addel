;(function ($) {

    'use strict';

    var pluginName = 'addel';

    var formElements = 'input, select, textarea';

    function Plugin(element, options) {

        // vars
        var container = $(element);

        var settings = $.extend(true, {}, $.fn[pluginName].defaults, options);

        var targetClass = '.' + settings.classes.target;
        var addClass = '.' + settings.classes.add;
        var deleteClass = '.' + settings.classes.delete;

        var animation = {
            duration: settings.animation.duration,
            easing: settings.animation.easing
        };

        // hide feature
        if (settings.hide) {
            container.find(targetClass).hide().find(formElements).prop('disabled', true);
        }

        // add
        container.on('click', addClass, function () {

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

            var added = container.find(targetClass).last();
            added.find(':input:enabled:visible:first').focus();

            // addel:added event
            container.trigger($.Event('addel:added', {target: target, added: added}));

        });

        // del
        container.on('click', deleteClass, function () {

            var target = $(this).closest(targetClass);
            var prevTarget = target.prev(targetClass);
            var nextTarget = target.next(targetClass);

            // addel:delete event
            var deleteEvent = $.Event('addel:delete', {target: target});
            container.trigger(deleteEvent);
            if (deleteEvent.isDefaultPrevented()) {
                return false;
            }

            // 1 target exists
            if (container.find(targetClass).length === 1) {

                target.fadeOut(animation).find(formElements).prop('disabled', true);
                container.find(addClass).focus();

            // >1 targets exist
            } else {

                target.fadeOut(animation.duration, animation.easing, function () {
                    $(this).remove();
                });

                if (prevTarget.length === 1) {
                    prevTarget.find(deleteClass).focus();
                } else {
                    nextTarget.find(deleteClass).focus();
                }

            }

            // addel:deleted event
            container.trigger($.Event('addel:deleted', {target: target}));

        });


    }

    // plugin wrapper
    // instantiates the plugin as many times as needed
    // and makes sure no duplication occurs
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin(this, options));
            }
        });
    };

    // defaults
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