const gulp = require('gulp');

gulp.task('copy', () => {
  return gulp
    .src(['src/images/*.jpg', 'src/images/*.png'])
    .pipe(gulp.dest('public/images'));
});
