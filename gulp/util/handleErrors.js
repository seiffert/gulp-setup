var notify = require('gulp-notify');

module.exports = function (error) {

    var titleTemplate = '<%= file.plugin %>',
        messageTemplate = '<%= file.message %>';

    if (error instanceof Error) {
        titleTemplate = '<%= error.plugin %> Error';
        messageTemplate = '<%= error.message %>';
    }

    notify.onError({
        title: titleTemplate,
        message: messageTemplate
    }).apply(this, arguments);

    this.emit('end');
};
