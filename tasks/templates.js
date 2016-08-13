const gulp = require('gulp');
const hb = require('gulp-hb');
const rename = require('gulp-rename');

gulp.task('templates', () => {
  return gulp
    .src('src/templates/*.handlebars')
    .pipe(hb({
      partials: 'src/templates/partials/**/*.handlebars'
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('public'));
});
