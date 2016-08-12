# addel

![addel Example](demo.gif)

addel is a simple & lightweight jQuery plugin for powering UIs that enable dynamic addition & deletion of HTML elements, conceived with form elements in mind.

"addel" is short for add-delete & should be pronounced Adele, just like the singer's name.

..Because it's all in the details, people!


## Notable features
- Lightweight
- Maximum HTML flexibility
- Events you can hook on
- Keyboard convenience through smart focusing
- Customizable animation


## Installation
There are multiple options:

- Download [addel.jquery.js](addel.jquery.js) or [addel.jquery.min.js](addel.jquery.min.js)
- Use [Bower](http://bower.io/): `bower install addel --save`
- Use [npm](https://www.npmjs.com/): `npm install addel --save`

And include it:
`<script src="/path/to/file/addel.jquery.min.js"></script>`


## Initialization

```javascript
$('.addel-container').addel({
    // optional options object
});
```


## HTML structure & restrictions

```html
<div class="addel-container">
    <div class="addel-target">
        <button class="addel-del"></button>
    </div>
    <button class="addel-add"></button>
</div>
```

* `.addel-container` **must** be the element addel is initialized upon
* `.addel-container` **must** contain everything else: `.addel-target`, `.addel-delete` & `.addel-add`
* `.addel-target` **should** also contain your own element/s, this is after all what we are here for
* `.addel-delete` **must** be `.addel-container`'s & `.addel-target`'s descendant
* `.addel-add` **must** be `.addel-container`'s descendant & can't be `.addel-target`'s descendant

Note that class names are for reference only and are completely customizable, as described in the [options section](#options).


## Options

Name|Type|Default|Info
----|----|-------|----
`hide`|`boolean`|`false`|Whether to initially hide the `target` (disables its form elements)
`add`|`integer`|`1`|The number of `target`s `classes.add` will add to the DOM
`classes.target`|`string`|`addel-target`|The class name of the element to be dynamically `addeled`™
`classes.add`|`string`|`addel-add`|The class name of the element that adds a `target` on click
`classes.delete`|`string`|`addel-delete`|The class name of the element that deletes a `target` on click
`animation.duration`|`integer`|`0`|The animation's duration (in milliseconds) when `addeling`™ 
`animation.easing`|`string`|`swing`|The animation's easing when `addeling`™
`events.add`|`callback`|-|Detailed in the [events section](#events)
`events.added`|`callback`|-|Detailed in the [events section](#events)
`events.delete`|`callback`|-|Detailed in the [events section](#events)
`events.deleted`|`callback`|-|Detailed in the [events section](#events)

* For more information on `animation.duration` and `animation.easing`, see jQuery's [`.fadeIn()`](http://api.jquery.com/fadein/) and [`.fadeOut()`](http://api.jquery.com/fadeout/).
* Note that it is possible to set the `add` option per element using a data-attribute, as described in the [data-attributes](#data-attributes) section.

### Options example

```javascript
$('.people').addel({
    hide: true,
    add: 2,
    classes: {
        target: 'person',
        add: 'btn-add',
        delete: 'btn-del'
    },
    animation: {
        duration: 300,
        easing: 'linear'
    }
});
```

### Data-attributes
Apart of the event callbacks, all the options above can be set declaratively as data-attributes on the HTML elements:

Option|Data-attribute equivalent|Placement
------|-------------------------|---------
`hide`| `data-addel-hide`|`.addel-container`
`add`| `data-addel-add=<integer>`|`.addel-container`
|`classes.target`| `data-addel-target`|`classes.target`
`classes.add`| `data-addel-add` or `data-addel-add="<number>"`|`classes.add`
`classes.delete`| `data-addel-delete`|`classes.delete`
`animation.duration`| `data-addel-animation-duration`|`.addel-container`
`animation.easing`| `data-addel-animation-easing`|`.addel-container`

* Setting `data-addel-add="5"` on `.addel-container` will make all `.addel-add` / `data-addel-add` elements inside of it add 5 `target`s on click, by default.
* Specifying in addition a `data-addel-add="10"` on a specific `.addel-add` / `data-addel-add` will make that _specific_ element add 10 `target`s, overriding the default 5 set earlier on the container.
* Note that for elements to behave as buttons that add `target`s, you need to add either `data-addel-add` or `data-addel-add=<number>` to the element, there's no need for both.

#### Data-attributes example
```javascript
<div class="addel" data-addel-hide="true" data-addel-add="2">
    <div data-addel-target>
        <button data-addel-delete></button>
    </div>
    <button data-addel-add="1"></button>  // adds 1 data-addel-target, as expected
    <button data-addel-add></button>      // adds 2 data-addel-target due to default set on .addel
    <button data-addel-add="3"></button>  // adds 3 data-addel-target on click, as expected
</div>
<script>
    $(function() {
        $('.addel').addel();
    });
</script>
```

### Global override
Override the entire options object:
```javascript
$.fn.addel.defaults = {
    // options
}
```

Or a specific option:
```javascript
$.fn.addel.defaults.option = value
```

## Events

Event|Triggered when...|Exposes
-----|-----------------|-------
`addel:add`| `classes.add` is clicked|`event.target`
`addel:added`| `classes.target` is added to the DOM|`event.target`, `event.added`
`addel:delete`| `classes.delete` is clicked|`event.target`
`addel:deleted`| `classes.target` is removed from the DOM|`event.target`

All events are triggered on the element addel is initialized upon (AKA `.addel-container`).

### Events example
Ask for confirmation before deleting:
```javascript
$('.addel-container').addel({
    // other options
    events: {
        delete: function (event) {
            if (!window.confirm('Are you absolutely positively sure?')) {
                event.preventDefault();
            }
  }})
```

Or bind the event yourself:
```javascript
$('.addel-container').addel({
    // other options
})
.on('addel:delete', function (event) {
    if (!window.confirm('Are you absolutely positively sure?')) {
        event.preventDefault();
    }
});
```


## Example
A more elaborate [example](example.html) is included.


## Dependencies

jQuery (v3.1.0).


## Browser support

addel is developed and tested using Chrome (v52). Should work properly on all evergreen browsers and IE9+.


## Release policy
addel adheres to [Semantic Versioning](http://semver.org/).


## License

addel is released under the [MIT license](https://github.com/legshooter/addel/blob/master/LICENSE).