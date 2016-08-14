const gulp = require('gulp');

gulp.task('copy', () => {
  return gulp
    .src(['src/images/*.jpg'])
    .pipe(gulp.dest('public/images'));
});
