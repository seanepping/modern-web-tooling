var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('default', function () {
    return gulp.src('js/**/*.js')
        .pipe(eslint())
        .pipe(babel({
            modules: 'amd',
            moduleIds: true
        }))
        .pipe(concat('modern-web-arsenal.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
