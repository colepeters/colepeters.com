const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('watch', ['templates', 'style'], () => {
  gulp.watch('src/css/style.css', ['style']);
  gulp.watch('src/templates/**/*.handlebars', ['templates']);
});

gulp.task('dev', ['copy', 'watch'], () => {
  return gulp
    .src('public')
    .pipe(webserver({
      livereload: true,
      diretoryListing: false,
      open: false,
      host: '0.0.0.0',
      port: 9090
    }));
});
