var gulp = require('gulp');
 
module.exports = function(tasks, debug) {
    tasks.forEach(function(name) {
        gulp.task(name, require('./tasks/' + name).bind(this, debug));
    });
 
    return gulp;
};
