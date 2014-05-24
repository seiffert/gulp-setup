var gulp = require('gulp');

module.exports = function () {
    gulp.watch('src/**', ['build:js']);
    gulp.watch('scss/**', ['build:css']);
};
