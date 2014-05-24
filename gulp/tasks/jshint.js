var jshint = require('gulp-jshint'),
    map = require('map-stream'),
    handleErrors = require('../util/handleErrors'),
    gulp = require('gulp');

var notifyingReporter = map(function (file, cb) {
    if (!file.jshint.success) {
        file.jshint.results.forEach(function (result) {
            var err = result.error,
                fileName = file.path.replace(/(.*\/)/g, '');
            handleErrors({
                plugin: 'gulp-jshint',
                message: ' ' + fileName + ': line ' + err.line + ', col ' + err.character + ', code ' + err.code + "\n" + err.reason
            });
        });
    }

    cb(null, file);
});

module.exports = function () {
    return gulp.src('src/*.js')
        .pipe(jshint())
        .pipe(notifyingReporter);
};
