var gulp       = require('gulp');
var watch      = require('gulp-watch');
var sass       = require('gulp-sass');
var uglify     = require('gulp-uglify');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss   = require('gulp-clean-css');
var rename     = require('gulp-rename');
var livereload = require('gulp-livereload');
var gutil      = require('gulp-util');

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

gulp.task('watch', function() {
    console.log("watch");
    gulp.watch(['./sass/*.scss'], ['sass']);
})

gulp.task('js', function() {
    console.log("js");
})

gulp.task('sass', function () {
    console.log("sass");
    console.log(gutil.env.type);
    return gulp.src('./sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', handleError))
    .pipe(gutil.env.type === 'production' ? cleanCss() : gutil.noop())
    .pipe(gutil.env.type === 'production' ? gutil.noop() : sourcemaps.write())
    .pipe(rename({
        basename: "wufoo"
    }))
    .pipe(gulp.dest('./css'));
});

// Default Task
gulp.task('default', ['sass', 'watch']);
