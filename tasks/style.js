const gulp = require('gulp');
const postcss = require('gulp-postcss');
const minify = require('gulp-clean-css');

gulp.task('style', () => {
  return gulp
    .src('src/css/style.css')
    .pipe(postcss([
      require('postcss-import')({ from: 'src/css/style.css'})
    ]))
    .pipe(minify({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/css'));
});
