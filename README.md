# addel

addel is a simple & lightweight jQuery plugin for powering UIs that enable dynamic addition & deletion of HTML elements, conceived with form elements in mind.

"addel" is short for add-delete & should be pronounced Adele, just like the singer's name.

..Because it's all in the details, people!

![addel Example](demo.gif)

## Features
- Lightweight
- Allows for maximum flexibility with your HTML structure
- Triggers custom events you can hook on
- Provides keyboard convenience through smart default focus behaviour
- Enables animation customization

## Installation
There are multiple options:

- Download [addel.jquery.js](addel.jquery.js) or [addel.jquery.min.js](addel.jquery.min.js)
- Use [Bower](http://bower.io/): `bower install addel --save`
- Use [npm](https://www.npmjs.com/): `npm install addel --save`

And include it:
`<script src="/path/to/file/addel.jquery.js"></script>`

## Initialization

```javascript
$('.addel-container').addel({
  // optional options object
});
```

## Options

### Defaults

```javascript
$('.addel-container').addel({
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
});
```

* `hide`: Whether to initially hide the `target` (and disable its form elements)
* `classes.target`: The class name of the element to be dynamically `addeled`™
* `classes.add`: The class name of the element that adds a `target` on click
* `classes.delete`: The class name of the element that deletes a `target` on click
* `animation.duration`: The animation's duration when `addeling`™
* `animation.easing`: The animation's easing when `addeling`™

For `animation` customization, see jQuery's [`.fadeIn()`](http://api.jquery.com/fadein/) and [`.fadeOut()`](http://api.jquery.com/fadeout/)

### Global override
Override the entire object:
```javascript
$.fn.addel.defaults = {
    // options
}
```

Or a specific key:

`$.fn.addel.defaults.option = value`

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

## Custom events
- `addel:add`: Triggered when `classes.add` is clicked
- `addel:added`: Triggered when `classes.target` is added to the DOM
- `addel:delete`: Triggered when `classes.delete` is clicked
- `addel:deleted`: Triggered when `classes.target` is deleted from the DOM

All custom events are triggered on the element initialized as the container.

### Example
Display a `window.confirm()` before deletion:
```javascript
$('.addel').addel({
  // optional options
})
.on('addel:delete', function (event) {
  if (!window.confirm('Are you absolutely positively sure?')) {
    event.preventDefault();
  }
});
````

## Dependencies

jQuery (v2.2.3).


## Browser support

Developed and tested using Chrome (v50). Should work properly on all modern browsers.

## Release policy
See [Semantic Versioning](http://semver.org/).

## License

addel is released under the [MIT license](https://github.com/legshooter/addel/blob/master/LICENSE).
