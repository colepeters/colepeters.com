const gulp = require('gulp');
const runSequence = require('run-sequence');

require('require-dir')('./tasks');

gulp.task('default', done => {
  runSequence([ 'templates', 'style'], done);
});
