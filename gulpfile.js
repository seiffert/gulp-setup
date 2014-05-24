var gulp = require('./gulp')([
    'browserify',
    'watch',
    'sass',
    'jshint'
]);

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['build:js', 'build:css']);
gulp.task('build:js', ['jshint', 'browserify']);
gulp.task('build:css', ['sass']);
