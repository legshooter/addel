# addel

addel is a very simple & lightweight jQuery plugin for powering UIs that enable dynamic addition & deletion of elements, conceived with form elements in mind.

"addel" is short for add-delete & should be pronounced Adele, just like the singer's name.

..Because it's all in the details, people!


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

* `target:` the class name of the element to be dynamically "addeled"
* `add:` the class name of the element that adds a `target` on click
* `del:` the class name of the element that deletes a `target` on click
* `delAlert:` the alert text that pops up when clicking `del`


## Default behaviour

Upon initialization addel takes care of hiding the target & disabling any form elements it might contain.


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
* `.addel-container` **must** contain everything else: `.addel-target`, `.addel-del` & `.addel-add`
* `.addel-target` **should** also contain your own elements, this is after all what we are here for
* `.addel-del` **must** be `.addel-container`'s & `.addel-target`'s descendant 
* `.addel-add` **must** be `.addel-container`'s descendant & can't be `.addel-target`'s descedant


## Dependencies

Developed with a sole dependency on jQuery (v2.1.3).


## Browser support

Developed using Chrome (v42). Should work properly on all modern browsers.


## License

addel is released under the [MIT license](https://github.com/legshooter/addel/blob/master/LICENSE).
