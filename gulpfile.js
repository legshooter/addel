var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// var shell = require('gulp-shell');

gulp.task('default', function() {
    return gulp.src('addel.jquery.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('.'));
});

// gulp.task('test', shell.task([
//     'tape tests/*.js | faucet'
// ]));
