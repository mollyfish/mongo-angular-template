var gulp = require("gulp");
var config = require('../config').favicon;

gulp.task('favicon', function() {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});