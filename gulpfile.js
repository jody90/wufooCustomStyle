var gulp  = require('gulp');
var watch = require('gulp-watch');
var sass  = require('gulp-sass');

function handleError(err) {
    console.error(err.toString());
    this.emit('end');
}

gulp.task('watch', function() {
    console.log("watch");
    gulp.watch(['./sass/*.scss'], ['sass']);
})

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', handleError))
    .pipe(gulp.dest('./css'));
});

// Default Task
gulp.task('default', ['sass', 'watch']);
