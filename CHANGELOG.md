# CHANGELOG

## v1.0.0
### Breaking changes
- Plugin file name changed from `addel.jquery.js` to `addel.jquery.js`
- CSS classes moved to their own`classes`  object inside the `options` object
- `del` property changed to `delete`
- When adding, `clone()` is not called with `true` anymore and form elements receive the value of `null`

### Added
- Bower package, install using `bower install addel --save`

- Custom events: `addel:add`, `addel:added`, `addel:delete` and `addel:deleted`
- Enable defaults override via `$.fn.addel.defaults`
- `hide` option (addel no longer hides by default)
- `animation` options object
- HTML example
- addel now follows [Semantic Versioning](http://semver.org/)

### Removed
- Hardcoded `alert()` on delete

### Dependencies
- jQuery updated to v2.2.3