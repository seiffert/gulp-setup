var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    handleErrors = require('../util/handleErrors'),
    gulp = require('gulp');

module.exports = function (debug) {
    return browserify('./src/app.js')
        .bundle({debug: debug})
        .on('error', handleErrors)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build'));
}
