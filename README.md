# addel

A simple jQuery plugin for powering a UI that enables dynamic addition and deletion of elements. Conceived with form elements in mind.

## Initialization

```javascript
$('.addel-container').addel();
```

## Options & defaults

```javascript
$('.addel-container').addel({
  target: 'addel-target', // the class of the target element to be dynamically added and deleted
  add: 'addel-add',       // the class of the element that upon clicking is expected to add the target
  del: 'addel-del',       // the class of the element that upon clicking is expected to delete the target
  delAlert: 'למחוק?'      // the alert text that pops up when clicking del
});
```

## Default behaviour

Upon initialization the plugin takes care of hiding the target and disabling any form elements it might contain.

## Mandatory HTML structure

```html
<div class="addel-container">
  <div class="addel-target">           <!-- should also contain your other elements -->
    <button class="addel-del"></button><!-- has to be container's child & target's sibling -->
  </div>
  <button class="addel-add"></button>  <!-- has to be target's child -->
</div>
```
