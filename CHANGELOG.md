# Changelog
The release cycle adheres to [Semantic Versioning](http://semver.org/).

## v1.1.2 - TBA
### Patched
- Updated `LICENSE`'s year
- Updated `example.html`'s jQuery to v3.0.0
- Check AMD/CommonJS/UMD support?

## v1.1.1 - May 26th, 2016
### Fixed
- addel.jquery.min.js
- npm-shrinkwrap.json

### Tweaked
- npm package description
- npm version
- gulp-rename

## v1.1.0 - May 25th, 2016
### Added
- Exposed `added` object on `addel:added` event

### Updated
- jQuery dependency from v2.2.3 to v2.2.4
- Code/Formatting - Minor internal tweaks
- README - Events presentation overhaul and other minor tweaks

## v1.0.0 - May 4th, 2016
### Breaking changes
- Plugin file name changed from `addel.js` to `addel.jquery.js`
- CSS classes moved to their own`classes`  object inside the `options` object
- `del` property changed to `classes.delete`
- When adding, `clone()` is not called with `true` anymore, and form elements receive the value of `null`

### Added
- Custom events: `addel:add`, `addel:added`, `addel:delete` and `addel:deleted`
- Enable defaults override via `$.fn.addel.defaults`
- `hide` option (addel no longer hides by default)
- `animation` options object
- HTML example
- addel now follows [Semantic Versioning](http://semver.org/)
- Bower package, install using `bower install addel --save`
- npm package, install using `npm install addel --save`

### Removed
- Hardcoded `alert()` on delete

### Updated
- jQuery dependency updated to v2.2.3