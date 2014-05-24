var args = require('yargs').argv,
    debug = 'undefined' !== typeof args.debug && false !== args.debug,
    gulp = require('./gulp')([
        'browserify',
        'watch',
        'sass',
        'jshint'
    ], debug);

gulp.task('default', ['build', 'watch']);
gulp.task('build', ['build:js', 'build:css']);
gulp.task('build:js', ['jshint', 'browserify']);
gulp.task('build:css', ['sass']);
