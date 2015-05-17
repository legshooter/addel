# addel

addel is a simple jQuery plugin for powering UIs that enable dynamic addition & deletion of elements, conceived with form elements in mind.

`addel` is short for add-delete, & should be pronounced Adele, just like the singer's name.

Because it's all in the details, people!


## Initialization

```javascript
$('.addel-container').addel();
```


## Options & defaults

```javascript
$('.addel-container').addel({
  target: 'addel-target',
  add: 'addel-add',
  del: 'addel-del',
  delAlert: 'למחוק?'
});
```

* `target:` class name of the element to be dynamically addeled
* `add:` class name of the element that adds a target on click
* `del:` class name of the element that deletes a target on click
* `delAlert:` alert text that pops up when clicking `del`


## Default behaviour

Upon initialization the plugin takes care of hiding the target & disabling any form elements it might contain.


## HTML structure & restrictions

```html
<div class="addel-container">
  <div class="addel-target">
    <button class="addel-del"></button>
  </div>
  <button class="addel-add"></button>
</div>
```

* `.addel-container` **must** be the element to initialize the plugin upon
* `.addel-container` **must** contain `.addel-target`, `.addel-del` & `.addel-add`
* `.addel-target` **should** also contain your own elements
* `.addel-del` **must** be `.addel-container`'s & `.addel-target`'s descendant 
* `.addel-add` **must** be `.addel-container`'s descendant & can't be `.addel-target`'s descedant


## Dependencies

Developed with a sole dependency on jQuery 2.1.3.


## Browser support

Developed using Chrome v42. Should work properly with all modern browsers.


## License

Code released under the [MIT license](https://github.com/legshooter/addel/blob/master/LICENSE).
