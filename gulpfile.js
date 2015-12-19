var gulp = require('gulp')
var cssnext = require('cssnext')
var del = require('del')
var hb = require('gulp-hb')
var postcss = require('gulp-postcss')
var rename = require('gulp-rename')
var webserver = require('gulp-webserver')
var uncss = require('gulp-uncss')

gulp.task('clean', function () {
  del.sync(['public/**'])
})

gulp.task('templates', function () {
  return gulp.src('src/templates/*.hbs')
    .pipe(hb({
      partials: 'src/templates/partials/**/*.hbs',
      bustCache: true
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('styles:dev', function () {
  var processors = [
    cssnext({
      compress: false
    })
  ]

  return gulp.src('src/css/app.css')
    .pipe(postcss(processors))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/css'))
})

gulp.task('styles:prod', function () {
  var processors = [
    cssnext({
      compress: true
    })
  ]

  return gulp.src('src/css/app.css')
    .pipe(postcss(processors))
    .pipe(uncss({
      html: ['public/*.html']
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/css'))
})

gulp.task('images', function () {
  return gulp.src('src/images/*')
    .pipe(gulp.dest('public/images'))
})

gulp.task('watch', ['templates', 'styles:dev'], function () {
  gulp.watch('src/css/**/*', ['styles:dev'])
  gulp.watch('src/templates/**/*', ['templates'])
})

gulp.task('serve', ['clean', 'templates', 'styles:dev', 'images', 'watch'], function () {
  return gulp.src('public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false,
      host: '0.0.0.0',
      port: 9090
    }))
})

gulp.task('build', ['clean', 'templates', 'styles:prod', 'images'])
